import React from "react";
import Logo from "../logo2.png"


export default function AccountScreen() {
    return (
        <div className="account-page">
            <header className="account-screen-header">
            <img className="logo" src={Logo} alt="vet logo"/>
            <button className="cancel-btn" onClick={() => window.location = './Home'}>Cancel</button><br></br>
            </header>
            <div className="body-btns">
                <button className="lock-btn" onClick={() => window.location = './'}>Lock</button><br></br>
                <button className="settings-btn">Settings</button>
            </div>
        </div>
    );
}