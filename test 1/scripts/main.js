const input = document.getElementById('name=value');
const topBtn = document.getElementById('btn-add');
const list = document.getElementById('list');
const btnSortName = document.getElementById('sbnBtn');
const btnSortValue = document.getElementById('sbvBtn');
const deleteBtn = document.getElementById('deleteBtn');

let pairs = [];

topBtn.onclick = function (ev) {
    ev.preventDefault();
    let raw = input.value.trim();

    raw = raw.replace(/\s*=\s*/, "=");

    const pattern = /^[a-zA-Z0-9]+=[a-zA-Z0-9]+$/;
    if (!pattern.test(raw)) {
        alert("Invalid format. Use: name = value (alphanumeric only)");
        return;
    }

    pairs.push(raw);
    updateTextarea();
    input.value = "";
}

btnSortName.onclick = function (ev) {
    ev.preventDefault();
    pairs.sort((a, b) => {
    const nameA = a.split("=")[0].toLowerCase();
    const nameB = b.split("=")[0].toLowerCase();
    return nameA.localeCompare(nameB);
    });
    updateTextarea();
};

btnSortValue.onclick = function (ev) {
    ev.preventDefault();
    pairs.sort((a, b) => {
        const valA = a.split("=")[1].toLowerCase();
        const valB = b.split("=")[1].toLowerCase();
        return valA.localeCompare(valB);
    });
    updateTextarea();
};

deleteBtn.onclick = function (ev) {
    ev.preventDefault();
    const start = list.selectionStart;
    const end = list.selectionEnd;
    const lines = list.value.split("\n");
    let currentPos = 0;
    const selectedIndexes = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineStart = currentPos;
        const lineEnd = currentPos + line.length;

        if (lineEnd >= start && lineStart <= end) {
            selectedIndexes.push(i);
        }
        currentPos += line.length + 1;
    }
    for (let i = selectedIndexes.length - 1; i >= 0; i--) {
        pairs.splice(selectedIndexes[i], 1);
    }
    updateTextarea();
}


function updateTextarea() {
    list.value = pairs.join("\n");
}