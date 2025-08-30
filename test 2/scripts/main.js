fetch('https://jsonplaceholder.typicode.com/users')
.then ((data) => data.json())
.then(data => {
    const container = document.getElementById('container')
    for (const {name, id} of data) {
    const userInfo = document.createElement("div");
    userInfo.classList.add("userInfo");
        userInfo.innerText = `Id: ${id} 
        Name: ${name}
        `
    const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = "View information"
        userInfo.appendChild(btn);
    container.append(userInfo);
    }
    document.body.appendChild(container);
});

