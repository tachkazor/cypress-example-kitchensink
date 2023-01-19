let url = ('http://example.cypress.io/commands/actions');

context('My First Test', ()=>{
    beforeEach(()=>{
        cy.visit(url)
    })
    it('has an h1 element', ()=> {
        cy.get('h1').should('exist');
    })
    it('renders the correct h1 text', ()=> {
        cy.get('h1').should('contain.text', 'Actions');
    })
    it('renders a paragraph under an h1', ()=>{
        cy.get('.container').eq(1).find('p').should('exist');
    })
    it('renders a section with the correct elements', ()=> {
        cy.get('.container').eq(2).within(()=>{
            cy.get('h4').should('exist');
            cy.get('p').should('exist');
        })
    })
    it('correctly renders the cypress website link', () => {
        cy.findByText('cypress.io').should('exist')
    })
   it('types into an email field', ()=> {

    
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000).then(()=> {
        fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((data)=> {
            // eslint-disable-next-line no-console
            console.log(data)
        })
   })
    it('shows an active class for the current page', () => {
        
            cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
            
   }) 
 })
})
