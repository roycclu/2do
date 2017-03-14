const resolveFunctions = {
  RootQuery: {
    todo(_, { id }, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.findToDo(id);
    },
  },
};

module.exports = resolveFunctions;
