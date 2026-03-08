const validEmail = "test@example.com";
const strongPassword = "Test1234";

describe("Login Form - Başarılı senaryo", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Geçerli form doldurulunca submit edebiliyorum ve success sayfası açılıyor", () => {
    cy.get("[data-cy=email-input]").type(validEmail);
    cy.get("[data-cy=password-input]").type(strongPassword);
    cy.get("[data-cy=terms-checkbox]").check();

    cy.get("[data-cy=submit-button]").should("not.be.disabled").click();

    cy.url().should("include", "/success");
    cy.get("[data-cy=success-page]").should("be.visible");
    cy.get("[data-cy=success-title]").should("contain", "Giriş Başarılı");
  });
});

describe("Login Form - Hatalı senaryolar", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Email yanlış: 1 hata mesajı, doğru mesaj, buton disabled", () => {
    cy.get("[data-cy=email-input]").type("gecersiz-email");
    cy.get("[data-cy=password-input]").type(strongPassword);

    cy.get("[data-cy=error-email]").should("have.length", 1);
    cy.get("[data-cy=error-email]").should(
      "contain",
      "Geçerli bir email girin",
    );
    cy.get("[data-cy=submit-button]").should("be.disabled");
  });

  it("Email ve şifre yanlış: 2 hata mesajı, şifre hata mesajı görünüyor", () => {
    cy.get("[data-cy=email-input]").type("a");
    cy.get("[data-cy=password-input]").type("123");
    cy.get("[data-cy=terms-checkbox]").check();

    cy.get("[data-cy^=error-]").should("have.length", 2);
    cy.get("[data-cy=error-email]").should("exist");
    cy.get("[data-cy=error-password]").should(
      "contain",
      "Şifre en az 8 karakter",
    );
    cy.get("[data-cy=submit-button]").should("be.disabled");
  });

  it("Email ve şifre doğru ama şartları kabul etmedim: buton disabled", () => {
    cy.get("[data-cy=email-input]").type(validEmail);
    cy.get("[data-cy=password-input]").type(strongPassword);
    // terms checkbox işaretlenmiyor

    cy.get("[data-cy=submit-button]").should("be.disabled");
  });
});
