import 'cypress-iframe'

describe('Iframe', ()=> {
    it('iframe test', ()=>{
        cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog')
        cy.iframe('#iframe-window').find('body > section > div.container-fluid.blog-banner-head > h1').should('be.visible')
        // cy.get('#iframe-window')
        //     .should('be.visible')
        //     .should('not.be.empty')
        //     .then(($iframe) =>{
        //         const $body = $iframe.contents().find('body')
        // cy.wrap($body)
        //          .find(`input[name='s']`)
        //         .type('Cypress{enter}')
        //     })

    })
}
)