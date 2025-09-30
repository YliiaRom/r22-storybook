describe("CypressTestComponents", () => {
  beforeEach(() => {
    cy.visit("/"); // використовується baseUrl з конфігу
  });

  it("should type name and password and display them", () => {
    cy.get('input[name="nameC"]').type("Roman");
    cy.get('input[name="passwordC"]').type("12345");
    cy.contains("button", "OnClick").click();

    cy.contains("Name User: Roman");
    cy.contains("Password :12345");
  });
});
