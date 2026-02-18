import { faker } from '@faker-js/faker';

describe('CAC - Obrigatoriedade dos campos', () => {

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })
  const phone = faker.finance.accountNumber(8)
  const helpText = faker.lorem.sentence(10)


  beforeEach( () => {
    cy.visit('../../src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('CT001 - Validar campos obrigatórios', () => {
    cy.clickBtnEnviar()
    cy.msgError()
  })

  it('CT002 - Validar obrigatoriedade do campo Nome', () => {
    cy.preencherCampo('#firstName', firstName).clear()
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgError()
  })

  it('CT003 - Validar obrigatoriedade do campo Sobrenome', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName).clear()
    cy.preencherCampo('#email', email)
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgError()
  })

  it('CT004 - Validar obrigatoriedade do campo Email', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email).clear()
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgError()
  })

  it('CT005 - Validar obrigatoriedade do campo Ajuda', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.preencherCampo('#open-text-area', helpText).clear()
    cy.clickBtnEnviar()
    cy.msgError()
  })

  it('CT006 - Validar obrigatoriedade do campo Telefone', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.marcarCheckbox('#phone-checkbox')
    cy.preencherCampo('#phone', phone).clear()
    cy.preencherCampo('#open-text-area', helpText).clear()
    cy.clickBtnEnviar()
    cy.msgError()
  })

})