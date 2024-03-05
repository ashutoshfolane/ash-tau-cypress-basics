it('Making assertions', () => {
    // Open a board in trello app
    cy.visit('/board/1')
    // Assert: List name should be 'groceries'
    cy.get('[data-cy="list-name"]')
        .should('have.value', 'groceries')
    // Assert: Card name should be 'bread'
    cy.get('[data-cy="card-text"]')
        .should('have.text', 'bread')
    }
);