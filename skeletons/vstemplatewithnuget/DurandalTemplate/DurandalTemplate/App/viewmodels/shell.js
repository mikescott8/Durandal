﻿define(function(require) {
    var router = require('durandal/plugins/router'),
        app = require('durandal/app');

    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.useConvention();
            router.mapNav('welcome'); //because of conventions, we look for viewmodels/welcome
            router.mapNav('flickr');
            return router.activate('welcome');
        }
    };
});