import * as ko from "knockout";

class Example4ViewModel {
    firstName: KnockoutObservable<string>
    lastName: KnockoutObservable<string>

    fullName: KnockoutComputed<string>;

    capitalizeLastName () {
        this.lastName(this.lastName().toUpperCase());
    } 

    constructor(firstname: string, lastname: string) {
        this.firstName = ko.observable(firstname);
        this.lastName = ko.observable(lastname);  

        this.fullName = ko.computed(() => {
            return this.firstName() + " " + this.lastName();
        });              
    }
}

ko.applyBindings(new Example4ViewModel("Bert", "Bertington")); 