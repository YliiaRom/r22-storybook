describe("CypressFormTest01", () => {
  //--рендер?
  beforeEach(() => {
    cy.visit("/");
  });

  it("search form", () => {
    //-налічіе input
    cy.get("#cypress-form01").find("#nameTest01");
    cy.get("#cypress-form01").find("#ageTest01");

    //--введення тексту
    cy.get("#nameTest01").type("yuliia");
    cy.get("#ageTest01").type(5);

    cy.get("#nameTest01").clear();
    cy.get("#cypress-form01").submit();
  });
});
