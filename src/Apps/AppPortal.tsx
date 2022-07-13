import React, { useState } from 'react'
import Notification from '../components/Notification';

export const AppPortal = () => {
    const [message, setMessage] = useState(""); // controlled component (input)
    const [notification, setNotification] = useState("");   // notification text

    const handleNotification = (e: any) => {
        e.preventDefault();
        setNotification(message);
        setMessage("");
    };

    const handleClose = () => {
        setNotification("");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <br />
                    <button className='btn btn-success' style={{ marginTop: "10px"}}
                        onClick={handleNotification}>Open Notification</button>
                </div>
            </div>
            <Notification message={notification} onClose={handleClose} />
        </div>
    )
}
