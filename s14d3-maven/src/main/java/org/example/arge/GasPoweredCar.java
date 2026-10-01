package org.example.arge;

public class GasPoweredCar extends CarSkeleton{
    private double avgKmPerLitre;
    private int cylinders;

    public GasPoweredCar(String name,String description, double avgKmPerLitre, int cylinders){
        super(name,description);
        this.avgKmPerLitre=avgKmPerLitre;
        this.cylinders=cylinders;
    }

    public double getAvgKmPerLitre(){
        return avgKmPerLitre;
    }

    public int getCylinders(){
        return cylinders;
    }

    @Override
    public void startEngine(){
        System.out.println("Gas Powered Car is start engine.");

    }

    @Override
    public void drive(){
        System.out.println("Gas Powered car is drived.");
        runEngine();
    }

    @Override
    protected void runEngine(){

        System.out.println("Gas Powered car is run engine.");
    }
}
