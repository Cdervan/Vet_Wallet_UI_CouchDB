import React, {useEffect, useState} from "react";

function TxtData() {
    // const [backendData, setBackendData] = useState([{}])

    // useEffect(() => {
    //     fetch("/express_backend").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //         }
    //     )
    // }, [])

    // {(typeof backendData.transactions === 'undefined') ? (
    //     <p>Loading...</p>
    // ) : (backendData.users.map((user,i) => (
    //     <p key={i}>{user}</p>
    // ))
    // )}
    
    return (
        <div>
            <div className="tx-wrapper">

                <div className="tx-box">
                <h2 className="tx-type">purchase type</h2>
                <p className="tx-date">month date,</p>
                <p className="tx-timestamp">ti:me</p>
                <p className="tx-loc">state</p>
                <p className="tx-amount">$amount</p>

                {/* {typeof backendData.data.forEach(data => {
                        <div>
                            <h2 className="tx-type">purchase type</h2>
                            <p className="tx-date">month date,</p>
                            <p className="tx-timestamp">ti:me</p>
                            <p className="tx-loc">state</p>
                            <p className="tx-amount">$amount</p>
                        </div>
                    })
                } */}

                

                {/* {
                    (typeof backendData.transactions === 'undefined') ? (
                        <p>Loading...</p>
                    ) : (backendData.users.map((user, i) => (
                        <p key={i}>{user}</p>
                        ))
                    )
                } */}
                        

                </div>
            </div>
        </div>
    );
}

export default TxtData;