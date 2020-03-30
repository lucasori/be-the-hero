const crypto = require('crypto');

// Realizando teste único do id
module.exports =  function generateUniqueId(){
    return crypto.randomBytes(4).toString("HEX");
}