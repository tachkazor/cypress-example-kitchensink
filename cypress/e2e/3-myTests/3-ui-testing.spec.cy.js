let url = ('http://example.cypress.io/commands/actions');
context('My First Test', ()=>{
  beforeEach(()=>{
    cy.visit(url)
  })
  it('links to the action page correctly', ()=> {
    cy.visit(url)
    cy.findAllByText('Actions').first().click({force: true})
    cy.url().should('include', '/commands/actions')
  })
  it('lets you type in an input field', ()=> {
    cy.visit(url)
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })
  it('lets you clear an input field', () => {
    cy.visit(url)
    cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
        .clear().should('have.value', '')
  })

  it('lets you check a checkbox', ()=> {
    cy.visit(url)
    cy.get('.actions-checkboxes [type="checkbox"]').first().check().should('be.checked')
  })
})