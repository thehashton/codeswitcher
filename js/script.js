document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".code-container__tab");
    const codeBlocks = document.querySelectorAll(".code-container__code");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const language = this.getAttribute("data-language");

            // Remove active class from all tabs and code blocks
            tabs.forEach(t => t.classList.remove("code-container__tab--active"));
            codeBlocks.forEach(c => c.classList.remove("code-container__code--active"));

            // Add active class to the clicked tab and corresponding code block
            this.classList.add("code-container__tab--active");
            document.querySelector(`.code-container__code--${language}`).classList.add("code-container__code--active");

            // Re-highlight the code block for Prism.js
            Prism.highlightElement(document.querySelector(`.code-container__code--${language} code`));
        });
    });

    // Footer animation
    const footer = document.querySelector('.footer__inner');
    const footerSpans = footer.querySelectorAll('span');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerSpans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('animate');
                    }, index * 100); // Delay each letter by 100ms
                });
                observer.unobserve(footer); // Unobserve after animation triggers
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(footer);
});
