/// <reference types="Cypress" />

context('Avaliação GamersClub - Modelo de Automação', () => { 
    before(() => {       
        
        cy.visit('https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=https://gamersclub.com.br/auth/callback&openid.realm=https://gamersclub.com.br/&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select')
        //Informar Nome de Usuário
        cy.get('#steamAccountName').type('0000000000')
        //Informar Senha
        cy.get('#steamPassword').type('00000000')

        cy.get('#imageLogin').click()        

        //cy.get('.GcModalContent__close > .Icon > svg').click()        
        

        cy.get('[href="/discover"] > .MainMenu__itemLabel').click()

    })
    it('CT02 Filtro sem retorno', () =>{     
        
        cy.get(':nth-child(2) > .main-filter-item-text')

        cy.get(':nth-child(2) > .main-filter-item-field > .input-form-gray').focus().type('Nao encontrada nada')        

        cy.get('.column > .center').should('have.text', 'Nenhum jogador encontrado')        
        
    })

    it('Bug02 layout Jogadores', () =>{
        
        cy.get(':nth-child(2) > .main-filter-item-text')

        cy.get(':nth-child(2) > .main-filter-item-field > .input-form-gray').clear()

        cy.get(':nth-child(2) > .main-filter-item-field > .input-form-gray').focus().type('Saider')

        cy.scrollTo('bottom')

    })
})