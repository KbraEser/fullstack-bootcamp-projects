package com.workintech.fswebs18challengemaven.controller;

import com.workintech.fswebs18challengemaven.entity.Card;
import com.workintech.fswebs18challengemaven.entity.Color;
import com.workintech.fswebs18challengemaven.entity.Type;
import com.workintech.fswebs18challengemaven.exceptions.CardException;
import com.workintech.fswebs18challengemaven.repository.CardRepository;
import com.workintech.fswebs18challengemaven.util.CardValidation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/cards")
@Slf4j
public class CardController {
    private CardRepository cardRepository;

    @Autowired
    public CardController(CardRepository cardRepository){
        this.cardRepository=cardRepository;
    }

     @GetMapping
     public List<Card> getAllCards(){
         log.info("Fetching all cards");
        return  cardRepository.findAll();
     }

     @GetMapping("/byColor/{color}")
     public List<Card> getCardsByColor(@PathVariable String color){
         log.info("Fetching cards by color: {}", color);
        try{
            Color colorEnum = Color.valueOf(color.toUpperCase());
            return cardRepository.findByColor(color);
        }catch(IllegalArgumentException e){
            throw new CardException("Card not found", HttpStatus.NOT_FOUND);
         }
     }

     @PostMapping
     public Card createCard(@RequestBody Card card){
         log.info("Saving a new card: {}", card);
        return cardRepository.save(card);
     }

     @PutMapping("/")
     public Card updateCard(@RequestBody Card card){
          var id = card.getId();
         log.info("Updating card with ID: {}",id);
        Card existingCard = cardRepository.findAll().stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
        card.setId(id);
         CardValidation.checkCardExistence(existingCard, id);
        return cardRepository.update(card);
    }

    @DeleteMapping("/{id}")
    public Card deleteCard(@PathVariable Long id){
        log.info("Deleting card with ID: {}", id);
       CardValidation.validateCardId(id);
       Card card = cardRepository.remove(id);
       CardValidation.checkCardExistence(card,id);
       return card;
    }

    @GetMapping("/byValue/{value}")
    public List<Card> getCardByValue(@PathVariable Integer value){
        log.info("Fetching cards by value: {}", value);
        return cardRepository.findByValue(value);
    }

    @GetMapping("/byType/{type}")
    public List<Card> getCardsByType(@PathVariable String type){
        log.info("Fetching cards by type: {}", type);
        try{
            Type typeEnum = Type.valueOf(type.toUpperCase());
            return cardRepository.findByType(type);
        }catch(IllegalArgumentException e){
            throw new CardException("Unexpected error" ,HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


}
