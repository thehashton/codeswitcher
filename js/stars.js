document.addEventListener('DOMContentLoaded', () => {
    const numStars = 10;
    const starsContainer = document.createDocumentFragment();

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 40 + 10}s`;
        star.style.animationDelay = `${Math.random() * 15}s`;
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
});
