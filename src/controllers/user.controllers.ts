import { UserModel } from "../models/user.model.js";
import { userInDatabaseType } from "../types/types.js";

async function getUserId(email: string) {
    try {
        const userInDatabase = await UserModel.findOne({
            email,
        });

        return userInDatabase?._id;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function findUserById(id: string) {
    try {
        return await UserModel.findById(id);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function addUserToDatabase(user: userInDatabaseType) {
    try {
        const existingUser = await findUserByEmail(user.email);

        if (existingUser) {
            return existingUser;
        }

        const newUser = await UserModel.create({
            ...user,
            createdAt: new Date(),
        });

        return newUser;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function findUserByEmail(email: string) {
    try {
        const userIsInDatabase = await UserModel.findOne({ email });
        return userIsInDatabase;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function deleteUserFromDatabase(id: string) {
    try {
        await UserModel.deleteOne({ id });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function updateUser(userId: string, isLoggedIn: boolean) {
    try {
        await UserModel.updateOne({ _id: userId }, { isLoggedIn });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

export {
    getUserId,
    updateUser,
    findUserById,
    findUserByEmail,
    addUserToDatabase,
    deleteUserFromDatabase,
};
