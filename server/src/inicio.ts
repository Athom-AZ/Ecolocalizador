import express, { request, response } from 'express';

const app = express();

app.use(express.json());

// rota: endereço completo da requisoção
// recurso: qual entidad estamos acessando

// get: buscar um ou mais informações no back-end
// POST: criar uma nova info no back-end
// put: atualizar um info existente no back-end
// deleete: apagar uma info no back-end

// exemplos:
// post http://localhost:3333/users - criar um usuário
// get  http://localhost:3333/users - listar usuarios
// get http://localhost:3333/users/5 - localizar usuário 5

// Request Param: parâmetros quer vem na própria rota que 
//identiica um recurso

//Query param: parametros que vem na propria rota que geralmente são opcionais

// Request Body: parametros para criação/atualização de informação

//Banco de dados
// SELECT*FROM users WHERE name ='Thomaz'
//pelo KNEX:
//knex('users').where('name','Thomaz').select('*') //'*'==tudo

const users = [ 
   'Thomaz',//0
   'Lopes',//1
   'kkkkkk',//2
   'KAKAKA'//3
];

app.get('/users', (request,response) => {
   //console.log ('Listagem de usuários');
   
   const search = String(request.query.search);
   console.log(search);
   const filteredUsers = search ? users.filter(user => user.includes(search)) : users; // Variaável ? .. : .. => representa if

   return response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
   const id = Number(request.params.id);

   const user = users[id];

   return response.json(user);
});

app.post('/users', (request,response)=>{
   const data = request.body;

   console.log(data);

   const user = {
       name: data.name,
       email:data.email, 
   };
   return response.json(user);
});


app.listen(3333);
