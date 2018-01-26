const connection = require('./connection');
const hat = require('hat');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
       doLogin(request, reply);
    }
  }
];

function doLogin(request, reply) {
  const email = request.payload.email;
  const parola = request.payload.parola;
  const query = `SELECT * FROM users WHERE email='${email}' AND parola='${parola}'`;
  console.log(query);
  connection.query(query, function (error, results, fields) {
     if (error) throw error;
     console.log(results);
     if (results.length == 1){
        createToken(results[0].id, reply);
     } else {
        reply('');
     }
  });
}

function createToken(id, reply) {
  var token = hat();
  const query = `UPDATE users SET token='${token}' WHERE id='${id}' `;
  connection.query(query, function (error, result, fields) {
    if (error) throw error;
    reply(token);
  });
}
