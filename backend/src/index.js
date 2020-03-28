// Importações

const express = require('express');

const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  *Métodos HTTP 
  *
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?", (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar e alterar recursos 
   */

   /**
    *SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
    *NoSQL: MongoDB, CouchDB, etc 
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */