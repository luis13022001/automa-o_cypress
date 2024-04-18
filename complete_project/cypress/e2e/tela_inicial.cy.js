/*
  Feature - describe
  background -. contesto ou beforeEach
  caso de teste -> it

*/
import assert from 'assert'
import tela_inicialPage from '../support/pageObjects/tela_inicial.page'


const colors = {
  errors: 'rgb(220, 53, 69)',
  success: ''
}

describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {
    after (() => {  
      cy.clearLocalStorage()
    });
    const input ={
      title: '',
      url: ''
    }
    it('Given I am on the image registration page', () => {
      cy.visit('/') //ele pega o site que está no baseUrl cypress.config.js
    })
    it('When I enter "${input.title}" in the title field', () => {
      tela_inicialPage.typeTitle(input.title)
    })
    it('Then I enter "${input.url}" in the URL field', () => {
      tela_inicialPage.typeTitle(input.url)
    }) 
    it('Then I click the submit button', () => {
      tela_inicialPage.clickSubmitButton()
    }) 
    it('Then I should see "Please type a title for the image" message above the title field', () => {
      tela_inicialPage.elem.elements.feedbackTitle().should('contains.text', "Please type a title for the image")
    }) 
    it('And I should see "Please type a valid URL" message above the imageUrl field', () => {
      tela_inicialPage.elem.elements.feedbackUrl().should('contains.text', "Please type a valid URL")
    })
    it('And I should see an exclamation icon in the title and URL fields', () => {
      tela_inicialPage.elem.elements.inputTitle().should(([element]) => {
        const styles = window.getComputedStyle(element)
        const border = styles.getPropertyValue('border-right-color')
        assert.strictEqual(border, colors.errors)
      })
    })

  })
})