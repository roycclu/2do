'use strict'

const typeDefinitions = `
type ToDo {
  id: ID!
  owner: String
  text: String!
  done: Boolean!
}

input AddToDo {
  owner: String
  text: String
}

type RootQuery {
  todo(id: String, owner: String, text: String, done: Boolean): ToDo
}
type Mutation {
  todo(text: String, done: Boolean): ToDo
}

schema {
  query: RootQuery
  mutation: Mutation
}
`;

module.exports = [typeDefinitions]
