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
  RootMutation: {
    addtodo(_, {owner, text, due}, ctx){
      const todo = new ctx.constructor.ToDo();
      return todo.addToDo(owner, text, due)
    },
    checktodo(_, {index, done}, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.checktodo(index, done)
    },
    deletetodo(_, {index}, ctx) {
      const todo = new ctx.constructor.ToDo();
      return todo.deletetodo(index)
    },
  },
};

module.exports = resolveFunctions;
