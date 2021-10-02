describe('Slow tests bad practice - Sample 2', () => {
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup')


    cy.get('#email').should('to.be.empty').type('joe@example.com')
    cy.get('#password').should('to.be.empty').type('foobarbaz')
    cy.get('#confirmPassword').should('to.be.empty').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
