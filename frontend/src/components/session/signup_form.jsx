import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/layout/signup_form.scss';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            bio: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            bio: this.state.bio
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <header className='signup-head'>Sign up</header>
                        <br />
                        <div className='signup-input-container'>
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="text"
                                    value={this.state.firstname}
                                    onChange={this.update('firstname')}
                                    placeholder="First Name"
                                    />
                                <input 
                                    className='two'
                                    type="text"
                                    value={this.state.lastname}
                                    onChange={this.update('lastname')}
                                    placeholder="Last Name"
                                    />
                            </div>
                            <br/>
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                    />
                                <input 
                                    className='two'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    />
                            </div>
                            <br />
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    />
                                <input 
                                    className='two'
                                    type="password"
                                    value={this.state.password2}
                                    onChange={this.update('password2')}
                                    placeholder="Confirm Password"
                                    />
                            </div>
                            <br />
                            {/* <input type="text"
                                value={this.state.bio}
                                onChange={this.update('bio')}
                                placeholder="Bio"
                            />
                            <br /> */}
                            <span className='terms-cond'>By selecting <span className='create-button-terms'>Create your account</span> below, I agree to Honey Bear's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</span>
                            <input className='signup-submit-button' type="submit" value="Create your account" />
                            {this.renderErrors()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);