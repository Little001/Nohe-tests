declare module Cypress.Chainable {
    export function loginAsAdmin(): void;
    export function loginAsTransporter(): void;
    export function loginAsSender(): void;
    export function logout(): void;
}