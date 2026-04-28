import { useState } from "react";

/* 🔥 SLIDER */
const sliderImages = [
  "https://img.freepik.com/premium-vector/discount-special-offer-word-concept-vector-illustration-with-lines-modern-futuristic-3d-style_737072-164.jpg?w=2000",
  "https://assets.indiadesire.com/images/PharmEasy%20Medicine%20Offer%202021.jpg",
  "https://img.magicpin.com/pharmacy.jpg",
];

/* 🔥 CATEGORY + PRODUCTS (UNCHANGED) */
const categories = [
  {
    name: "Healthcare",
    img: "https://static.vecteezy.com/system/resources/thumbnails/023/967/254/small_2x/top-view-of-medical-stethoscope-and-icon-family-on-cyan-background-health-care-insurance-concept-illustration-generative-ai-photo.jpg",
    products: [
      {
        name: "Thermometer",
        use: "Used to check body temperature accurately.",
        desc: "A digital thermometer provides fast and precise readings. Essential for Perfect for daily use  skin around your eyes with amazing monitoring fever.",
        price: 250,
        discount: 20,
        img: "https://images.apollo247.in/pub/media/catalog/product/a/p/apn0025-02.jpg"
      },
      {
        name: "BP Monitor",
        use: "Measures blood pressure levels.",
        desc: "Helps track BP regularly. Ideal for hypertension patients invasive procedures and are administered in high frequency, therefore, meeting minimum.",
        price: 1500,
        discount: 15,
        img: "https://images.apollo247.in/pub/media/catalog/product/o/m/omr0042_1.jpg"
      },
      {
        name: "Syringe",
        use: "Measures blood pressure levels.",
        desc: "Injections are invasive procedures and are administered in high frequency, therefore, meeting minimum safety standards is imperative.",
        price: 1500,
        discount: 15,
        img: "https://thumbs.dreamstime.com/b/medical-syringe-vaccine-vial-healthcare-injection-vaccination-medicine-pharmacy-clinical-ai-generated-close-up-shot-clear-398661211.jpg"
      },
      {
        name: "Blink eye drops",
        use: "Measures blood pressure levels.",
        desc: "Helps track BP regularly. Ideal for hypertension patients and are administered in high frequency, therefore, meeting minimum safety.",
        price: 1500,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/71xKBqZz2lL._AC_.jpg"
      },
      {
        name: "Diabetic wound ulcer cream",
        use: "Measures blood pressure levels.",
        desc: " Wound management for foot ulcers in diabetes involves the use of various dressings and topically-applied medications, like growth factors and skin substitutes..",
        price: 1500,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/61ZQ0i-Tj-L._AC_SL1500_.jpg"
      },
      {
        name: "Joint aid pain relief herbal mist",
        use: "Measures blood pressure levels.",
        desc: "Pain relief sprays are topical treatments that aim to alleviate various types of pain, including muscle aches, joint pain, sports injuries, and nerve pain.",
        price: 1500,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/61bspvEJozL._AC_SL1500_.jpg"
      },
      {
        name: "Dettol products",
        use: "Measures blood pressure levels.",
        desc: "At Dettol we make products to help you protect your family from harmful germs that can cause illness and to keep your home clean and fresh.",
        price: 1500,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/816CiZGtUkS.jpg"
      },
      {
        name: "Dolo 650",
        use: "Measures blood pressure levels.",
        desc: "Dolo-650 Tablet is a painkiller and fever reducer that contains paracetamol. It is widely used Perfect for daily for mild to moderate pain and fever.",
        price: 1500,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/41mGtnvu-5L._SY445_SX342_QL70_ML2_.jpg"
      },
    ],
  },

  {
    name: "Skin Care",
    img: "https://img.freepik.com/free-photo/skin-care-products_23-2148571292.jpg",
    products: [
      {
        name: "Face Wash",
        use: "Removes dirt and oil.",
        desc: "Keeps your skin fresh and glowing. Perfect for daily use non irritating face wash to keep your skin hydrated and clean, Simple’s Refreshing Facial Wash is your go-to for clear.",
        price: 299,
        discount: 10,
        img: "https://www.simpleskincare.in/cdn/shop/files/1_e698f8d9-26db-4c93-83a6-6f5615dfc91e_1000x1000.png?v=1689702001"
      },
      {
        name: "Cetaphil cleanser",
        use: "Removes dirt and oil.",
        desc: "Cetaphil's range of facial cleansers and hydrating face washes, designed to gently clean and refresh Perfect for daily use  skin around your eyes with amazing your skin every day.",
        price: 599,
        discount: 10,
        img: "https://i5.walmartimages.com/seo/Cetaphil-Gentle-Skin-Cleanser-for-Dry-to-Normal-Sensitive-Skin-Hydrating-Face-Wash-8-oz_80834273-d568-4de8-b219-174f50e74cc9.62d21b1135c00980f9597c476de5edf6.jpeg"
      },
      {
        name: "Eye cream",
        use: "Removes dirt and oil.",
        desc: "Keeps your skin fresh and glowing. Perfect for daily use  skin around your eyes with amazing products from South Korea? Check out this list of the 10 best Korean eye creams.",
        price: 1899,
        discount: 10,
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1741385091-1718739586-sulwhasoo-concentrated-ginseng-renewing-eye-cream-6671e26183a33.jpg?crop=1.00xw:0.801xh;0,0.0718xh&resize=980:*"
      },
      {
        name: "Dot & Key",
        use: "Removes dirt and oil.",
        desc: "'ve been using Dot & Key Vitamin C Sunscreen for a year now. It's lightweight & quick-absorbing. Reduces dullness too with a dewy finish. A must-buy.",
        price: 4322,
        discount: 10,
        img: "https://www.dotandkey.com/cdn/shop/files/water_525b11f5-2c1a-437c-bd78-2208d7c03b94.jpg?v=1684241827"
      },
      {
        name: "Dermaco",
        use: "Removes dirt and oil.",
        desc: "The Derma Co - Shop genuine The Derma Co collection at best price online from Nykaa. Explore a wide range of skin and Perfect for body care products .",
        price: 899,
        discount: 10,
        img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/677e3843-ca87-463d-bcf6-273c49b08bec.__CR0,0,362,453_PT0_SX362_V1___.png"
      },
      {
        name: "Garnier product",
        use: "Removes dirt and oil.",
        desc: "Keeps your skin fresh and glowing. Perfect for daily use  facial cleansers and hydrating face washes, designed to gently clean and refresh your skin.",
        price: 199,
        discount: 10,
        img: "https://www.tradenrg.co.uk/cdn/shop/articles/Skin_Care_Products_1024x1024.progressive.jpg?v=1668835221"
      },
      {
        name: "Minimalist",
        use: "Removes dirt and oil.",
        desc: "Minimalist - Honest, Authentic & Affordable Beauty Products. Sunscreen,  serums & face wash — high performance,serums & face wash  affordable skincare.",
        price: 799,
        discount: 10,
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d9bc48117019731.606dc4ece18a8.jpg"
      },
      {
        name: "WishCare",
        use: "Removes dirt and oil.",
        desc: "Customers find this lip balm effective and moisturizing, noting it provides long-lasting hydration and serums & face wash — high performance, works well for chapped lips.",
        price: 399,
        discount: 10,
        img: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/382500/wishcare-ceramide-lip-balm-combo-with-spf50-pa-kojic-acid-and-niacinamide-for-lip-lightening_1_display_1753953282_15e3348c.jpg"
      },
      {
        name: "Body wipes",
        use: "Removes dirt and oil.",
        desc: "Aloe Vera Refreshing Wet Wipes for Face & Hand – Individually Wrapped | Soft Facial Wipes | Wet Wipe for Faceserums & face wash — Cleaning & Daily Use | Wet Wipes Single Sachetse.",
        price: 199,
        discount: 10,
        img: "https://i5.walmartimages.com/seo/Body-Wipes-Adults-XL-Wet-Wipes-8-x-12-50-Count-Rinse-Free-Bathing-Wipes-Wash-Cloths-Incontinence-Disposable-Washcloths-Aloe-Vera-Vitamin-E-Camping-El_574504f2-f396-4a1c-ad6a-025a50c5bb2d.1c699e58e47f7908cbd74d1bac6aeb3a.jpeg"
      },
      {
        name: "Milk face toner",
        use: "Removes dirt and oil.",
        desc: "The Face Shop Rice & Ceramide Moisturizing Face Toner Enriched With Rice Extracts To Brighten The Skin | Suits All Skin Types | Hydrating Milky Face Toner For Glowing Skin.",
        price: 999,
        discount: 10,
        img: "https://www.vilvahstore.com/cdn/shop/files/Milk-Facial-Toner_Product-page__2.jpg?v=1699951219&width=2048"
      },
    ],
  },

  {
  name: "Fitness",
  img: "https://wallpaperbat.com/img/25284718-sports-fitness-4k-ultra-hd-wallpaper.jpg",
  products: [
    {
      name: "Protein Powder",
      use: "Supports muscle growth.",
      desc: "High-quality protein for recovery and strength Compare now and shop smarter. OneClearWinner.com - Stop browsing online stores for hours.",
      price: 2500,
      discount: 25,
      img: "https://assets.bonappetit.com/photos/6606cdfe2b76b9fa72667d64/16:9/w_2560%2Cc_limit/BA_3.28_Best-Whey-Protein-Powder.jpg"
    },
    {
      name: "Protein Bar",
      use: "Boosts energy and endurance.",
      desc: "Browse 3,145 beautiful Protein Bar stock images, photos and wallpaper for royalty-free download from the creative contributors at Vecteezy!",
      price: 1800,
      discount: 20,
      img: "https://proteinbars.com/wp-content/uploads/2021/04/pasted-image-0-16.png"
    },
    {
      name: "Protein ots",
      use: "Strength training at home.",
      desc: "Durable adjustable dumbbells for full-body stock images, photos and wallpaper for royalty-free download from the serums & face wash —creative workouts.",
      price: 3200,
      discount: 30,
      img: "https://m.media-amazon.com/images/I/813KN0uLh2L._SL1500_.jpg"
    },
    {
      name: "Whey protein for women",
      use: "Comfort for yoga and exercise.",
      desc: "Non-slip, soft, and durable mat for recovery and strength Compare now and shop smarter. OneClearWinner.com - Stop browsing online stores all workouts.",
      price: 900,
      discount: 15,
      img: "https://cdn.shopify.com/s/files/1/0744/0203/files/FitWhey.WB.Website_ProductPage_PowderBanner_1676x1500px_20230429_ms_a8136cee-6f0f-467b-80e2-a91ecad0b438_1920x.jpg?v=1682948787"
    },
    {
      name: "Weight loss herbal powber",
      use: "Improves flexibility and strength.",
      desc: "Lakshmi Krishna Naturals Slim & Strength Weight Loss Powder 500g | Natural Weight Management & Energy Boost Formula | Supports Metabolism & Enhances Muscle Tone.",
      price: 700,
      discount: 10,
      img: "https://triphal.com/cdn/shop/files/Weight-Loss-Powder-1.jpg?v=1719249441"
    },
    {
      name: "Gain powder",
      use: "Tracks fitness and health metrics.",
      desc: "Monitor heart rate, steps, calories, and sleep  & Strength Weight Loss Powder 500g | Natural Weight Management & serums & face wash Metabolism & Enhances Muscle.",
      price: 4500,
      discount: 35,
      img: "https://static.thcdn.com/productimg/original/11654605-1685285183211462.png"
    }
  ]
},

  {
  name: "Ayurveda",
  img: "https://wallpaperaccess.com/full/2996865.jpg",
  products: [
    {
      name: "Ashwagandha",
      use: "Reduces stress.",
      desc: "Boosts immunity and mental strength Botanical illustrations of ashwagandha plant roots and dried ingredients. Withania somnifera ( Ashwagandha) dried root, Root powder, green leaves herbal plants  naturally.",
      price: 499,
      discount: 30,
      img: "https://www.herbolarioagave.com/wp-content/uploads/2023/04/propiedades-de-la-ashwagandha.jpeg"
    },
    {
      name: "Tulsi Capsules",
      use: "Improves immunity.",
      desc: "Rich in antioxidants, helps fight infections and supports respiratory Product description Tulsi Capsules are made from Holy Basil (Ocimum Sanctum), a well-known herb traditionally used in herbal wellness practices.",
      price: 299,
      discount: 20,
      img: "https://m.media-amazon.com/images/I/516umqeMBAL._AC_.jpg"
    },
    {
      name: "Triphala Powder",
      use: "Aids digestion.",
      desc: "Natural detoxifier that improves gut health and relieves infections and supports respiratory Product description Tulsi Capsules are made from Holy Basil (Ocimum Sanctum), a well-known herb traditionally constipation.",
      price: 199,
      discount: 15,
      img: "https://m.media-amazon.com/images/I/71OJQitnToL._SL1500_.jpg"
    },
    {
      name: "Neem Tablets",
      use: "Purifies blood.",
      desc: "Helps in acne control and improves skin strength Botanical illustrations of ashwagandha plant roots and dried ingredients. Withania somnifera ( Ashwagandha) dried root, Root healthserums & face wash — high naturally.",
      price: 249,
      discount: 25,
      img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd4TJmyfORowNEwoOCDrjdFd5bFUMhlF9tYgm28k9BBtQBCSs70ZClXRUbfJTl9jZafzAEx6ZeK5RD_YXufXR0ShkkslnsBBc3_HtKXAjP9bDqTRN9Cp1HouNDpm97kuatT5p2wEw?key=xn2NX9vVGSuTiKbBD78uRQ"
    },
    {
      name: "Amla Juice",
      use: "Boosts immunity & hair health.",
      desc: "Rich in Vitamin C, improves digestion and promotes glowing skin The tree is known for its small green fruits, which have a unique flavor often described as sour,serums & face wash — high performance, bitter, and astringe.",
      price: 350,
      discount: 18,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/XQ/VX/RQ/146865243/14-1000x1000.jpg"
    },
    {
      name: "Brahmi Syrup",
      use: "Enhances memory.",
      desc: "Supports brain function, improves concentration and reduces anxiety Neurozen Syrup - Herbal Support for Stress, Tension, Depression & Anxiety Relief with Brahmi,serums & face wash — high performance, Shankhpushpi, Vacha .",
      price: 420,
      discount: 22,
      img: "https://images.apollo247.in/pub/media/catalog/product/h/i/him0598_1-jan24_4_.jpg?tr=q-80"
    },
    {
      name: "Kapha massage oil",
      use: "Enhances memory.",
      desc: "Supports brain function, improves concentration and reduces anxiety Neurozen Syrup - Herbal Support for Stress, Tension, Depression & Anxiety Relief with Brahmi, serums & face wash — high performance,Shankhpushpi, Vacha .",
      price: 620,
      discount: 22,
      img: "https://sunshineayurveda.com.au/wp-content/uploads/2022/02/MOK200-1024x1024.jpg"
    }
  ]
},

 {
  name: "Sexual Wellness",
  img: "sexual.png",
  products: [
    {
      name: "Lubricant Gel",
      use: "Smooth experience.",
      desc: "Safe gel ensuring comfort and Lubricant Gel stock photos, pictures and royalty-free images from iStock. For the first time, get 1 free month of iStock exclusive hydration.",
      price: 350,
      discount: 18,
      img: "https://getmeds.ph/uploads/product/05d3c1ac6048b538c11887ac485e5485.jpg"
    },
    {
      name: "Delay Spray",
      use: "Improves performance.",
      desc: "Helps delay climax and enhances control delay spray for men online at the best prices from Durex India. Prolong your pleasure and enjoy lasting performance naturally.",
      price: 499,
      discount: 22,
      img: "https://musterilac.com/wp-content/uploads/2024/03/delay-spray.jpg"
    },
    {
      name: "Intimate Wash",
      use: "Maintains hygiene.",
      desc: "Gentle formula to keep intimate areas clean and for men online at the best prices from Durex India. Prolong your serums & face wash pleasure and enjoy lasting performance fresh.",
      price: 299,
      discount: 15,
      img: "https://cdn01.pharmeasy.in/dam/products_otc/P13501/clean-dry-intimate-hygiene-wash-90-ml-for-women-3-1654234191.jpg"
    },
    {
      name: "Herbal Capsules",
      use: "Boost stamina.",
      desc: "Ayurvedic blend to improve strength and vitality Capsules Health Care - Buy Capsules Health Care at India's Best serums & face Online Shopping Store. Check Price in India .",
      price: 699,
      discount: 30,
      img: "https://m.media-amazon.com/images/I/714f1hQ1vqL.jpg"
    },
    {
      name: "Massage Oil",
      use: "Enhances relaxation.",
      desc: "Aromatic oil that improves mood and  massage oils enriched with natural oils like almond, jojoba, and olive.serums & face wash Perfect for massage therapy and everyday intimacy.",
      price: 450,
      discount: 20,
      img: "https://m.media-amazon.com/images/I/71SztdUumPL._AC_SL1500_.jpg"
    },
   {
  name: "Condom Pack",
  use: "Safe protection.",
  desc: "Premium quality condoms designed for safety, comfort, and enhanced serums & face wash — high performance,serums & face wash — high performance,serums & face wash — high protection.",
  price: 199,
  discount: 10,
  img: "condom.png"
}
  ],
},
 {
  name: "Pet Care",
  img: "https://t4.ftcdn.net/jpg/08/44/44/01/360_F_844440181_stRU8ewkJhO9Kl6bcJV9kkGECOmeNuUu.jpg",
  products: [
    {
      name: "Dog Food",
      use: "Healthy diet.",
      desc: "This high-quality Packed with essential proteins, vitamins, and minerals, it supports strong muscles, a healthy immune system, and improved digestion. Made with carefully selected natural ingredients, it ensures your pet and optimal health every day.",
      price: 1200,
      discount: 12,
      img: "https://aplaceforanimals.com/wp-content/uploads/2024/03/top_kibble_dog_foods.jpg"
    },
    {
      name: "Cat Food",
      use: "Balanced nutrition.",
      desc: "Premium cat Enriched with high-quality protein sources, omega fatty acids, it helps maintain a shiny coat, strong bones, and overall vitality. Its delicious flavor ensures even picky eaters enjoy every bite while supporting long-term health and energy.",
      price: 900,
      discount: 10,
      img: "https://i5.walmartimages.com/asr/7927d54c-56f7-41c7-89d1-4ece42a2c949_1.0717589399f284be0fa758cad3fe6976.jpeg"
    },
    {
      name: "Pet Shampoo",
      use: "Cleaning & hygiene.",
      desc: "A gentle and effective pet shampoo crafted to keep your pet clean, fresh, and comfortable. Its mild formula is suitable for sensitive skin and helps remove dirt, odor, and excess oil without shiny, and free from tangles while maintaining proper skin health.",
      price: 350,
      discount: 15,
      img: "https://image.made-in-china.com/2f0j00rYjbIgBJnlqh/Private-Label-Great-Smelling-Moisturizing-Dog-and-Cat-Shampoo-Lavender-Formula-Pet-Shampoo.jpg"
    },
    {
      name: "Dog Leash",
      use: "Safe walking.",
      desc: "This durable dog leash. Made from high-strength materials, it ensures long-lasting performance while offering a comfortable grip for pet owners. Its secure clasp keeps your pet safely attached, making every walk serums & face wash stress-free and enjoyable.",
      price: 450,
      discount: 8,
      img: "https://m.media-amazon.com/images/I/61fa4Q0JbhL._AC_.jpg"
    },
    {
      name: "Pet Bed",
      use: "Comfort & rest.",
      desc: "A soft Made with plush materials and supportive cushioning, it helps reduce joint stress and provides a warm, secure sleeping space. Perfect for daily naps and nighttime rest, ensuring your pet feels safe andserums & face wash — high performance, well-rested.",
      price: 1800,
      discount: 20,
      img: "https://www.thegreenhead.com/imgs/xl/luxurious-outdoor-dog-bed-with-canopy-xl.jpg"
    },
    {
      name: "Dog Toys",
      use: "Entertainment.",
      desc: "Fun and safe and durable materials, these toys are perfect for chewing, fetching, and interactive play. They help reduce boredom, support dental health, and strengthen serums & face wash — high performance,serums & face wash the bond between you and your pet.",
      price: 300,
      discount: 5,
      img: "https://m.media-amazon.com/images/I/81WGJvezJJL._AC_SL1500_.jpg"
    },
    {
      name: "Pet Grooming Kit",
      use: "Full grooming care.",
      desc: "A complete grooming kit This all-in-one set includes essential tools like a brush, comb, and nail clipper to maintain your pet’s hygiene and appearance. Regular grooming helps prevent tangles, reduces shedding, and keeps your pet looking clean,and well-maintained.",
      price: 750,
      discount: 18,
      img: "https://www.dailypaws.com/thmb/mCHo0n_p9oSCD67bCpykcARD5Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ceenwes-lcd-display-cordless-pet-grooming-clippers-kit-8b4cc0cd27ec4ef3947438f75d020174.jpg"
    }
  ]
},

  {
  name: "Surgical",
  img: "https://ds8526jcpbygs.cloudfront.net/wp-content/uploads/2022/10/surgery-robot-in-operation-room-picture-id1215416569.jpg",
  products: [
    {
      name: "Gloves",
      use: "Protection.",
      desc: "High-quality Made from durable and skin-friendly materials, these gloves offer excellent flexibility, comfort, and sensitivity for precise movements. They help prevent cross-contamination and are ideal personal healthcare use.",
      price: 300,
      discount: 10,
      img: "https://m.media-amazon.com/images/I/61kIZYZ7tML._AC_SL1322_.jpg"
    },
    {
      name: "Surgical Mask",
      use: "Infection control.",
      desc: "Premium surgical masks designed to protect against airborne particles, bacteria, and viruses. Made with multiple protective layers, they for healthcare professionals as well as everyday safety in crowded or high-risk environments.",
      price: 250,
      discount: 12,
      img: "https://www.morntrip.com/wp-content/uploads/2024/02/surgical-masks.webp"
    },
    {
      name: "Syringe",
      use: "Injection & fluid transfer.",
      desc: "Sterile and single-use syringes designed for safe and accurate administration of medications and fluids. Featuring a smooth plunger mechanism for precise control, these syringes. Ideal for hospitals, clinics, healthcare applications.",
      price: 150,
      discount: 8,
      img: "https://m.media-amazon.com/images/I/61eGcf8MWcL._AC_.jpg"
    },
    {
      name: "Bandages",
      use: "Wound care.",
      desc: "Soft and absorbent bandages designed to protect wounds and promote faster healing. These bandages provide excellent cushioning and prevent dirt or bacteria from entering the wound. Easy to apply and comfortabl and post-surgical care.", 
      price: 200,
      discount: 15,
      img: "https://thumbs.dreamstime.com/b/bandages-assorted-medical-wound-protection-368564422.jpg"
    },
    {
      name: "Thermometer",
      use: "Temperature monitoring.",
      desc: "Accurate and easy-to-use digital thermometer designed for quick temperature measurement. Equipped with advanced sensors, it provides reliable readings within seconds and is suitable for both adults and children serums & face settings.",
      price: 500,
      discount: 18,
      img: "https://m.media-amazon.com/images/I/71+-lyUauaL._SL1500_.jpg"
    },
    {
      name: "Surgical Scissors",
      use: "Cutting tools.",
      desc: "High-precision surgical scissors made from stainless steel for durability and sharpness. Designed for medical professionals, they provide clean and accurate cuts during procedures. Ergonomic design ensuresserums & face wash nvironments.",
      price: 650,
      discount: 10,
      img: "https://grey-medical.com/wp-content/uploads/2024/10/spinal-surgery-instruments-1-1024x853.jpg"
    },
    {
      name: "First Aid Kit",
      use: "Emergency care.",
      desc: "Comprehensive first aid kit containing essential medical supplies required for handling minor injuries and emergencies. Includes bandages, antiseptic wipes, scissors,office, or outdoor activities to ensure quick response in critical situations.",
      price: 1200,
      discount: 20,
      img: "https://m.media-amazon.com/images/I/71z1EEnEKDL._AC_.jpg"
    }
  ]
},
  {
  name: "Baby Care",
  img: "https://www.health4mom.org/wp-content/uploads/2025/02/GettyImages-1583963575-2048x1365.jpg",
  products: [
    {
      name: "Baby Lotion",
      use: "Soft skin.",
      desc: "A gentle and nourishing baby lotion to keep your baby’s delicate skin soft, smooth, and well-hydrated. Enriched with mild ingredients and natural moisturizers, it helps prevent dryness while maintaining comfortable and happy.",
      price: 250,
      discount: 15,
      img: "https://m.media-amazon.com/images/I/71K5XcmcKxL.jpg"
    },
    {
      name: "Baby Shampoo",
      use: "Hair & scalp care.",
      desc: "A tear-free baby shampoo designed to gently cleanse your baby’s hair and scalp without causing irritation. Made with mild, hypoallergenic ingredients, it effectivelyserums & face  removes dirt and excess oil while experience.",
      price: 220,
      discount: 10,
      img: "https://superxtrapanama.vtexassets.com/arquivos/ids/165502/7702031291510.png?v=637957624824300000"
    },
    {
      name: "Baby Diapers",
      use: "Hygiene & dryness.",
      desc: "High-absorbency baby diapers designed to provide long-lasting dryness and protection for your baby. Featuring soft, breathable materials and a snug fit, they prevent serums & face wash  leaks while keeping your baby skin.",
      price: 900,
      discount: 20,
      img: "https://m.media-amazon.com/images/I/81DZpUpZItL._AC_.jpg"
    },
    {
      name: "Baby Wipes",
      use: "Cleaning.",
      desc: "Soft and gentle baby wipes perfect for cleaning your baby’s delicate skin during diaper changes or feeding time. Infused with mild cleansing agentsserums & face wash —  and moisturizing ingredients, they effectivel use.",
      price: 180,
      discount: 12,
      img: "https://i5.walmartimages.com/asr/47af4048-f06f-4d82-9ad4-b2487d9d2da4.9b1ad10733c70649bbb30eccbc1b4bc0.jpeg"
    },
    {
      name: "Baby Oil",
      use: "Massage & nourishment.",
      desc: "A nourishing baby oil designed for gentle massage and deep skin hydration. Enriched with natural oils, it helps strengthen bones, improve blood circulation,serums & face wash — high performance, and keep your baby’s skin baby.",
      price: 300,
      discount: 18,
      img: "https://cdn01.pharmeasy.in/dam/products_otc/R00474/olerose-baby-massage-oil-100ml-2-1696835243.jpg"
    },
    {
      name: "Feeding Bottle",
      use: "Feeding support.",
      desc: "A safe and durable feeding bottle designed to make feeding easy and comfortable for both baby and parents. Made from BPA-free materials, it ensures complete safety while serums & face wash — high performance,experience.",
      price: 350,
      discount: 10,
      img: "https://m.media-amazon.com/images/I/41seynW-BCL.jpg"
    },
    {
      name: "Baby Powder",
      use: "Freshness & dryness.",
      desc: "A mild and soothing baby powder designed to keep your baby’s skin fresh, dry, and comfortable throughout the day. Its gentle formula absorbs excess moisture,serums & face wash — high performance, preventing every use.",
      price: 200,
      discount: 15,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/4/299925201/VZ/QB/JP/40751863/cute-on-baby-powder-1000x1000.jpg"
    }
  ]
},

 {
  name: "Vitamins",
  img: "https://www.ajhospital.in/storage/files/news/Blog/drive-download-20220906T084647Z-001/2.png",
  products: [
    {
      name: "Vitamin C",
      use: "Boosts immunity.",
      desc: "Vitamin C is a powerful antioxidant that plays a vital role in strengthening the immune system and protecting the body against infections and illnesses. It supports collagen production, helping maintain healthy health maintenance.",
      price: 400,
      discount: 20,
      img: "https://m.media-amazon.com/images/I/71Gm++tObEL._AC_.jpg"
    },
    {
      name: "Vitamin D3",
      use: "Bone strength.",
      desc: "Vitamin D3 is essential for maintaining strong bones and teeth by improving calcium absorption in the body. It also supports immune function and muscle health, making it crucial for overall well-being.serums & face wash — Regul health.",
      price: 500,
      discount: 15,
      img: "https://i5.walmartimages.com/asr/2f279d7d-f446-4f2d-929a-b9ee46c79c56.039ba51fc7a1607e8fe75ef7facb20f7.jpeg"
    },
    {
      name: "Vitamin B Complex",
      use: "Energy support.",
      desc: "Vitamin B Complex includes a group of essential vitamins that help convert food into energy and support proper brain function. It plays a key role in maintaining a healthy nervous system, serums & face wash — high improving meta vitality.",
      price: 450,
      discount: 18,
      img: "https://m.media-amazon.com/images/I/81FsNWDm-dL._AC_.jpg"
    },
    {
      name: "Multivitamin Tablets",
      use: "Overall wellness.",
      desc: "Multivitamin tablets provide a balanced combination of essential vitamins and minerals required for maintaining overall health. They help fill nutritional gaps in daily diets, support immunity, serums & face wash — high improve needs.",
      price: 600,
      discount: 22,
      img: "https://images-cdn.ubuy.qa/66b9a3bb738330519662edb2-centrum-advance-50-multivitamin-tablets.jpg"
    },
    {
      name: "Calcium Tablets",
      use: "Bone & teeth health.",
      desc: "Calcium tablets are essential for maintaining strong bones and teeth, especially for growing children, adults, and elderly individuals. They help prevent bone-related issues such serums & face wash — high performance,strength.",
      price: 550,
      discount: 17,
      img: "https://i5.walmartimages.com/seo/4-in-1-Calcium-Supplements-Calcium-600mg-with-Vitamin-D3-K2-B12-5000-IU-Supports-Bone-Heart-Health-120-Capsules-Gluten-Free-Non-GMO_e9568822-e9c1-4f20-a035-6a68bb41eb60.2d529ac4dfee2b39827df9ed4d6803de.png"
    },
    {
      name: "Iron Supplements",
      use: "Improves hemoglobin.",
      desc: "Iron supplements help in the production of healthy red blood cells and improve hemoglobin levels in the body. They are especially beneficial for individuals suffering from iron well-being.serums & face wash — high performance,",
      price: 350,
      discount: 14,
      img: "https://m.media-amazon.com/images/I/81ql8naUKqL._AC_.jpg"
    },
    {
      name: "Omega-3 Capsules",
      use: "Heart & brain health.",
      desc: "Omega-3 capsules are rich in essential fatty acids that support heart health, improve brain function, and reduce inflammation in the  Ideal for daily supplementation, they contribute to long-term cardiovascular and mental wellness.",
      price: 800,
      discount: 25,
      img: "https://m.media-amazon.com/images/I/71ae+nGDgwL._AC_SL1500_.jpg"
    }
  ]
}
];
const bodyIssues = [
  { name: "Hair Fall", img: "https://images.herzindagi.info/image/2022/Sep/hairfall-rokne-k-gharelu-upay.jpg", info: "💡 Cause: Stress, poor diet\n💊 Use: Hair oil, biotin\n🥗 Cure: Protein-rich food" },
  { name: "Kidney Stone", img: "https://www.diagnopein.com/img/BlogImages/Kidney%20Stone.jpg", info: "💡 Cause: Low water\n💊 Use: Herbal meds\n🚰 Cure: Drink water" },
  { name: "Urinary Care", img: "https://plus.unsplash.com/premium_photo-1702598967643-8ec0e8793d2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXJpbmFyeSUyMHRyYWN0JTIwaW5mZWN0aW9ufGVufDB8fDB8fHww", info: "💡 Cause: Infection\n💊 Use: Cranberry\n🚰 Cure: Hydration" },
  { name: "Eye Care", img: "https://media.istockphoto.com/id/1201011533/photo/woman-putting-eye-drops.jpg?b=1&s=170667a&w=0&k=20&c=WMXs2KEb11ZGANQbdnm7AaurTHVDsMh6tYn1EgE_6TA=", info: "💡 Cause: Screen time\n💊 Use: Eye drops\n🥕 Cure: Vitamin A" },
  { name: "Ear Problem", img: "https://centroauditivoestaire.com/images/salud/otitis-04.jpg", info: "💡 Cause: Infection\n💊 Use: Ear drops\n🔇 Cure: Avoid noise" },
  { name: "Skin Infection", img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/03/scabies-on-hand-skin-1-1024x575.jpg", info: "💡 Cause: Fungus\n💊 Use: Creams\n🧼 Cure: Hygiene" },
  { name: "Oral Care", img: "https://plus.unsplash.com/premium_photo-1661371407365-a528f57d4336?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQyNTY2MzIzfA&ixlib=rb-4.0.3", info: "💡 Cause: Bacteria\n💊 Use: Mouthwash\n🪥 Cure: Brush daily" },
  { name: "Joint Pain", img: "https://media.istockphoto.com/id/2148837059/photo/asian-senior-man-retirement-knee-joint-pain-on-sofa.webp?a=1&b=1&s=612x612&w=0&k=20&c=E1lzL9MCic9eKSR1E_VXimyqo3eqHdL5YYCF-IUKeo8=", info: "💡 Cause: Age\n💊 Use: Oils\n🏃 Cure: Exercise" },
  { name: "Back Pain", img: "https://media.istockphoto.com/id/591994058/photo/asian-woman-with-shoulder-pain.webp?b=1&s=170667a&w=0&k=20&c=EsPAn2V32uklXE83zf0u9hpLL4if3-fAs53mDRgmP6g=", info: "💡 Cause: Posture\n💊 Use: Belt\n🧘 Cure: Stretching" },
  { name: "Diabetes", img: "https://plus.unsplash.com/premium_photo-1702599120667-d86c2eb51ada?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhYmV0ZXMlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww", info: "💡 Cause: Sugar\n💊 Use: Tablets\n🥗 Cure: Diet control" },
  { name: "Heart Care", img: "https://plus.unsplash.com/premium_photo-1664475434864-dbe5e3aa216e?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4Njc0NzE5fA&ixlib=rb-4.0.3", info: "💡 Cause: Cholesterol\n💊 Use: Medicines\n❤️ Cure: Exercise" },
  { name: "Liver Care", img: "https://media.istockphoto.com/id/530183869/photo/doctor-pointing-at-gall-bladder.webp?b=1&s=170667a&w=0&k=20&c=SdIH0s1GXiMJEyoV9Jw_Js_4fPpmC89YAnP9dOMQFqY=", info: "💡 Cause: Alcohol\n💊 Use: Syrups\n🥦 Cure: Healthy food" },
  { name: "Lung Care", img: "https://media.istockphoto.com/id/508011138/photo/lung-function-test-by-using-triflow.webp?b=1&s=170667a&w=0&k=20&c=hC-wM9xypG19NE9kd8nR-AqBxZgt1ojimuPPowyOn00=", info: "💡 Cause: Smoking\n💊 Use: Inhaler\n🌬 Cure: Breathing exercise" },
  { name: "Weight Loss", img: "https://media.istockphoto.com/id/1421305653/photo/woman-measuring-waist-with-tape-on-grey-background-closeup.jpg?b=1&s=170667a&w=0&k=20&c=w2bUyBQqOotoka09d7dw6by9YIIZCkWUlZjZFpNT7C0=", info: "💡 Cause: Fat\n💊 Use: Herbal\n🏃 Cure: Workout" },
  { name: "Immunity", img: "https://tse3.mm.bing.net/th/id/OIP.nJT_8nFlrq4-SvvfumA8MwHaE7?pid=Api&P=0&h=180", info: "💡 Cause: Weak body\n💊 Use: Vitamins\n🍎 Cure: Fruits" },
  { name: "Cold & Cough", img: "https://media.istockphoto.com/id/1353852220/photo/asian-beautiful-woman-have-runny-nose-and-sickness-or-sneeze-with-using-a-napkin.jpg?b=1&s=170667a&w=0&k=20&c=46IfmLDDuVfWuqN1Nx9ez3D-o5OhTSp-P1bBhbmVbGU=", info: "💡 Cause: Virus\n💊 Use: Syrup\n☕ Cure: Warm drinks" },
  { name: "Fever", img: "https://plus.unsplash.com/premium_photo-1664910150142-c5fee1b9c1b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV2ZXJ8ZW58MHx8MHx8fDA%3D", info: "💡 Cause: Infection\n💊 Use: Paracetamol\n🛌 Cure: Rest" },
  { name: "Acne", img: "https://media.istockphoto.com/id/1493956084/photo/close-up-of-the-skin-of-a-young-girl-with-problems-pimples-acne-pores-scars-natural-skin.webp?a=1&b=1&s=612x612&w=0&k=20&c=RMS0q_xam-xR6wQ3Hu4JVQ5DQfnbu-zKrBTgcd7Z6R4=", info: "💡 Cause: Oil\n💊 Use: Cream\n🧼 Cure: Clean skin" },
  { name: "Hair Dandruff", img: "https://media.istockphoto.com/id/1270415974/photo/closeup-hair-with-dandruff-scalp-seborrheic-dermatitis.webp?b=1&s=170667a&w=0&k=20&c=2ohGnsHPidOYpxJ4S0qq2Ab0LfoJgh15NFmpAUUxRm0=", info: "💡 Cause: Dry scalp\n💊 Use: Shampoo\n💧 Cure: Oiling" },
  { name: "Muscle Pain", img: "https://plus.unsplash.com/premium_photo-1661398844033-ffef1f66186b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", info: "💡 Cause: Strain\n💊 Use: Spray\n🧘 Cure: Rest" }
];

function Products() {
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  /* ✅ NEW STATES (ONLY ADDED) */
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAllIssues, setShowAllIssues] = useState(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );

  const handlePayment = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setSelectedProduct(null);
      setShowPayment(false);
    }, 2000);
  };

  return (
    <div style={styles.container}>

      {/* ✨ ONLY ANIMATION */}
      <style>{`
        .catCard {
          transition: all 0.3s ease;
        }
        .catCard:hover {
          transform: translateY(-12px) scale(1.06);
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
        }

        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.5);
          background: #4caf50;
          color: white;
          padding: 30px 50px;
          border-radius: 15px;
          font-size: 22px;
          animation: pop 0.5s forwards;
          z-index: 1000;
        }

        @keyframes pop {
          to {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
          .bodyHeading {
  width: 100%;
  text-align: center;   /* ✅ CENTER */
  margin: 20px 0;

  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;

  background: linear-gradient(90deg, #23635d, #5bb1a8, #19766f);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shineText 3s linear infinite;
}

@keyframes shineText {
  0% { background-position: 0%; }
  100% { background-position: 200%; }
}
  
.issueCard {
  position: relative;
  min-width: 200px;
  margin: 10px;
  background: white;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.issueCard:hover {
  transform: scale(1.05);
}

/* 🔥 CENTER POPUP */
.hoverCenter {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  background: white;
  padding: 15px;
  border-radius: 15px;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;
  transition: 0.3s;
  z-index: 1000;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.issueCard:hover .hoverCenter {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* 🔥 PLUS BUTTON ANIMATION */
.plusBtn {
  margin: 20px auto;
  width: 60px;
  height: 60px;
  background: #00a896;
  color: white;
  font-size: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
      `}</style>

      {/* SUCCESS POPUP */}
      {success && <div className="popup">Payment Successful ✅</div>}


      {/* 🔥 SLIDER (UNCHANGED EXACT) */}
      <div style={styles.slider}>
        <img src={sliderImages[current]} style={styles.image} />
        <button onClick={prevSlide} style={styles.arrowLeft}>❮</button>
        <button onClick={nextSlide} style={styles.arrowRight}>❯</button>

        <div style={styles.dots}>
          {sliderImages.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                background: current === index ? "#8b6f3d" : "#ccc"
              }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {!selectedCategory ? (
        <>
          {/* 🔥 HEADING SAME */}
          <h2 style={styles.heading}>••• OUR PRODUCTS •••</h2>

          <div style={styles.grid}>
            {categories.map((cat, i) => (
              <div
                key={i}
                style={styles.card}
                className="catCard"
                onClick={() => setSelectedCategory(cat)}
              >
                <img src={cat.img} style={styles.cardImg} />
                <p style={{ fontSize: "18px", fontWeight: "600" }}>
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 style={styles.headingLarge}>{selectedCategory.name}</h2>

          <div style={styles.productsGrid}>
            {selectedCategory.products.map((item, i) => {
              const finalPrice =
                item.price - (item.price * item.discount) / 100;

              return (
                <div key={i} style={styles.productCard}>
                  <div style={styles.imageWrapper}>
                    <img src={item.img} style={styles.productImg} />
                  </div>

                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <p>{item.use}</p>

                  <p>
                    <span style={{ textDecoration: "line-through", color: "#999" }}>
                      ₹{item.price}
                    </span>{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      ₹{finalPrice}
                    </span>
                  </p>

                  {/* ✅ ONLY CHANGE */}
                  <button
                    style={styles.btn}
                    onClick={() => setSelectedProduct(item)}
                  >
                    View Details
                  </button>
                </div>
              );
            })}
          </div>

          <button
            style={styles.backBtn}
            onClick={() => setSelectedCategory(null)}
          >
            ← Back
          </button>
        </>
      )}

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <div className="modal">
          <div style={styles.modalBox}>
            <img src={selectedProduct.img} style={styles.modalImg} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.desc}</p>

            {!showPayment ? (
              <button
                style={styles.btn}
                onClick={() => setShowPayment(true)}
              >
                Proceed to Payment
              </button>
            ) : (
              <>
                <select style={styles.select}>
                  <option>Select Option</option>
                  <option>EMI - 3 Months</option>
                  <option>EMI - 6 Months</option>
                  <option>EMI - 12 Months</option>
                  <option>UPI</option>
                  <option>Google Pay</option>
                  <option>PhonePe</option>
                  <option>Paytm</option>
                </select>

                <button style={styles.payBtn} onClick={handlePayment}>
                  Pay Now
                </button>
              </>
            )}

            <button
              style={styles.backBtn}
              onClick={() => {
                setSelectedProduct(null);
                setShowPayment(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div style={styles.bodySection}>

  {/* LEFT HEADING WITH ANIMATION */}
  <h2 className="bodyHeading">Health Issues</h2>

  <div style={styles.scrollContainer}>
    {(showAllIssues ? bodyIssues : bodyIssues.slice(0, 8)).map((item, i) => (
      <div key={i} className="issueCard">
        <img src={item.img} style={styles.issueImg} />
        <p>{item.name}</p>

        {/* CENTER HOVER POPUP */}
        <div className="hoverCenter">
          <img src={item.img} style={{ width: "100%", height: "140px", borderRadius: "10px" }} />
          <p style={{ whiteSpace: "pre-line" }}>{item.info}</p>
        </div>
      </div>
    ))}
  </div>

  {/* 🔥 ANIMATED PLUS BUTTON */}
  <div
    className="plusBtn"
    onClick={() => setShowAllIssues(!showAllIssues)}
  >
    {showAllIssues ? "−" : "+"}
  </div>

</div>
    </div>
  );
}

export default Products;

/* 🔥 STYLES (UNCHANGED YOUR ORIGINAL) */
const styles = {
  container: {
    marginTop: "90px",
    textAlign: "center",
    background: "linear-gradient(to bottom, white, #81babe)",
    minHeight: "100vh",
  },

  slider: {
    width: "80%",
    height: "400px",
    margin: "auto",
    position: "relative",
  },

  image: {
    width: "90%",
    height: "110%",
    objectFit: "cover",
    borderRadius: "20px",
  },

  arrowLeft: { position: "absolute", top: "50%", left: "10px" },
  arrowRight: { position: "absolute", top: "50%", right: "10px" },

  dots: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
  },

  dot: {
    height: "10px",
    width: "10px",
    margin: "5px",
    display: "inline-block",
    borderRadius: "50%",
    cursor: "pointer",
  },

  heading: {
    marginTop: "80px",
    fontSize: "48px",
    color: "#216156",
  },

  headingLarge: {
    marginTop: "80px",
    fontSize: "52px",
    color: "#398478",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    padding: "40px 80px",
  },

  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "20px 80px",
  },

  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "20px",
    cursor: "pointer",
  },

  cardImg: {
    width: "100%",
    height: "180px",
    borderRadius: "15px",
    objectFit: "cover",
  },

  productCard: {
    background: "#fff",
    padding: "18px",
    borderRadius: "18px",
  },

  imageWrapper: {
    background: "#d5f0f0",
    padding: "15px",
    borderRadius: "15px",
    marginBottom: "10px",
  },

  productImg: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
  },

  btn: {
    marginTop: "10px",
    padding: "10px",
    background: "linear-gradient(45deg,  #26a69a, #00695c)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  modalBox: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "20px",
    width: "400px",
  },

  modalImg: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  },

  select: {
    padding: "10px",
    width: "100%",
    marginTop: "10px",
  },

  payBtn: {
    marginTop: "15px",
    padding: "12px",
    background: "green",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  backBtn: {
    margin: "30px",
    padding: "12px 25px",
    background: "#8b6f3d",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  },
 bodySection: {
  marginTop: "80px",
  padding: "20px 10px",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",

  /* 🔥 LIGHT BROWN TRANSPARENT BACKGROUND */
  background: "rgba(215, 247, 248, 0.99)",

  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",

  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
},

scrollContainer: {
  display: "flex",
  overflowX: "auto",
  padding: "20px",
},

issueImg: {
  width: "100%",
  height: "160px",
  borderRadius: "10px",
  objectFit: "cover",
},
};