import { userSchema, type UserProps } from "../../data/user-data";

export class User {
    #data: UserProps;

    constructor(private readonly payload: UserProps) {
        this.#data = userSchema.parse(this.payload);
    }

    get data(): Readonly<UserProps> {
        return this.#data
    }

    toJSON(): Readonly<UserProps> {
        return this.#data
    }
}