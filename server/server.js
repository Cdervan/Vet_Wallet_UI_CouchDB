const express = require('express');
const NodeCouchDb = require('node-couchdb');
const path = require('path');
require("dotenv").config();
//{path: "path/filename"}

const app = express();
const PORT = process.env.PORT || 5000;

const dbname = 'transactions';
const viewURL = '_design/object/_view/object';

const couch = new NodeCouchDb({
    host: process.env.COUCH_HOST,
    port: process.env.COUCH_PORT,
    auth: {
        user: process.env.COUCH_USER,
        pass: process.env.COUCH_PASS
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// need to get fabric user name and pass to couch (get or post) req.body.name
// Couchdb needs to limit transactions to tx_ids and sum up tx_amount
// only display info in view for specific user

app.get('/express_backend', (req, res) => {

    // res.json({"users": ["User Chris", "User Will", "User Xavier"]})
    couch.get(dbname, viewURL).then(
        (data, headers, status) => {
            res.send({ transactions:data.data.rows })
        },
        (err) => {
            res.send(err);
        })
    },
    (err) => {
        res.send(err)
    }
)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))