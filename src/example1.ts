import * as ko from "knockout";

class Example1ViewModel {
    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>

    constructor(firstname: string, lastname: string) {
        this.firstName = ko.observable(firstname);
        this.lastName = ko.observable(lastname);               
    }
}

ko.applyBindings(new Example1ViewModel("Bert", "Bertington")); 
