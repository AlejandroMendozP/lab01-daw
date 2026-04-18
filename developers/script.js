document.addEventListener('DOMContentLoaded', () => {
    const btnMagia = document.getElementById('btnMagia');
    const presentacion = document.getElementById('presentacion');

    if (btnMagia) {
        btnMagia.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            presentacion.style.border = "2px solid #00ffcc";
            presentacion.style.padding = "10px";
        });
    }
});