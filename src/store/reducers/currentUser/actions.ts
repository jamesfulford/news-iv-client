import { User, NewUser, UserLogin } from "../../../models/user";
import AuthService from "../../../services/AuthService";
import { errorClearer, errorHandler } from "../errors";

export enum CurrentUserType {
  SET = "SET_CURRENT_USER"
}

// Actions
interface SetCurrentUserAction {
  type: typeof CurrentUserType.SET;
  user?: User;
}

export function setCurrentUser(user: User): SetCurrentUserAction {
  return {
    type: CurrentUserType.SET,
    user
  };
}

export function signInUser(user: UserLogin) {
  return (dispatch: any) =>
    AuthService.signIn(user)
      .then(setCurrentUser)
      .then(dispatch)
      .then(errorClearer(dispatch))
      .catch(errorHandler(dispatch));
}

export function signUpUser(user: NewUser) {
  return (dispatch: any) =>
    AuthService.signUp(user)
      .then(setCurrentUser)
      .then(dispatch)
      .then(errorClearer(dispatch))
      .catch(errorHandler(dispatch));
}

// Aggregate
export type CurrentUserAction = SetCurrentUserAction;
