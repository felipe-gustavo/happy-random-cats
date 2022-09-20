import { InMemoryData } from "@/utils/InMemoryData";

export type UserDoc = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export class UserModel implements UserDoc {
  private static colletion = "users";

  readonly _id: string;

  firstName: string;

  lastName: string;

  email: string;

  password: string;

  constructor(userData: UserDoc) {
    this._id = userData._id;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.password = userData.password;
  }

  save() {
    InMemoryData.updateDocument(UserModel.colletion, this._id, {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  static getUserById(id: string) {
    const userDocument = InMemoryData.getDocument<UserDoc>(this.colletion, id);
    return userDocument && new UserModel(userDocument);
  }

  static createUser(userData: Omit<UserDoc, "_id">) {
    const userDocument = InMemoryData.addDcument(this.colletion, userData);
    return new UserModel(userDocument);
  }

  static getUserByEmail(email: string) {
    const users = InMemoryData.getCollection<UserDoc>(this.colletion);
    return users.find((user) => user.email === email);
  }
}
