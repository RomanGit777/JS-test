const container = document.getElementById("info-container"); // take our html element
const urlParams = new URLSearchParams(window.location.search); // can you explain me here?
const userId = urlParams.get("id"); // can you explain me here?
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) //can you explain me more about ${this}?
.then(res => res.json())
.then(user => {
    function showObject(obj, parent){
        for (const key in obj) {
            const value = obj[key];
            const p = document.createElement("p");

            if (typeof value === "object" && value !== null){
                const title = document.createElement("p");
                title.innerText = `${key}:`;
                parent.appendChild(title);

                const nestedDiv = document.createElement("div");
                nestedDiv.style.marginLeft = '20px';
                parent.appendChild(nestedDiv);

                showObject(value, nestedDiv);
            } else{
                p.innerText = `${key}: ${value}`;
                parent.appendChild(p);
            }
        }
    }
    showObject(user, container);
});