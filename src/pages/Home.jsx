import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [blur, setBlur] = useState(false);
  const [split, setSplit] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [hovered, setHovered] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setBlur(true), 600);
    const t2 = setTimeout(() => setSplit(true), 1200);
    const t3 = setTimeout(() => setHideLoader(true), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  const articles = [
    {
      title: "Cardoon Vegetable: Health Benefits",
      desc: "A Mediterranean vegetable rich in antioxidants and digestive benefits.As in celery, cardoon too is of very low-calorie leaf vegetable, carrying just 17 calories per 100 g. Nonetheless, it contains unique health-benefiting plant nutrients such as antioxidants",
      img: "https://img.freepik.com/premium-photo/cardoon-plant-aka-artichoke-thistle-globe-artichoke-concept-vegetable-garden-edible-plants-botanical-illustration_918839-114198.jpg?w=1060",
      wiki: "https://en.wikipedia.org/wiki/Artichoke",
    },
    {
      title: "Allantoin For Skin",
      desc: "Helps soothe irritation and supports skin healing and softness. Allantoin is a humectant. That means it helps to bring water from the lower levels of your skin to the top, can lower cholesterol, support digestion, boost energy, and help with weight control.",
      img: "https://thedermspot.com/wp-content/uploads/2023/09/Clearing-the-Path-to-Radiant-Skin-Harnessing-the-Power-of-Azelaic-Acid-for-Hyperpigmentation-2048x1280.jpeg",
      wiki: "https://en.wikipedia.org/wiki/Allantoin",
    },
    {
      title: "How To Eat Rice The Right Way",
      desc: "Improve digestion and nutrition absorption with proper rice habits.Wondering is rice good for you? Discover how different types of rice, like brown, black, and wild, can lower cholesterol, support digestion, boost energy, and help with weight control.",
      img: "https://www.japonalternativo.com/wp-content/uploads/2019/05/arroz-blanco-japones-alimentacion-japonesa.jpg",
      wiki: "https://en.wikipedia.org/wiki/Rice",
    },
    {
      title: "Immunity Boosting Foods",
      desc: "Natural foods that help strengthen your immune system daily.Best Immunity-Rich Foods & their Benefits: Learn more about the foods containing Immunity, fruits, vegetables, and meat options, their benefits and symptoms of deficiency.",
      img: "https://pricechopperready.com/home/wp-content/gallery/articles/ImmuneBoostingFoods.jpg",
      wiki: "https://en.wikipedia.org/wiki/Immune_system",
    },
    {
      title: "Vitamin D Importance",
      desc: "Essential for bone strength, mood balance and immunity.Vitamin D offers numerous under-recognized health benefits beyond its well-known role in musculoskeletal health. It is vital for extra-renal tissues, prenatal health.",
      img: "https://tse3.mm.bing.net/th/id/OIP.4r74qBPO1eV_w6w5zluiEQHaEK?pid=Api&P=0&h=180",
      wiki: "https://en.wikipedia.org/wiki/Vitamin_D",
    },
    {
      title: "Hydration & Body Health",
      desc: "Why drinking enough water is key for overall wellness.Showcasing a healthy mind, body, and soul through photographs of medical discoveries, alternative medicines, healthy eating, and meditation.",
      img: "http://images.unsplash.com/photo-1584056866693-1f9d42e9feb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d2F0ZXIlMjBoYW5kfHwwfHx8fDE2MjgzMDE1NzE&ixlib=rb-1.2.1&q=80&w=1080",
      wiki: "https://en.wikipedia.org/wiki/Water_intoxication",
    },
    {
      title: "Healthy Skincare Routine",
      desc: "Daily steps for glowing and healthy skin naturally. A consistent daily skincare routine is vital for maintaining healthy, glowing skin. By cleansing, moisturizing, protecting, and treating your skin daily.",
      img: "https://media.istockphoto.com/id/1460122336/photo/cream-lotion-and-face-of-black-woman-with-beauty-product-skincare-cosmetics-and-advertising.webp?b=1&s=612x612&w=0&k=20&c=j8sMlQhOUHDCxdsYDFmRddrm4LQUlG-ZVN8Mouj_k6E=",
      wiki: "https://en.wikipedia.org/wiki/Skin_care",
    },
    {
      title: "Balanced Diet Tips",
      desc: "Simple diet habits for long-term health improvement.Discover the importance of a balanced diet. Explore benefits, how to maintain a balanced diet, diet charts and its role in improving health.",
      img: "https://img-cdn.publive.online/filters:format(webp)/established/media/post_attachments/theestablished/2025-03-07/9mlq8re6/assortment_of_healthy_high_magnesium_sources_food_2024_10_11_10_23_18_utc.jpg",
      wiki: "https://en.wikipedia.org/wiki/Balanced_diet",
    },
    {
      title: "Stuck In A Weight Loss Plateau?",
      desc: "Have you been eating healthy, exercising regularly, and still noticing that the scale refuses to move? That frustrating stage where your weight loss progress suddenly slows down or completely stalls is commonly known as a weight loss plateau.",
      img: "https://www.pritikin.com/wp-content/uploads/2022/09/5-Tips-For-Breaking-Through.png",
      wiki: "https://en.wikipedia.org/wiki/Balanced_diet",
    },
    {
      title: "PCOS Skin Problem ",
      desc: "Have you been struggling with stubborn acne, dark patches, or unusual, abnormal facial hair, specifically if you are in your late twenties? Your skin may be reflecting a deeper hormonal issue. ",
      img: "https://media.istockphoto.com/id/1330381962/photo/woman-with-problem-skin.webp?a=1&b=1&s=612x612&w=0&k=20&c=WRV_2WEJBXxW-aFbVSOTrysXGiNflduvxeqFYVpzExY=",
      wiki: "https://en.wikipedia.org/wiki/Balanced_diet",
    },
  ];

  return (
    <>
      <style>
        {`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSoft {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        @keyframes glowText {
          0% { text-shadow: 0 0 0px #00a896; }
          50% { text-shadow: 0 0 20px #00a896; }
          100% { text-shadow: 0 0 0px #00a896; }
        }

        .heroContent > * {
          animation: fadeUp 1s ease forwards;
        }

        .floatingImg {
          animation: floatSoft 4s ease-in-out infinite;
        }

        .searchInput:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 180, 160, 0.2);
        }

        .btnHover:hover {
          transform: translateY(-2px);
          background: #009688;
        }

        .highlightTitle {
          animation: glowText 3s infinite;
        }

        /* HEALTH LIBRARY */
        .healthSection {
          padding: 40px 20px;
          background: #f7fffe;
        }

        .healthGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .healthCard {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .healthCard:hover {
          transform: translateY(-5px);
        }

        .healthImg {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .healthContent {
          padding: 15px;
        }

        .readMore {
          color: #00a896;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }
          .pharmacySection {
          margin-top: 60px;
          height: 450px;
          position: relative;
          background: url("https://images.theconversation.com/files/639040/original/file-20241217-17-f5ube8.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .pharmacyOverlay {
          background: rgba(0,0,0,0.55);
          padding: 40px;
          border-radius: 20px;
          color: white;
          max-width: 700px;
          text-align: center;
          backdrop-filter: blur(6px);
          animation: fadeUp 1.5s ease;
        }

        .pharmacyOverlay h2 {
          font-size: 46px;
          margin-bottom: 15px;
        }

        .pharmacyOverlay p {
          font-size: 20px;
          line-height: 1.6;
          opacity: 0.9;
        }
        `}
      </style>

      {/* LOADER */}
      {!hideLoader && (
        <div style={styles.loader}>
          <div
            style={{
              ...styles.fullImage,
              filter: blur ? "blur(6px) brightness(0.6)" : "brightness(0.7)",
            }}
          />
          <div
            style={{
              ...styles.half,
              left: 0,
              transform: split ? "translateX(-100%)" : "translateX(0)",
            }}
          />
          <div
            style={{
              ...styles.half,
              right: 0,
              transform: split ? "translateX(100%)" : "translateX(0)",
            }}
          />
          <div style={styles.center}>
            <h1 style={styles.bigLogo}>Healnest</h1>
            <p style={styles.tag}>Care Beyond Medicine</p>
          </div>
        </div>
      )}

      <div style={styles.container}>
        {/* HERO */}
        <div style={styles.heroSection}>
          <div style={styles.heroContent} className="heroContent">
            <h1 style={styles.heroTitle}>Your Health, Delivered with Care</h1>

            <p style={styles.heroDesc}>
              Order genuine medicines, healthcare essentials, and wellness products from home with fast delivery.
            </p>

            <p style={styles.heroSub}>
              Trusted by thousands for safe & reliable healthcare
            </p>

            <input
              type="text"
              placeholder="Search medicines, healthcare products..."
              style={styles.search}
              className="searchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button style={styles.btn} className="btnHover" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div style={styles.heroImageBox}>
            <div style={styles.imageBg}></div>
            <img
              src="https://medcalpharmacy.com/old/wp-content/uploads/2023/06/Derm-Hero.png"
              alt="pharmacy"
              style={styles.heroImage}
              className="floatingImg"
            />
          </div>
        </div>

        {/* CATEGORIES */}
        <h2 style={{ ...styles.sectionTitle, fontSize: "44px" }} className="highlightTitle">
          Shop by Category
        </h2>

        <div style={styles.categories}>
          {[
            { icon: "💊", title: "Medicines", desc: "Essential drugs for daily health needs", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
            { icon: "🧴", title: "Skincare", desc: "Healthy skin starts with proper care", img: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png" },
            { icon: "💊", title: "Vitamins", desc: "Boost immunity and body strength", img: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
            { icon: "🩺", title: "Devices", desc: "Monitor your health at home easily", img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
          ].map((item, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.cardContent}>
                <div style={{ fontSize: "28px" }}>{item.icon}</div>
                <p style={{ fontWeight: "bold" }}>{item.title}</p>
                <span style={styles.smallText}>{item.desc}</span>
              </div>

              <div
                style={{
                  ...styles.cardOverlay,
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? "translateY(0)" : "translateY(30px)",
                  pointerEvents: hovered === i ? "auto" : "none",
                }}
              >
                <div style={styles.overlayLayout}>
                  <div style={styles.overlayLeft}>
                    <img src={item.img} style={styles.overlayImg} alt="icon" />
                  </div>
                  <div style={styles.overlayRight}>
                    <p>🧠 High-quality healthcare products</p>
                    <p>🚚 Fast doorstep delivery</p>
                    <p>🔬 Certified & trusted brands</p>
                    <p>💚 Safe for daily use</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HEALTH LIBRARY (ADDED INSIDE SAME PAGE) */}
        <div className="healthSection">
          <h2 style={{ textAlign: "center", fontSize: "40px", color: "#004d40" }}>
            Health Library
          </h2>

          <div className="healthGrid">
            {articles.map((item, i) => (
              <div key={i} className="healthCard">
                <img src={item.img} className="healthImg" alt="health" />
                <div className="healthContent">
                  <h3 style={{ fontSize: "16px", color: "#00332e" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#555" }}>
                    {item.desc}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
          <div className="pharmacySection">
          <div className="pharmacyOverlay">
            <h2>Pharmacy Care & Benefits</h2>
            <p>
              A well-managed pharmacy ensures safe medication, proper guidance, and better health outcomes.  
              Always follow prescriptions correctly, store medicines safely, and consult professionals before use.  
              Good pharmacy care improves recovery, prevents risks, and supports long-term wellness.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

/* STYLES */
const styles = {
  loader: { position: "fixed", width: "100%", height: "100vh", zIndex: 9999 },

  fullImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "url('https://img.freepik.com/premium-photo/medical-aesthetics-scene-with-biorevitalization-products-hyaluronic-acid-needles-professional-clinic-setting_416256-44048.jpg?w=2000') center/cover no-repeat",
  },

  half: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "url('https://img.freepik.com/premium-photo/medical-aesthetics-scene-with-biorevitalization-products-hyaluronic-acid-needles-professional-clinic-setting_416256-44048.jpg?w=2000') center/cover no-repeat",
    transition: "0.3s",
  },

  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  bigLogo: { fontSize: "90px", color: "#fff" },
  tag: { color: "#fff" },

  container: { background: "#f5fbfa" },

  heroSection: {
    marginTop: "40px",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "90px",
    background:
      "linear-gradient(to right, rgba(240,255,255,0.95), rgba(240,255,255,0.7)), url('https://wallpapers.com/images/hd/pharmacy-background-bomnaifdze6cde60.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "right center",
  },

  heroContent: { maxWidth: "550px" },

  heroImageBox: {
    position: "relative",
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },

  imageBg: {
    position: "absolute",
    width: "260px",
    height: "260px",
    background: "radial-gradient(circle, rgba(0,168,150,0.25), transparent)",
    borderRadius: "50%",
    filter: "blur(25px)",
  },

  heroImage: {
    width: "600px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    zIndex: 2,
  },

  heroTitle: { fontSize: "68px", color: "#004d40" },

  heroDesc: { fontSize: "20px", color: "#2f5d5a", margin: "15px 0" },

  heroSub: { fontSize: "18px", color: "#00796b", marginBottom: "25px" },

  search: {
    padding: "14px",
    width: "100%",
    borderRadius: "30px",
    border: "1px solid #cce7e5",
    marginBottom: "10px",
  },

  btn: {
    padding: "12px 30px",
    borderRadius: "30px",
    background: "#00a896",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  sectionTitle: {
    textAlign: "center",
    marginTop: "40px",
    color: "#004d40",
    fontSize: "32px",
  },

  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    padding: "20px",
  },

  card: {
    height: "200px",
    borderRadius: "40px",
    background: "rgba(173,216,230,0.25)",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },

  cardContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  smallText: { fontSize: "14px", color: "#004d40", textAlign: "center" },

  cardOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: "15px",
    background: "#fff",
    transition: "0.4s ease",
  },

  overlayLayout: { display: "flex", gap: "10px", height: "100%" },

  overlayLeft: {
    flex: "0.4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlayRight: {
    flex: "0.6",
    fontSize: "12px",
    color: "#004d40",
    overflowY: "auto",
  },

  overlayImg: { width: "70px" },
};

export default Home;3333333333