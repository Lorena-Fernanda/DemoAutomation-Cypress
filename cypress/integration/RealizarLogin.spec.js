/// <reference types="Cypress" />

import Login from '../support/pages/Login'

describe('Test Automation Template', function(){
    beforeEach(function(){
        cy.visit('/') 
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

    })


    it('Verifica usuário logado', function(){
        //Se usuário logado faz logout
        Login.verificaUsuarioLogado()

    })  


    it('Continuar login sem inserir dados de acesso', function(){
        //Realiza login com campos vazios
        Login.loginSemDados()

    }) 
    
    it('Informar usuário e/ou senha inválido', function(){
        //Informa usuário e/ou senha inválidos
        Login.loginUsuarioInvalido()

    })

    it('Informar usuário válido', ()=>{
        //Realiza login com dados válidos
        Login.preencherLoginValido();

    }) 




})
