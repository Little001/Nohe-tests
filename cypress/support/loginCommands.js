Cypress.Commands.add('loginAsAdmin', function() {

    cy.fixture('login.json').then(function(login) {
        cy
            .get(".my-input").first()
            .clear()
            .type(login.login_admin);

        cy
            .get(".my-input").eq(1)
            .clear()
            .type(login.password_admin);
        cy
            .get(".my-button").first()
            .click();
    });
});

Cypress.Commands.add('loginAsTransporter', function() {

    cy.fixture('login.json').then(function(login) {
        cy
            .get(".my-input").first()
            .clear()
            .type(login.login_transporter);

        cy
            .get(".my-input").eq(1)
            .clear()
            .type(login.password_transporter);
        cy
            .get(".my-button").first()
            .click();
    });
});

Cypress.Commands.add('loginAsSender', function() {

    cy.fixture('login.json').then(function(login) {
        cy
            .get(".my-input").first()
            .clear()
            .type(login.login_sender);

        cy
            .get(".my-input").eq(1)
            .clear()
            .type(login.password_sender);
        cy
            .get(".my-button").first()
            .click();
    });
});


Cypress.Commands.add('logout', function() {
    cy
        .get(".logout").first()
        .click();
});