'use strict'
const connection = require('./routes/connection');
const loginRoute = require('./routes/login');

const Hapi = require('hapi');
const MySQL = require('mysql');
const Joi = require('joi');

// Create a server with a host and port



const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8001,
    routes: { cors: true }
});

connection.connect();

// Add the route

// Login
server.route(loginRoute);

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
      const id = request.params.id;
      const query = `SELECT * FROM users WHERE id = '${id}'`;

      connection.query(query,
      function (error, results, fields) {
         if (error) throw error;

         reply(results);
      });
    },
    config: {
      validate: {
        params: {
          id: Joi.number().integer()
        }
      }
    }
});

server.route({
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {
      console.log(request.payload);
      const nume = request.payload.nume;
      const prenume = request.payload.prenume;
      const email = request.payload.email;
      const telefon = request.payload.telefon;
      const parola = request.payload.parola;
      const query = `INSERT INTO users (nume, prenume, email, telefon, parola) VALUES ('${nume}','${prenume}','${email}','${telefon}','${parola}')`;
      connection.query(query, function (error, results, fields) {
          if (error) throw error;
          reply(results);
      });
    }
});

server.route({
    method: 'DELETE',
    path: '/users/{id}',
    handler: function (request, reply) {
        const id = request.params.id;
        const query = `DELETE FROM users WHERE id='${id}'`;
        connection.query(query, function (error, result, fields) {
           if (error) throw error;
           if (result.affectedRows) {
               reply(true);
           } else {
               reply(false);
           }
        });
    },
    config: {
      validate: {
         params: {
           id: Joi.number().integer()
         }
      }
  }
});

server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: function (request, reply) {
        const id = request.params.id;
        const nume = request.payload.nume;
        const prenume = request.payload.prenume;
        const email = request.payload.email;
        const query = `UPDATE users SET nume='${nume}', prenume='${prenume}', email='${email}' WHERE id='${id}'`;
        connection.query(query, function (error, result, fields) {
           if (error) throw error;
           reply(result);
        });
    },
    config: {
      validate: {
         params: {
           id: Joi.number().integer()
         }
      }
  }
});



server.route({
    method: 'GET',
    path: '/credit',
    handler: function (request, reply) {
      let token = request.headers.authorization;
      console.log(token);

      let getCredit = function(userId){
        const query = `SELECT credit FROM credit WHERE user_id = '${userId}'`;
        connection.query(query,
        function (error, result, fields) {
           if (error) throw error;
           reply(result[0].credit);
        });
      }

      selectUserIdByToken(token, getCredit);
    }
});

server.route({
  method: 'PUT',
  path: '/credit',
  handler: function(request, reply){
    let token = request.headers.authorization;
    const credit = request.headers.credit;
    const price = request.headers.price;

    //const query = `UPDATE credit SET credit='${}'`
  }
});

server.route({
    method: 'POST',
    path: '/abonamente',
    handler: function (request, reply) {
      let token = request.headers.authorization;
      let traseu = request.payload.traseu;
      let price = request.payload.price;
      let date = new Date();
      date = date.getTime();

      let adaugaAbonament = function(userId){
        const query = `INSERT INTO abonamente (traseu, data_ora, user_id) VALUES ('${traseu}', '${date}', '${userId}')`;
        connection.query(query,
        function (error, result, fields) {
           if (error) throw error;
            updateCredit(userId, price, reply);
        });
      }
      selectUserIdByToken(token, adaugaAbonament);    
    }
});

function selectUserIdByToken(token, callback){
  const query = `SELECT id FROM users WHERE token = '${token}'`;

  connection.query(query,
  function (error, results, fields) {
    if (error) throw error;
    callback(results[0].id);
  });
}

function updateCredit(userId, price, reply){
  const query = `SELECT credit FROM credit WHERE user_id ='${userId}'`;
  connection.query(query,
  function (error, result, fields) {
    if (error) throw error;
    let credit = result[0].credit;
    credit -= price;
    const query = `UPDATE credit SET credit='${credit}' WHERE user_id ='${userId}'`;
    connection.query(query,
    function (error, result, fields) {
      if (error) throw error;
      reply(result);
    });  
  });  
}

server.start((err) => {
   if (err) {
     throw err;
   }
   console.log('Server running at:', server.info.uri);
});
