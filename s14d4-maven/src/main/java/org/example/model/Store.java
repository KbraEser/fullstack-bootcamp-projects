package org.example.model;

public class Store {
    public static void main(String[] args) {

        ProductForSale[] products =new ProductForSale[3];

        products[0] = new Chocolate("White",20,"Milk chocolate");
        products[1] = new Coke("Drink", 15, "Cold coke");
        products[2] = new Bread("Food", 10, "Fresh bread");

        listProducts(products);
    }

    public static void listProducts(ProductForSale[] products) {
         for (ProductForSale product:products){
             product.showDetails();
         }
    }
}