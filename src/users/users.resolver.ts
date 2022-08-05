import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserDocument } from './schema/user';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query() 
  users(): Promise<UserDocument[]> {
    return this.usersService.getUser()
  }

  @Mutation()
  createUser(@Args() data) {
    const { userInput } = data
    const { username, email } = userInput
    console.log(userInput)
    return this.usersService.createUser(username, email)
  }
}
