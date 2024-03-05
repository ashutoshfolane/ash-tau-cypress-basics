/// <reference types="cypress" />
import {cardsLoadRandomly} from '../../evilCode'

it('chaining and retrying', () => {
    // randomly load cards
    cardsLoadRandomly(4000)
    // open trello app board
    cy.visit('/board/1')
    // click shampoo card
    cy.get('[data-cy=card]') // query
        .last() // query
        .should('contain.text', 'shampoo') // assertion
        .click() // action
    // card detail title should have value 'shampoo'
    cy.get('[data-cy="card-detail-title"]')
        .should('have.value', 'shampoo')
})