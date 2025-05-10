window.onload = () => {
    setInterval(() => {
        const p = document.getElementById("switch");
        p.textContent = p.textContent === "no games." ? "yes games?" : "no games.";
    }, 1000);
}