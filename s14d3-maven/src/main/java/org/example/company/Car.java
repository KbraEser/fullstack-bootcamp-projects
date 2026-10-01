package org.example.company;

import java.util.Objects;

public class Car {
    private boolean engine;
    private int cylinders;
    private String name;
    private int wheels;


    public Car(int cylinders,String name){
        this.wheels = 4;
        this.engine= true;
        this.cylinders=cylinders;
        this.name=name;
    }

    public String getName(){
        return name;
    }

    public int getCylinders(){
        return cylinders;
    }

    @Override
    public String toString() {
        return "Car{" +
                "engine=" + engine +
                ", cylinders=" + cylinders +
                ", name='" + name + '\'' +
                ", wheels=" + wheels +
                '}';
    }


    @Override
    public boolean equals(Object obj){
        if(this ==obj) return true;
        if(obj== null || getClass() != obj.getClass()) return false;

        Car other = (Car) obj;

        return cylinders ==other.cylinders && Objects.equals(name,other.name);
    }

    public String startEngine(){
        System.out.println(getClass().getSimpleName());
        return "the car's engine is starting";

    }

    public String accelerate(){
        System.out.println(getClass().getSimpleName());
        return "the car is accelerating";
    }

    public String brake(){
        System.out.println(getClass().getSimpleName());
        return "the car is braking";
    }



}
