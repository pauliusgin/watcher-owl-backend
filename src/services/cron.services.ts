import cron from "node-cron";
import {
    getActiveTasks,
    updateTaskItems,
} from "../controllers/task.controllers.js";
import { vintedController } from "../controllers/vinted.controller.js";

function runActiveTasksCron() {
    const cronJob = cron.schedule(`*/5 * * * * *`, async () => {
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
                    }
                }
            }
        }
    });

    cronJob.start();
}

export { runActiveTasksCron };
