let url = ('http://example.cypress.io/commands/actions');

context('My nth test', ()=> {
  beforeEach(()=> {
    cy.visit(url)
    cy.get('.action-btn').click()
  })

  it('triggers a popover on click', ()=> {
        
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of a canvas', ()=> {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 45)
  })

  it('can double click to edit', ()=> {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })
})
