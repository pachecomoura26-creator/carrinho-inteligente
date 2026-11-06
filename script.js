
/* MENU DO SITE */

// Seleciona o botão e o menu
const botaoMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menuNavegacao");

// Abre e fecha o menu no celular
if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

        const aberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute("aria-expanded", aberto);

        if (aberto) {
            botaoMenu.textContent = "✕";
            botaoMenu.setAttribute("aria-label", "Fechar menu");
        } else {
            botaoMenu.textContent = "☰";
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        }

    });

    // Fecha o menu quando clicar em uma seção
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

            botaoMenu.textContent = "☰";
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");

        });

    });

}
