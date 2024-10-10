import { TaskModel } from "../models/task.model.js";
import { retrievedItem, taskType } from "../types/types.js";

async function getTaskById(taskId: string) {
    try {
        const _task = await TaskModel.findById(taskId);

        return _task;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getUserTasks(userId: string) {
    try {
        const userTasks = await TaskModel.find({ userId });

        return userTasks;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return [];
        }
    }
}

async function addTaskToDatabase(task: taskType) {
    try {
        const _task = await TaskModel.create(task);

        return _task;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function updateTaskItems(taskId: string, items: retrievedItem[]) {
    try {
        const updatedTaskItems = await TaskModel.findOneAndUpdate(
            {_id: taskId},
            { items }
        );
        
        return updatedTaskItems;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        
    }
}
}

async function deleteTaskFromDatabase(taskId: string) {
    try {
        await TaskModel.deleteOne({ _id: taskId });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function toggleTaskActivity(taskId: string, isActive: boolean) {
    try {
        const task = await TaskModel.findOneAndUpdate(
            { _id: taskId },
            { isActive }
        );

        return task;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function selectNotificationMethod(taskId: string, notification: boolean) {
    try {
        const task = await TaskModel.findOneAndUpdate(
            { _id: taskId },
            { notification }
        );

        return task;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getActiveTasks() {
    const activeTasks = await TaskModel.find({isActive: true})

    return activeTasks
}

export {
    getUserTasks,
    getTaskById,
    addTaskToDatabase,
    deleteTaskFromDatabase,
    toggleTaskActivity,
    selectNotificationMethod,
    getActiveTasks,
    updateTaskItems
};
