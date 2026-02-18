// Comandos customizados do Cypress

Cypress.Commands.add('clickBtnEnviar', () => {
    cy.get('button').contains('Enviar').click()
})

Cypress.Commands.add('msgError', (msg) => {
    cy.get('.error').should('be.visible').contains(msg)
})

Cypress.Commands.add('preencherCampo', (campo, dados) => {
    cy.get(campo).type(dados)
})