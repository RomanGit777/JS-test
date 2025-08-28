const input = document.getElementById('name=value');
const topBtn = document.getElementById('btn-add');
const list = document.getElementById('list');
const sbnBtn = document.getElementById('sbnBtn');
const sbvBtn = document.getElementById('sbvBtn');
const deleteBtn = document.getElementById('deleteBtn');

let pairs = [];

topBtn.onclick = (ev) => {
    ev.preventDefault();
    let raw = input.value.trim(); // here we delete leading and trailing spaces from value of input

    // here we normalize spaces around '='
    raw = raw.replace(/\s*=\s*/, "=");

    // validate format: name/value (alphanumeric only)
    const pattern = /^[a-zA-Z0-9]+=[a-zA-Z0-9]+$/;
    if (!pattern.test(raw)) {
        alert("Invalid format. Use: name = value (alphanumeric only)");
        return;
    }


}
