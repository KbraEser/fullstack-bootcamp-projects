package org.example;

public class Company {
    private int id;
    private  String name;
    private double giro;
    private String[] developerNames;
        public Company(int id, String name, double giro, String[] developerNames) {
            this.id =id;
            this.name=name;
            this.giro=giro;
            this.developerNames=developerNames;
        }

    public int getId(){
        return id;
    }

    public int setId(int id){
        return  this.id=id;
    }

    public String getName(){
        return name;
    }

    public String setName(String name){
            return this.name=name;
    }

    public  double getGiro(){
            return giro;
    }

    public double setGiro(double giro){
            return this.giro= giro<0 ? 0 : giro;
    }

    public String[] getDeveloperNames(){
            return developerNames;
    }

    public String[] setDeveloperNames(String[] developerNames){
        return this.developerNames=developerNames;
    }

    public void addEmployee(int index, String name){
            if(index >= 0 && index<developerNames.length){
              if(developerNames[index] ==null){
                  developerNames[index] = name;
              } else if (developerNames[index] !=null) {
                    System.out.println("Index dolu");
              }
            }else {
                System.out.println("Index yok");
            }
    }
 @Override
 public String toString(){
     return this.id+" "+this.name;
 }
}
