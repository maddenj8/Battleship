import React from 'react';
import { useNavigate } from 'react-router-dom'


const Lobby = (props) => {
    const { loggedIn, username } = props;
    const navigate = useNavigate()

    const onButtonClick = () => {

    }

    return (
        <div className='mainContainer'>
            <div className={'titleContainer'}>
                <div>Welcome!</div>
            </div>
            <div>This is the lobby</div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type='button'
                    onClick={onButtonClick}
                    value={loggedIn ? 'Queue' : 'Select Username'}
                    />
                {loggedIn ? <div>Selected username: {username}</div>: <div />}
            </div>
        </div>
    )
}

export default Lobby;