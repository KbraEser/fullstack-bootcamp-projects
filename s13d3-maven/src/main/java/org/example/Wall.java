package org.example;

public class Wall {
    double width;
    double height;

    public Wall(double width, double height){
        this.width = width;
        this.height = height;
    }


    public double getWidth(){
        return  width;
    }

    public double getHeight(){
        return  height;
    }

    public double setWidth(double width){
       return this.width =  width<0 ? 0 : width;
    }

    public double setHeight(double height){
        return this.height = height < 0 ? 0 :height;
    }

    public double getArea(){
        return width*height;
    }

}
