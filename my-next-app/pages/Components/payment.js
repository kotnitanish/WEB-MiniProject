import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import Image from "next/image";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showNetBankingForm, setShowNetBankingForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  const router = useRouter();

  const paymentMethods = [
    { name: "PhonePe", logo: "/phonepe.jpg" },
    { name: "Paytm", logo: "/paytmm.png" },
    { name: "Net Banking", logo: "/card.png" },
  ];

  const handlePaymentSelection = (method) => {
    setSelectedMethod(method);
    setShowQRCode(method !== "Net Banking");
    setShowNetBankingForm(method === "Net Banking");
    setCardNumber("");
  };

  const validatePayment = () => {
    if (cardNumber.length === 12) {
      setShowSuccess(true);
    } else {
      alert("Please enter a valid 12-digit card number.");
    }
  };

  const redirectToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    setSelectedMethod(null);
    setShowQRCode(false);
    setShowNetBankingForm(false);
    setShowSuccess(false);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color : "black",
        margin: 0,
      }}
    >
      {!showSuccess ? (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            // boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(245, 73, 144, 0.5) 5px 10px 15px",
            width: "400px",
            textAlign: "center",
          }}
        >
          <h2>Choose Payment Method</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px 0",
            }}
          >
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.logo}
                alt={method.name}
                width={90}
                height={90}
                style={{ cursor: "pointer" }}
                onClick={() => handlePaymentSelection(method.name)}
              />
            ))}
          </div>
          {showQRCode && selectedMethod && (
            <div style={{ marginTop: "20px" }}>
              <QRCode value={`Payment via ${selectedMethod}`} size={150} />
            </div>
          )}
          {showNetBankingForm && (
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="card">Card Number:</label>
              <input
                type="text"
                id="card"
                maxLength="12"
                placeholder="Enter 12-digit card number"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <label htmlFor="expiry">Expiry Date:</label>
              <input
                type="month"
                id="expiry"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="password"
                id="cvv"
                maxLength="3"
                placeholder="*"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={validatePayment}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#5a67d8",
                  color: "white",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "15px",
                  transition: "background 0.3s ease",
                }}
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            width: "400px",
            textAlign: "center",
          }}
        >
          <h2>Payment Successful!</h2>
          <button
            onClick={redirectToHome}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#5a67d8",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
              transition: "background 0.3s ease",
            }}
          >
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
