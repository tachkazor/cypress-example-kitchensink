// before: runs one time before all tests start
// beforeEach: runs before each individual test
// after : runs one time after all test are finished
// afterEach: runs after each individual test

let url = ('http://example.cypress.io/');
beforeEach(()=> {
  cy.visit(url)
})

afterEach(()=> {
  cy.log("after each hook is here!")
})

after(()=> {
  cy.log('the final after hook runs once')
})
context('My First Test', ()=>{
  before(()=>{
    cy.request('https://reqres.in/api/users?page=2').its('body').should('exist')
  })

  it('has an h1 on the page', ()=> {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', ()=> {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })


})