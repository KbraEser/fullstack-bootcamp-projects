package org.example.model;

public class Bread extends ProductForSale{
    private int weight;
    public Bread(String type,int price, String description){
        super(type,price,description);
    }

    public Bread(String type,int price, String description,int weight){
        super(type,price,description);
        this.weight=weight;
    }

    public int getWeight() {
        return weight;
    }

    @Override
    public void showDetails(){
        System.out.println("Coke {" +
                "weight=" + weight +
                ", type='" + getType() + '\'' +
                ", price=" + getPrice() +
                ", description='" + getDescription() + '\'' +
                '}');
    }
}
