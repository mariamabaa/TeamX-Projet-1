import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userfirstname: string, userLast: string, useraddress: string): Promise<{
        id: string;
    }>;
    getAllUsers(): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        address: string;
    }[]>;
    getUser(userId: string): Promise<{
        id: string;
        firstname: string;
        lastname: string;
        address: string;
    }>;
    updateUser(userId: string, userfirstname: string, userLast: string, useraddress: string): Promise<any>;
    removeUser(userId: string): Promise<any>;
}
