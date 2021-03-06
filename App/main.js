﻿require.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(function(require) {
    var app = require('durandal/app'),
        system = require('durandal/system'),
        viewLocator = require('durandal/viewLocator');

    system.debug(true);

    //If our view model is in a 'viewmodels' folder, looks for the view in a 'view' folder.
    viewLocator.useConvention();
    
    //Only used by view composition sample to map partial views.
    viewLocator.convertViewUrlToAreaUrl = function (area, viewUrl) {
        return 'samples/viewComposition/' + viewUrl;
    };

    app.start().then(function() {
        app.adaptToDevice();
        app.setRoot('samples/navigation/shell');
    });
});