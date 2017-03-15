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
      todo.addToDo(owner, text, due)
    },
    checktodo(_, {index}, ctx) {
      const todo = new ctx.constructor.ToDo();
      todo.checktodo(index)
    },
    deletetodo(_, {index}, ctx) {
      const todo = new ctx.constructor.ToDo();
      todo.deletetodo(index)
    },
  },
};

module.exports = resolveFunctions;
