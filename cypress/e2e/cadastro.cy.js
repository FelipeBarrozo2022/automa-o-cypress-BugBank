///<reference types ="cypress"/>

context('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app/')
    });

    it('Cadastro de Nova conta com sucesso ', () => {
        cy.get('.ihdmxA').click()
        cy.get('#btnBackButton').should('contain', 'Voltar ao login')
        cy.get(':nth-child(2) > .input__default').type('teste@gmail.com', {force: true})
        cy.get(':nth-child(3) > .input__default').type('Samuel', {force: true})
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
    
});