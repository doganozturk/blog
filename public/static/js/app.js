function getCurrentTheme() {
    return getComputedStyle(document.documentElement, ':root').getPropertyValue('--theme-name');
}

function setTheme(theme) {
    const root = document.documentElement;
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

    root.style.setProperty('--theme-name', theme);

    for (const property in themeMapping[theme]) {
        if (themeMapping[theme].hasOwnProperty(property)) {
            root.style.setProperty(property, themeMapping[theme][property])
        }
    }
}

function toggleSwitches() {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.theme-switcher .switch');

    switches.forEach(itm => {
        itm.classList.toggle('hidden');
    });
}

function themeControls() {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.theme-switcher .switch');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        toggleSwitches();
        setTheme(savedTheme);
    }

    const handleSwitchClick = e => {
        const selectedTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';

        localStorage.setItem('theme', selectedTheme);
        toggleSwitches();
        setTheme(selectedTheme);
    };

    switches.forEach(item => {
        item.addEventListener('click', handleSwitchClick);
    });
}

function initHighlight() {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
}

(function() {
    themeControls();
    initHighlight();
})();


