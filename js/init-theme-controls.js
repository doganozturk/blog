function setTheme(theme) {
    const root = document.documentElement;

    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
}

function toggleSwitches(theme) {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.theme-switcher .switch');

    switches.forEach(itm => {
        itm.classList[itm.classList.contains(`switch-${theme}`) ? 'add' : 'remove']('hidden');
    });
}

function initThemeControls() {
    const root = document.documentElement;
    const switches = root.querySelectorAll('.theme-switcher .switch');
    const theme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    toggleSwitches(theme);
    setTheme(theme);

    const handleSwitchClick = e => {
        const selectedTheme = document.documentElement.classList.contains('light') ? 'dark' : 'light';

        localStorage.setItem('theme', selectedTheme);
        toggleSwitches(selectedTheme);
        setTheme(selectedTheme);
    };

    switches.forEach(item => {
        item.addEventListener('click', handleSwitchClick);
    });
}

initThemeControls();
