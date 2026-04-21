package com.workintech.developers;

public class HRManager extends Employee{
    private JuniorDeveloper[] juniorDevelopers;
    private MidDeveloper[] midDevelopers;
    private SeniorDeveloper[] seniorDevelopers;

    public HRManager(long id, String name,double salary){
       super(id,name,salary);

       this.juniorDevelopers=new JuniorDeveloper[6];
       this.midDevelopers = new MidDeveloper[6];
       this.seniorDevelopers=new SeniorDeveloper[6];


    }

    @Override
    public void work() {
        System.out.println("HRManager starts to working");
        setSalary(getSalary() + 1500);
    }

    public void addEmployee(JuniorDeveloper jd){
        addToArray(juniorDevelopers,jd,"JuniorDeveloper");

    }

    public void addEmployee(MidDeveloper md) {
        addToArray(midDevelopers, md, "MidDeveloper");
    }


    public void addEmployee(SeniorDeveloper sd) {
        addToArray(seniorDevelopers, sd, "SeniorDeveloper");
    }

    private <T> void  addToArray(T[] array,T employee,String type){
        for(int i=0; i<array.length; i++){
            if(array[i] ==null){
                array[i]=employee;
                System.out.println(type +" eklendi");
                return;
            }
        }
        System.out.println(type +" array dolu! Eklenmedi.");
    }










}
