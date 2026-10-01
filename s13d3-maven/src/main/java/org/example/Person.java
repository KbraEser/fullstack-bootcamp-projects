package org.example;

public class Person {
    String firstName;
    String lastName;
    int age;
    String jobDescription;
    double salary;
    boolean isMarried;

    public Person(String firstName, String lastName,int age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public  Person(String firstName, String lastName, int age, String jobDescription, double salary, boolean isMarried){
         this(firstName,lastName,age);
         this.jobDescription = jobDescription;
         this.salary = salary;
         this.isMarried = isMarried;
    }

    public String getFirstName(){
        return  firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public int getAge(){
        return age;
    }

    public boolean isTeen(){
        return age >= 13 && age <= 19;
    }

}
