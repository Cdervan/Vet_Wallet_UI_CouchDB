import React, { useState, useEffect } from "react";
import Logo from "../logo2.png"

function ConnectWallet(){
    const [name, setName] = useState("");
    sessionStorage.setItem('fabricUserName', name)

    function checkAndConnect() {
        window.location.assign('./Home');
        
    }
    
    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
            checkAndConnect()
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

  
        return (
            <div className="connect-page">
                <header className="app-header">
                    <img className="logo" src={Logo} alt="vet logo"/>
                    <p className="app-title">Vet wallet</p>
                </header>

                <button className="backToSetup" onClick={() => window.location = '/'}>
                    Back
                </button>

                <div className="connect-body">
                    <h1>Enter your username</h1>
                    <form className="user">
                        <input 
                        type="text" 
                        id="username"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        /> <br></br>  
                    </form>
                    
                    <button className="unlock" onClick={checkAndConnect}>
                        Unlock
                    </button>
                </div>

                {/* <h2 className="seedphrase-link" onClick={() => window.location = './SeedPhrase'}> import using private key</h2> */}
            </div>
        );
    }
export default ConnectWallet;