export interface UserLogin {
  email: string;
  password: string;
}
export interface User {
  email: string;
  username: string;
  profileImageUrl: string;
}

export interface ExistingUser extends User {
  id: string;
}

export type NewUser = User & UserLogin;
