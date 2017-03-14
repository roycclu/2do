const resolveFunctions = {
  RootQuery: {
    todo(_, { index }, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.findToDo(index);
    },
  },
};

module.exports = resolveFunctions;
