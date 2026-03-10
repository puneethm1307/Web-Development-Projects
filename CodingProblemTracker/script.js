let problems = JSON.parse(localStorage.getItem("problems")) || [];

function displayProblems(){

const list = document.getElementById("problemList");

list.innerHTML = "";

problems.forEach((problem,index)=>{

const row = document.createElement("tr");

row.innerHTML = `

<td>${problem.name}</td>
<td>${problem.difficulty}</td>
<td>
<button onclick="deleteProblem(${index})">Delete</button>
</td>
`;

list.appendChild(row);

});

}

function addProblem(){

const name = document.getElementById("problemName").value;

const difficulty = document.getElementById("difficulty").value;

if(name==="") return;

problems.push({
name:name,
difficulty:difficulty
});

localStorage.setItem("problems",JSON.stringify(problems));

document.getElementById("problemName").value="";

displayProblems();

}

function deleteProblem(index){

problems.splice(index,1);

localStorage.setItem("problems",JSON.stringify(problems));

displayProblems();

}

displayProblems();
