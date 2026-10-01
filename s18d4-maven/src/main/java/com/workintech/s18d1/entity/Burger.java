package com.workintech.s18d1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "burger")
public class Burger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String name;
   private double price;
   @Column(name = "is_vegan")
   private boolean isVegan;
   @Enumerated(EnumType.STRING)
   @Column(name = "bread_type")
   private BreadType breadType;
   private String contents;
}
