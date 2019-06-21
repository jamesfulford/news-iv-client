import axios, { Method } from "axios";

export default class ApiService {
  public static async hit(method: Method, path: string, data?: any) {
    try {
      return (await axios(`http://localhost:4245${path}`, {
        method,
        data
      })).data;
    } catch (err) {
      throw err.response.data.error;
    }
  }
}