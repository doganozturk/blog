function themeControls() {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.switch');
    const themeMapping = {
        'light': {
            '--bg-color': '#ecf0f1',
            '--text-color': '#34495e',
            '--title-color': '#2c3e50',
            '--misc-color': '#d35400',
        },
        'dark': {
            '--bg-color': '#2c3e50',
            '--text-color': '#ecf0f1',
            '--title-color': '#bdc3c7',
            '--misc-color': '#f39c12',
        }
    };

    switches.forEach(item => {
        item.addEventListener('click', e => {
            const classList = item.classList;
            const selectedTheme = classList[1].includes('light') ? 'light' : 'dark';

            for (const property in themeMapping[selectedTheme]) {
                if (themeMapping[selectedTheme].hasOwnProperty(property)) {
                    root.style.setProperty(property, themeMapping[selectedTheme][property])
                }
            }
        });
    });
}

themeControls();

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});
