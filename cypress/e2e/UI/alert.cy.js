describe('alert',()=>{
    it('test', ()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('#Register').click()
        cy.on('window.alert', (t)=>{
            expect(t).to.contain('Your')
            
        })

})
})