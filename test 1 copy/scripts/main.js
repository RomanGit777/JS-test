const input = document.getElementById("input");
const list = document.getElementById("list");
const btnAdd = document.getElementById("btn-add");
const btnSortName = document.querySelector(".buttons-group button:nth-child(1)");
const btnSortValue = document.querySelector(".buttons-group button:nth-child(2)");
const btnDelete = document.querySelector(".buttons-group button:nth-child(3)");

let pairs = [];

// Add button logic
btnAdd.onclick = function (ev) {
    ev.preventDefault();
    let raw = input.value.trim();

    // Normalize spaces around "="
    raw = raw.replace(/\s*=\s*/, "=");

    // Validate format: name=value (alphanumeric only)
    const pattern = /^[a-zA-Z0-9]+=[a-zA-Z0-9]+$/;
    if (!pattern.test(raw)) {
        alert("Invalid format. Use: name = value (alphanumeric only)");
        return;
    }

    pairs.push(raw);
    updateTextarea();
    input.value = "";
};

// Sort by Name
btnSortName.onclick = function () {
    pairs.sort((a, b) => {
        const nameA = a.split("=")[0].toLowerCase();
        const nameB = b.split("=")[0].toLowerCase();
        return nameA.localeCompare(nameB);
    });
    updateTextarea();
};

// Sort by Value
btnSortValue.onclick = function () {
    pairs.sort((a, b) => {
        const valA = a.split("=")[1].toLowerCase();
        const valB = b.split("=")[1].toLowerCase();
        return valA.localeCompare(valB);
    });
    updateTextarea();
};

// Delete selected lines
btnDelete.onclick = function () {
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
    // Remove selected lines by index
    for (let i = selectedIndexes.length - 1; i >= 0; i--) {
        pairs.splice(selectedIndexes[i], 1);
    }
    updateTextarea();
};

// Update textarea content
function updateTextarea() {
    list.value = pairs.join("\n");
}