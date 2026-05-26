package com.workintech.fswebs18challengemaven.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardErrorResponse {

    public CardErrorResponse(String message){
        this.message = message;
    }

    private int status;
    private String message;
    private long timestamp;
}
