"use strict";

(function (w) {
    
    var link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto+Slab&display=swap&subset=latin-ext";
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    var font1 = new w.FontFaceObserver("Open Sans", {
        weight: 400
    });

    var font2 = new w.FontFaceObserver("Open Sans", {
        weight: 600
    });

    var font3 = new w.FontFaceObserver("Roboto Slab", {
        weight: 400
    });

    w.Promise
        .all([font1.load(), font2.load(), font3.load()])
        .then(function () {
            if (w.document.documentElement.className.indexOf("fonts-loaded") == -1) {
                w.document.documentElement.className += " fonts-loaded";
            }
            try {
                var storage = window.sessionStorage;
                if (storage) {
                    storage.setItem('fonts-loaded', '1');
                }
            }
            catch (e) {
            }
        })
        .catch(function () {
            w.document.documentElement.className += " fonts-unavailable";
        });
} (this));