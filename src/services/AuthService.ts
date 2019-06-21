import ApiService from "./ApiService";
import { UserLogin, NewUser, ExistingUser } from "../models/user";

export default class AuthService {
  public static TOKEN_KEY = "JWT_TOKEN";

  public static signUp(user: NewUser): Promise<ExistingUser> {
    return this.authCall(user, "signup");
  }

  public static signIn({ email, password }: UserLogin): Promise<ExistingUser> {
    return this.authCall(
      {
        // Ensure not passing anything extra
        email,
        password
      },
      "signin"
    );
  }

  private static async authCall(
    user: UserLogin,
    type: "signin" | "signup"
  ): Promise<ExistingUser> {
    const { token, ...newUser } = await ApiService.hit(
      "POST",
      `/api/auth/${type}`,
      user
    );
    localStorage.setItem(AuthService.TOKEN_KEY, token);
    return newUser;
  }
}
