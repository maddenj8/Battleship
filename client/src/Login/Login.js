import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('')


    const navigate = useNavigate();

    const onButtonClick = () => {

    }

    return (
        <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
            <input
            value={email}
            placeholder="Enter a username"
            onChange={(ev) => setUsername(ev.target.value)}
            className={'inputBox'}
            />
            <label className="errorLabel">{emailError}</label>
        </div>
    
        <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
        </div>
    )
}

export default Login;