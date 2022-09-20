import { SignJWT } from "jose";

import { JWT_SECRET } from "@/config/constants";
import { ApiError } from "@/errors/ApiError";
import { UserModel } from "@/mock/UserModel";
import { delay } from "@/utils/delay";
import { Hash } from "@/utils/Hash";

export class AuthService {
  static async exec(email: string, password: string) {
    await delay(700);
    const user = UserModel.getUserByEmail(email);
    if (!user) {
      throw new ApiError(
        "LOGIN_0001",
        { email, password },
        null,
        "Error on email"
      );
    }

    if (!Hash.compare(password, user.password)) {
      throw new ApiError(
        "LOGIN_0002",
        { email, password },
        null,
        "Error on password"
      );
    }

    return {
      token: await new SignJWT({ sub: user._id })
        .setProtectedHeader({
          alg: "HS256",
        })
        .sign(JWT_SECRET),
    };
  }
}
