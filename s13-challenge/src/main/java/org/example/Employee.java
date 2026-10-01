package org.example;

public class Employee {
    private int id;
    private String fullName;
    private  String email;
    private String password;
    private String[] healthPlans;


    public  Employee(int id, String fullName, String email, String password, String[] healthplans){
        this.id=id;
        this.fullName=fullName;
        this.email=email;
        this.password=password;
        this.healthPlans=healthplans;
    }

    public int getId(){
        return id;
    }

    public int setId(int id){
        return  this.id=id;
    }

    public String getFullName(){
        return fullName;
    }

    public String setFullName(String fullName){
        return  this.fullName=fullName;
    }

    public String getEmail(){
        return  email;
    }

    public String setEmail(String email){
        return  this.email=email;
    }

    public  String getPassword(){
        return password;
    }

    public String setPassword(String password){
        return  this.password = password;
    }

    public  String[] getHealthPlans(){
        return  healthPlans;
    }

    public  String[] setHealthplans(String[] healthplans){
        return  this.healthPlans=healthplans;
    }

    public void addHealthPlan(int index,String name){
        if(index >= 0 && index<healthPlans.length){
            if(healthPlans[index] == null){
                healthPlans[index]=name;
            } else if(healthPlans[index] != null) {
                System.out.println("Index dolu");
            }
        }else {
            System.out.println("Index yok");
        }

    }

    @Override
    public String toString(){
        return this.id+ " "+this.fullName;
    }
}   
