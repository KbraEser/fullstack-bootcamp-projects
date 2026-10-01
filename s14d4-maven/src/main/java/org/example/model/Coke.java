package org.example.model;

public class Coke extends ProductForSale{
    private int size;

    public Coke(String type,int price,String description){
        super(type, price, description);

    }
    public Coke(String type, int price, String description, int size){
        super(type, price, description);
        this.size = size;
    }

    public int getSize(){
        return size;
    }

    @Override
    public void showDetails(){
        System.out.println("Coke {" +
                "size=" + size +
                ", type='" + getType() + '\'' +
                ", price=" + getPrice() +
                ", description='" + getDescription() + '\'' +
                '}');
    }

}
