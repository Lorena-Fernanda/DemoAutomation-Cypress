//ações de interação/ações com a página

const el = require('./elements').ELEMENTS

class VisualizarPage1 {

    paginacaoTable(){
        cy.get('table').should('be.visible') 
          .get(el.colunaNome).contains('td', 'John Brown') //Confirma a exibição da table
          .get(el.primeiraColuna).should('have.length',10) //Verifica se a tabela possui paginação com 10 registros
          .get(el.buttonPaginacao).should('have.length',1) //Verifica se está sendo exibido os botões de paginação
          .get(el.pageAnterior).should('have.attr', 'aria-disabled', 'true') //Verifica se botão Página Anterior está desabilitado
    }

    visualizarDadosProximaPagina(){
        cy.get(el.buttonPaginacao).should('have.length',1) //Verifica se está sendo exibindo os botões de paginação
          .get(el.segundaPagina).click() //Entra na segunda página
          .get(el.proximaPagina).should('have.attr', 'aria-disabled', 'true').wait(1000) //Verifica se botão Próxima Página está desabilitado
          .get(el.pageAnterior).should('have.attr', 'aria-disabled', 'false') //Verifica se botão Página Anterior está habilitado
          .get(el.retornarPagAnterior).click() //Retorna a página anterior
    }

    visualizarProximaPagina(){
        cy.get(el.proximaPagina).should('have.attr', 'aria-disabled', 'false').click().wait(1000) //Apresenta próxima página, clicando na paginação 2
          .get(el.primeiraPagina).click() //Retorna na primeira página
    }

    ordenarDados(){
        cy.get('table').should('be.visible').wait(1000)
          .get(el.ordemDecre).click().wait(3000) //Ordena em ordem alfabética Decrescente
          .get(el.ordemCresc).click().wait(3000) //Ordena em ordem alfabética Crescente
        
    }

    verificarParametroTabela(){
        cy.get(el.primeiraColuna).each(($elment, index, $list) => { //Varrendo a 1° coluna buscando o parâmetro "Stephen Butler"
            var text = $elment.text()
            if(text.includes('Stephen Butler')){ 
                cy.get(el.segundaColuna).eq(index).then(function(borrow){ //identifica se o parâmetro está na mesma posição do ArrayList
                    var valorArray = borrow.text() //Deverá receber 98 de acordo com a tabela
                    expect(valorArray.trim()).to.equal('98') //compara os valore e remove espaço
                    cy.log('Parâmetro "Stephen Butler" encontrado na tabela, conforme posição 98 da 2° coluna')
                }) 

            }
        })
    }




}

export default new VisualizarPage1()