// const request = require('request');
const unirest = require('unirest');
// const axios = require('axios');
require('dotenv').config();
// const datetime = require('node-datetime');
const res = require('express/lib/response');

// const new_date = datetime.create();
// const date_formatted = new_date.format('YmdHMS');
const consumerKey = process.env.CONSUMER_KEY;
const secret = process.env.CONSUMER_SECRET;

// auth
module.exports.auth = async (req, res, next) => {
        await unirest.get('http://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
        .headers({'Authorization': `Basic ${Buffer.from(consumerKey +":"+ secret).toString('base64')}`})
        .send()
        .then((result)=>{
            req.token = result.body;
            res.send(req.token);
        })
        .catch((err)=> {
            res.send(err);
        })
}

module.exports.c2b = (req, res) => {
    console.log(req.token);
}