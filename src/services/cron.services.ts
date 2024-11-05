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
    console.log("<- cron is online ->");
    const cronJob = cron.schedule(`*/5 * * * * *`, async () => {
        console.log("cronJob is running tasks...");
        const activeTasks = await getActiveTasks();
        console.log("active tasks ------>", activeTasks);

        if (activeTasks.length > 0) {
            console.log("we have this many active tasks:", activeTasks.length);
            for (const task of activeTasks) {
                const searchQuery = task.search.split("+");
                const vintedItems = await vintedController(searchQuery);

                console.log("search query ----->", searchQuery);

                if (vintedItems) {
                    const tenNewest = vintedItems?.slice(0, 10);

                    const newestSavedItem = task.items[0].id;
                    const newestItemFromVinted = vintedItems[0].id;

                    if (newestSavedItem !== newestItemFromVinted) {
                        console.log("newest saved item:", newestSavedItem);
                        console.log(
                            "newest item from Vinted:",
                            newestItemFromVinted
                        );
                        console.log("updating task items...");
                        await updateTaskItems(task.id, tenNewest);
                        console.log("task items updated");

                        const newItems = tenNewest.filter(
                            (newItem) =>
                                !task.items.some(
                                    (oldItem) => oldItem.id === newItem.id
                                )
                        );

                        console.log(
                            "number of new items ----->",
                            newItems.length
                        );
                        newItems.forEach((item) =>
                            console.log("new item:", item.id, item.title)
                        );

                        if (task.notification === Notification.EMAIL) {
                            const user = await findUserById(task.userId);

                            console.log(
                                "owner of the task user's email ----->",
                                user.email
                            );

                            const newItemsHtml = newItems
                                .map(
                                    (item) => `
                                <div>
                                <table role="presentation" style="border-spacing: 0; background-color: #202124;">
                                        <tr>
                                        <td style="padding-right: 1rem; vertical-align: center;">
                                            <a href="${
                                                item.full_size_url
                                            }" target="_blank">
                                            <img src="${item.photo}" alt="${
                                        item.title
                                    }"/>
                                            </a>
                                        </td>
                                        <td style="vertical-align: center; text-align: left;">
                                            <a href="${
                                                item.url
                                            }" target="_blank">
                                            <p style="color: #cc9419; font-weight: 600; text-decoration: underline; margin: 0;">${
                                                item.title
                                            }</p>
                                            </a>
                                            <p style="margin-top: 10px; color: #FFFFFF;">Kaina: ${
                                                item.price
                                            } ${item.currency}</p>
                                            <p style="margin-top: 10px; color: #FFFFFF;">Būklė: ${
                                                item.status
                                            }</p>
                                            <p style="margin-top: 10px; color: #FFFFFF;">Įkelta: ${new Date(
                                                item.timestamp * 1000
                                            ).toLocaleString("lt-LT", {
                                                year: "numeric",
                                                month: "long",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}</p>
                                        </td>
                                        </tr>
                                    </table>
                                    </div>
                                    <hr />
                                    `
                                )
                                .join("");

                            if (user) {
                                console.log(
                                    "sending email to user: ",
                                    user.email
                                );
                                sendNotificationEmail({
                                    to: user.email,
                                    subject: `Vinted: ${task.search.replaceAll(
                                        "+",
                                        ", "
                                    )}`,
                                    html: `
                                    <div style="background-color: #202124; padding: 1rem;">
                                    <h2 style="color: #FFFFFF;">Naujienos:</h2>
                                    <br/>
                                    ${newItemsHtml}
                                    <div>
                                    `,
                                });
                                console.log("email sent to:", user.email);
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
