Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('empty spec', () => {
  it('Passes, (tambah artikel)', () => {
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
    cy.get('[href="index.php?halaman=artikel&kategori=26"] > .card-title').click()
    cy.get('#btn-tambah-artikel').click()
    cy.get(':nth-child(2) > .col-sm-12 > .form-group > .form-control').type(' Sejarah Motor Chopper Berawal dari Kelahiran Bobber ')
    cy.get(':nth-child(3) > .col-sm-12 > .form-group > .form-control').type('Sebelum muncul era chopper hadir terlebih dahulu era bobber. Di mana istilah bobber muncul berasal dari kata "bobbed" atau melepaskan sebagian besar beban dari motor. Pada umumnya dilakukan dengan melepas atau memotong fender depan dan belakang dengan tujuan membuat motor menjadi lebih ringan. Selain itu, penampilan motor sendiri menjadi lebih unik dan eye cacthing bagi para bikers. Dilansir dari Motorcycle-USA, Minggu (21/1/2018), aliran bobbed mengawali lahirnya modifikasi custom chopper di daratan Amerika Serikat (AS), yaitu negara yang memproduksi motor Harley Davidson. Pada akhir Perang Dunia II, para tentara bermotor Amerika Serikat dan mekaniknya memperbaiki seluruh kendaraan motor dan mobil mereka. Pada masa itu, perang sudah selesai dan banyak sekali motor dan mobil yang masih berfungsi dengan baik tetapi kondisi bodi sudah rusak.')
    cy.get('.btn-success').click()

    // cek artikel terpublish atau tidak
    cy.get('.navbar-brand').click()
  })
  it('Passes, (edit artikel)', () => {
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
    cy.get('[href="index.php?halaman=artikel&kategori=26"] > .card-title').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn-edit-artikel').click()
    cy.get(':nth-child(2) > .col-sm-12 > .form-group > .form-control').type(' Indonesia')
    cy.get('.form-group > .btn').click()

    // cek artikel terpublish atau tidak
    cy.get('.navbar-brand').click()
  })
  
  it('Passes, (hapus artikel)', () => {
    cy.visit('http://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
    cy.get('[href="index.php?halaman=artikel&kategori=26"] > .card-title').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn-hapus-artikel').click()
  })
})