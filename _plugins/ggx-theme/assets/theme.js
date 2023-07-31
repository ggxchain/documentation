require(['gitbook'], function (gitbook, $) {
    setDefaultTheme(gitbook.storage.get('fontState'));

    gitbook.events.bind('start', function (e, config) {
        gitbook.toolbar.createButton({
            icon: 'fa fa-moon-o',
            label: 'Night Mode',
            position: 'right',
            // Switch the themes
            onClick: function () {
                let fontState = gitbook.storage.get('fontState');
                const book = document.querySelector('div.book');
                if (book.classList.contains('color-theme-2')) {
                    book.classList.remove('color-theme-2');
                    book.classList.add('color-theme-0');
                    fontState.theme = 0;
                } else {
                    book.classList.remove('color-theme-0');
                    book.classList.remove('color-theme-1');
                    book.classList.add('color-theme-2');
                    fontState.theme = 2;
                }
                gitbook.storage.set('fontState', fontState);
            }
        });

        // Google Analytics tracker
        (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-V8EQJ634FT');
    });

    function setDefaultTheme(fontState) {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!fontState) {
            fontState = {
                family: 1,
                size: 2,
                theme: isDark ? 2 : 0, // Set the theme based on user preferences
            }
            gitbook.storage.set('fontState', fontState);
        }
    }

});


