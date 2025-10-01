describe("CypressListComponent test", () => {
  it("Does not do much!", () => {
    cy.visit("/");
    cy.get(".sectionWrapper");
    cy.get(".sectionWrapper h2");

    cy.get('[data-cy="create-user"]').click();
    // ждём появления хотя бы одной карточки с тайм-аутом
    // Ждём появления хотя бы одной карточки userCard в списке
    cy.get("#list-with-faker");
    // Ждём появления хотя бы одной новой карточки
    cy.get("#list-with-faker .userCard", { timeout: 5000 }).should(($cards) => {
      expect($cards.length).to.be.greaterThan(1);
    }); // 1 статическая + 1 новая

    cy.get("button").contains("Search Name").click();
    cy.get('[data-cy="search-name"]').click();

    // cy.get(".userFakerList").find(".userCard").should("exist");

    cy.contains("Знайти name");
  });
});
