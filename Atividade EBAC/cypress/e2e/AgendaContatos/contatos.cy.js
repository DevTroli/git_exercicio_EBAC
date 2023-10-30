/// <reference types="cypress" />

describe('Teste para a pagina de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar todos os inputs e o botão', () => {
        cy.get('input').should('have.length', 3)
        cy.get('button').should('have.length', 3)
    })

    it('Deve cadastrar um novo contato', () => {
      cy.get('[type="text"]').type('Joaquim')
      cy.get('[type="email"]').type('joaquim@gmail')
      cy.get('[type="tel"]').type('13 91234-5856')
      cy.get('.adicionar').click()
      cy.on ('window:alert', (text) => {
        expect(text).to.equal('Contato adicionado com sucesso!')
      })

    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type(' Nascimento')
        cy.get ('[type="tel"').type(' | 13 91234-5856')
        cy.get('[type="submit"]').click()
    })

    it('Deve deletar um contato', () => {
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })


})