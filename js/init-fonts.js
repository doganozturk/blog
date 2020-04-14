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

    Promise.all([
        robotoLight.load(),
        robotoLightItalic.load(),
        robotoRegular.load(),
    ])
        .then((data) => {
            document.documentElement.className += " fonts-loaded";
        })
        .catch(err => {
            console.log(err);
        });
}

initFonts();
