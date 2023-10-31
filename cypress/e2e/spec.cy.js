import SpecPage from './pages/specPage';

describe('Epam Job', () => {
  it('Fill Job Application', () => {
    cy.visit('');
    cy.wait(6000);
    SpecPage.elements.formtitle().contains('Apply To QA Engineer');
    SpecPage.typeFirstName('Omar');
    SpecPage.typeLastName('Rodriguez Soberanes');
    SpecPage.typeEmail('omar.rodsob@gmail.com');
    SpecPage.typePhone('+526621393007');
    SpecPage.dragFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
    cy.wait(4000);
    SpecPage.clickEnglishLevel();
    SpecPage.typeCoverLetter();
    SpecPage.clickSubmit();
  })
})