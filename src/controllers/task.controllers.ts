import { User } from "../models/user.model.js";

async function getUserTasks({ userEmail }: taskType) {
	try {
		const userTasks = await User.findOne({ email: userEmail });

		return userTasks;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function addTaskToDatabase(task: taskType) {
	try {
		const user = await User.findOne({ email: task.userEmail });

		const taskExists = user?.tasks.find(
			(taskInDatabase) => taskInDatabase.title === task.title
		);

		if (taskExists) return "Task already exists";

		user?.tasks.addToSet(task);

		await user?.save();

		return user?.tasks;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function updateTaskInDatabase() {
	console.log("update task in db");
}

async function deleteTaskFromDatabase(task: taskType) {
	try {
		// TODO here
	} catch (error) {}
}

export {
	getUserTasks,
	addTaskToDatabase,
	updateTaskInDatabase,
	deleteTaskFromDatabase,
};
