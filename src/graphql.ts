
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

export class NewsLetter {
    email?: Nullable<string>;
}

export abstract class IQuery {
    abstract newsLetters(): NewsLetter[] | Promise<NewsLetter[]>;

    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract joinLetter(email?: Nullable<string>): Nullable<NewsLetter> | Promise<Nullable<NewsLetter>>;

    abstract createUser(userInput?: Nullable<CreateUserInput>): User | Promise<User>;
}

export class User {
    _id?: Nullable<string>;
    username?: Nullable<string>;
    email?: Nullable<string>;
}

type Nullable<T> = T | null;
