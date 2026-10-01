package com.workintech.s17d2.model;

import org.springframework.stereotype.Component;

@Component
public class MidDeveloper extends Developer{
    public MidDeveloper(int id, String name, Double salary) {
        super(id, name, salary,Experience.MID);

    }
}
