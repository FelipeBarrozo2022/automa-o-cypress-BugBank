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
    
    it('Cadastro com campo <E-mail> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get('.kOeYBn > .input__warging')
            .should('contain', 'E-mail não pode ser vazio')

            /* Bug encontrado, segundo as regras de negócio o campo e-mail ao permanecer em branco
               deveria apresentar a mensagem <E-mail não pode ser vazio>, no entanto  é  informado  
               <'É campo obrigatório> */
    }); 

    it('Cadastro com campo <Nome> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})    
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get('#modalText').should('contain', 'Nome não pode ser vazio')
        
    }); 

    it('Castro com campo <Senha> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging')
            .should('contain', 'É campo obrigatório')
        cy.get('#modalText')
            .should('contain', 'Senha não pode ser vazio')
        
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
            .type('Sdsdsdsddd', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})    
        cy.get('#modalText')
            .should('contain', 'As senhas não são iguais.')
            
            //cy.get('#modalText')
           // .should('contain', 'Senha e confirmação de senha precisam ser iguais')
        
        
    }); 

    it('Castro com campo <Confirmação Senha> Vazio', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton')
            .should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default')
            .type('Samuel', {force: true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging')
            .should('contain', 'É campo obrigatório')
       // cy.get('#modalText')
          //  .should('contain', 'Senha e confirmação de senha precisam ser iguais')
        
    }); 

    it.only('Cadastro de Nova Conta com saldo de R$1.000,00', () => {
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
        cy.get('#toggleAddBalance').click({force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
            .click({force: true})
        cy.get('#modalText')
            .should('contain', 'A conta')
            .and('contain', 'foi criada com sucesso')
        cy.get('#btnCloseModal').click()
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default')
            .type('teste@gmail.com', {force: true})
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .type('senhateste', {force: true}) 
        cy.get('.otUnI').click({force: true})
        cy.get('#textBalance > span')
        .should('contain', '1.000,00')


        
        
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