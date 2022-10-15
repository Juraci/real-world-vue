// https://docs.cypress.io/api/table-of-contents

describe('Event cards', () => {
  it('displays the event details', () => {
    cy.visit('/');

    cy.get('.event-card').eq(0).as('firstCard');

    cy.get('@firstCard').within(() => {
      cy.get('span').should('have.text', '@ 12:00 on January 28, 2023');
      cy.get('h4').should('have.text', 'Cat Adoption Day');
    });
  });
});
