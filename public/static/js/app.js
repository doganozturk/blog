function themeControls() {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.theme-switcher .switch');
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
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        root.style.setProperty('--theme-name', savedTheme);

        for (const property in themeMapping[savedTheme]) {
            if (themeMapping[savedTheme].hasOwnProperty(property)) {
                root.style.setProperty(property, themeMapping[savedTheme][property])
            }
        }

        if (savedTheme === 'light') {
            switches[0].classList.add('hidden');
            switches[1].classList.remove('hidden');
        }
    }

    switches.forEach(item => {
        item.addEventListener('click', e => {
            const currentTheme = getComputedStyle(root, ':root')
                .getPropertyValue('--theme-name');
            const selectedTheme = currentTheme === 'light' ? 'dark' : 'light';

            switches.forEach(itm => {
               itm.classList.toggle('hidden');
            });

            root.style.setProperty('--theme-name', selectedTheme);

            localStorage.setItem('theme', selectedTheme);

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
