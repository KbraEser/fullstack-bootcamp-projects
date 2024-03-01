package org.example.models;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Grocery {
    public static List<String> groceryList = new LinkedList<>();

    public static void main(String[] args) {
        startGrocery();
    }

    private static String getInput() {
        Scanner scanner = new Scanner(System.in);
        return scanner.nextLine();
    }

    public static void startGrocery() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            try {
                System.out.println("Yapmak istediğiniz işlemi giriniz:");
                int process = scanner.nextInt();
                if (process < 0 || process > 2) {
                    System.out.println("Process must be between 0-2");
                }

                if (process == 0) {
                    System.exit(0);
                }

                if (process == 1) {
                    System.out.println("Eklenmesini istediğiniz elemanları giriniz.");
                    String input = getInput();
                    addItems(input);
                }

                if (process == 2) {
                    System.out.println("Cıkarılmasını istediğiniz elemanları giriniz.");
                    String input = getInput();
                    removeItems(input);
                }
            } catch (Exception ex) {
                System.out.println("Invalid process: " + ex.getMessage());
                break;
            }
        }
    }

    public static void addItems(String input) {
        //tomato,lemon,cherry,PEACH
        //tomato, lemon , , lemon, cherry
        //tomato ,cherry
        if (input.contains(",")) {
            String[] elements = input.split(",");
            for (String element : elements) {
                if (element != null && !element.trim().isEmpty() &&
                        !checkItemsInList(element)) {
                    groceryList.add(element.toLowerCase().trim());
                } else {
                    System.out.println("Already exist");
                }
            }
        } else {
            if (input != null &&
                    !input.trim().isEmpty() &&
                    !checkItemsInList(input)) {
                groceryList.add(input.toLowerCase().trim());
            }
        }
        printSorted();
    }

    public static void removeItems(String input) {
        //tomato,lemon,cherry,PEACH
        //tomato, lemon , , lemon, cherry
        //tomato ,cherry
        if (input.contains(",")) {
            String[] elements = input.split(",");
            for (String element : elements) {
                if (element != null && !element.trim().isEmpty() &&
                        checkItemsInList(element)) {
                    groceryList.remove(element.toLowerCase().trim());
                } else {
                    System.out.println("Element is not exist");
                }
            }
        } else {
            if (input != null &&
                    !input.trim().isEmpty() &&
                    checkItemsInList(input)) {
                groceryList.remove(input.toLowerCase().trim());
            }
        }
        printSorted();
    }

    public static boolean checkItemsInList(String product) {
        return groceryList.contains(product.trim());
    }

    public static void printSorted(){
        Collections.sort(groceryList);
        System.out.println(groceryList);
    }
}
