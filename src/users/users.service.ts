import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/graphql';
import { UserDocument } from './schema/user';
import { isEmail } from './util/util';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ){}

  async getUser(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find()
      return users
    } catch (error) {
      throw error
    }
  }

  async createUser(username, email): Promise<UserDocument> {
    try {
      if(!isEmail(email)) throw new BadRequestException(`Use a valid email address`)
      const userNameExist = await this.userModel.findOne({ username: username })
      if(userNameExist) throw new BadRequestException(`Username already exists`)
      const userEmailExist = await this.userModel.findOne({ email: email })
      if(userEmailExist) throw new BadRequestException(`Email exists`)
      const user = await this.userModel.create(
        {
          username,
          email
        }
      )
      return user
    } catch (error) {
      throw error
    }
  }
}
