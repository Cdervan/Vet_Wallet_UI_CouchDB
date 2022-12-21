import React from "react";
import Logo from "../logo2.png"

function importKey() {
    // import key file
    // Documentation: send a secondary one time password (duo authentication) to vet
    alert('fetching from backend...');
    window.location.assign('./Home');
}

export default function SeedPhrase() {
    return (
        <div className="import-page">
            <header className="app-header">
                <img className="logo" src={Logo} alt="vet logo"/>
                <p className="app-title">Vet wallet</p>
            </header>

            <button className="backToConnect" onClick={() => window.location = './ConnectWallet'}>
                Back
            </button>

            <div className="connect-body-pk">
                <h1 className="connect-wallet-pk-text">Import wallet through private key</h1>

                <h1 className="import-pk-here">Import your private key here: </h1>

                <form className="keys">
                    Private key: <input className='private-key' type="file" id="pw" /> <br></br>
                </form><br></br>

                <button className="connect-pk" onClick={importKey}>
                    Submit
                </button>
            </div>
        </div>
    );
}