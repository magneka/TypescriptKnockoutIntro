define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Example4ViewModel = (function () {
        function Example4ViewModel(firstname, lastname) {
            var _this = this;
            this.firstName = ko.observable(firstname);
            this.lastName = ko.observable(lastname);
            this.fullName = ko.computed(function () {
                return _this.firstName() + " " + _this.lastName();
            });
        }
        Example4ViewModel.prototype.capitalizeLastName = function () {
            this.lastName(this.lastName().toUpperCase());
        };
        return Example4ViewModel;
    }());
    ko.applyBindings(new Example4ViewModel("Bert", "Bertington"));
});
//# sourceMappingURL=example4.js.map