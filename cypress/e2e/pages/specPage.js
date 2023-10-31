const cover_letter = "This job application was filled out through cypress, you can check the code in the following git repository: https://github.com/omar-rodsob/prediktive";

class SpecPages{
    elements ={
        formtitle:()=>cy.get('.cr-h1'),
        firstNameInput:()=>cy.get('[name="firstName"]'),
        lastNameInput:()=>cy.get('[name="lastName"]'),
        emailInput:()=>cy.get('[name="email"]'),
        phoneInput:()=>cy.get('[name="phone"]'),
        englishlevelInput:()=>cy.get('[value="4"]'),
        dragFile:()=>cy.get('#file-uploadResume'),
        cvLetter:()=>cy.get('#e49c4230-526b-4288-842e-a95a0030e2d6'),
        submitBtn:()=>cy.get('#submitButton')
    }

    typeFirstName(firsName){
        this.elements.firstNameInput().type(firsName);
    }

    typeLastName(latName){
        this.elements.lastNameInput().type(latName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    clickEnglishLevel(){
        this.elements.englishlevelInput().click();
    }

    dragFile(filePath){
        this.elements.dragFile().selectFile(filePath,{action: 'drag-drop'})
    }

    typeCoverLetter(){
        this.elements.cvLetter().type(cover_letter);
    }

    clickSubmit(){
        this.elements.submitBtn().click();
    }






}
export default new SpecPages();