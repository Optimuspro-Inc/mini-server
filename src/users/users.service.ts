import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/graphql';
import { UserDocument } from './schema/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ){}

  async getUser(): Promise<UserDocument[]> {
    const users = await this.userModel.find()
    return users
  }
}
