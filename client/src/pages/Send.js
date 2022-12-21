import React, { useState } from "react";
import path from 'path';

//require('dotenv').config({path: path.resolve(__dirname, "../.env")})

//const baseURL = "http://3.16.10.168:3000/fabric/api/v1/"

const baseURL = process.env.REACT_APP_FABRIC_BASEURL;

function SendFunds(to, amount) {
        fetch(baseURL + 'RequestTransfer', {
            method: "POST",
            body: JSON.stringify({
                fabricUserName: sessionStorage.getItem('fabricUserName'),
                to: to,
                value: parseInt(amount)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        alert('Transaction complete!');
}

function Send() {

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState();

    const sendBtn = () => {
        if(amount < 0){
            alert('Input a positive number');
        }else if(sessionStorage.getItem('fabricUserName') === to){
            alert('No money duplication glitches here')
        }else if (amount > parseInt(sessionStorage.getItem('userBalance'))){
            alert('Not enough funds');
        }else{
            SendFunds(to, amount)
        }
    }

        return (
            <div className="send-page">
                <header className="send-header">
                    <p>Send to</p>
                </header>

                <button className="cancel-send-btn" onClick={() => window.location = './Home'}>Back</button>

                <div className="recipient-info">
                    <p className="paste-text">Enter who you want to send to: </p>
                    <form className="search">
                        <input type="text" 
                        className="address_search" 
                        id="address_search" 
                        required
                        onChange={e => setTo(e.target.value)}/><br></br>

                        <p>Enter amount:</p> <br></br>
                        <input type="number" 
                        className="amount" 
                        id="amount" 
                        required
                        onChange={e => setAmount(e.target.value)}/><br></br>
                    </form>
                    <button className="submit-send" onClick={sendBtn}>
                        Send →
                    </button>
                </div>
            </div>
        );
}
export default Send;