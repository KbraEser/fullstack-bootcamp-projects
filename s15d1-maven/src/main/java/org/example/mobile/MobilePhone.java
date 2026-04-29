package org.example.mobile;

import java.util.ArrayList;
import java.util.List;

public class MobilePhone {
    private String myNumber;
    private ArrayList<Contact> myContacts;

    public MobilePhone(String myNumber, List<Contact> myContacts) {
        this.myNumber = myNumber;
        this.myContacts = (ArrayList<Contact>) myContacts;
    }

    public String getMyNumber(){
        return myNumber;
    }

    public ArrayList<Contact> getMyContacts(){
        return myContacts;
    }

    public boolean addNewContact(Contact contact){
        if(findContact(contact.getName()) >=0){
            return false;
        }
        myContacts.add(contact);
        return true;
    }


    public boolean updateContact(Contact oldContact, Contact newContact){
        int index = findContact(oldContact);
        if(index < 0){
            return false;
        }
        myContacts.set(index, newContact);
        return true;
    }


    public int findContact(Contact contact){
        return findContact(contact.getName());
    }

    public int findContact(String name){
        for(int i=0; i<myContacts.size(); i++){
            if(myContacts.get(i).getName().equals(name)){
                return i;
            }
        }
        return -1;
    }

    public Contact queryContact(String name){
        for(Contact contact : myContacts){
            if(contact.getName().equals(name)){
                return contact;
            }
        }
        return null;
    }
    public boolean removeContact(Contact contact){
        int index = findContact(contact);

        if(index < 0){
            return false;
        }

        myContacts.remove(index);
        return true;
    }

    public  void printContact(){
        System.out.println("Contact List:");

        for (int i = 0; i < myContacts.size(); i++) {
            Contact contact =myContacts.get(i);
            System.out.println((i+1)+"."+contact.getName()+" -> "+contact.getPhoneNumber());
        }
    }


}
