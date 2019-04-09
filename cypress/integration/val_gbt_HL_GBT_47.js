Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Kiểm thử chức năng giao bài tập', function() {
context('Kiểm thử HL-GBT_45', function(){
  before(function(){
    cy.log('Đăng nhập bằng tài khoản giáo viên')
    const timeWaitToLoadPage = 6000
    const _password = 123456789
    const _username = 'hoangle12298@gmail.com'
    cy.visit('https://hoclieu.sachmem.vn/');
    cy.contains('Đăng nhập').click();
    cy.get('#user_email').type(_username); // type email
    cy.get('#user_password').type(_password); // type password
    cy.get(':nth-child(6) > .btn').click()
    cy.wait(timeWaitToLoadPage)

    // click "Lớp 12"
    cy.get(':nth-child(15) > .row > .col-9 > .text-dark').click()

    // click "Trắc nghiệm Địa lí 12 (2018)"
    cy.get(':nth-child(24) > .row > .col-9 > .text-dark').click()

    // Chờ load xong trang giao bài tập để hiện thị nút "Giao bài tập"
    cy.wait(timeWaitToLoadPage*2)

    //cy.visit('https://hoclieu.sachmem.vn/question_set/5ba64979c676f8880d7086b0/5c075a3ec997c55926f0395c/preview');
    // Click nút giao bài tập
    cy.get('.pull-right > .btn').click()
      //cy.get(':nth-child(7) > .form-control').type('1').should('have.value', '1')
    
    // Chờ load xong popup giao bài tập
    cy.wait(timeWaitToLoadPage)
    cy.log('Cho phép nhập số nguyên dương >= 0')
  })

  // it('HL-GBT_47 - 0: Nhập vào ô số lần làm bài', function(){
  //     var i
  //     for (i=30; i<= 39; ++i){
  //         cy.log('--------Kí tự '+ i  + 'trong bảng mã ASCII ứng với' + String.fromCharCode(i))
  //         cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
  //         cy.wait(2000)
  //     }
  // })

  it('HL-GBT_47 - 1: Nhập vào ô số lần làm bài', function(){
      var i = 0
      cy.log('--------Kí tự '+ i  + 'trong bảng mã ASCII ứng với' + String.fromCharCode(i))
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
      cy.wait(2000)
  })
  it('HL-GBT_47 - 2: Nhập vào ô số lần làm bài', function(){
      var i = 9
      cy.log('--------Kí tự '+ i  + 'trong bảng mã ASCII ứng với' + String.fromCharCode(i))
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
      cy.wait(2000)
  })
  it('HL-GBT_47 - 3: Nhập vào ô số lần làm bài', function(){
      var i = 59
      cy.log('--------Kí tự '+ i  + 'trong bảng mã ASCII ứng với' + String.fromCharCode(i))
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
      cy.wait(2000)
  })
  it('HL-GBT_47 - 4: Nhập vào ô số lần làm bài', function(){
      var i = 159
      cy.log('--------Kí tự '+ i  + 'trong bảng mã ASCII ứng với' + String.fromCharCode(i))
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
      cy.wait(2000)
  })
})
});