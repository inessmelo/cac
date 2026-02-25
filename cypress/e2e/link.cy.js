describe('Upload de arquivos', () => {

    it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.visit('../../src/index.html')
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
        cy.contains('a', 'Política de Privacidade').should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank')
    })

    it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.visit('../../src/index.html')
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

        cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click()
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    })

    it('Testa a página da política de privacidade de forma independente', () => {
        cy.visit('../../src/privacy.html')
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
})