package com.workintech.s18d2.controller;

import com.workintech.s18d2.entity.Fruit;
import org.springframework.web.bind.annotation.*;
import com.workintech.s18d2.services.FruitService;

import java.util.List;

@RestController
@RequestMapping("/fruit")
public class FruitController {

    private final FruitService fruitService;

    public FruitController(FruitService fruitService) {
        this.fruitService = fruitService;
    }

    @GetMapping
    public List<Fruit> getByPriceAsc() {
        return fruitService.getByPriceAsc();
    }

    @GetMapping("/{id}")
    public Fruit getById(@PathVariable Long id) {
        return fruitService.getById(id);
    }

    @GetMapping("/desc")
    public List<Fruit> getByPriceDesc() {
        return fruitService.getByPriceDesc();
    }

    @PostMapping
    public Fruit addOrUpdate(@RequestBody Fruit fruit) {
        return fruitService.save(fruit);
    }

    @GetMapping("/name/{name}")
    public List<Fruit> searchByName(@PathVariable String name) {
        return fruitService.searchByName(name);
    }

    @DeleteMapping("/{id}")
    public Fruit delete(@PathVariable Long id) {
        return fruitService.delete(id);
    }
}
