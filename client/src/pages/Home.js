import React, { useState, useEffect } from "react";
import path from 'path';
import TxtData from "./TxtData";

//require('dotenv').config({path: path.resolve(__dirname, "../.env")})

//const baseURL = "http://3.16.10.168:3000/user/api/v1/"

const baseURL = process.env.REACT_APP_FABRIC_BASEURL;

function Home() {
    const [Balance, setBalance] = useState();
    const [ID, setID] = useState("");
    const [txData, setTxData] = useState([])

    sessionStorage.setItem('userBalance', Balance);

    useEffect(() => {
        
        fetch("/express_backend").then(
            res => res.text()
        ).then(
            data => {
                console.log(data)
                setTxData(data)
                
            } 
        ).catch(
            err => { console.log(err) }
        )}, [])

    useEffect(() => {
        fetch(baseURL + 'GetAccountBalance', {
            method: "POST",
            body: JSON.stringify({
                fabricUserName: sessionStorage.getItem('fabricUserName')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            // Converting to JSON
            .then(response => response.json())
            // Setting balance value to response value
            .then(json => setBalance(json));
    }, [Balance])

    useEffect(() => {
        fetch(baseURL + 'GetID', {
            method: "POST",
            body: JSON.stringify({
                fabricUserName: sessionStorage.getItem('fabricUserName')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            // Converting to JSON
            .then(response => {
                response.text().then(function (text) {
                    setID(text)
                });
            })
            .catch(e => {
                console.log(e);
            });
    }, [])

    console.log(txData)

    //Import JSON string
    var stringJSON = JSON.stringify(txData);

    //Remove invalid characters & transactions text
    stringJSON = stringJSON.replace(/\n|\r/g, "");
    stringJSON = stringJSON.replaceAll('\\', '');
    stringJSON = stringJSON.replace('"{"transactions":[', '');
    stringJSON = stringJSON.slice(0, -3);

    //Innitialize JSON to object variables
    const objArray = [];
    var jsonObj;
    var obj

    while ((stringJSON.match(/id/g) || []).length > 2) {
        //Parse JSON to object
        jsonObj = stringJSON.substr(0, stringJSON.indexOf(',{"id":'));

        //Push object to array
        try {
            obj = JSON.parse(jsonObj);
            objArray.push(obj);
        } catch (error) {
            console.error(error);
        }

        //Remove pushed object from JSON txt
        stringJSON = stringJSON.replace(',', '');
        stringJSON = stringJSON.substring(jsonObj.length);
        console.log(stringJSON);
    }

    //Push object to array
    try {
        obj = JSON.parse(stringJSON);
        objArray.push(obj);
    } catch (error) {
        console.error(error);
    }
    
    //Log object array
    console.log(objArray);

    return (
        <div className="home-page">
            <header className="home-header">
                <div className="header-home-title">
                    <p className="username">{sessionStorage.getItem('fabricUserName')}</p>
                    <p className="address">{ID}</p>
                </div>
                <button className="account-link" onClick={() => window.location = './AccountScreen'}>
                    Account
                </button>
            </header>

            <div className="balance">
                <h2 className="balance-title">Balance:</h2>
                <form className="balance-box">
                    <output><p className="balance-amt">{Balance}</p></output>
                </form>
                <button className="send-btn" onClick={() => window.location = './Send'}>
                    Send →
                </button>
            </div>

            <div>
                {objArray.map((tx, i) => 
                    <div key={i}>
                        <p>Name: {tx.value.name}</p>
                        <p>Wallet: {tx.value.wAddress}</p>
                        <p>Price: {tx.value.price}</p>
                        <p>Location: {tx.value.loc}</p>
                        <p>Timestamp: {tx.value.timestamp}</p>
                        <p>Tx ID: {tx.value.tx_id}</p>
                    </div>
                )}
            </div>

        </div>
    );
}
export default Home;