let currentColor = "white";

function openPage(id) {
    document.getElementById("home").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function goHome() {
    document.getElementById("home").style.display = "flex";
    document.getElementById("linuxPage").style.display = "none";
    document.getElementById("turboPage").style.display = "none";
}

function setColor(c) {
    currentColor = c;
}

const linux = document.getElementById("linuxTerminal");

// FINAL FIXED COLOR SYSTEM
linux.addEventListener("keydown", (e) => {
    if (e.key.length !== 1) return;
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    e.preventDefault();

    if (currentColor === "white") {
        const textNode = document.createTextNode(e.key);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
    } else {
        const span = document.createElement("span");
        span.className = currentColor;
        span.textContent = e.key;
        range.insertNode(span);
        range.setStartAfter(span);
    }

    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
});
