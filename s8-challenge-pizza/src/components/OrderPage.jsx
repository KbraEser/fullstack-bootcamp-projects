import React from "react";
import "../css/order-page.css";
import OrderHeader from "./OrderHeader";
import OrderSizeThick from "./OrderSizeThick";
import OrderSupMaterial from "./OrderSupMaterial";
import OrderTotal from "./OrderTotal";
import { useState } from "react";
import Footer from "./Footer";
const OrderPage = ({ onOrderSuccess }) => {
  const initialMaterials = [1, 2, 3, 4];

  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [notes, setNotes] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [materials, setMaterials] = useState(initialMaterials);
  const [totalPriceSubMaterials, setTotalPriceSubMaterials] = useState(0);

  return (
    <article>
      <OrderHeader />
      <div className="order-container mx-auto">
        <section aria-label="Sipariş seçenekleri">
          <OrderSizeThick
            size={size}
            setSize={setSize}
            dough={dough}
            setDough={setDough}
          />
          <OrderSupMaterial
            materials={materials}
            setMaterials={setMaterials}
            totalPriceSubMaterials={totalPriceSubMaterials}
            setTotalPriceSubMaterials={setTotalPriceSubMaterials}
          />
          <OrderTotal
            quantity={quantity}
            setQuantity={setQuantity}
            fullName={fullName}
            setFullName={setFullName}
            notes={notes}
            setNotes={setNotes}
            totalPriceSubMaterials={totalPriceSubMaterials}
            size={size}
            dough={dough}
            materials={materials}
            onOrderSuccess={onOrderSuccess}
          />
        </section>
      </div>
      <Footer />
    </article>
  );
};

export default OrderPage;


