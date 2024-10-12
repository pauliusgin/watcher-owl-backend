import cron from "node-cron";
import {
    getActiveTasks,
    updateTaskItems,
} from "../controllers/task.controllers.js";
import { vintedController } from "../controllers/vinted.controller.js";
import { sendNotificationEmail } from "./email.service.js";
import { Notification } from "../types/enums.js";
import { findUserById } from "../controllers/user.controllers.js";

function runActiveTasksCron() {
    const cronJob = cron.schedule(`* */1 * * * *`, async () => {
        const activeTasks = await getActiveTasks();

        if (activeTasks.length > 0) {
            for (const task of activeTasks) {
                const searchQuery = task.search.split("+");
                const vintedItems = await vintedController(searchQuery);

                if (vintedItems) {
                    const tenNewest = vintedItems?.slice(0, 10);
                    
                    const newestSavedItem = task.items[0].id;
                    const newestItemFromVinted = vintedItems[0].id;
                    
                    if (newestSavedItem !== newestItemFromVinted) {
                        await updateTaskItems(task.id, tenNewest);
                        
                        const newItems = tenNewest.filter(newItem => !task.items.some(oldItem => oldItem.id === newItem.id))

                        if (task.notification === Notification.EMAIL) {
                            const user = await findUserById(task.userId);

                            // TODO continue here
                            const newItemsHtml = newItems.map(item => `
                                    <p><strong>Pavadinimas:</strong> ${item.title}</p><br/>
                                    <p><strong>Kaina:</strong> ${item.price}</p><br/>
                                    <p>Įkelta: </p>
                                    <img src="${item.photo}" alt="${item.title}">
                                    <hr/>
                            `).join('');

                            if (user) {
                                sendNotificationEmail({
                                    to: user.email,
                                    subject: `Vinted: ${task.search.replaceAll( "+", ", ")}`,
                                    html: 
                                    `
                                    <h3>Naujienos:</h3>
                                    <br/>
                                    ${newItemsHtml}
                                    `,
                                });
                            }
                        }
                    }
                }
            }
        }
    });

    cronJob.start();
}

export { runActiveTasksCron };
