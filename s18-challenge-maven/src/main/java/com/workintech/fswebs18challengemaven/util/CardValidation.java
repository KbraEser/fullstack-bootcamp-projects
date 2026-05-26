package com.workintech.fswebs18challengemaven.util;

import com.workintech.fswebs18challengemaven.entity.Card;
import com.workintech.fswebs18challengemaven.exceptions.CardException;
import org.springframework.http.HttpStatus;

public class CardValidation {

    public static void validateCardId(Long id){
        if(id == null || id <=0){
            throw new CardException("Invalid card ıD provided", HttpStatus.BAD_REQUEST);
        }
    }

    public static void checkCardExistence(Card card,Long id){
        if (card == null) {
            throw new CardException("Card with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }
}
