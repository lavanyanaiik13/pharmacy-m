
import { useState, useRef } from "react";
import "./HealthPackages.css";

function HealthPackages() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [name, setName] = useState("");
const [age, setAge] = useState("");
const [phone, setPhone] = useState("");

  const packagesRef = useRef(null);
  const bookingRef = useRef(null);

  const handleBooking = (e) => {
  e.preventDefault();

  // NAME VALIDATION
  if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Name should contain only letters");
    return;
  }

  // AGE VALIDATION
  if (!/^\d{1,2}$/.test(age)) {
    alert("Age should contain maximum 2 digits");
    return;
  }

  // PHONE VALIDATION
  // PHONE VALIDATION
if (!/^[6789][0-9]{9}$/.test(phone)) {
  alert(
    "Phone number must start with 6, 7, 8, or 9 and contain exactly 10 digits"
  );
  return;
}

  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);
};

  const scrollToPackages = () => {
    packagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookNow = (pkgName) => {
    setSelectedPackage(pkgName);
    bookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

 const packages = [
    {
      name: "Full Body Checkup",
      price: "₹999",
      desc: "Comprehensive health screening",
      tests: [
        "CBC",
        "Blood Sugar (Fasting & PP)",
        "Liver Function",
        "Kidney Function",
        "Lipid Profile",
        "Thyroid (TSH)",
        "Vitamin D & B12",
      ],
      who: "Ideal for complete health evaluation",
    },
    {
      name: "Diabetes Care",
      price: "₹499",
      desc: "Monitor sugar levels",
      tests: [
        "Fasting Sugar",
        "Post Meal Sugar",
        "HbA1c",
        "Urine Sugar",
        "Insulin Level",
      ],
      who: "For diabetic & pre-diabetic patients",
    },
    {
      name: "Heart Health",
      price: "₹799",
      desc: "Cardiac risk analysis",
      tests: [
        "ECG",
        "Lipid Profile",
        "BP Check",
        "Troponin",
        "CRP Test",
      ],
      who: "For heart risk monitoring",
    },
    {
      name: "Women Wellness",
      price: "₹899",
      desc: "Women-specific tests",
      tests: [
        "Hemoglobin",
        "Thyroid",
        "Calcium",
        "Iron",
        "Hormonal Check",
      ],
      who: "For women's health balance",
    },
    {
      name: "Senior Citizen",
      price: "₹1199",
      desc: "Complete elderly care",
      tests: [
        "Bone Density",
        "Vitamin Levels",
        "Sugar & BP",
        "Kidney & Liver",
        "ECG",
      ],
      who: "For age-related health monitoring",
    },
    {
      name: "Liver Care Package",
      price: "₹649",
      desc: "Monitor and protect liver health",
      tests: [
        "SGPT (ALT)",
        "SGOT (AST)",
        "Alkaline Phosphatase",
        "Bilirubin (Total & Direct)",
        "Protein Levels",
        "Albumin Test"
      ],
      who: "For people with liver concerns or unhealthy lifestyle habits",
    }
  ];

  return (
    <div className="page">

      {/* HERO */}
      <section className="heroo">
        <div className="hero-overlay">
          <h1>Health Checkup Packages</h1>
          <p>Prevent today, protect tomorrow</p>
          <button className="primary-btn" onClick={scrollToPackages}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages" ref={packagesRef}>
        {packages.map((pkg, index) => (
          <div className="card" key={index}>
            <h2 className="package-title">{pkg.name}</h2>
            <h3>{pkg.price}</h3>
            <p>{pkg.desc}</p>

            <ul>
              {pkg.tests.map((t, i) => (
                <li key={i}>✔ {t}</li>
              ))}
            </ul>

            <button
              className="secondary-btn"
              onClick={() => handleBookNow(pkg.name)}
            >
              Book Now
            </button>
          </div>
        ))}
      </section>

      {/* BOOKING */}
      <section className="booking" ref={bookingRef}>
        <div className="booking-container">

          {/* LEFT */}
          <div className="booking-left">
            <h2>Your Health Matters</h2>
            <div className="heading-line"></div>

            <p>
              Stay protected and take the right step towards a healthier life.
            </p>

            <ul className="health-points">
              <li>✔ Early disease detection</li>
              <li>✔ Regular health monitoring</li>
              <li>✔ Prevent future complications</li>
              <li>✔ Better lifestyle management</li>
              <li>✔ Accurate test results</li>
              <li>✔ Personalized insights</li>
              <li>✔ Timely medical guidance</li>
              <li>✔ Improved quality of life</li>
            </ul>

            <div className="booking-image"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleBooking} className="booking-form">
            <h2>Book Your Checkup</h2>

           {/* NAME */}
<input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, "");
    setName(value);
  }}
  required
/>

{/* AGE */}
<input
  type="text"
  placeholder="Age"
  value={age}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setAge(value);
  }}
  required
/>

{/* PHONE */}
{/* PHONE */}
<input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");

    // First digit must be 6,7,8,9
    if (value.length === 1 && !/[6789]/.test(value)) {
      value = "";
    }

    // Max 10 digits
    value = value.slice(0, 10);

    setPhone(value);
  }}
  required
/>

            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              required
            >
              <option value="">Select Package</option>
              {packages.map((pkg, i) => (
                <option key={i} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>

            <button type="submit">Confirm Booking</button>
          </form>

        </div>
      </section>

      {/* SUCCESS */}
      {showSuccess && (
        <div className="success">
          Booking Successful!
        </div>
      )}
<section className="info">
        <div className="info-img"></div>

        <div className="info-text">
          <h2>Why Full Body Checkup is Important?</h2>
          <p>
            Regular health checkups help detect diseases early and ensure your
            body stays in optimal condition. Prevention is always better than cure.
          </p>

          <h3>Benefits</h3>
          <ul>
            <li>✔ Early detection of diseases</li>
            <li>✔ Prevent health risks</li>
            <li>✔ Saves long-term costs</li>
            <li>✔ Regular health monitoring</li>
            
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
  <h2 className="faq-title">Frequently Asked Questions</h2>

  <div className="faq-container">

    <div className="faq-card">
      <h3>🩺 Do I need to fast before undergoing a full body health checkup?</h3>
      <p>✔ Yes, fasting is required for certain blood tests such as glucose and cholesterol. 
      It is usually recommended to fast for 8–12 hours before your test to ensure accurate results 
      and avoid any interference caused by food intake.</p>
    </div>

    <div className="faq-card">
      <h3>⏱ How long does a complete health checkup usually take?</h3>
      <p>✔ A standard full body health checkup typically takes around 30 to 60 minutes. 
      However, depending on the number of tests included in your package, it may take slightly longer. 
      Our team ensures a smooth and quick experience.</p>
    </div>

    <div className="faq-card">
      <h3>📄 When will I receive my detailed health reports?</h3>
      <p>✔ Most reports are delivered within 24 hours after your tests are completed. 
      In some cases, specialized tests may take a little longer. You will receive 
      your reports digitally via email or through our portal.</p>
    </div>

    <div className="faq-card">
      <h3>💻 Can I book my health checkup online without visiting the clinic?</h3>
      <p>✔ Yes, you can easily book your appointment online through our website. 
      Choose your preferred package, select a convenient time slot, and confirm your booking 
      in just a few clicks.</p>
    </div>

    <div className="faq-card">
      <h3>🏥 Is home sample collection available for health checkups?</h3>
      <p>✔ Absolutely! We offer home sample collection services for your convenience. 
      Our trained professionals will visit your home at your scheduled time, ensuring 
      safety, hygiene, and comfort.</p>
    </div>

  </div>
</section>

       {/* TRUST */}
      <section className="trust">
        <div>✔ Certified Labs</div>
        <div>✔ Experienced Doctors</div>
        <div>✔ Fast Reports (24 hrs)</div>
        <div>✔ Affordable Pricing</div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Your health, our priority</p>
        <p>Email: support@healnest.com | Phone: +91 9876543210</p>
      </footer>
    </div>
  );
}

export default HealthPackages;