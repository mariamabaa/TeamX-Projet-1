import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post()
    async addUser(
      @Body('firstname') userfirstname: string,
      @Body('lastname') userLast: string,
      @Body('address') useraddress: string,
    ) {
      const generatedId = await this.usersService.insertUser(
        userfirstname,
        userLast,
        useraddress,
      );
      return { id: generatedId };
    }
  
    @Get()
    async getAllUsers() {
      const users = await this.usersService.getUsers();
      return users;
    }
  
    @Get(':id')
    getUser(@Param('id') userId: string) {
      return this.usersService.getSingleUser(userId);
    }
  
    @Patch(':id')
    async updateUser(
      @Param('id') userId: string,
      @Body('firstname') userfirstname: string,
      @Body('lastname') userLast: string,
      @Body('address') useraddress: string,
    ) {
      await this.usersService.updateUser(userId, userfirstname, userLast, useraddress);
      return null;
    }
  
    @Delete(':id')
    async removeUser(@Param('id') userId: string) {
        await this.usersService.deleteUser(userId);
        return null;
    }
  }