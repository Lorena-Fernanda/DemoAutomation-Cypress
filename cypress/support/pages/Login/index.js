//ações de interação/ações com a página

const el = require('./elements').ELEMENTS

class Login {

    
    verificaUsuarioLogado(){
        cy.get(el.navegacaoPage).should('exist').then((userAvatar) => {
            if (userAvatar) {
                cy.get(el.menuIcone).click()
                  .get(el.menuLogin).contains('Logout').click()
            } 
          })
    }

    loginSemDados(){
        cy.get(el.buttonLogin).should('be.visible').click()
        .wait(1000)
        .get(el.mensagemErro).should('be.visible')
    }

    loginUsuarioInvalido(){
        cy.get(el.username).should('be.visible').type('registroInválido').should('have.value', 'registroInválido')
          .get(el.password).should('be.visible').type('senhaInválida').should('have.value', 'senhaInválida')
          .get(el.buttonLogin).click()
          .wait(1000);
    }
    
    preencherLoginValido(){
        cy.get(el.username).should('be.visible').clear()
          .get(el.username).type('testuser').should('have.value', 'testuser')
          .get(el.password).should('be.visible').clear()
          .get(el.password).type('jr123').should('have.value', 'jr123')
          .get(el.buttonLogin).click()

    }




}

export default new Login()
