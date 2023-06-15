import React, { useState, useEffect, useRef } from 'react';
import classes from './modal.module.scss';

export function GetQuoteButton() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');

    const handleButtonClick = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone && email && message) {
            // Clear the form and close the popup
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
            setPopupOpen(false);
        } else {
            setPopupOpen(true);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    return (
        <div className={classes.getQuoteButton}>
            <button onClick={handleButtonClick}>Get Quote</button>

            {isPopupOpen && (
                <div className={classes.popup}>
                    <h2>Get a Quote</h2>
                    {showAlert && (
                        <div className={classes.alert}>
                            Please fill in all the details.
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}
