import '@testing-library/cypress/add-commands'

Cypress.Commands.add('setLocalStorage', (key, value) => {
    cy.window().then((window) => {
        window.localStorage.setItem(key, value)
    })
})

Cypress.Commands.add('getAllLocalStorage', (key)=> {
    cy.window().then((window)=> {
        window.localStorage.getItem(key)
    })
})
