// https://docs.cypress.io/api/table-of-contents

describe('Event cards', () => {
  context('when the API response is successfull', () => {
    it('displays the event details', () => {
      const events = [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event',
          location: 'Meow town',
          date: 'January 28, 2023',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee',
        },
      ];

      cy.intercept(
        {
          method: 'GET',
          url: '**/events',
        },
        events
      ).as('getEvents');

      cy.visit('/');

      cy.wait('@getEvents');

      cy.get('.event-card').should('have.length', 1);
      cy.get('.event-card').eq(0).as('firstCard');

      cy.get('@firstCard').within(() => {
        cy.get('span').should('have.text', '@ 12:00 on January 28, 2023');
        cy.get('h4').should('have.text', 'Cat Adoption Day');
      });
    });
  });

  context('when the API response errors out', () => {
    it('displayes nothing', () => {
      cy.intercept('GET', '**/events', { forceNetworkError: true }).as('getEvents');
      cy.visit('/');

      cy.wait('@getEvents');

      cy.get('.event-card').should('have.length', 0);
    });
  });
});
