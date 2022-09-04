/// <reference types="Cypress" />


chai.use(require('chai-sorted'))
const { _ } = Cypress

import VisualizarPage1 from '../support/pages/Page1'
import Login from '../support/pages/Login'

describe('Teste página01', function(){
    beforeEach(function(){
        cy.visit('/') 
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

        it('Realizar Login', function(){
            Login.preencherLoginValido()

        })
  
        cy.visit('http://localhost:3000/#/page1')
        cy.wait(500) 

    })


     it('Paginação de registro igual 10', function(){
        //Verifica se a tabela possui 10 linhas gerando paginação se mais
        VisualizarPage1.paginacaoTable()

    }) 

    it('Visualizar dados na próxima página', function(){
        //Realiza navegação e veriica botões desabilitados na paginação
        VisualizarPage1.visualizarDadosProximaPagina()

    }) 


    it('Visualizar próxima página', function(){
        //Verifica botão habilitado e retorna a table
        VisualizarPage1.visualizarProximaPagina()

    })

    it('Ordenar dados na tabela', function(){
        //Realiza ordenação alfabética crescente e decrescente
        VisualizarPage1.ordenarDados()

    })

    it('Verifica existência de registro na tabela', () =>{
        //Verifica se existe o parâmetro "Stephen Butler", varrendo lista.
        VisualizarPage1.verificarParametroTabela()

    })



})
