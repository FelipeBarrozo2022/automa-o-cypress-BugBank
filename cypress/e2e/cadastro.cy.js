///<reference types ="cypress"/>

context('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    });

    it('Cadastro de Nova conta com sucesso ', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get('#modalText')
            .should('contain', 'A conta')
            .and('contain', 'foi criada com sucesso')
        cy.get('#btnCloseModal').click()
    });  
    
    it.only('Cadastro com campo <E-mail> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        //cy.get(':nth-child(2) > .input__default').type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get('.kOeYBn > .input__warging')
            .should('contain', 'É campo obrigatório')

            /* Bug encontrado, segundo as regras de negócio o campo e-mail ao permanecer em branco
               deveria apresentar a mensagem <E-mail não pode ser vazio>, no entanto  é  informado  
               <'É campo obrigatório>                                            */
    }); 

    it('Cadastro com campo <Nome> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        //cy.get(':nth-child(3) > .input__default').type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 

    it('Castro com campo <Senha> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 

    it('Castro com campo <Senha> e <Confirmação Senha> com valores diferentes', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 

    it('Castro com campo <Confirmação Senha> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 

    it('Cadastro de Nova Conta com saldo de R$1.000,00', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 

    it('Cadastro de Nova Conta com saldo de R$0,00', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        
    }); 
 
    

});