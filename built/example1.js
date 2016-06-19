define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Example1ViewModel = (function () {
        function Example1ViewModel(firstname, lastname) {
            this.firstName = ko.observable(firstname);
            this.lastName = ko.observable(lastname);
        }
        return Example1ViewModel;
    }());
    ko.applyBindings(new Example1ViewModel("Bert", "Bertington"));
});
//# sourceMappingURL=example1.js.map