/*function addTodo() {
  const inp = document.getElementById("inp").value;
  const dis = document.getElementById("dis").value;
  /*const originalHTML = document.getElementById("cont").innerHTML;
 const outerDiv = document.createElement("div");
  outerDiv.innerHTML = inp;
  document.getElementById("cont").appendChild(outerDiv);
  
  /*document.getElementById("cont").innerHTML = originalHTML + `<div>
<div>${inp}</div>
<div>${dis}</div>
<button id="done">Mark as done</button>
  </div>`
  console.log(inp)
  console.log(dis)
  
}
*/
let globalId = 1;

function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done!"
}

function createChild(title, description, id) {
  const child = document.createElement("div");
  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;
  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;
  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as done";
  thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent)
  child.setAttribute("id", id);
  return child;
}
function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const parent = document.getElementById("todos");

  parent.appendChild(createChild(title, description, globalId++));
}