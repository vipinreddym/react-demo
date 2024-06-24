import React from "react";
import './style.css';


interface SignUpProps {
    name?: any;
    value?: any;
}
interface SignUpState {
    username: string,
    email: string,
    password: string,
    errors: {
        username: string,
        email: string,
        password: string
    }
}
const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export class SignUp extends React.Component<SignUpProps, SignUpState> {

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be 5 characters long!' : '';
                break;
            case 'email':
                errors.email = Regex.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be eight characters long!' : '';
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, { errors, [name]: value }));
        console.log(this.state.errors);
    }



    handleSubmit = (event) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity == true){
           console.log("Registering can be done");
        }else{
           console.log("You cannot be registered!!!")
        }
     }

    constructor(props: SignUpProps) {
        super(props);
        const initialState = {
            username: '',
            email: '',
            password: '',
            errors: {
                username: '',
                email: '',
                password: ''
            }
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }


    render() {
        const { errors } = this.state
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign Up</h2>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='username'>
                            <label htmlFor="username">Full Name</label>
                            <input type='text' name='username' onChange={this.handleChange} />
                            {errors.username.length > 0 && <span style={{ color: "red" }}>{errors.username}</span>}
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' onChange={this.handleChange} />
                            {errors.email.length > 0 && <span style={{ color: "red" }}>{errors.email}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' onChange={this.handleChange} />
                            {errors.password.length > 0 && <span style={{ color: "red" }}>{errors.password}</span>}
                        </div>
                        <div className='submit'>
                            <button>Register Me</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


}