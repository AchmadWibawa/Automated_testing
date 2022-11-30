Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

//TEST CASE 1
describe('empty spec', () => {
  it('passes (field nama tidak diisi)', () => {
    // Login Website
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    cy.get('#btn-tambah-kategori').click()
    cy.get('[type="submit"]').click()

  })
  it('passes (field terisi sempurna)', () => {
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    cy.get('#btn-tambah-kategori').click()
    cy.get('.form-group > .form-control').type('Beat')
    cy.get('[type="submit"]').click()
  })
  it('passes (Kategori terhapus)', () => {
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    cy.get(':nth-child(5) > .card-body > .hapus_kategori > .text-danger').click()
  })
})