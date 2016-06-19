import * as ko from "knockout";

class Example3ViewModel {
    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>

    fullName: KnockoutComputed<string>;

    constructor(firstname: string, lastname: string) {
        this.firstName = ko.observable(firstname);
        this.lastName = ko.observable(lastname);  

        this.fullName = ko.computed(() => {
            return this.firstName() + " " + this.lastName();
        });              
    }
}

ko.applyBindings(new Example3ViewModel("Bert", "Bertington")); 