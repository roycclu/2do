const resolveFunctions = {
  RootQuery: {
    todo(_, { index }, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.findToDo(index)
    },
    todos(_, args, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.findToDos();
    },
  },
};

module.exports = resolveFunctions;
