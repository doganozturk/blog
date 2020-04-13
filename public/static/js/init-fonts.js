function initFonts() {
    const robotoLight = new FontFaceObserver('Roboto', {
        weight: 300,
    });
    const robotoLightItalic = new FontFaceObserver('Roboto', {
        weight: 300,
        style: 'italic',
    });
    const robotoRegular = new FontFaceObserver('Roboto', {
        weight: 400,
    });
    const sourceCodeProRegular = new FontFaceObserver('Source Code Pro', {
        weight: 400,
    });

    Promise.all([
        robotoLight.load(),
        robotoLightItalic.load(),
        robotoRegular.load(),
        sourceCodeProRegular.load()
    ])
        .then(() => {
            document.documentElement.className += " fonts-loaded";
        })
        .catch(err => {
            console.log(err);
        });
}

initFonts();
