import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrderPage from "./components/OrderPage";
import Success from "./components/Success";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const navigate = useNavigate();
  const handleOrderSuccess = (orderData) => {
    setSubmittedOrder(orderData);
    navigate("/success");
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/order"
          element={<OrderPage onOrderSuccess={handleOrderSuccess} />}
        />
        <Route
          path="/success"
          element={<Success orderData={submittedOrder} />}
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
