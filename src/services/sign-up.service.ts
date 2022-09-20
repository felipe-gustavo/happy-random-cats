import { ApiError } from "@/errors/ApiError";
import { UserModel } from "@/mock/UserModel";
import { delay } from "@/utils/delay";
import { Hash } from "@/utils/Hash";

type SignUpDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export class SignUpService {
  static async exec(dto: SignUpDto): Promise<{ id: string }> {
    await delay(1500);
    if (UserModel.getUserByEmail(dto.email)) {
      throw new ApiError("SIGNUP_0001", dto, null, "User already exits");
    }

    return {
      id: UserModel.createUser({
        ...dto,
        password: Hash.encrypt(dto.password),
      })._id,
    };
  }
}
