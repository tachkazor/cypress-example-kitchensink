let url = ('http://example.cypress.io/commands/actions');
context('My First Test', ()=>{
  beforeEach(()=>{
    cy.visit(url)
  })

  it('shows an active class for the current page', () => {
    cy.visit(url).then(()=> {
      cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    })    
  })
  it('should not have an active class on inactive pages', ()=> {
    cy.visit(url)
    cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/querying')
  }) 

})
