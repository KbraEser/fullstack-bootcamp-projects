package org.example;

public class Player {
    private String name;
    private int healthPercentage;
    private Weapon weapon;

    public Player(String name,int healthPercentage,Weapon weapon){
        this.name= name;
         this.healthPercentage = healthPercentage;
         this.weapon=weapon;
    }

    public int healthRemaining(){
        return healthPercentage;
    }

    public int loseHealth(int damage){
        healthPercentage = healthPercentage - damage;

        if (healthPercentage < 0) {
            System.out.println(name + " player has been knocked out of game");
            healthPercentage = 0;
        }

        return healthPercentage;
    }

    public int restoreHealth(int healthPotion){
        healthPercentage = healthPercentage+healthPotion;
        if(healthPercentage>100){
            healthPercentage = 100;
        }
        return  healthPercentage;
    }

}
