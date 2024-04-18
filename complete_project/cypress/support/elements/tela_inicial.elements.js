export class ELEMENTS {
    elements = {
    inputTitle: () =>  cy.get('#title'),
    feedbackTitle: () =>  cy.get('#titleFeedback'),
    inputImageUrl: () =>  cy.get('#imageUrl'),
    feedbackUrl: () =>  cy.get('#urlFeedback'),
    btnSubmit:  () =>  cy.get("#btnSubmit")
    }
}