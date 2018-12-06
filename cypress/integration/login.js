describe('Login', function() {
    before(function() {
        cy.visit('https://nohe.cz');
    });

    afterEach(function () {
        cy.wait(2000);
        cy.logout();
    });

    it('As Admin', function() {
        cy.loginAsAdmin();
        cy
            .get(".user span")
            .eq(1)
            .should('have.text', 'nohe_admin (Admin)');
    });

    it('As Transporter', function() {
        cy.loginAsTransporter();
        cy
            .get(".user span")
            .eq(1)
            .should('have.text', 'MeravyNohe (Transporter)');
    });

    it('As Sender', function() {
        cy.loginAsSender();
        cy
            .get(".user span")
            .eq(1)
            .should('have.text', 'AmbrozNohe (Sender)');
    });
});