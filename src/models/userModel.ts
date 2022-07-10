import { Schema, model } from 'mongoose'

interface IUser {
    name: string;
    password: string;
  }

const usersSchema = new Schema<IUser>({
name: { type: String, required: true },
password:{ type: String, required: true }
}, { versionKey: false });

const usersModel = model<IUser>('users', usersSchema);

function users(body): void {
    this.body = body;
    this.errors = [];
    this.users = null;
}

users.prototype.register = async function(): Promise<void> {
    this.users = await usersModel.create(this.body)
}

module.exports = users;