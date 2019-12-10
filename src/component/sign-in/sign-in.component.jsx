import React from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custon-button.component';

import {auth , SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {email ,password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email , password);  
            this.setState({email:'' ,password:''})  
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const {value , name} = e.target;

        this.setState({
           [name] : value
        })
    }

    render(){
        return (
            <div className="Sign-in">
                <h2>I Already Have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="text" value={this.state.email} required label="email" />

                    <FormInput name="password" handleChange={this.handleChange} type="password" value={this.state.password} required label="password" />

                   <div className="buttons">
                        <Custombutton type="submit"> Sign In </Custombutton>
                        <Custombutton type="submit" onClick={SignInWithGoogle} isGooglesignIn > Sign In With Google </Custombutton>
                   </div>  
                </form>
            </div>
        )
    }
}

export default SignIn;