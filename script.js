document.addEventListener("DOMContentLoaded", () => {
    // Animation de texte dans la section Héros
    const heroDescription = document.getElementById("hero-description");
    const texts = [
        "Gardez un environnement sain sur votre serveur.",
        "Optimisez votre productivité avec nos outils intelligents.",
        "Développez une communauté en toute sérénité.",
        "Automatisation, efficacité, succès.",
        "BlaBlaBla"
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            heroDescription.innerHTML = texts[textIndex].substring(0, charIndex + 1) + "&nbsp;";
            charIndex++;
            setTimeout(typeText, 50);
        } else {
            setTimeout(deleteText, 1500);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            heroDescription.innerHTML = texts[textIndex].substring(0, charIndex - 1) + "&nbsp;";
            charIndex--;
            setTimeout(deleteText, 30);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 700);
        }
    }

    typeText(); // Démarre l'animation de texte

    // Ouverture du lien en pop-up pour "Ajouter le bot"
    const addBotBtn = document.getElementById("add-bot-btn");
    const botLink = "https://discord.com/oauth2/authorize?client_id=1303404664141647872&scope=bot&permissions=1099511627775&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FHaq6JZv8eT";

    addBotBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le lien de s'ouvrir dans le même onglet
        window.open(
            botLink,
            "popupWindow",
            "width=600,height=600,scrollbars=yes,resizable=no"
        );
    });
});
