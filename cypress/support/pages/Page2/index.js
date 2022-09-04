//ações de interação/ações com a página

const el = require('./elements').ELEMENTS
const textoPadrao = "quia dolor sit amet consectetur adipisci velit sed amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
const text = Cypress._.repeat('lorem ipsum ',10)
const limite = text.substring(0, 50)
const dayjs = require('dayjs')

class VisualizarPage2{

    calendarVisivel(){
        cy.get('.ant-calendar-picker-input ').should('be.visible')
    }

    verificarElementoRadio(){
        cy.get(el.radioButtons).should('be.visible').wait(500)

           //Clicando no item "Vertical"
          .get(el.vertical).click().wait(1000)
          .get(el.horizontal).focused()
          .get(el.inLine).focused()

           //Clicando no item "In line"
          .get(el.inLine).click().wait(1000)
          .get(el.horizontal).focused()
          .get(el.vertical).focused()

           //Clicando no item "Horizontal"
          .get(el.horizontal).click().wait(1000)
          .get(el.vertical).focused()
          .get(el.inLine).focused()
    }

    verificaElementoInput(){
        cy.get(el.input).should('be.visible')
          .and('be.empty')
          .get(el.input).then(($maxlength) => {
            if ($maxlength.attr('maxlength')) { 
                cy.wrap($maxlength).type(text, {delay: 0}).should('have.value',limite)
                  .wait(1000)

            }else {

            cy.wrap($maxlength).type(textoPadrao)
              .wait(1000)

            }
        })
      
      //Limpando o elemento preenchido anteriormente
        cy.get(el.input).should('not.have.value', '').blur().wait(500)
          .get(el.closeInput).click()
          .get(el.input).should('have.value', '')
    }

    verificarElementoSelect(){
        cy.get(el.select).should('be.visible').click()
          .get(el.lista).should('be.visible') 
          .get(el.busca).type('Canada') //Preenche a busca com Canada
          .get(el.lista).filter(':contains("Canada")').should('have.length', 1).click().wait(1000) //Se for encontrado o parâmetro seleciona-o
        
        //Limpando o elemento preenchido anteriormente
        cy.get(el.selectDados).blur().trigger('mouseover')
          .get(el.close).invoke('show').click()
          .get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').should('have.value', '')

    }

    verificarElementoTreeSelect(){
        cy.get(el.treeSelect).should('be.visible').click()
          .get(el.listaTreeSelec).click().wait(800)
          .get(el.subLista).should('be.visible').click().wait(1000)
                  
       //Limpando o elemento preenchido anteriormente
        cy.get(el.treeSelectPrenchido).trigger('mouseover')
          .get(el.close).invoke('show').click()
          .get(el.treeSelectPrenchido).should('have.value', '')

    }

    verificarElementoCascade(){
        cy.get(el.cascade).should('be.visible').click()
          .get(el.listaCascade).should('be.visible').click().wait(800)
          .get(el.itemLista).should('be.visible').click().wait(1000)
      
        //Limpando o elemento preenchido anteriormente
        cy.get(el.cascade).trigger('mouseover')
          .get(el.close).invoke('show').click()
          .get(el.cascade).should('have.value', '')
    }

    verificarElementoDataPiker(){
        cy.get(el.calendar).should('be.visible').click().wait(500)
          .get(el.ultimoDiaMes).should('be.visible').click().wait(1000)

     //Limpando o elemento preenchido anteriormente
        cy.get(el.calendar).trigger('mouseover')
          .get(el.close).invoke('show').click({force: true}) 
    }

    executarAcoesDataPiker(){
        cy.get(el.calendar).should('be.visible').click()
          .get(el.iconeAnoAnterior).click().wait(800)   
          .get(el.iconeMesAnterior).should('be.visible').click().wait(800)
          .get(el.iconeProximoMes).should('be.visible').click().wait(800)
          .get(el.iconeProximoAno).should('be.visible').click().wait(800)
          .get(el.labelMes).should('be.visible').click().wait(800)
          .get(el.mes).should('be.visible').click().wait(800)
          .get(el.labelAno).should('be.visible').click().wait(800)
          .get(el.ano).should('be.visible').click().wait(800)
          .get(el.niver).should('be.visible').click()

    }

    verificarAcaoToday(){
        cy.get(el.calendar).should('be.visible').click()
          .get(el.today).should('be.visible').click().wait(800)
      
        var dataAtual = dayjs().format('YYYY-MM-DD') //Variável dataAtual recebe data atual

        cy.get(el.calendar).should('be.visible').invoke('val').then((dataCampo) =>{
        cy.log(dataCampo)
             if (dataAtual == dataCampo){ //Conferindo se a data informada na ação "Today" é igual a atual
                cy.log('Data escolhida é igual a atual')
            } else {
                cy.log('Data escolhida é diferente da atual')
            }   
          
        })
    }

    verificarValorMaximoSlider(){
        cy.get(el.slider).should('be.visible')
        cy.get(el.inputSlider).clear().type('30').wait(300).blur()

        cy.get(el.inputSlider).invoke('val').then((max) =>{
            cy.get(el.valorInput).should('have.attr', 'aria-valuemax', 20)
            if (max == 20){
                cy.log("Elemento Slider validou campo máximo = 20")
            } else{
                cy.log("Elemento Slider NãO validou campo máximo = 20")
            }
        }) 
    }

    verificarValorMinimoSlider(){
        cy.get(el.slider).should('be.visible')
        cy.get(el.inputSlider).clear().type('-30').wait(300).blur()

        cy.get(el.inputSlider).invoke('val').then((min) =>{
        cy.get(el.valorInput).should('have.attr', 'aria-valuemin', 1)
            if (min == 1){
                cy.log("Elemento Slider validou campo mínimo = 1")
            } else{
                cy.log("Elemento Slider NãO validou campo mínimo = 1")
            }
        }) 

    }

    verificarMovimentoSlider(){
        cy.get(el.slider).should('be.visible')
        cy.get(el.inputSlider).clear().type('15').wait(300).blur()

        cy.get(el.inputSlider).invoke('val').then((atual) =>{
            if (atual == 15){
                cy.log("Elemento Slider movimetou e incluiu o parâmetro <15>")
            } else{
                cy.log("Elemento Slider NÃO movimetou ao parâmetro <15>")
            }
        }) 
    }

    verificarPreenchimentoInputSlider(){
        cy.get(el.slider).should('be.visible')
        cy.get(el.inputSlider).clear().type('@bCdeE').wait(300).blur()

        cy.get(el.inputSlider).should('be.empty')
        cy.log('Slider limpa o campo ao digitar letras e símbolos')
    }

    verificarElementoSwitch(){
        cy.get('.ant-switch').should('exist')
          .get('.ant-switch').click()
          .get('.ant-switch').should('have.attr','aria-checked', 'true')
        cy.log('Elemento desabilitado')
    }

    verificarElementoTextArea(){
        cy.get(el.textArea).should('be.visible')
          .and('be.empty')

        cy.get(el.textArea).then(($textArea) => {
            if ($textArea.attr('maxlength')) {
                cy.wrap($textArea).type(text, {delay: 0}).should('have.value',limite)
                  .wait(1000)

            }else {
                cy.wrap($textArea).type(textoPadrao, {delay: 0})
                  .wait(1000)

            }     
        })

        //Limpando o elemento preenchido anteriormente
        cy.get(el.textArea).should('not.have.value', '').wait(1000).clear()
    }



}

export default new VisualizarPage2()