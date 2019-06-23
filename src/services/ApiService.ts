import axios, { Method } from "axios";
import { ErrorMessage } from "../models/error";

export default class ApiService {
  public static TOKEN_KEY = "JWT_TOKEN";

  public static setTokenHeader(token?: string | null): void {
    if (token) {
      localStorage.setItem(ApiService.TOKEN_KEY, token);
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.clear();
      delete axios.defaults.headers["Authorization"];
    }
  }

  public static getTokenHeader(): string | null {
    return localStorage.getItem(ApiService.TOKEN_KEY);
  }

  public static async hit(method: Method, path: string, data?: any) {
    try {
      return (await axios(`http://localhost:4245${path}`, {
        method,
        data
      })).data;
    } catch (err) {
      throw (err.response.data as { error: ErrorMessage }).error;
    }
  }
}
