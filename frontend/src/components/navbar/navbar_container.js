import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavbarLogin from './navbar-login';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        user: state.entities.user.data
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