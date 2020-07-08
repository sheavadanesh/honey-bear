import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavbarLogin from './navbar-login';

const mapStateToProps = state => {
    debugger
    return {
        loggedIn: state.session.isAuthenticated
    };
};

export default connect(
    mapStateToProps,
    { logout }
)(NavbarLogin);