import { UserModel } from "../model/user-model";

export class ModelFactory {
  userModel: UserModel | undefined
  
  makeUser(): UserModel {
    if (this.userModel) {
      return this.userModel;
    }
    this.userModel = new UserModel();
    return this.userModel;
  }
}