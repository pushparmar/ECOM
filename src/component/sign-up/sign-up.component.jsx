import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custon-button.component';
import { auth ,CreateUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp  extends React.Component{
    constructor(props){
        super(props)

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
            const { user } = await auth.createUserWithEmailAndPassword(email , password);
            await CreateUserProfileDocument(user ,{displayName});

            this.setState({
                displayName:'',
                email : '',
                password: '',
                confirmPassword:'',
            });
            alert('success')

        } catch (error) {
            console.log(error);
        }

        return
    }

    handleChange = event => {
        const {name , value} = event.target;
        this.setState({
            [name] : value 
        });
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
                        handleChange={this.handleChange} 
                        label="Name" 
                        required>
                              
                    </FormInput>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        handleChange={this.handleChange} 
                        label="Email" 
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        handleChange={this.handleChange} 
                        label="Password" 
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
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