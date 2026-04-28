import { useState } from "react";
import "./Prescription.css";

function Prescription() {
  const [file, setFile] = useState(null);
  const [verified, setVerified] = useState(false);
  const [showVerifyMsg, setShowVerifyMsg] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const medicines = [
    { 
      name: "Paracetamol", 
      desc: "Fever & pain relief", 
      price: "₹50", 
      stock: "In Stock",
      dosage: "1 tablet after food",
      timing: "Morning & Night"
    },
    { 
      name: "Amoxicillin", 
      desc: "Antibiotic", 
      price: "₹120", 
      stock: "In Stock",
      dosage: "Twice daily",
      timing: "After meals"
    },
    { 
      name: "Vitamin D", 
      desc: "Immunity booster", 
      price: "₹90", 
      stock: "Limited",
      dosage: "Once daily",
      timing: "Morning"
    },
  ];

  const handleVerify = () => {
    if (!file) {
      alert("Upload prescription first!");
      return;
    }
    setVerified(true);
    setShowVerifyMsg(true);
    setTimeout(() => setShowVerifyMsg(false), 2500);
  };

  const handleOrder = () => {
    if (!verified) {
      alert("Please verify prescription first!");
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <div className="page">

      {/* HERO */}
    <section className="hero">
  <div className="hero-content">
    
    <h1 className="hero-title">
      ✨ Wellness Prescription Hub ✨
    </h1>

    <p className="hero-subtitle">
      Fast • Secure • Reliable healthcare at your fingertips
    </p>

  </div>
</section>

      {/* POPUPS */}
      {showVerifyMsg && (
        <div className="popup">
          ✅ Prescription Verified Successfully
        </div>
      )}

      {orderPlaced && (
        <div className="popup order-success">
          🎉 Order Placed Successfully!
        </div>
      )}

      {/* BOXES */}
      <section className="three-box move-up">

        <div className="box premium-box float">
          <h2>📤 Upload Prescription</h2>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setVerified(false);
            }}
          />
          <button className="btn shine" onClick={handleVerify}>
            Upload & Verify
          </button>
          {file && <p className="preview">📄 {file.name}</p>}
        </div>

        <div className="box premium-box float delay">
          <h2>🧍 Patient Details</h2>
          <input type="text" placeholder="Full Name" />
          <input type="number" placeholder="Age" />
          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Address"></textarea>
        </div>

        <div className="box premium-box float delay2">
          <h2>🧾 Order Summary</h2>
          {!verified ? (
            <p className="disabled"> Upload & verify to see summary </p>
          ) : (
            <>
              <p>💊 Medicine: ₹260</p>
              <p>🚚 Delivery: ₹40</p>
              <h3>Total: ₹300</h3>
              <p>⏱ ETA: 2-3 Days</p>
              <button className="btn shine" onClick={handleOrder}>
                Place Order
              </button>
            </>
          )}
        </div>

      </section>

      {/* MEDICINES */}
      <section className="medicine-section fade-in">
        <h2 className="section-title highlight-left">
           Suggested Medicines
        </h2>

        <div className="medicine-grid">
          {medicines.map((m, i) => (
            <div key={i} className="card glass-card glow">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png"
                alt="medicine"
              />
              <h3>💊 {m.name}</h3>
              <p>📝 {m.desc}</p>
              <p>💡 Dosage: {m.dosage}</p>
              <p>⏰ Timing: {m.timing}</p>
              <span>💰 {m.price}</span>
              <small>📦 {m.stock}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ RESTORED TIPS SECTION */}
     {/* HEALTH GUIDE (UPDATED) */}
<section className="tips fade-in">
  <h2 className="section-title highlight-left">
    Health Guide
  </h2>

  <div className="health-guide">

    {/* LEFT IMAGE */}
    <div className="health-img">
      <img src="https://static01.nyt.com/images/2023/04/23/multimedia/23WELL-HEALTHY-BREAKFAST9-lgwc/23WELL-HEALTHY-BREAKFAST9-lgwc-videoSixteenByNine3000.jpg" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="health-content">

      <h3>❤️ Healthy Living Essentials</h3>
      <p>
        Maintaining good health requires a balance of proper nutrition, hydration,
        and daily habits. Follow these simple guidelines to stay fit and energetic.
      </p>

      <h4>✔ What to Eat</h4>
      <ul>
        <li>🥗 Fresh vegetables & fruits</li>
        <li>🍚 Whole grains & proteins</li>
        <li>🥛 Milk & calcium-rich foods</li>
      </ul>

      <h4>✔ Stay Hydrated</h4>
      <ul>
        <li>💧 Drink 7–8 glasses of water daily</li>
        <li>🍋 Include natural juices</li>
        <li>🚫 Avoid excessive sugary drinks</li>
      </ul>

      <h4>✔ Daily Habits</h4>
      <ul>
        <li>🏃 Exercise at least 30 minutes</li>
        <li>😴 Get 7–8 hours sleep</li>
        <li>🧘 Practice stress management</li>
      </ul>

    </div>
  </div>
</section>
      {/* ✅ FOOTER RESTORED */}
     

    </div>
  );
}

export default Prescription;