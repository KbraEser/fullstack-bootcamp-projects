package com.workintech.s18d1.controller;

import com.workintech.s18d1.dao.BurgerDao;
import com.workintech.s18d1.entity.BreadType;
import com.workintech.s18d1.entity.Burger;
import com.workintech.s18d1.exceptions.BurgerException;
import com.workintech.s18d1.util.BurgerValidation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("/burger")
public class BurgerController {

    private BurgerDao burgerDao;

    @Autowired
    public BurgerController(BurgerDao burgerDao){
        this.burgerDao = burgerDao;
    }

    @PostMapping
    public Burger save(@RequestBody Burger burger){
        BurgerValidation.validateBurger(burger);
        return  burgerDao.save(burger);
    }

    @GetMapping("/{id}")
    public Burger findById(@PathVariable Long id){
        Burger existingBurger = burgerDao.findById(id);
        if (existingBurger != null){
            return existingBurger;
        }
       throw  new BurgerException(id + " id'li burger veritabanında bulunamadı!",
               HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public List<Burger> findAll(){
        return  burgerDao.findAll();
    }

    @GetMapping("/price/{price}")
    public List<Burger> findByPrice(@PathVariable double price){
        return  burgerDao.findByPrice(price);
    }

    @GetMapping("/breadType/{breadType}")
    public List<Burger> findByBreadType(@PathVariable BreadType breadType){
        return burgerDao.findByBreadType(breadType);
    }

    @GetMapping("/content/{content}")
    public List<Burger> findByContent(@PathVariable String content){
        return burgerDao.findByContent(content);
    }

    @PutMapping
    public Burger update(@RequestBody Burger burger){
        BurgerValidation.validateBurger(burger);
        return burgerDao.update(burger);
    }

    @DeleteMapping("/{id}")
    public Burger delete(@PathVariable Long id ){
        Burger deletedBurger = burgerDao.remove(id);

        if (deletedBurger == null) {
            throw new BurgerException(
                    id + " id'li burger bulunamadığı için silme işlemi gerçekleştirilemedi!",
                    HttpStatus.NOT_FOUND
            );
        }
      return deletedBurger;
    }

}
