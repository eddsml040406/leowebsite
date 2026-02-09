// Paste this in the JS editor
const searchInput = document.getElementById('codeSearch');
const codeItems = document.querySelectorAll('.code-item');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    codeItems.forEach(item => {
        const code = item.getAttribute('data-code').toLowerCase();
        const desc = item.getAttribute('data-desc').toLowerCase();

        if (code.includes(filter) || desc.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});