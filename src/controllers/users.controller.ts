import { User } from "../models/user.model.js";

async function checkIfUserIsInTheDatabase(info: userInfoType) {
	const { email, timestamp } = info;

	const currentUser = await User.findOne({ email });
	if (currentUser) {
		console.log("found user:", currentUser, currentUser.timestamp);
	}
	return currentUser;
}

async function addUserToTheDatabase(info: userInfoType) {
	const newUser = await User.create(info);

	return newUser;
}

export { checkIfUserIsInTheDatabase, addUserToTheDatabase };
