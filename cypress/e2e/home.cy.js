///<reference types ="cypress"/>

context('Página Home', () => {
    it('Validação de acesso a página Home', () => {
        cy.visit('https://bugbank.netlify.app/')

        cy.title()
            .should('be.equal', 'BugBank | O banco com bugs e falhas do seu jeito')
        cy.get('.pages__Text-sc-1ee1f2s-5')
            .should('contain', 'Faça transferências e pagamentos')
        
    });
    
});