import React, { useState } from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PIZZA_SIZES = [
  { id: "Küçük", label: "Küçük" },
  { id: "Orta", label: "Orta" },
  { id: "Büyük", label: "Büyük" },
];

const OrderSizeThick = ({ size, setSize, dough, setDough }) => {
  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  return (
    <Row className="mb-5">
      <Col xs={6}>
        <h5 className="font-barlow fw-semibold section-title fs-5">
          Boyut Seç <span className="text-danger">*</span>
        </h5>
        {PIZZA_SIZES.map(({ id, label }) => (
          <FormGroup key={id} check>
            <Input
              type="radio"
              name="pizzaSize"
              id={id}
              value={id}
              checked={size === id}
              onChange={handleChange}
            />
            <Label
              className="text-acik-gri fw-normal fs-6 font-barlow"
              htmlFor={id}
              check
            >
              {label}
            </Label>
          </FormGroup>
        ))}
      </Col>
      <Col xs={6}>
        <FormGroup>
          <Label
            className="font-barlow fw-semibold section-title fs-5"
            htmlFor="dough"
          >
            Hamur Seç <span className="text-danger">*</span>
          </Label>
          <Input
            type="select"
            name="dough"
            id="dough"
            value={dough}
            onChange={handleDoughChange}
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default OrderSizeThick;
