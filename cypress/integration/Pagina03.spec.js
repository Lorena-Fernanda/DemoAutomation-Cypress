/// <reference types="Cypress" />

import Login from '../support/pages/Login'

describe('Teste página03', function(){
  beforeEach(function(){
    cy.visit('/') 
    Cypress.on('uncaught:exception', (err, runnable) => {

        return false
    })

    it('Realizar Login', function(){
      Login.preencherLoginValido()

  })

    cy.visit('http://localhost:3000/#/page3')
    cy.wait(500)

})

  it('Navegar no breadcrumb', () => {  
    cy.get('.ant-breadcrumb').should('be.visible')
      .get(':nth-child(2) > .ant-breadcrumb-link > a').click().wait(1500) //Breadcrumb para 1° página
      .visit('http://localhost:3000/#/page3').wait(1000) //Redireciona a 3° página
      .get(':nth-child(3) > .ant-breadcrumb-link > a').click() //Breadcrumb para 2° página


  })





})