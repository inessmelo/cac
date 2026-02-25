// Comandos customizados do Cypress

Cypress.Commands.add('clickBtnEnviar', () => {
    cy.get('button').contains('Enviar').click()
})

Cypress.Commands.add('msgError', (campo, msg) => {
    cy.get('.error').should('be.visible').contains('Valide os campos obrigatórios!')
})

Cypress.Commands.add('msgSuccess', (msg) => {
    cy.get('.success').should('be.visible').contains('Mensagem enviada com sucesso.')
})

Cypress.Commands.add('preencherCampo', (campo, dados) => {
    cy.get(campo).type(dados)
})

Cypress.Commands.add('marcarCheckbox', (check) => {
    cy.get(check).check().should('be.checked')
})

Cypress.Commands.add('marcarCheckbox', (check) => {
    cy.get(check).check().should('be.checked')
})

Cypress.Commands.add('selecionaProduto', (select, value) => {
    cy.get('#product').select(select, { force: true }).should('have.value', value)
})

Cypress.Commands.add('selecionaAtendimento', (atende) => {
    cy.get('#support-type').check(atende).should('be.checked')
})