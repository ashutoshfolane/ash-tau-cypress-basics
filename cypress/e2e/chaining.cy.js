/// <reference types="cypress" />
import {cardsLoadSlowly} from '../../evilCode'

it('chaining and retrying', () => {
    cardsLoadSlowly(5000)
    cy.visit('/board/1')
    cy.get('[data-cy=card]')
        .last()
        .click()

    cy.get('[data-cy="card-detail-title"]')
        .should('have.value', 'shampoo')
})