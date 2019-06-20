import { User } from "../../../models/user";

export enum CurrentUserType {
  SET = "SET_CURRENT_USER",
}

// Actions
interface SetCurrentUserAction {
  type: typeof CurrentUserType.SET;
  user?: User;
}

// Aggregate
export type CurrentUserAction = SetCurrentUserAction;
