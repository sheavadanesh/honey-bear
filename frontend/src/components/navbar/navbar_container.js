import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavbarLogin from './navbar-login';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(
    mapStateToProps,
    mDTP
)(NavbarLogin);