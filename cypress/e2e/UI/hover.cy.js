describe('hover test', ()=>{

    it('invoke test', ()=>{
        cy.visit('https://www.lambdatest.com/blog/how-to-handle-iframes-in-cypress/')
        cy.get('#bs-example-navbar-collapse-1 > div > div > div:nth-child(4) > div > div.table__main > div > div.col-sm-8.col-xs-12.header_inner_col > div > div:nth-child(2) > div > ul > li:nth-child(3) > a > div > div.content_items').click({force:true})
        
    })
})