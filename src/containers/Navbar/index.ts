import PureNavbar from './Navbar';
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { CurrentUserState, logoutUser } from '../../store/reducers/currentUser';

const mapStateToProps = (state: AppState): {
  currentUser: CurrentUserState;
} => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  {
    logoutUser,
  },
)(PureNavbar);
