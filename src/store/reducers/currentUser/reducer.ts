import { User } from "../../../models/user";
import { CurrentUserType, CurrentUserAction } from "./actions";

// State
export interface CurrentUserState {
  isAuthenticated: boolean;
  user?: User;
}
const initialState: CurrentUserState = {
    isAuthenticated: false,
    user: undefined,
};

export default (
  state: CurrentUserState = initialState,
  action: CurrentUserAction
): CurrentUserState => {
  switch (action.type) {
    case CurrentUserType.SET:
      return {
        ...state,
        isAuthenticated: Boolean(
          action.user && Object.keys(action.user).length > 0
        ),
        user: action.user
      };
    default:
      return state;
  }
};
