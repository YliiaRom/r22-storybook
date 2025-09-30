describe("CypressTestComponents", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/"); // або шлях до сторінки з компонентом
  });

  it("should type name and password and display them", () => {
    // Вводимо ім'я
    cy.get('input[name="nameC"]').type("Roman");

    // Вводимо пароль
    cy.get('input[name="passwordC"]').type("12345");

    // Натискаємо кнопку OnClick
    cy.contains("button", "OnClick").click();

    // Перевіряємо, що значення відобразились
    cy.contains("Name User: Roman");
    cy.contains("Password :12345");
  });
});
