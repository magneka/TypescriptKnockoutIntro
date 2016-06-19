require.config({
    paths: {
        "knockout": "externals/knockout-3.4.0",
        "jquery": "externals/jquery-2.2.4",
        "toastr": "externals/toastr"
    },
    shim: {
        jquery: {
            exports: '$'
        },
        toastr: {
            deps: ['jquery'],
            exports: 'toastr'
        }
    }
});
//# sourceMappingURL=require-config.js.map