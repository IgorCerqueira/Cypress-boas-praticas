describe('Code duplication bad practice - Sample 4', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })

 
 
  // it('checks all checkboxes from a specific fieldset', () => {
  //   cy.get('#friend').check()
  //   cy.get('#publication').check()
  //   cy.get('#social-media').check()
  // })
 
 //Apó refatoração foi possível selecionar todos os campos da checkbox de uma unica vez usando um seletor em comum

  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('field div input[type="checkbox"]').check()
  })


})
