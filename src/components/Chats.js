import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {

    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    return (
        <div>

            <div className='chats-page'>

                <div className='nav-bar'>
                    <div className='logo-tab'>
                        ChitChat
                    </div>
                    <div onClick={handleLogout} className='logout-tab'>
                        Logout
                    </div>
                </div>
                <ChatEngine
                    height="calc(100vh - 66px)"
                    projectId="5b292285-1b65-4bb0-87f8-540ea8552fbb"
                    userName="."
                    userSecret="."

                ></ChatEngine>
            </div>
        </div>
    )
}
export default Chats;