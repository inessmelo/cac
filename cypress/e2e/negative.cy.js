import { faker } from '@faker-js/faker'

describe('CAC - Cenarios negativos', () => {

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName, lastName })
    const phone = faker.finance.accountNumber(8)
    const helpText = faker.lorem.sentence(10)

    beforeEach( () => {
        cy.visit('/')
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    }) 

    it('CT001 - Validar espaço no campo Nome', () => {
        cy.preencherCampo('#firstName', ' ')
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', email)
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

    it('CT002 - Validar espaço no campo Sobrenome', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', ' ')
        cy.preencherCampo('#email', email)
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

    it('CT003 - Validar espaço no campo Email', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', ' ')
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

    it('CT004 - Validar dados invalidos no campo Email', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', 'email#invcalido.com')
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

    it('CT005 - Validar espaço no campo Telefone', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', email)
        cy.preencherCampo('#phone', ' ')
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

    it('CT006 - Validar dados alfanuméricos no campo Telefone', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', email)
        cy.preencherCampo('#phone', 'abc123def').should('have.value', '123')
        cy.preencherCampo('#open-text-area', helpText)
        cy.clickBtnEnviar()
        cy.msgError()
    })

     it('CT007 - Validar limite máximo de caractere no campo Ajuda', () => {
        cy.preencherCampo('#firstName', firstName)
        cy.preencherCampo('#lastName', lastName)
        cy.preencherCampo('#email', email)
        cy.preencherCampo('#phone', 'abc123def').should('have.empty')
        cy.preencherCampo('#open-text-area', faker.lorem.word(300))
        cy.clickBtnEnviar()
        cy.msgError()
    })

})