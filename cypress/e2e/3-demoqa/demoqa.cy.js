const { CheckboxPage } = require("../../pageObjects/checkbox.page");
const { RadioButtonsPage } = require("../../pageObjects/radiobuttons.page");
const { TextboxPage } = require("../../pageObjects/textbox.page");
const { WebTablesPage } = require("../../pageObjects/webtables.page");

describe("Demoqa", () => {
    context("Text Box", () => {
        beforeEach(() => {
            TextboxPage.visit();
        });
        it("Enter text field values - positive", () => {
            TextboxPage.visit();
            TextboxPage.fullnameTextField.type("John");
            TextboxPage.userEmailField.type("skola@email.com");
            TextboxPage.currentAddressField.type("Some random current address");
            TextboxPage.permanentAddressField.type("Some random permanent address");
            TextboxPage.sumbitButton.click();
            TextboxPage.nameOutput.should("have.text", "Name:John");
            TextboxPage.emailOutput.should("have.text", "Email:skola@email.com");
            TextboxPage.currentAddressOutput.should(
                "contain.text",
                "Current Address :Some random current address"
            );

            TextboxPage.permanentAddressField.should(
                "contain.text",
                "Permananet Address :Some random permanent address"
            );
        });

        it("Enter text field values - negative", () => {
            // set email in incorrect format
            // click submit button
            // validate that the red border appears 
            TextboxPage.userEmailField.should("not.have.class","field-error");
            TextboxPage.userEmailField.type("aaa@bbb");
            TextboxPage.sumbitButton.click();
            TextboxPage.userEmailField.should("have.class","field-error");
        });
    });
        context("Check boxes",() => {
            beforeEach(() => {
                CheckboxPage.visit();
            });
            
            it("Check the checkboxes", () => {
                // Click the Pluss/expand button
                CheckboxPage.expandButton.click();
                // Check the following checkboxes - Notes, Angular, Private, Excel File .doc
                CheckboxPage.checkboxes.contains("Notes").click();
                CheckboxPage.checkboxes.contains("Angular").click();
                CheckboxPage.checkboxes.contains("Private").click();
                CheckboxPage.checkboxes.contains("Excel File.doc").click();
                // Validate that You have selected :notes, angular, private, excelFile
                CheckboxPage.checkedCheckboxesOutput.should
                ("have.text"
                ,"You have selected :notesangularprivateexcelFile"
                );
                CheckboxPage.textSuccess.should('contain.text', 'notes');
                CheckboxPage.textSuccess.should('contain.text', 'angular');
                CheckboxPage.textSuccess.should('contain.text', 'private');
                CheckboxPage.textSuccess.should('contain.text', 'excelFile');
            });
        });

        context("Radio buttons", () => {
            beforeEach(() => {
                RadioButtonsPage.visit();
            });

            it("Click radio buttons", () => {
                // Click Yes radio button
                RadioButtonsPage.radioButtons.contains("Yes").click();
                // Validate that "You have selected Yes"
                RadioButtonsPage.resultOutput.should(
                    "have.text", 
                    "You have selected Yes"
                );
                RadioButtonsPage.textSuccess.should("have.text", "Yes");
            });

            it("Click radio button - Impressive", () => {
                // Click Impressive button
                RadioButtonsPage.radioButtons.contains("Impressive").click();
                // Validate that "You have selected Impressive"
                RadioButtonsPage.resultOutput.should(
                    "have.text", 
                    "You have selected Impressive"
                );
                RadioButtonsPage.textSuccess.should("have.text", "Impressive");
            });

            it("Radio button No is not clickable", () => {
                // Validate that No butto is not clickable
                RadioButtonsPage.radioButtons
                    .contains("No")
                    .should("have.class", "disabled");
            });
        });

        context("Web tables", () => {
            beforeEach(() => {
                WebTablesPage.visit();
            });

            it("Create new item", () => {
                // Click Add button
                WebTablesPage.addRecordButton.click();
                // Set First name
                WebTablesPage.setFirstName.type("John");
                // Set last name
                WebTablesPage.setLastName.type("Wick");
                // Set Email
                WebTablesPage.setEmail.type("aaa@bbb.ccc");
                // Set Age
                WebTablesPage.setAge.type("99");
                // Set Salary
                WebTablesPage.setSalary.type("9999");
                // Set department
                WebTablesPage.setDepartment.type("Yolo");
                // Click submit
                WebTablesPage.submitButton.click();
                // Validate that the new row apears
                WebTablesPage.rows.should("contain.text","aaa@bbb.ccc")
            });

            it.only("Delete all items", () => {
                // Delete all rows
                WebTablesPage.deleteRowBasedOnAttribute("Cierra").click();
                WebTablesPage.deleteRowBasedOnAttribute("Alden").click();
                WebTablesPage.deleteRowBasedOnAttribute("Kierra").click();
                // Validate that you see "No Rows found"
                WebTablesPage.noRowsMessage
                .should("be.visible")
                .and("contain.text", "No rows found");
            });

        });
    });