import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser(firstname: string, lastn: string, address: string): Promise<string>;
    private findUser;
    getUsers(): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        address: string;
    }[]>;
    getSingleUser(userId: string): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        address: string;
    }>;
    updateUser(userId: string, firstname: string, lastn: string, address: string): Promise<void>;
    deleteUser(UserId: string): Promise<void>;
}
