
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    _id?: Nullable<string>;
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

type Nullable<T> = T | null;
