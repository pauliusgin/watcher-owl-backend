import { User } from "../models/user.model.js";

async function IsUserInTheDatabase(info: userInfoType) {
	const { email } = info;
	try {
		const userInTheDatabase = await User.findOne({ email });
		if (userInTheDatabase) {
			//* this log is to be deleted
			console.log("found user in database:", userInTheDatabase);
			return userInTheDatabase;
		} else {
			//* this log is to be deleted
			console.log("no such user in database");
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

async function addUserToTheDatabase(info: userInfoType) {
	try {
		const addedNewUserToTheDatabase = await User.create(info);

		if (addedNewUserToTheDatabase) {
			//* this log is to be deleted
			console.log("added new user in database:", addedNewUserToTheDatabase);
			return addedNewUserToTheDatabase;
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

// async function handleUserInTheDatabase(info: userInfoType) {
// 	try {
// 		const response = await IsUserInTheDatabase(info);
// 		if (!response) {
// 			addUserToTheDatabase(info);
// 		}
// 	} catch (error) {
// 		if (error instanceof Error) {
// 			console.log(error.message);
// 		}
// 	}
// }

async function handleUserInTheDatabase(info: userInfoType) {
	try {
		const { email } = info;
		const userInTheDatabase = await User.findOne({ email });

		if (userInTheDatabase) {
			//* this log is to be deleted
			console.log("user already in database:", userInTheDatabase);
			return userInTheDatabase;
		} else {
			const addedNewUserToTheDatabase = await User.create(info);
			//* this log is to be deleted
			console.log("added new user to database:", addedNewUserToTheDatabase);
			return addedNewUserToTheDatabase;
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

export { handleUserInTheDatabase };
