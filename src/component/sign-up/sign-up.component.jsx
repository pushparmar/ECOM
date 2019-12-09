import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custon-button.component';
import { auth } from 'firebase';
import { CreateUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp  extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName:'',
            email : '',
            password: '',
            confirmPassword:'',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName , email , password , confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('password not match');
            return ;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await CreateUserProfileDocument(user ,{displayName});

            this.setstate = {
                displayName:'',
                email : '',
                password: '',
                confirmPassword:'',
            }

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name ,value} = event.target;
        this.setState = ({[name] : value })
    }

    render(){
        const {displayName , email , password ,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I Don't Have a Acount</h2>
                <span>Sign Up With Your Email And Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={displayName} 
                        onChange={this.handleChange} 
                        label="Name" 
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type="email" 
                        name="Email" 
                        value={email} 
                        onChange={this.handleChange} 
                        label="Email" 
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={this.handleChange} 
                        label="Password" 
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="confirm password" 
                        value={confirmPassword} 
                        onChange={this.handleChange} 
                        label="confirm password" 
                        required>       
                    </FormInput>

                    <Custombutton type="submit"> Sign Up</Custombutton>
                </form>
            </div>
        )
    }
}
export default SignUp;