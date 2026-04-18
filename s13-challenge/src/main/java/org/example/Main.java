package org.example;

import org.example.enums.Plan;

public class Main {
    public static void main(String[] args) {

      String[] newArray = new String[]{"Ahmet"};
      Company company = new Company(1,"Kübra",200.000,newArray);
      System.out.println(company.toString());

      Healthplan healthplan = new Healthplan(1,"Osman", Plan.BASIC);

      Employee employee = new Employee(1,"Almila Eser","a@gmail.com","1234",newArray);




    }
}