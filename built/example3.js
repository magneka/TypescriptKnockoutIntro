define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Example3ViewModel = (function () {
        function Example3ViewModel(firstname, lastname) {
            var _this = this;
            this.firstName = ko.observable(firstname);
            this.lastName = ko.observable(lastname);
            this.fullName = ko.computed(function () {
                return _this.firstName() + " " + _this.lastName();
            });
        }
        return Example3ViewModel;
    }());
    ko.applyBindings(new Example3ViewModel("Bert", "Bertington"));
});
//# sourceMappingURL=example3.js.map