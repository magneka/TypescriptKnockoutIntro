define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Example2ViewModel = (function () {
        function Example2ViewModel(firstname, lastname) {
            this.firstName = ko.observable(firstname);
            this.lastName = ko.observable(lastname);
        }
        return Example2ViewModel;
    }());
    ko.applyBindings(new Example2ViewModel("Bert", "Bertington"));
});
//# sourceMappingURL=example2.js.map