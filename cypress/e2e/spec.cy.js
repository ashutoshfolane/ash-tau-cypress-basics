it('creates a new list and a new card', () => {
    // cy.visit('/users/register')
    // cy.visit('/')
    cy.visit('board/1')
    // cy.contains('.board','new board')
    // cy.get('.board') //class
    // cy.get('#board-1') //id
    // cy.get('[data-cy="board-item"]') // data-cy
    //     // .first()
    //     // .last()
    //     // .eq(0)
    //     .eq(1)
    cy.get('[data-cy="add-list-input"]')
        .type('new list{enter}')
    cy.contains('Add another card')
        .click()
    cy.get('[data-cy="new-card-input"]')
        .type('new card{enter}')
})

it.only('new test', () => {
    cy.visit('/')
    cy.get('[data-cy="star"]')
        .first()
        .click({force: true})
});