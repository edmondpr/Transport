'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql');
const Joi = require('joi');

// Create a server with a host and port

const connection = MySQL.createConnection({
  host: 'vlvlnl1grfzh34vj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'chbi0ihnb43rurgq',
  password: 'boloqr7jyx8416td',
  database: 'f7fns99l0tvit57l'
});

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8001,
    routes: { cors: true }
});

connection.connect();

// Add the route
server.route({
    method: 'GET',
    path:'/helloworld',
    handler: function (request, reply) {
    return reply('hello world');
}
});

server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
       const query = 'SELECT * FROM users';
       connection.query(query,
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
      const id = request.params.id;
      const query = 'SELECT * FROM users WHERE id = "' + id + '"';

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

      const query = 'SELECT id FROM users WHERE token = "' + token + '"';

      connection.query(query,
      function (error, results, fields) {
        if (error) throw error;

        let userId = results[0].id;
        const query = 'SELECT credit FROM credit WHERE user_id = "' + userId + '"';

        connection.query(query,
        function (error, results, fields) {
           if (error) throw error;

           reply(results[0].credit);
        });        
      });
      
    }
});

server.start((err) => {
   if (err) {
     throw err;
   }
   console.log('Server running at:', server.info.uri);
});
