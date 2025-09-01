const container = document.getElementById("info-container");
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
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
                // nestedDiv.style.marginLeft = '20px';
                parent.appendChild(nestedDiv);

                showObject(value, nestedDiv);
            } else{
                p.innerText = `${key}: ${value}`;
                parent.appendChild(p);
            }
        }
    }
    showObject(user, container);
            const btn = document.createElement("button");
            btn.innerText = 'Post Of Current User';
            btn.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
                    .then(res => res.json())
                    .then(posts => {
                        container.appendChild(posts);
                    })
            });
            container.appendChild(btn);
});