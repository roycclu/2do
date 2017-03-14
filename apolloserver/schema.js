'use strict'

const typeDefinitions = `
type ToDo {
  id: String
  owner: String
  text: String
  done: Boolean
}
type RootQuery {
  todo(id: String, owner: String, text: String, done: Boolean): ToDo
}

schema {
  query: RootQuery
}
`;

module.exports = [typeDefinitions]
