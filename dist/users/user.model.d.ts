import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any>;
export interface User extends mongoose.Document {
    id: string;
    firstname: string;
    lastname: string;
    address: string;
}
