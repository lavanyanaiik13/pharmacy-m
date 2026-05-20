import { useState } from "react";
import "./Blog.css";

const blogs = [
  {
    title: "5 Tips for a Healthy Life",
    category: "Wellness",
    desc: "Build strong daily habits for long-term health and immunity.",
    paragraphs: [
      "A healthy lifestyle starts with consistency in daily habits. Small improvements lead to long-term wellness.",
      "Drinking enough water improves digestion, skin health, and overall body function.",
      "Regular physical activity strengthens the heart, muscles, and immune system.",
      "A balanced diet with fruits, vegetables, and proteins is essential for energy.",
      "Proper sleep of 7–8 hours helps body recovery and mental clarity."
    ],
    points: [
      "Drink 2–3L water daily",
      "Exercise at least 30 minutes",
      "Eat balanced nutrition",
      "Sleep 7–8 hours",
      "Avoid junk food"
    ],
    img: "https://images.pexels.com/photos/5215006/pexels-photo-5215006.jpeg"
  },
  {
    title: "Benefits of Vitamins",
    category: "Nutrition",
    desc: "Vitamins are essential for immunity, energy, and body growth.",
    paragraphs: [
      "Vitamins play a vital role in maintaining body metabolism and immunity.",
      "Vitamin C helps in healing wounds and boosting immunity.",
      "Vitamin D strengthens bones and supports calcium absorption.",
      "Vitamin B complex improves energy production and brain function.",
      "A deficiency in vitamins may lead to fatigue and weakness."
    ],
    points: [
      "Take Vitamin C sources",
      "Get sunlight daily",
      "Eat green vegetables",
      "Include dairy products",
      "Maintain balanced diet"
    ],
    img: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg"
  },
  {
    title: "Modern Medical Care",
    category: "Healthcare",
    desc: "Technology is transforming healthcare systems globally.",
    paragraphs: [
      "Modern healthcare uses advanced technology for better diagnosis and treatment.",
      "AI systems help detect diseases at early stages.",
      "Telemedicine allows patients to consult doctors remotely.",
      "Digital health records reduce errors and improve efficiency.",
      "Wearable devices help monitor health in real-time."
    ],
    points: [
      "Use digital health apps",
      "Track health regularly",
      "Consult online doctors",
      "Monitor vitals",
      "Follow medical advice"
    ],
    img: "https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg"
  }
];

const extraData = {
  nutrition: {
    title: "🥗 Nutrition & Diet Concern",
    img: "https://images.pexels.com/photos/8844389/pexels-photo-8844389.jpeg",
    text:
      "Nutrition is the foundation of overall health and plays a crucial role in maintaining physical and mental well-being. A balanced diet that includes carbohydrates, proteins, healthy fats, vitamins, and minerals helps the body function efficiently. Poor nutrition can lead to chronic diseases such as diabetes, obesity, heart disease, and weakened immunity. Eating fresh fruits, vegetables, whole grains, and staying hydrated supports energy levels and improves digestion. Proper nutrition also enhances brain function, mood stability, and long-term disease prevention, making it one of the most important pillars of a healthy lifestyle."
  },

  lab: {
    title: "🧪 Lab Test Insights",
    img: "https://www.greatlakesnow.org/wp-content/uploads/2018/08/Laboratory-testing.jpg",
    text:
      "Lab tests are a critical part of modern healthcare, helping doctors detect, diagnose, and monitor various medical conditions at an early stage. Tests such as blood sugar, cholesterol, liver function, and complete blood counts provide detailed insights into the body’s internal health. Early detection through lab reports allows timely treatment and prevents complications from developing into serious diseases. Regular health checkups are especially important for individuals with risk factors such as diabetes, hypertension, or a family history of illness. Accurate lab results guide doctors in choosing the right treatment and improving patient outcomes effectively."
  },

  health: {
    title: "🏥 Healthcare & Wellness",
    img: "https://vidhilegalpolicy.in/wp-content/uploads/2023/04/iStock-1418999473.jpg",
    text:
      "Healthcare and wellness go beyond treating illness—they focus on preventing diseases and maintaining a balanced lifestyle. Good health is achieved through regular exercise, proper sleep, stress management, and a nutritious diet. Preventive healthcare practices such as vaccinations, routine checkups, and early screenings help reduce the risk of serious health conditions. Mental health is equally important, as stress and anxiety can affect physical well-being. A holistic approach that combines physical fitness, emotional stability, and healthy habits ensures long-term wellness and improves the overall quality of life."
  }
};

export default function Blog() {

  const [openIndex, setOpenIndex] = useState(null);
  const [activeBox, setActiveBox] = useState("nutrition");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // ✅ ONLY NEW ADDITION
  const [success, setSuccess] = useState(false);

  const feedbackType = [
    "Blog Quality",
    "Medical Information",
    "Design Experience",
    "Suggestions"
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // ✅ ONLY NEW FUNCTION
  const handleSubmit = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (
    <div className="blog-page">

      {/* ✅ SUCCESS POPUP (NEW ONLY) */}
      {success && (
        <div className="success-popup">
          🎉 Feedback submitted successfully!
        </div>
      )}

      {/* HERO */}
      <div className="herro">
        <h1 className="hero-title">Pharmacy Medical Blog</h1>
        <p className="hero-subtitle">
          Trusted healthcare insights for better living
        </p>
      </div>

      {/* BLOG LIST */}
      <div className="blog-list">

        {blogs.map((blog, i) => (
          <div className="blog-card" key={i}>

            <div className="image-block">
              <img src={blog.img} alt="" />
              <span className="tag">{blog.category}</span>
            </div>

            <div className="content">

              <h2>{blog.title}</h2>
              <p className="desc">{blog.desc}</p>

              <div className="points">
                {blog.points.map((p, idx) => (
                  <div key={idx} className="point-item">
                    <span className="tick">✔</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className={`paragraphs ${openIndex === i ? "show" : ""}`}>
                {blog.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <button className="read-btn" onClick={() => toggle(i)}>
                {openIndex === i ? "Show Less" : "Read More"}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* BOX SECTION */}
      <h2 className="extra-title">🌿 Health Knowledge Hub</h2>

      <div className="box-container">

        <div className={`info-box ${activeBox === "nutrition" ? "active" : ""}`}
          onClick={() => setActiveBox("nutrition")}>
          🥗 Nutrition & Diet Concern
        </div>

        <div className={`info-box ${activeBox === "lab" ? "active" : ""}`}
          onClick={() => setActiveBox("lab")}>
          🧪 Lab Test
        </div>

        <div className={`info-box ${activeBox === "health" ? "active" : ""}`}
          onClick={() => setActiveBox("health")}>
          🏥 Healthcare
        </div>

      </div>

      <div className="extra-content">

        <div className="extra-img">
          <img src={extraData[activeBox].img} alt="" />
        </div>

        <div className="extra-text">
          <h3>{extraData[activeBox].title}</h3>
          <p>{extraData[activeBox].text}</p>
        </div>

      </div>

      {/* FEEDBACK */}
     <div className="feedback-wrapper">

  <h2 className="feedback-title">💬 Your Feedback Matters</h2>

  <div className="feedback-container">

    {/* FORM */}
    <form
      className="feedback-form"
      onSubmit={(e) => {
        e.preventDefault();

        if (rating === 0) {
          alert("Please give a rating");
          return;
        }

        handleSubmit();
      }}
    >

      {/* NAME */}
      <label>Name</label>

      <input
        type="text"
        required
        pattern="[A-Za-z ]+"
        title="Only alphabets are allowed"
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
        }}
      />

      {/* EMAIL */}
      <label>Email</label>

      <input type="email" required />

      {/* SELECT */}
      <select required defaultValue="">
        <option value="" disabled>
          Select Feedback Type
        </option>

        {feedbackType.map((t, i) => (
          <option key={i}>{t}</option>
        ))}
      </select>

      {/* STAR RATING */}
      <div className="rating-box">

        <p className="rating-label">
          {rating === 0
            ? "Rate your experience"
            : `${rating} / 5 Selected`}
        </p>

        <div className="star-row">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (hover || rating) ? "star active" : "star"}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <small className="rating-type">
          ⭐ Blog Quality / Feedback Rating
        </small>

      </div>

      {/* MESSAGE */}
      <textarea
        placeholder="Write your message..."
        required
      />

      {/* BUTTON */}
      <button type="submit" className="feedback-btn">
        Submit
      </button>

    </form>

  </div>

</div>
    </div>
  );
}