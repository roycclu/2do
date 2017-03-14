'use strict'

const typeDefinitions = `
type ToDo {
  index: ID
  owner: String
  text: String
  due: String
  done: Boolean
}

input AddToDo {
  owner: String
  text: String
}

type RootQuery {
  todo(index: ID, owner: String, text: String, due: String, done: Boolean): ToDo
  todos(index: ID, owner: String, text: String, due: String, done: Boolean): [ ToDo ]
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
