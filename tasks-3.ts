class TodoList {
  constructor(
    private todos: number[],

  ) {
    this.todos = todos;
  }

  getId() {
    return this.todos;
  }
}

const p3 = new TodoList([1, 2]);


class Todos extends TodoList {
  constructor(
    todos: number[],
    public addTasks: string
  ) {
    super(todos);
    this.addTasks = addTasks;
  }

}

const s1 = new Todos([1, 2, 3, 4], "Study");

console.log(s1);
