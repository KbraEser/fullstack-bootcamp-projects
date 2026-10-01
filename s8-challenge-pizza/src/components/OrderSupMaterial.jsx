import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

export const SUP_MATERIALS = [
  { id: 1, name: "Pepperoni", price: 5 },
  { id: 2, name: "Sosis", price: 5 },
  { id: 3, name: "Kanada Jambonu", price: 5 },
  { id: 4, name: "Tavuk Izgara", price: 5 },
  { id: 5, name: "Soğan", price: 5 },
  { id: 6, name: "Domates", price: 5 },
  { id: 7, name: "Mısır", price: 5 },
  { id: 8, name: "Sucuk", price: 5 },
  { id: 9, name: "Jalepeno", price: 5 },
  { id: 10, name: "Sarımsak", price: 5 },
  { id: 11, name: "Biber", price: 5 },
  { id: 12, name: "Salam", price: 5 },
  { id: 13, name: "Ananas", price: 5 },
  { id: 14, name: "Kabak", price: 5 },
];
const MIN_MATERIALS = 4;
const MAX_MATERIALS = 10;

const OrderSupMaterial = ({
  materials,
  setMaterials,
  totalPriceSubMaterials,
  setTotalPriceSubMaterials,
}) => {
  useEffect(() => {
    setTotalPriceSubMaterials(
      materials.reduce(
        (acc, id) => acc + SUP_MATERIALS.find((m) => m.id === id).price,
        0,
      ),
    );
  }, [materials]);

  const handleChange = (id) => {
    setMaterials((prevMaterials) => {
      if (prevMaterials.includes(id)) {
        if (prevMaterials.length <= MIN_MATERIALS) {
          toast.warning("En az 4 malzeme seçmelisiniz.", {
            toastId: "min-materials",
          });
          return prevMaterials;
        }
        return prevMaterials.filter((mId) => mId !== id);
      }
      if (prevMaterials.length >= MAX_MATERIALS) {
        toast.warning("En fazla 10 malzeme seçebilirsiniz.", {
          toastId: "max-materials",
        });
        return prevMaterials;
      }
      return [...prevMaterials, id];
    });
  };
  return (
    <div>
      <h5 className="font-barlow fw-semibold section-title fs-5 mb-3">
        Ek Malzemeler
      </h5>
      <p className="font-barlow fw-normal fs-6 text-acik-gri  mb-5">
        En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
      </p>
      <Row className="mb-4">
        {SUP_MATERIALS.map((material) => (
          <Col key={material.id} sm={4} xs={6}>
            <FormGroup key={material.id} check>
              <div className="d-flex align-items-center gap-2 mb-3">
                <Input
                  type="checkbox"
                  name="materials"
                  id={String(material.id)}
                  checked={materials.includes(material.id)}
                  onChange={() => handleChange(material.id)}
                />
                <Label htmlFor={String(material.id)} className="mb-0">
                  {material.name}
                </Label>
              </div>
            </FormGroup>
          </Col>
        ))}{" "}
        <p className="font-barlow fw-normal fs-6 text-acik-gri">
          Toplam Fiyata Eklenecek: {totalPriceSubMaterials}₺
        </p>
      </Row>
    </div>
  );
};

export default OrderSupMaterial;
