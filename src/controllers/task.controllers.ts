import { User } from "../models/user.model.js";
import { tasks } from "../routes/tasks.routes.js";

async function findTaskInDatabase({ userEmail, title }: taskType) {
	try {
		const existingTasks = await User.findOne({
			email: userEmail,
			// "tasks.title": title,
		});

		console.log("all existing tasks:", existingTasks?.tasks);

		const specifiedTask = existingTasks?.tasks.find(
			(task) => task.title === title
		);

		console.log("specified task", specifiedTask);
		return specifiedTask;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function addTaskToDatabase(task: taskType) {
	const {
		userEmail,
		title,
		search,
		timestamp,
		isActive,
		isFavorite,
		notification,
	} = task;

	try {
		const taskIsInDatabase = await findTaskInDatabase(task);
		if (taskIsInDatabase) return `${task.title} already exists.`;

		const newTask = await User.findOneAndUpdate(
			{
				email: userEmail,
			},
			{
				$push: {
					tasks: {
						title,
						search,
						timestamp,
						isFavorite,
						isActive,
						notification,
					},
				},
			},
			{ new: true }
		);

		//* to be deleted
		// console.log("created task:", newTask);
		return newTask;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function updateTaskInDatabase() {
	console.log("update task in db");
}

async function deleteTaskFromDatabase() {
	console.log("delete task from db");
}

export {
	findTaskInDatabase,
	addTaskToDatabase,
	updateTaskInDatabase,
	deleteTaskFromDatabase,
};
