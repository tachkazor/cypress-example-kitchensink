let url = ('http://example.cypress.io/commands/');
context('My nth test', ()=>{
    beforeEach(()=>{
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log('THIS: ', this.data)
        })
    })


    it('pulls data from a fixture', ()=> {
        cy.fixture('example').then((data) => {
            cy.log('DATA', data)
        })
    })
    
    it('uses fixture data in a network request', function () {
        cy.visit(url + 'network-requests')
        cy.intercept('GET', '**/comments/*', this.data)
        cy.get('.network-btn').click()
        cy.wait('@getComment').then((res)=> {
            cy.log('Response: ', res)
        })
    })
    it('updates fixture data inline', ()=> {
        cy.fixture('example').then((data)=> {
            data.email = 'updated@mail.com'
            cy.log('UPDATED: ', data)
        })
    })
})