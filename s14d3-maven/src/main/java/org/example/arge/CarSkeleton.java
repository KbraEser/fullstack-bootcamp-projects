package org.example.arge;

public class CarSkeleton {

    private String name;
    private String description;

    //super()
    public CarSkeleton() {
    }

    public CarSkeleton(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String startEngine() {
        System.out.println("Class Name: " + getClass().getSimpleName());
        return getName() + " starting engine.";
    }

    public String drive() {
        runEngine(this);
        return getName() + " is driving...";
    }

    protected void runEngine(CarSkeleton carSkeleton) {
        System.out.println(carSkeleton.getClass().getSimpleName());
        if (carSkeleton instanceof ElectricCar) {
            double kmPerCharge = ((ElectricCar) carSkeleton).getAvgKmPerCharge();
            double batterySize = ((ElectricCar) carSkeleton).getBatterySize();
            System.out.println("The car engine is starting with electric. Per Charge: " + kmPerCharge +
                    " Battery Size: " + batterySize);
        } else if (carSkeleton instanceof HybridCar) {
            HybridCar car = ((HybridCar) carSkeleton);
            System.out.println("The car engine is starting with hybrid. Per Charge: " + car.getAvgKmPerLiter() +
                    " Battery Size: " + car.getBatterySize() + " Cylinders: " + car.getCylinders());
        } else if (carSkeleton instanceof GasPoweredCar){
            GasPoweredCar car = ((GasPoweredCar) carSkeleton);
            System.out.println("The car engine is starting with gas. Per Charge: " + car.getAverageKmPerLiter() +
                    " Cylinders: " + car.getCylinders());
        } else{
            System.out.println("Invalid car type");
        }

    }
}
