const container = document.getElementById('post-container');
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
            const divElement = document.createElement("div");
            divElement.classList.add("info-container");
        for (const key in post) {
            const p = document.createElement("p");
            p.innerText = `${key}: ${post[key]}`;
            divElement.appendChild(p);
            container.appendChild(divElement);
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                const commentsContainer = document.createElement("div");
                commentsContainer.classList.add("comments-container");

                comments.forEach(comment => {
                    const commentDiv = document.createElement("div");
                    commentDiv.classList.add("comment");

                    commentDiv.innerHTML = `
                        <h4>${comment.name}</h4>
                        <p><b>Email:</b> ${comment.email}</p>
                        <p>Comment: ${comment.body}</p>
                    `;
                    commentsContainer.appendChild(commentDiv);
                });

                container.appendChild(commentsContainer);
            });
    });
