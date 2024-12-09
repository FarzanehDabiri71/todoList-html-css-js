const todoList = ["make dinner", "wash dishes"];
let todoListHTML = "";
for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p> ${todo} </p>`;
  todoListHTML += html;
}
document.querySelector(".js-todo-list").innerHTML = todoListHTML;
