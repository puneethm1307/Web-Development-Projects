let habits = JSON.parse(localStorage.getItem("habits")) || [];

function render(){

const container = document.getElementById("habitContainer");

container.innerHTML = "";

habits.forEach((habit,index)=>{

let progress = habit.completed ? 100 : 30;

const card = document.createElement("div");

card.className =
"bg-gray-800 p-6 rounded-xl shadow-lg";

card.innerHTML = `

<div class="flex justify-between items-center mb-4">

<h2 class="text-lg font-semibold">
${habit.name}
</h2>

<span class="text-emerald-400 text-sm">
🔥 Streak: ${habit.streak}
</span>

</div>

<div class="w-full bg-gray-700 h-3 rounded-full mb-4">

<div class="bg-purple-500 h-3 rounded-full"
style="width:${progress}%">
</div>

</div>

<div class="flex justify-between">

<button onclick="completeHabit(${index})"
class="bg-emerald-500 px-3 py-1 rounded text-sm">
Complete </button>

<button onclick="deleteHabit(${index})"
class="bg-red-500 px-3 py-1 rounded text-sm">
Delete </button>

</div>

`;

container.appendChild(card);

});

}

function addHabit(){

const input = document.getElementById("habitInput");

if(input.value==="") return;

habits.push({
name:input.value,
completed:false,
streak:0
});

localStorage.setItem("habits",JSON.stringify(habits));

input.value="";

render();

}

function completeHabit(index){

habits[index].completed = true;

habits[index].streak += 1;

localStorage.setItem("habits",JSON.stringify(habits));

render();

}

function deleteHabit(index){

habits.splice(index,1);

localStorage.setItem("habits",JSON.stringify(habits));

render();

}

render();
