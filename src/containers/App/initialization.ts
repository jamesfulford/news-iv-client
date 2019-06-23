import ApiService from "../../services/ApiService";
import { Store, AnyAction } from "redux";
import { logoutUser, setCurrentUser } from "../../store/reducers/currentUser";
import jwtDecode from "jwt-decode";
import { ExistingUser } from "../../models/user";

export function inferLoggedIn(store: Store) {
  // Login user if token is found in localStorage
  const token = ApiService.getTokenHeader();
  const dispatch = (a: AnyAction) => store.dispatch(a);
  if (token) {
    try {
      const storedUser: ExistingUser = jwtDecode(token);
      dispatch(setCurrentUser(storedUser));
      ApiService.setTokenHeader(ApiService.getTokenHeader());
    } catch (e) {
      logoutUser()(dispatch);
    }
  } else {
    logoutUser()(dispatch);
  }
}

export default async (store: Store) => {
  inferLoggedIn(store);
};
