const textarea = document.getElementById("message")
const charCount = document.getElementById("charCount")
const maxChars = 100

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    charCount.textContent = `${length} / ${maxChars}`

    if (length > maxChars) {
        charCount.classList.add("over-limit")
    } else {
        charCount.classList.remove("over-limit")
    }
})