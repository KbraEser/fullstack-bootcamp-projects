/// <reference types="cypress" />

const BASE_URL = "http://localhost:5173";

describe("Pizza Sipariş Akışı", () => {
  beforeEach(() => {
    cy.visit(`${BASE_URL}/order`);
  });

  it("Ad Soyad inputuna metin yazılabilmeli", () => {
    cy.get("#fullName")
      .should("be.visible")
      .type("Ada Lovelace")
      .should("have.value", "Ada Lovelace");
  });

  it("Sipariş notu alanına metin yazılabilmeli", () => {
    const note = "Lütfen kenarları ekstra çıtır olsun.";

    cy.get("#notes").should("be.visible").type(note).should("have.value", note);
  });

  it("Birden fazla ek malzeme seçilebilmeli", () => {
    cy.get('input[name="materials"]').eq(0).check().should("be.checked");
    cy.get('input[name="materials"]').eq(1).check().should("be.checked");
    cy.get('input[name="materials"]').eq(2).check().should("be.checked");
  });

  it("Malzeme seçimi toplam fiyata yansımış olmalı", () => {
    cy.get(
      '.font-barlow.fw-normal.fs-6.text-acik-gri:contains("Toplam Fiyata Eklenecek")',
    )
      .invoke("text")
      .then((initialText) => {
        cy.get('input[name="materials"]').eq(0).check();
        cy.get('input[name="materials"]').eq(1).check();

        cy.get(
          '.font-barlow.fw-normal.fs-6.text-acik-gri:contains("Toplam Fiyata Eklenecek")',
        )
          .invoke("text")
          .should((updatedText) => {
            expect(updatedText).not.to.eq(initialText);
          });
      });
  });

  it("Eksik bilgilerle form gönderilememeli ve uyarı göstermeli", () => {
    cy.contains("button", "SİPARİŞ VER").click();

    cy.contains("Sipariş vermek için bilgileri doldurunuz.").should(
      "be.visible",
    );
  });

  it("Tüm bilgilerle form başarıyla gönderilebilmeli", () => {
    cy.get("#fullName").type("Ada Lovelace");

    cy.get("#notes").type("Lütfen bol malzemeli olsun.");

    cy.get('input[name="size"]').first().check({ force: true });

    cy.get('input[name="dough"]').first().check({ force: true });

    cy.get('input[name="materials"]').each(($el, index) => {
      if (index < 4) {
        cy.wrap($el).check();
      }
    });

    cy.get(".quantity-value").clear().type("2");

    cy.contains("button", "SİPARİŞ VER").click();

    cy.contains("Sipariş verildi. Teşekkür ederiz.").should("be.visible");
  });
});
