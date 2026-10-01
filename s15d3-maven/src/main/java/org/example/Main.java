package org.example;


import org.example.entity.Employee;

import java.util.*;



public class Main {
    public static void main(String[] args) {

        Employee employee1 = new Employee(1, "Kübra", "Eser");
        Employee employee2 = new Employee(2, "Osman", "Eser");
        Employee employee3 = new Employee(3, "Almila", "Eser");
        Employee employee4 = new Employee(3, "Almila", "Eser");
        Employee employee5 = new Employee(4, "Ali", "Eser");
        Employee employee6 = new Employee(2, "Osman", "Eser");


        List<Employee> employeeList = new LinkedList<>();
        employeeList.add(employee1);
        employeeList.add(employee2);
        employeeList.add(employee3);
        employeeList.add(employee4);
        employeeList.add(employee5);
        employeeList.add(employee6);
        System.out.println(findDuplicates(employeeList));
         // System.out.println(findUniques(employeeList));
        //System.out.println(removeDuplicates(employeeList));


    }



    public static List<Employee> findDuplicates(List<Employee> list) {
        Map<Employee, Integer> map = new LinkedHashMap<>();
        List<Employee> duplicates = new LinkedList<>();

        for (Employee emp : list) {
            map.put(emp, map.getOrDefault(emp, 0) + 1);
        }

        for (Map.Entry<Employee, Integer> entry : map.entrySet()) {
            if (entry.getValue() > 1) {
                duplicates.add(entry.getKey());
            }
        }

        return duplicates;
    }



    public static Map<Integer, Employee> findUniques(List<Employee> list) {

        Map<Integer, Employee> map = new HashMap<>();

        for (Employee emp : list) {
            if (emp == null) continue;
            map.put(emp.getId(), emp);
        }

        return map;
    }

    public static List<Employee> removeDuplicates(List<Employee> list) {

        Map<Employee, Integer> map = new HashMap<>();
        List<Employee> result = new LinkedList<>();

        for (Employee emp : list) {
            if (emp == null) continue;
            map.put(emp, map.getOrDefault(emp, 0) + 1);
        }

        for (Map.Entry<Employee, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                result.add(entry.getKey());
            }
        }

        return result;
    }



}