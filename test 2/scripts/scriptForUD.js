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
            btn.classList.add("top-btn");
            btn.innerText = 'Post Of Current User';
            btn.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(res => res.json())
                    .then(posts => {
                        const postsContainer = document.createElement('div');
                        postsContainer.classList.add('posts-container');

                        posts.forEach(post =>{
                            const postDiv = document.createElement("div");
                                postDiv.classList.add("post");

                    const title = document.createElement("h4");
                            title.innerText = post.title;

                            const btnVP = document.createElement("button");
                            btnVP.classList.add("bottom-btn");
                            btnVP.innerText = "View Post";
                            btnVP.addEventListener('click', () =>{
                                window.location.href = `post-details.html?id=${post.id}`;
                            });
                                postDiv.append(title, btnVP);
                                postsContainer.appendChild(postDiv);
                        });
                                container.appendChild(postsContainer);
                    });
            });
            container.appendChild(btn);
});