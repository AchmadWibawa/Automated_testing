Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Test CRUD Admin', () => {
  it('passes (error, form admin tidak ada yang diisi)' , () => {

    // Login Website
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Klik Button Tambah
    cy.get('.text').click()

    // Isi form data Admin
    cy.get('form > .btn').click()
  })

  //TEST CASE 2
  it('passes (error, form admin pada bagian email kurang "@")', () => {

    // Login Website
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Klik Button Tambah
    cy.get('.text').click()

    // Isi form data Admin
    cy.get(':nth-child(2) > .form-control').type('Ahmad Thariq')
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('2041720200#student.polinema.ac.id')
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('081233385547')
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('eriq')
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control').type('12345')
    cy.get('form > .btn').click()
  })

  //TEST CASE 3
  it('passes (error, form admin field password tidak diisi)', () => {

    // Login Website
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Klik Button Tambah
    cy.get('.text').click()

    // Isi form data Admin
    cy.get(':nth-child(2) > .form-control').type('Ahmad Thariq')
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('2041720200@student.polinema.ac.id')
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('081233385547')
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('eriq')
    cy.get('form > .btn').click()
  })

  //TEST CASE 4
  it('passes (correct, form admin baru berhasil dibuat)', () => {

    // Login Website
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Klik Button Tambah
    cy.get('.text').click()

    // Isi form data Admin
    cy.get(':nth-child(2) > .form-control').type('Ahmad Thariq')
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('2041720200@student.polinema.ac.id')
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('081233385547')
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('eriq')
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control').type('12345')
    cy.get('form > .btn').click()
  })

  // TEST CASE 5 
  it('passes (edit admin)', () => {

    // Login 
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('eriq')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Klik Button Edit
    cy.get(':nth-child(1) > :nth-child(5) > .btn-edit').click()

    // Edit Nama Pengguna
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').type('Thariq')
    // Edit Username
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').clear()
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('thariq')
    cy.get('form > .btn').click()

    cy.get('[href="index.php?halaman=admin"]').click()

    // Coba Login dengan Admin Yang sudah dibuat dan diedit
    cy.get('[href="logout.php"]').click()
    cy.get(':nth-child(1) > .form-control').type('thariq')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
  })

  // Test Case 6
  it('passes (hapus admin)', () => {
    // Login 
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('thariq')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Menuju Menu Admin
    cy.get('[href="index.php?halaman=admin"]').click()

    // Hapus Admin
    cy.get(':nth-child(1) > :nth-child(5) > .btn-hapus').click()
  })
})