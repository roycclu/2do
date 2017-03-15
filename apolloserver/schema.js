'use strict'

const typeDefinitions = `
type ToDo {
  index: ID
  owner: String
  text: String
  due: String
  done: Boolean
}

type RootQuery {
  todo(index: ID, owner: String, text: String, due: String, done: Boolean): ToDo
  todos: [ ToDo ]
}

type RootMutation {
  addtodo(owner: String, text: String, due: String): ToDo
  checktodo(index: ID): ToDo
  deletetodo(index: ID): ToDo
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

module.exports = [typeDefinitions]
