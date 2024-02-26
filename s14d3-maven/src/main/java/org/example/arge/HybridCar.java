package org.example.arge;

public class HybridCar extends CarSkeleton{

    private double avgKmPerLiter;
    private int batterSize;
    private int cylinders;

    public HybridCar(String name, String description, double avgKmPerLiter, int batterSize, int cylinders) {
        super(name, description);
        this.avgKmPerLiter = avgKmPerLiter;
        this.batterSize = batterSize;
        this.cylinders = cylinders;
    }

    public double getAvgKmPerLiter() {
        return avgKmPerLiter;
    }

    public int getBatterySize() {
        return batterSize;
    }

    public int getCylinders() {
        return cylinders;
    }
}
