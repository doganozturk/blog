function initFontsCode() {
    const sourceCodeProRegular = new FontFaceObserver('Source Code Pro', {
        weight: 400,
    });

    sourceCodeProRegular.load()
        .then((data) => {
            document.documentElement.className += " fonts-code-loaded";
        })
        .catch(err => {
            console.log(err);
        });
}

initFontsCode();
