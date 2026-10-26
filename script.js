document.addEventListener('DOMContentLoaded', () => {
    // Intercetta i click sul pulsante di download per mostrare un messaggio d'aiuto
    const downloadBtns = document.querySelectorAll('a[download]');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Download APK avviato');
            // Opzionale: mostra una breve notifica visiva
            setTimeout(() => {
                const installSection = document.getElementById('installation');
                if (installSection && window.innerWidth < 768) {
                    installSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000);
        });
    });

    // Animazione di apparizione al caricamento
    const cards = document.querySelectorAll('.feature-card, .step-card, .faq-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(card);
    });
});
