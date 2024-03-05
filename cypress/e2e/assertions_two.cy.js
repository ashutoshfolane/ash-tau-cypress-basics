/// <reference types="cypress" />

it('making assertions', () => {
    // Open a board in trello app
    cy.visit('/board/1')
    // precondition: In trello app, have list 'groceries' with card 'bread'
    // Mark checkbox of card 'bread'
    cy.get('[data-cy="card-checkbox"]')
        .check()
    // Assert: Card 'bread' should be checked
    cy.get('[data-cy="card-checkbox"]')
        .should('be.checked')
    // Assert:  Due date should have class 'completed'
    cy.get('[data-cy="due-date"]')
        .should('have.class', 'completed')
});