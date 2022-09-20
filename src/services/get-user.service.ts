import { jwtVerify } from "jose";

import { JWT_SECRET } from "@/config/constants";
import { UserModel } from "@/mock/UserModel";
import { delay } from "@/utils/delay";

export class GetUserService {
  static async exec(token: string) {
    await delay(1500);
    const {
      payload: { sub },
    } = await jwtVerify(token, JWT_SECRET);
    const user = UserModel.getUserById(String(sub));
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
