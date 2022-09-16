import { FieldError } from "@/errors/FieldError";
import { delay } from "@/utils/delay";

export async function doLoginService(email: string, password: string) {
  await delay(700);

  if (email !== "f.g@gmail.com") {
    throw new FieldError("email", "Email not found");
  }

  if (password !== "123") {
    throw new FieldError("password", "Wrong password!");
  }

  return "some-id";
}
