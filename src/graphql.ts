
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export class User {
    _id?: Nullable<string>;
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(userInput?: Nullable<CreateUserInput>): User | Promise<User>;
}

type Nullable<T> = T | null;
