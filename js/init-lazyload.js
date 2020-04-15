function initLazyload() {
    const items = document.querySelectorAll('.lazy');

    items.forEach(item => {
        const observer = lozad(item);
        observer.observe();
    });
}

initLazyload();
