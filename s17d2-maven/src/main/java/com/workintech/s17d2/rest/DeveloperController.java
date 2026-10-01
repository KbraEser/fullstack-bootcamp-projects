package com.workintech.s17d2.rest;

import com.workintech.s17d2.model.*;
import com.workintech.s17d2.tax.Taxable;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/developers")
public class DeveloperController {
    public Map<Integer, Developer> developers;
    private final Taxable taxable;

    @PostConstruct
    public void init(){
        developers = new HashMap<>();
    }

    public DeveloperController(Taxable taxable){
          this.taxable=taxable;
    }

    @GetMapping
    public List<Developer> get(){
        return  developers.values().stream().toList();
    }

    @GetMapping("/{id}")
    public Developer getByID(@PathVariable int id){
        return developers.get(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Developer create(@RequestBody Developer developer){
        Developer dev;
       switch (developer.getExperience()){
           case MID :
               dev = new MidDeveloper(developer.getId(),developer.getName(), developer.getSalary());
               developers.put(developer.getId(), dev);
               dev.setSalary(dev.getSalary()- taxable.getMiddleTaxRate());
               return dev;
           case JUNIOR :
               dev = new JuniorDeveloper(developer.getId(),developer.getName(), developer.getSalary());
               developers.put(developer.getId(),dev);
               dev.setSalary(dev.getSalary()- taxable.getSimpleTaxRate());
               return dev;
           case SENIOR :
               dev = new SeniorDeveloper(developer.getId(),developer.getName(), developer.getSalary());
               developers.put(developer.getId(),dev);
               dev.setSalary(dev.getSalary()- taxable.getUpperTaxRate());
               return dev;
       }
       return null;
    }

    @PutMapping("/{id}")
    public Developer put(@PathVariable Long id,@RequestBody Developer updatedDev){
           if(developers.containsKey(id)){
               developers.put(id.intValue(),updatedDev);
                return updatedDev;
           }
           return null;
    }

    @DeleteMapping("/{id}")
    public Developer developer(@PathVariable Long id) {
        if (developers.containsKey(id)) {

            Developer removedDev = developers.remove(id);
            return removedDev;
        }
        return null;
    }
}
