async function getProfile(){

const username = document.getElementById("username").value;

if(username==="") return;

const response = await fetch(`https://api.github.com/users/${username}`);

const data = await response.json();

const card = document.getElementById("profileCard");

card.innerHTML = `

<img src="${data.avatar_url}">

<h2>${data.name}</h2>

<p>${data.bio || "No bio available"}</p>

<p>Followers: ${data.followers}</p>

<p>Following: ${data.following}</p>

<p>Public Repositories: ${data.public_repos}</p>

<a href="${data.html_url}" target="_blank">View Profile</a>

`;

}
