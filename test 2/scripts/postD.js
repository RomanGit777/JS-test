const container = document.getElementById('post-container');
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(res => res.json())
.then(data => {
})