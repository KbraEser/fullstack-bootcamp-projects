package org.example;

public class Main {
    public static void main(String[] args) {

        Person person = new Person("John", "Doe", 29);

        Person person1 = new Person("Jane", "Doe", 25, "Engineer", 15500, true);

        System.out.println("Firstname: " + person.getFirstName());

        System.out.println("LastName: " + person.getLastName());

        System.out.println("Age: " + person1.getAge());

        System.out.println(person.isTeen());

        Wall wall = new Wall(5,4);

        System.out.println("area= " + wall.getArea());

        wall.setHeight(-1.5);

        System.out.println("width= " + wall.getWidth());

        System.out.println("height= " + wall.getHeight());

        System.out.println("area= " + wall.getArea());
    }
}
