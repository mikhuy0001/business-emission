const axios=require("axios");async function login(n,s,r,a){var{businessLogInOut:e}=require("../vars"),e=e+"signInBusinessServer";return axios.post(e,{key:n,user:s,password:r,port:a}).then(async function(n){return await n.data}).catch(async function(n){return await n})}module.exports.login=login;