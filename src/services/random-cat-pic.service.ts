import axios from "axios";

export type CatPicPayload = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export class RandomCatPic {
  static baseUrl = "https://api.thecatapi.com/v1/";

  private static axios = axios.create({
    baseURL: this.baseUrl,
  });

  static async exec(): Promise<CatPicPayload> {
    const {
      data: [catPic],
    } = await this.axios.get<[CatPicPayload]>("/images/search");
    return catPic;
  }
}
