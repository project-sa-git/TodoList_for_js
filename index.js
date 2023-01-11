/**
 * 課題③-1
 */


let i = 0;
function addNewTask() {
  const newTaskName = document.getElementById("newTaskName").value;

  const taskText = document.createTextNode(i + newTaskName);

  const inputWorking = document.createElement("input");
  inputWorking.type = "button";
  inputWorking.value = "作業中";

  const inputRemove = document.createElement("input");
  inputRemove.type = "button";
  inputRemove.value = "削除";

  const list = document.getElementById("list");
  const li = document.createElement("li");

  li.appendChild(taskText);
  li.appendChild(inputWorking);
  li.appendChild(inputRemove);
  list.appendChild(li);

  i++;
}
