describe('Register User test case in automationexercise website', () => {
  it('Visits the automationexercise website', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('h2', 'recommended items')
    cy.contains('Signup').click()

    cy.contains('h2', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').focus().type('Carole')
    cy.get('[data-qa="signup-email"]').focus().type('myemail@mail.com')
    cy.get('[data-qa="signup-button"]').click()

    cy.contains('h2', 'Enter Account Information')
    cy.get('[type="radio"]').check('Mrs')
    cy.get('#password').focus().type('myPassword')
    cy.get('#days').select('1')
    cy.get('#months').select('1')
    cy.get('#years').select('1996')
    cy.get('[type="checkbox"]').check()
    cy.get('#first_name').focus().type('Carole')
    cy.get('#last_name').focus().type('Debens')
    cy.get('#company').focus().type('myCompany')
    cy.get('#address1').focus().type('myAddress1')
    cy.get('#address2').focus().type('myAddress2')
    cy.get('#country').select('Canada')
    cy.get('#state').focus().type('Quebec')
    cy.get('#city').focus().type('Montreal')
    cy.get('#zipcode').focus().type('H2C2K3')
    cy.get('#mobile_number').focus().type('5149918234')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('h2', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    
    cy.contains('a', ' Logged in as ')
    cy.contains('Delete Account').click()

    cy.contains('h2', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})