document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Créer l'en-tête
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'À propos';
    header.appendChild(h1);
    body.appendChild(header);

    // Créer le contenu principal
    const main = document.createElement('main');
    body.appendChild(main);

    const sections = [
        {
            title: 'Bienvenue',
            content: 'Bienvenue sur notre projet ! Voici quelques informations à propos de nous.',
            id: 'welcomeMessage',
            class: 'fade-in'
        },
        {
            title: 'Notre mission',
            content: 'Notre mission est de <span class="editable">vous expliquer les animaux.</span>',
            id: 'mission',
            class: 'fade-in'
        },
        {
            title: 'Notre équipe',
            content: 'Notre équipe se compose de <span class="editable">Marin (je suis un enfant).</span>',
            id: 'team',
            class: 'fade-in'
        },
        {
            title: 'Contactez-nous',
            content: 'Pour toute question, n\'hésitez pas à nous contacter à <a href="mailto:marin.depibrac@gmail.com" id="contactEmail">marin.depibrac@gmail.com</a>',
            class: 'fade-in'
        }
    ];

    sections.forEach(sectionData => {
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        h2.textContent = sectionData.title;
        const p = document.createElement('p');
        p.innerHTML = sectionData.content;
        if (sectionData.id) p.id = sectionData.id;
        if (sectionData.class) p.classList.add(sectionData.class);
        section.appendChild(h2);
        section.appendChild(p);
        main.appendChild(section);
    });

    // Créer le pied de page
    const footer = document.createElement('footer');
    const pFooter = document.createElement('p');
    pFooter.textContent = '© 2025 Marin. Tous droits réservés.';
    footer.appendChild(pFooter);
    body.appendChild(footer);

    // Ajouter l'animation de fondu en entrée
    setTimeout(() => {
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.opacity = 1;
    }, 100); // Délai pour déclencher l'animation

    // Ajouter des interactions pour les éléments éditables
    const editableElements = document.querySelectorAll('.editable');

    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentText = this.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;

            input.addEventListener('blur', function() {
                element.textContent = this.value;
                element.style.display = 'inline';
                input.remove();
            });

            element.style.display = 'none';
            element.parentNode.insertBefore(input, element);
            input.focus();
        });
    });
});
