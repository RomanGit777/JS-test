fetch('https://jsonplaceholder.typicode.com/users')
.then ((data) => data.json())
.then(data => {
    const container = document.getElementById('container')
    for (const {name, id} of data) {
    const userInfo = document.createElement("div");
        userInfo.innerText = `Id: ${id} Name: ${name}`
    container.appendChild(userInfo);
    }
    document.body.appendChild(container);
});

