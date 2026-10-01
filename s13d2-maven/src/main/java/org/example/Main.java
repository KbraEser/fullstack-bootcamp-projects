package org.example;



public class Main {
    public static void main(String[] args) {

    }
    public static boolean isPalindrome(int sayi){

        int orjinal = sayi;
        int ters=0;

        while(sayi != 0){
            int basamak  = sayi % 10;
            ters= ters *10 +basamak;
            sayi =sayi/10;
        }
        return  orjinal == ters;
    }

    public  static  boolean isPerfectNumber(int sayi){

            if (sayi < 0) {
                return false;
            }

            int toplam = 0;

            for (int i = 1; i < sayi; i++) {
                if (sayi % i == 0) {
                    toplam += i;
                }
            }

            return toplam == sayi;
    }


    public static String numberToWords(int num) {

        if (num < 0) {
            return "Invalid Value";
        }

        if (num == 0) {
            return "Zero";
        }

        String[] numbers = {
                "Zero", "One", "Two", "Three", "Four",
                "Five", "Six", "Seven", "Eight", "Nine"
        };

        StringBuilder result = new StringBuilder();

        while (num > 0) {
            int basamak = num % 10;
            result.insert(0, numbers[basamak] + " ");
            num = num / 10;
        }

        return result.toString().trim();
    }

}
