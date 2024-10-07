import { TaskModel } from "../models/task.model.js";
import { taskType } from "../types/types.js";

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

async function updateTaskInDatabase(task: taskType) {
    try {
        const updatedTask = await TaskModel.updateOne(task);

        return updatedTask;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function deleteTaskFromDatabase(taskId: string) {
    try {
        await TaskModel.deleteOne({ where: { taskId } });
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

export {
    getUserTasks,
    getTaskById,
    addTaskToDatabase,
    updateTaskInDatabase,
    deleteTaskFromDatabase,
    toggleTaskActivity,
};
