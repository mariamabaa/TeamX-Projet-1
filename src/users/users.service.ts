import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
      ) {}

      async insertUser(firstname: string, lastn: string, address: string) {
        const newUser = new this.userModel({
          firstname,
          lastname: lastn,
          address,
        });
        const result = await newUser.save();
        return result.id as string;
      }

      private async findUser(id: string): Promise<User> {
        let user;
        try {
          user = await this.userModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find user.');
        }
        if (!user) {
          throw new NotFoundException('Could not find user.');
        }
        return user;
      }
    

      async getUsers() {
        const users = await this.userModel.find().exec();
        return users.map(userr => ({
          id: userr.id,
          firstname: userr.firstname,
          lastname: userr.lastname,
          address: userr.address,
        }));
      }
    
      async getSingleUser(userId: string) {
        const user = await this.findUser(userId);
        return {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          address: user.address,
        };
      }
    
      async updateUser(
        userId: string,
        firstname: string,
        lastn: string,
        address: string,
      ) {
        const updatedUser = await this.findUser(userId);
        if (firstname) {
          updatedUser.firstname = firstname;
        }
        if (lastn) {
          updatedUser.lastname = lastn;
        }
        if (address) {
          updatedUser.address = address;
        }
        updatedUser.save();
      }
    
      async deleteUser(UserId: string) {
        const result = await this.userModel.deleteOne({_id: UserId}).exec();
        if (result.deletedCount === 0) {
          throw new NotFoundException('Could not find user.');
        }
      }

}
