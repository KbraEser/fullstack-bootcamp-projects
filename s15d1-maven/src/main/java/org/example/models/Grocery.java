package org.example.models;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Grocery {
    public static ArrayList<String> groceryList=new ArrayList<>();

    public static void startGrocery(){
        while(true){
            Scanner scan =new Scanner(System.in);
            System.out.print("0->Çıkış\n1->Eleman Ekle\n2->Eleman Çıkar\nSeçiminizi giriniz: ");
            String input=scan.nextLine();
            try{
                int choice=Integer.parseInt(input);
                if(choice == 0){
                    break;
                }
                else if (choice==1) {
                    System.out.println("Eklemek istediğiniz elemanı veya elemanları giriniz: ");
                    addItems(scan.nextLine());
                    printSorted();
                }
                else if (choice==2) {
                    System.out.println("Çıkarmak istediğiniz elemanı veya elemanları giriniz: ");
                    removeItems(scan.nextLine());
                    printSorted();
                }
                else{
                    System.out.println("Geçersiz seçim !");
                }
            } catch (NumberFormatException e) {
                System.out.println("Geçersiz seçim !");
            }

        }

    }
    public static void addItems(String input){
        String [] addItem=input.split(",");
        for(String item:addItem){
            item=item.trim();
            if(checkItemIsInList(item)){
                System.out.println("Eleman listede bulunuyor !");
            }else {
                groceryList.add(item);
            }
        }
        Collections.sort(groceryList);

    }
    public static void removeItems(String input){
        String [] removeItem=input.split(",");
        for(String item: removeItem) {
            item=item.trim();
            if(!checkItemIsInList(item)){
                System.out.println("Eleman listede yok !");
            }
            else{
                int i=groceryList.indexOf(item);
                groceryList.remove(i);
            }
        }

        Collections.sort(groceryList);

    }
    public static boolean checkItemIsInList(String product){
        return groceryList.contains(product);

    }
    public static void printSorted(){
        Collections.sort(groceryList);
        for(String grocery: groceryList){
            System.out.println(grocery);
        }
    }
}

