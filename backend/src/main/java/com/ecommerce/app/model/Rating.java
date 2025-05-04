package com.ecommerce.app.model;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rating {
    @NotNull(message = "Rating rate is required")
    @DecimalMin(value = "0.0", message = "Rating rate must be at least 0.0")
    @DecimalMax(value = "5.0", message = "Rating rate must be at most 5.0")
    private double rate;

    @NotNull(message = "Rating count is required")
    private Integer count;
}
