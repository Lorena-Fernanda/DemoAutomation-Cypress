/// <reference types="Cypress" />

import Login from '../support/pages/Login'
import VisualizarPage2 from '../support/pages/Page2'


describe('Teste página02', function(){
    beforeEach(function(){
        cy.visit('/') 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.log('Tamanho do campo input: ${text.length}')
          .log('Input tem tamanho máximo de: ${limite.length}')

        it('Realizar Login', function(){
            Login.preencherLoginValido()
    
        })
  
        cy.visit('http://localhost:3000/#/page2')

    })


    it('Verificando elemento RadioButton', () =>{
        //Testando elemento RadioButton 
        VisualizarPage2.verificarElementoRadio()        

     })  


    it('Verificando elemento Input', () =>{
        //verifica e preeche o campo input automaticamente, conforme limite do campo
        VisualizarPage2.verificaElementoInput()

    })


     it('Verificando elemento "Select"',( ) => {
         //Testando elemento Select 
         VisualizarPage2.verificarElementoSelect()

    })

    it.only('Verificando elemento "TreeSelect"',( ) => {
        //Testando elemento TreeSelect 
        VisualizarPage2.verificarElementoTreeSelect()

    })


    it('Verificando elemento "Cascade"',( ) => {
        //Testando elemento Cascade
        VisualizarPage2.verificarElementoCascade()

    })

    it('Verificando elemento "DatePicker"',( ) => {
        //Testando elemento DatePicker
        VisualizarPage2.verificarElementoDataPiker()

    })

    it('Navegando entre as ações do elemento "DatePicker"',( ) => {
        //Executa todas as ações no componente de Data
        VisualizarPage2.executarAcoesDataPiker()

    })
    

    it('verificando ação Today do elemento "DatePicker"',( ) => {
        //Valida se a ação Today, realmente insere a data atual no componente
        VisualizarPage2.verificarAcaoToday()

    })

 
    it('Validando campo máximo elemento "Slider"', function(){
        //Valida o limite máximo do campo Slider
        VisualizarPage2.verificarValorMaximoSlider()

    })

    
    it('Validando campo mínimo elemento "Slider"', function(){
         //Valida o limite mínimo do campo Slider
         VisualizarPage2.verificarValorMinimoSlider()

     })


    it('Validando movimento do elemento "Slider"', function(){
        //Movimentando  componente sliter até posição 15
        VisualizarPage2.verificarMovimentoSlider()

    })


    it('Validando se elemento "Slider" ceita letras e símbolos', function(){
        //Validando se o input do Slider aceita letras e símbolos
        VisualizarPage2.verificarPreenchimentoInputSlider()

    })


    it('Verificando elemento Switch', function(){
        //Testando elemento Switch
        VisualizarPage2.verificarElementoSwitch()

     })


    it('Verificando elemento TextArea', () =>{
        //Testando elemento TextArea
        VisualizarPage2.verificarElementoTextArea()

    })


     


})