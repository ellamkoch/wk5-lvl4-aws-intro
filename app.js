const message = document.getElementById("message");
const btn = document.getElementById("btn");

message.textContent = "Cheers! This loaded from S3";

btn.addEventListener("click", () => {
    const now = new Date().toISOString();
    alert(`Button was clicked at: ${now}`);
});
