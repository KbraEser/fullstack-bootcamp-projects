package com.workintech.fswebs18challengemaven.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer value;
    @Enumerated(EnumType.STRING)
    private Type type;
    @Enumerated(EnumType.STRING)
    private Color color;

    public Card(Long id, Integer value,Color color){
        this.id = id;
        this.value = value;
        this.color = color;
        this.type = null;
    }

    public Card(Long id, Type type,Color color){
        if (type == Type.JOKER) {
            this.id = id;
            this.type = type;
            this.value = null;
            this.color = null;
        } else {
            this.id = id;
            this.type = type;
            this.color = color;
            this.value = null;
        }
    }
}
