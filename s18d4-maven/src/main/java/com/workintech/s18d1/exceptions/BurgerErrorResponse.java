package com.workintech.s18d1.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BurgerErrorResponse {

    public BurgerErrorResponse(String message) {
        this.message = message;
    }

    private int status;
    private String message;
    private long timestamp;
}
