import { User } from "../models/user.model.js";

async function findUserInDatabase({ email }: userInDatabaseType) {
	try {
		const userIsInDatabase = await User.findOne({ email });
		console.log("thisUser's tasks:", userIsInDatabase?.tasks);

		return userIsInDatabase;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function addUserToDatabase(user: userInDatabaseType) {
	try {
		const userIsInDatabase = await findUserInDatabase(user);
		if (userIsInDatabase) return `Request failed`;

		const newUser = await User.create(user);

		console.log(`User ${newUser.email} added to database.`);
		return newUser._id;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function deleteUserFromDatabase(user: userInDatabaseType) {
	try {
		const userInDatabase = await findUserInDatabase(user);
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

export { findUserInDatabase, addUserToDatabase, deleteUserFromDatabase };
