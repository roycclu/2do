const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const PORT = 8080;
const app = express();
const { apolloExpress, graphiqlExpress } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const ToDoModel = require('./model')

Mongoose.Promise = global.Promise;

const seed = require('./seed');

seed();

const Schema = require('./schema');
const Resolvers = require('./resolvers');
const Connectors = require('./connectors');

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {
    constructor: Connectors,
  },
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT, () => console.log(
  'GraphQL Server is now running on http://localhost:${PORT}/graphql'
));
