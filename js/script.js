document.getElementById("copyUser").addEventListener("click", function () {
    const text = `pens-guest`;
    navigator.clipboard.writeText(text);
});
document.getElementById("copyPass").addEventListener("click", function () {
    const text = `admin123`;
    navigator.clipboard.writeText(text);
});