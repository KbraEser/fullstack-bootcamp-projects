package com.workintech.s18d1.util;

import com.workintech.s18d1.entity.Burger;
import com.workintech.s18d1.exceptions.BurgerException;
import org.springframework.http.HttpStatus;

public class BurgerValidation {

    public static void validateBurger(Burger burger){

        if (burger.getName() == null || burger.getName().trim().isEmpty()) {
            throw new BurgerException("Burger ismi boş veya geçersiz olamaz!", HttpStatus.BAD_REQUEST);
        }

        if (burger.getPrice() < 0) {
            throw new BurgerException("Burger fiyatı eksi bir değer olamaz!", HttpStatus.BAD_REQUEST);
        }

        if (burger.getContents() != null && burger.getContents().isEmpty()) {
            throw new BurgerException("Bir burgerin içeriği boş olamaz!", HttpStatus.BAD_REQUEST);
        }

    }
}
