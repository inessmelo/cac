

describe('', () => {

    beforeEach(() => {
        cy.visit('../../src/index.html')
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('Selecionar um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json').should(input => {
            expect(input[0].files[0].name).equal('example.json')
        })
    })

    it('Seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: "drag-drop" }).should(input => {
            expect(input[0].files[0].name).equal('example.json')
        })
    })

    it('Selecionar um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture("example.json").as('arquivo')
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: "drag-drop" }).should(input => {
            expect(input[0].files[0].name).equal('example.json')
        })
    })
})