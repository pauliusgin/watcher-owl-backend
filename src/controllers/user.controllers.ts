import { User } from "../models/user.model.js";

async function isUserInDatabase(user: userInDatabaseType) {
	try {
		const userIsInDatabase = await User.findOne({ email: user.email });

		return userIsInDatabase;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function addUserToDatabase(user: userInDatabaseType) {
	try {
		const userIsInDatabase = await isUserInDatabase(user);
		if (userIsInDatabase) return `User ${user.email} is already registered.`;

		const newUserInTheDatabase = await User.create(user);

		return `User ${newUserInTheDatabase.email} added to database.`;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function deleteUserFromDatabase(user: userInDatabaseType) {
	try {
		const userInDatabase = await isUserInDatabase(user);
		if (!userInDatabase) return `User ${user.email} not found.`;

		const deletedUser = await User.deleteOne({
			email: user.email,
		});
		if (deletedUser.acknowledged)
			return `Successfully deleted user ${user.email}.`;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

export { addUserToDatabase, deleteUserFromDatabase };
