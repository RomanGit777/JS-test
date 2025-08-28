const input = document.getElementById('name=value');
const topBtn = document.getElementById('btn-add');
const list = document.getElementById('list');
const btnSortName = document.getElementById('sbnBtn');
const btnSortValue = document.getElementById('sbvBtn');
const deleteBtn = document.getElementById('deleteBtn');

let pairs = [];

topBtn.onclick = function (ev) {
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

    pairs.push(raw);
    updateTextarea();
    input.value = "";
}

btnSortName.onclick = function () {
    pairs.sort((a, b) => {
    const nameA = a.split("=")[0].toLowerCase();
    const nameB = b.split("=")[0].toLowerCase();
    return nameA.localeCompare(nameB);
    });
    updateTextarea();
};

// Update textarea content
function updateTextarea() {
    list.value = pairs.join("\n");
}