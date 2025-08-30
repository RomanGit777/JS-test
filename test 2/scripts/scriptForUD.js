const container = document.getElementById("info-container");
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(user => {
    for (const key in user) {
        const p = document.createElement("p");
        p.innerText = `${key}: ${JSON.stringify((user[key]))}`;
        container.appendChild(p);
    }
})