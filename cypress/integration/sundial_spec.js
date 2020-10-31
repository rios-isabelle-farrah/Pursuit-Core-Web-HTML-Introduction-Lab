describe("Sundial", () => {
  it("vists sundial.html", () => {
    cy.visit("./sundial.html");
  });
  it("should have a main header", () => {
    // cy.visit('./sundial.html')
    cy.get("h1").should("have.text", "Sundial");
  });
});
