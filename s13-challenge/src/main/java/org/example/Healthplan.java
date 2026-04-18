package org.example;

import org.example.enums.Plan;

public class Healthplan {
    private int id;
    private String name;
    private Plan plan;

    public Healthplan(int id, String name, Plan plan) {
        this.id = id;
        this.name = name;
        this.plan = plan;
    }

    public int getId() {
        return id;
    }

    public int setId(int id) {
        return this.id = id;
    }

    public String getName() {
        return name;
    }

    public String setName(String name) {
        return this.name = name;
    }

    public Plan getPlan() {
        return plan;
    }

    public Plan setPlan(Plan plan) {
        return this.plan = plan;
    }



    @Override
    public String toString(){
        return this.id+ " "+this.name;
    }
}
