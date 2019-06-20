import PureNavbar from './Navbar';
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";

const mapStateToProps = (state: AppState) => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  null
)(PureNavbar);
