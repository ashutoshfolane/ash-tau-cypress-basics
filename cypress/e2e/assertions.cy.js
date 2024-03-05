/// <reference types="cypress" />

it('making assertions', () => {
    cy.visit('/board/1')

    // SECTION 1
    // Board contains a list with name 'groceries'
    cy.get('[data-cy="new-card"]')
        .click()
    cy.get('[data-cy="new-card-input"]')
        .type('bread{enter}')
    cy.get('[data-cy="new-card-input"]')
        .type('milk{enter}')
    // cy.get('[data-cy="card"]')
    //     .should('be.visible')
    cy.get('[data-cy="card"]')
        .should('have.length',2)
});