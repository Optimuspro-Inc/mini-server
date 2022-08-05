import { Resolver, Query } from '@nestjs/graphql';
import { UserDocument } from './schema/user';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  users(): Promise<UserDocument[]> {
    return this.usersService.getUser()
  }
}
