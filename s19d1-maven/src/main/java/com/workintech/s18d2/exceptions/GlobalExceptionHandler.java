package com.workintech.s18d2.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PlantException.class)
    public ResponseEntity<PlantErrorResponse> handlePlantException(PlantException plantException){

        PlantErrorResponse errorResponse = new PlantErrorResponse(
                plantException.getHttpStatus().value(),
                plantException.getMessage(),
                System.currentTimeMillis()
        );
        return new ResponseEntity<>(errorResponse,plantException.getHttpStatus());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<PlantErrorResponse> handleGeneralException(Exception exception){

        PlantErrorResponse errorResponse = new PlantErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                exception.getMessage(),
                System.currentTimeMillis()
        );
        return new ResponseEntity<>(errorResponse,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
