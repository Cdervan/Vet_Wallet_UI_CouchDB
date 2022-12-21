import React from "react";
import Logo from "../logo2.png"

export default function Setup() {

    return (
        <div className="setup">
            <header className="app-header">
                <img className="logo" src={Logo} alt="vet logo"/>
                <p className="app-title">Vet wallet</p>
            </header>

            <div className="button-setup">
    
                <button className="connect-wallet" onClick= { () => window.location="./ConnectWallet"}>
                    <p>Connect wallet</p>
                </button>

                <button className="create-wallet" onClick= { () => window.location="./CreateWallet"}>
                    <p>Create wallet</p>
                </button>
            </div>
        </div>
    )
}