let tasks=[];

function addTask(){
 const x = document.getElementById("input").value;
 tasks.push(x);
 render();
}

function render(){
  const p = document.createElement('p');
  p.textContent = tasks[tasks.length - 1];
  div.appendChild(p);
}