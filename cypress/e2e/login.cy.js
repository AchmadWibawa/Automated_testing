Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Login Test', () => {
  // test case 1
  it('passes (Salah Username)', () => {
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('eibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
  })
  // test case 2
  it('passes (Salah Password)', () => {
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('wibi')
    cy.get('.btn').click()
  })
  // test case 3
  it('passes (field tidak diisi)', () => {
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get('.btn').click()
  })
  // test case 4
  it('passes (field terisi sempurna)', () => {
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
  })
})