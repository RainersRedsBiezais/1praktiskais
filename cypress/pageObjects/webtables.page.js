import { BasePage } from "./base.page";

export class WebTablesPage extends BasePage {
    static get url(){
        return "/webtables";
    }
    static get addRecordButton(){
        return cy.get('#addNewRecordButton');
    }
    static get setFirstName(){
        return cy.get('#firstName');
    }
    static get setLastName(){
        return cy.get('#lastName');
    }
    static get setEmail(){
        return cy.get('#userEmail');
    }
    static get setAge(){
        return cy.get('#age');
    }
    static get setSalary(){
        return cy.get('#salary');
    }
    static get setDepartment(){
        return cy.get('#department');
    }
    static get submitButton(){
        return cy.get('#submit');
    }
    static get rows(){
        return cy.get("[role='row']");
    }
    static get noRowsMessage(){
        return cy.get("[class='rt-noData']");
    }
    static get rowsDeleteButtons(){
        return cy.get(".action-buttons [title='Delete']");
    }
    static deleteRowBasedOnAttribute(opt) {
        return this.rows.contains(opt).parent().find("[title='Delete']");
    }

}