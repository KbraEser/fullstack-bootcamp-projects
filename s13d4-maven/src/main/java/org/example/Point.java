package org.example;

public class Point {
    // instance variable
    private int x;
    private int y;

    //constructor
    public Point(int x,int y){
        this.x =x;
        this.y = y;
    }

    public int getX(){
        return  x;
    }

    public int getY(){
        return  y;
    }

    public void  setX(int x){
        this.x =x;
    }

    public void setY(int y){
        this.y=y;
    }

    public double distance(){

      return   distance(0,0);
    }

    public  double distance(Point p){
        return  distance(p.x,p.y);
    }

    public  double distance(int a,int b){
        return   Math.sqrt((Math.pow((x-a),2)+Math.pow((y-b),2)));
    }

}
