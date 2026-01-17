describe('TodoMVC - Перші кроки', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('має відкрити TodoMVC та перевірити заголовок', () => {
    cy.get('h1').should('contain', 'todos')
  })

  it('має мати поле для вводу нової задачі', () => {
    cy.get('.new-todo')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'What needs to be done?')
  })

  it('має додати нову задачу', () => {
    cy.get('.new-todo').type('Вивчити Cypress{enter}')
    
    cy.get('.todo-list li')
      .should('have.length', 1)
      .and('contain', 'Вивчити Cypress')
  })

  it('має відмічати задачу як виконану', () => {
    cy.get('.new-todo').type('Тестова задача{enter}')
    
    cy.get('.todo-list li .toggle').click()
    
    cy.get('.todo-list li').should('have.class', 'completed')
  })
})
