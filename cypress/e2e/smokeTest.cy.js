import { faker } from '@faker-js/faker';

describe('CAC - Obrigatoriedade dos campos', () => {

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })
  const phone = faker.finance.accountNumber(8)
  const helpText = faker.lorem.sentence(10)


  beforeEach(() => {
    cy.visit('../../src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('CT001 - Validar envio de mensagem com os campos obrigatorios', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.preencherCampo('#phone', phone)
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  // Selecionando opções do campo Produto e validando o envio da mensagem para cada um dos produtos disponíveis no formulário

  it('CT002 - Validar envio de mensagem selecionadndo o Produto Blog', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Blog', 'blog')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT003 - Validar envio de mensagem selecionadndo o Produto Cursos', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Cursos', 'cursos')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT004 - Validar envio de mensagem selecionadndo o Produto Mentoria', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Mentoria', 'mentoria')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT005 - Validar envio de mensagem selecionadndo o Produto Youtube', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Youtube', 'youtube')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT006 - Validar envio de mensagem selecionadndo o Produto Cursos', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Cursos', 'cursos')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  // Selecionando opções do campo Tipo de Atendimento e validando o envio da mensagem para cada um dos produtos disponíveis no formulário
  
  it('CT007 - Validar envio de mensagem selecionando o Porduto Blog e Tipo de Atendimento Elogio', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Blog', 'blog')
    cy.selecionaAtendimento('elogio')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT008 - Validar envio de mensagem selecionando o Porduto Blog e Tipo de Atendimento Feedback', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Blog', 'blog')
    cy.selecionaAtendimento('feedback')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT009 - Validar envio de mensagem selecionando o Porduto Cursos e Tipo de Atendimento Elogio', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Cursos', 'cursos')
    cy.selecionaAtendimento('elogio')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT010 - Validar envio de mensagem selecionando o Porduto Cursos e Tipo de Atendimento Feedback', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Cursos', 'cursos')
    cy.selecionaAtendimento('feedback')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT011 - Validar envio de mensagem selecionando o Porduto Mentoria e Tipo de Atendimento Elogio', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Mentoria', 'mentoria')
    cy.selecionaAtendimento('elogio')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT012 - Validar envio de mensagem selecionando o Porduto Mentoria e Tipo de Atendimento Feedback', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Mentoria', 'mentoria')
    cy.selecionaAtendimento('feedback')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })
  

  it('CT013 - Validar envio de mensagem selecionando o Porduto Youtube e Tipo de Atendimento Elogio', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Youtube', 'youtube')
    cy.selecionaAtendimento('elogio')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

  it('CT014 - Validar envio de mensagem selecionando o Porduto Youtube e Tipo de Atendimento Feedback', () => {
    cy.preencherCampo('#firstName', firstName)
    cy.preencherCampo('#lastName', lastName)
    cy.preencherCampo('#email', email)
    cy.selecionaProduto('Youtube', 'youtube')
    cy.selecionaAtendimento('feedback')
    cy.preencherCampo('#open-text-area', helpText)
    cy.clickBtnEnviar()
    cy.msgSuccess()
  })

})