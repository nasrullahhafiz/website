/**
 * Portfolio Data Repository with Full Bilingual Support (English & বাংলা)
 * Nasrullah Hafiz (NSR.)
 * Professional Graphic Designer, Printing Expert & Typography Specialist
 */

const PORTFOLIO_DATA = {
  profile: {
    shortName: "NSR.",
    fullName: "NASRULLAH HAFIZ",
    brandName: "NASRULLAH HAFIZ STUDIO",
    tagline: "Graphic Designer • Printing Expert • Typography Specialist",
    tagline_bn: "গ্রাফিক ডিজাইনার • প্রিন্টিং এক্সপার্ট • টাইপোগ্রাফি স্পেশালিস্ট",
    headline: "Crafting Print, Typography & Brand Experiences That Inspire.",
    headline_bn: "মুদ্রণ ও টাইপোগ্রাফির মেলবন্ধনে অনন্য ব্র্যান্ড আইডেন্টিটি।",
    bio: "I'm Nasrullah Hafiz, a professional Graphic Designer, Typography Specialist, and Printing Prepress Expert. I combine Swiss typographic discipline, rigorous CMYK prepress calibration, and luxury packaging engineering to build visual identities that don't just look great on screen—they command absolute prestige on physical paper and print.",
    bio_bn: "আমি নাসরুল্লাহ হাফিজ, একজন প্রফেশনাল গ্রাফিক ডিজাইনার, প্রিন্টিং এক্সপার্ট ও টাইপোগ্রাফি স্পেশালিস্ট। সুইস টাইপোগ্রাফিক নিয়মানুবর্তিতা, নিখুঁত CMYK প্রি-প্রেস ক্যালিব্রেশন এবং লাক্সারি প্যাকেজিং ইঞ্জিনিয়ারিংয়ের সমন্বয়ে তৈরি করি এমন ব্র্যান্ড আইডেন্টিটি যা স্ক্রিন ও প্রিন্ট উভয় মাধ্যমেই আভিজাত্য প্রকাশ করে।",
    location: "Dhaka, Bangladesh (Global Remote & Press Ready)",
    location_bn: "ঢাকা, বাংলাদেশ (গ্লোবাল রিমোট ও প্রেস-রেডি)",
    email: "nasrullah.hafiz.design@gmail.com",
    whatsapp: "+8801700000000",
    rating: "5.0/5",
    totalReviews: 270,
    stats: [
      { number: "300+", label: "Projects Completed", label_bn: "সম্পন্ন প্রজেক্ট", index: "/01" },
      { number: "270+", label: "Happy Clients", label_bn: "সন্তুষ্ট ক্লায়েন্ট", index: "/02" },
      { number: "100%", label: "Press & Prepress Accuracy", label_bn: "প্রেস ও কালার নির্ভুলতা", index: "/03" }
    ]
  },

  services: [
    {
      id: "graphics-printing",
      number: "01",
      badge: "Brand & Press Production",
      badge_bn: "ব্র্যান্ড ও প্রেস প্রোডাকশন",
      title: "Graphics & Printing",
      title_bn: "গ্রাফিক্স অ্যান্ড প্রিন্টিং",
      icon: "🎨",
      desc: "From visual brand identities to nationwide press printing, diary publications, and luxury packaging.",
      desc_bn: "ভিজ্যুয়াল ব্র্যান্ড আইডেন্টিটি থেকে শুরু করে দেশজুড়ে প্রেস প্রিন্টিং, ডায়েরি প্রকাশনা ও অভিজাত প্যাকেজিং।",
      items: [
        "Brand Strategy & Visual Identity",
        "Logo, Guidelines & Design Systems",
        "Corporate Branding & Rebranding",
        "Premium Publication & Editorial Design",
        "Offset & Digital Print Production",
        "Packaging & Print Materials",
        "Prepress & Production Management"
      ],
      items_bn: [
        "ব্র্যান্ড স্ট্র্যাটেজি ও ভিজ্যুয়াল আইডেন্টিটি",
        "লোগো, গাইডলাইন ও ডিজাইন সিস্টেম",
        "কর্পোরেট ব্র্যান্ডিং ও রিব্র্যান্ডিং",
        "প্রিমিয়াম প্রকাশনা ও সম্পাদকীয় ডিজাইন",
        "অফসেট ও ডিজিটাল প্রিন্ট প্রোডাকশন",
        "প্যাকেজিং ও প্রিন্ট ম্যাটেরিয়ালস",
        "প্রি-প্রেস ও প্রোডাকশন ম্যানেজমেন্ট"
      ],
      tags: ["Branding", "Offset Press", "Packaging", "Prepress"],
      tags_bn: ["ব্র্যান্ডিং", "অফসেট প্রেস", "প্যাকেজিং", "প্রি-প্রেস"]
    },
    {
      id: "video-production",
      number: "02",
      badge: "Cinematic Media",
      badge_bn: "সিনেমেটিক মিডিয়া",
      title: "Video Production",
      title_bn: "ভিডিও প্রোডাকশন",
      icon: "🎬",
      desc: "Cinematic storytelling, event documentaries, motion graphics, and high-converting commercial reels.",
      desc_bn: "সিনেমেটিক স্টোরিটেলিং, ইভেন্ট ডকুমেন্টারি, মোশন গ্রাফিক্স ও হাই-কনভার্টিং কমার্শিয়াল রিলস।",
      items: [
        "4K Event & Farewell Documentaries",
        "2D/3D Kinetic Motion Graphics",
        "Commercial Brand Promos & Ads",
        "Professional Color Grading & Sound",
        "Social Media Reels & Shorts Series"
      ],
      items_bn: [
        "৪K ইভেন্ট ও ফেয়ারওয়েল ডকুমেন্টারি",
        "২D/৩D কাইনেটিক মোশন গ্রাফিক্স",
        "কমার্শিয়াল ব্র্যান্ড প্রোমো ও বিজ্ঞাপন",
        "প্রফেশনাল কালার গ্রেডিং ও সাউন্ড",
        "সোশ্যাল মিডিয়া রিলস ও শর্টস সিরিজ"
      ],
      tags: ["4K Video", "Motion Graphics", "Reels", "Commercials"],
      tags_bn: ["৪K ভিডিও", "মোশন গ্রাফিক্স", "রিলস", "বিজ্ঞাপন"]
    },
    {
      id: "web-software-dev",
      number: "03",
      badge: "Digital Engineering",
      badge_bn: "ডিজিটাল ইঞ্জিনিয়ারিং",
      title: "Web & Software Dev",
      title_bn: "ওয়েব ও সফটওয়্যার ডেভেলপমেন্ট",
      icon: "💻",
      desc: "Custom ERPs, mobile applications, e-commerce architectures, and high-performance web systems.",
      desc_bn: "কাস্টম ইআরপি (ERP), মোবাইল অ্যাপ্লিকেশন, ই-কমার্স আর্কিটেকচার ও উচ্চ-গতির ওয়েব সিস্টেম।",
      items: [
        "Print Production ERP Systems",
        "High-Speed E-Commerce Architecture",
        "Desktop & Cross-Platform iOS/Android Apps",
        "UI/UX Design Systems & Interfaces",
        "AI-Assisted Workflow Engineering"
      ],
      items_bn: [
        "প্রিন্ট প্রোডাকশন ইআরপি (ERP) সিস্টেম",
        "হাই-স্পিড ই-কমার্স আর্কিটেকচার",
        "ডেস্কটপ ও ক্রস-প্ল্যাটফর্ম iOS/অ্যান্ড্রয়েড অ্যাপস",
        "ইউআই/ইউএক্স (UI/UX) ডিজাইন সিস্টেম",
        "এআই-অ্যাসিস্টেড ওয়ার্কফ্লো ইঞ্জিনিয়ারিং"
      ],
      tags: ["Custom ERP", "E-Commerce", "Apps", "UI/UX Systems"],
      tags_bn: ["কাস্টম ইআরপি", "ই-কমার্স", "মোবাইল অ্যাপস", "ইউআই/ইউএক্স"]
    }
  ],

  projects: [
    {
      id: "astoria-branding",
      title: "Astoria Luxury Identity & Stationery",
      title_bn: "অ্যাস্টোরিয়া লাক্সারি আইডেন্টিটি ও স্টেশনারি",
      category: "Branding & Identity",
      category_bn: "ব্র্যান্ডিং ও আইডেন্টিটি",
      filterCategory: "branding",
      image: "assets/project-branding.jpg",
      badge: "Brand System",
      badge_bn: "ব্র্যান্ড সিস্টেম",
      shortDesc: "Comprehensive visual identity system featuring gold foil hot stamping on 350 GSM cotton paper, minimalist monogram, and luxury stationery suite.",
      shortDesc_bn: "৩৫০ জিএসএম কটন পেপারের ওপর গোল্ড ফয়েল স্ট্যাম্পিং, মিনিমালিস্ট মনোগ্রাম এবং অভিজাত স্টেশনারি ব্র্যান্ড আইডেন্টিটি।",
      metric: "🏆 Winner of 2024 Corporate Identity Showcase",
      metric_bn: "🏆 ২০২৪ কর্পোরেট আইডেন্টিটি শোকেস উইনার",
      specs: {
        paper: "350 GSM Pure Cotton Uncoated Board",
        color: "Pantone 871 C (Metallic Gold) + Pantone Black 6 C",
        finishing: "Embossing + Hot Foil Stamping",
        printMethod: "Offset Lithography & Letterpress"
      },
      tags: ["Identity", "Letterpress", "Foil Stamping", "Cotton Paper"],
      tags_bn: ["আইডেন্টিটি", "লেটারপ্রেস", "ফয়েল স্ট্যাম্পিং", "কটন পেপার"],
      caseStudy: {
        client: "Astoria Luxury Goods NY & London",
        duration: "6 Weeks",
        role: "Lead Brand Designer & Prepress Specialist",
        challenge: "The client needed a tactile, high-prestige identity system that stood out in executive meetings and luxury retail unboxing.",
        challenge_bn: "ক্লায়েন্টের এমন একটি স্পর্শকাতর ও উচ্চ-মর্যাদার ব্র্যান্ডিং প্রয়োজন ছিল যা এক্সিকিউটিভ মিটিং ও লাক্সারি আনবক্সিংয়ে আলাদা ছাপ রাখে।",
        solution: "Engineered a dual-layer letterpress business card on 350 GSM cotton stock with registered blind debossing and precision gold foil stamping.",
        solution_bn: "৩৫০ জিএসএম কটন পেপারে ডাবল-লেয়ার লেটারপ্রেস ও নিখুঁত গোল্ড ফয়েল স্ট্যাম্পিংয়ের সমন্বয়ে ব্র্যান্ডিং তৈরি করা হয়।",
        results: [
          "Delivered 100% vector master identity kit with print-ready press plates",
          "Zero color deviation across 5 stationery items in 10,000 unit production run",
          "Client reported a 45% increase in high-tier corporate account conversions"
        ],
        results_bn: [
          "প্রিন্ট-রেডি প্রেস প্লেট সহ শতভাগ ভেক্টর মাস্টার আইডেন্টিটি কিট সরবরাহ",
          "১০,০০০ কপি উৎপাদনে ৫টি স্টেশনারি আইটেমে জিরো কালার ডেভিয়েশন",
          "উচ্চমানের কর্পোরেট গ্রাহক রূপান্তরে ক্লায়েন্টের ৪৫% প্রবৃদ্ধি"
        ]
      }
    },
    {
      id: "aurelia-packaging",
      title: "Aurélia Elysian Packaging & Dielines",
      title_bn: "অরেলিয়া প্রিমিয়াম প্যাকেজিং ও ডাই-লাইন",
      category: "Packaging & Labels",
      category_bn: "প্যাকেজিং ও লেবেল",
      filterCategory: "packaging",
      image: "assets/project-packaging.jpg",
      badge: "Packaging Design",
      badge_bn: "প্যাকেজিং ডিজাইন",
      shortDesc: "High-end cosmetic packaging box and elixir bottle label engineered with custom laser die-cut window, gold hot foil stamping, and velvet matte lamination.",
      shortDesc_bn: "কসমেটিক বক্স এবং অ্যারোমা বোতল লেবেল—কাস্টম লেজার ডাই-কাট উইন্ডো, গোল্ড ফয়েল স্ট্যাম্পিং ও ভেলভেট সফট-টাচ ম্যাট ল্যামিনেশন সহ।",
      metric: "📦 50,000+ Units manufactured with 0% press defect rate",
      metric_bn: "📦 ৫০,০০০+ কপি উৎপাদনে ০% প্রেস ত্রুটি",
      specs: {
        paper: "400 GSM Rigid Greyboard + 157 GSM Art Paper",
        color: "CMYK + Spot Emerald Green + Foil Gold",
        finishing: "Velvet Soft-Touch Matte + Multi-Level Foil",
        printMethod: "Heidelberg Speedmaster 6-Color Offset"
      },
      tags: ["Packaging Box", "Dieline", "Spot UV", "Velvet Matte"],
      tags_bn: ["প্যাকেজিং বক্স", "ডাই-লাইন", "স্পট ইউভি", "ভেলভেট ম্যাট"],
      caseStudy: {
        client: "Aurélia Organics Inc.",
        duration: "8 Weeks",
        role: "Packaging Engineer & Graphic Specialist",
        challenge: "Creating a structural box that protects fragile amber glass bottles while offering a magnetic unboxing ritual that commands a $120 retail price point.",
        challenge_bn: "কাচের বোতলের নিখুঁত সুরক্ষা এবং ম্যাগনেটিক আনবক্সিং অভিজ্ঞতাসম্পন্ন একটি স্ট্রাকচারাল বক্স তৈরি করা।",
        solution: "Designed custom CAD dieline with high-density EVA foam insert and dual-tone foil stamping with microscopic floral filigree.",
        solution_bn: "হাই-ডেনসিটি ইভিএ ফোম ইনসার্ট এবং মাইক্রোস্কোপিক ফয়েল স্ট্যাম্পিং সহ সিএডি ডাই-লাইন ইঞ্জিনিয়ারিং।",
        results: [
          "Flawless fit test on first physical prototyping run",
          "Production cycle completed 2 weeks ahead of scheduled retail launch",
          "Featured on Packaging of the World & Dieline Awards 2024"
        ],
        results_bn: [
          "প্রথম প্রোটোটাইপিং ট্রায়ালেই শতভাগ সঠিক ফিটিং নিশ্চিত",
          "নির্ধারিত সময়ের ২ সপ্তাহ আগেই বাণিজ্যিক উৎপাদন সমাপ্ত",
          "প্যাকেজিং অফ দ্য ওয়ার্ল্ড ও ডাই-লাইন অ্যাওয়ার্ড ২০২৪-এ প্রশংসিত"
        ]
      }
    },
    {
      id: "visual-dialogues-cmyk",
      title: "Visual Dialogues Editorial Art Catalog",
      title_bn: "ভিজ্যুয়াল ডায়ালগস আর্ট ম্যাগাজিন ও ক্যাটালগ",
      category: "Print & Prepress",
      category_bn: "প্রিন্ট ও প্রি-প্রেস",
      filterCategory: "prepress",
      image: "assets/project-cmyk.jpg",
      badge: "Prepress Mastery",
      badge_bn: "প্রি-প্রেস স্পেশাল",
      shortDesc: "Hardcover exhibition catalog with precision CMYK color separations, custom halftone screen angles, Swiss grid layouts, and archival thread-sewn binding.",
      shortDesc_bn: "নিখুঁত CMYK কালার সেপারেশন, কাস্টম হাফটোন স্ক্রিন অ্যাঙ্গেল ও হার্ডকভার বাইন্ডিং সহ আধুনিক আর্ট এক্সিবিশন ক্যাটালগ।",
      metric: "🎯 100% Delta-E < 1.5 color accuracy across 180 pages",
      metric_bn: "🎯 ১৮০ পৃষ্ঠায় ১০০% সঠিক কালার অ্যাকুরেসি",
      specs: {
        paper: "Inside: 170 GSM Woodfree Matte / Cover: 300 GSM Art Board",
        color: "4-Color Process CMYK + Matte Dispersion Varnish",
        finishing: "Thread-sewn Hardcover with Ribbon Marker",
        printMethod: "Web Offset & Sheet-fed Lithography"
      },
      tags: ["Editorial", "CMYK Separation", "Halftone Screens", "Hardcover"],
      tags_bn: ["সম্পাদকীয়", "CMYK সেপারেশন", "হাফটোন স্ক্রিন", "হার্ডকভার"],
      caseStudy: {
        client: "Modern Art Biennale",
        duration: "5 Weeks",
        role: "Editorial Art Director & Prepress Supervisor",
        challenge: "Artworks with vibrant gouache and oil paintings required faithful reproduction without the typical CMYK gamut clipping or color shifts.",
        challenge_bn: "তেলচিত্র ও ওয়াটারকালার পেইন্টিংয়ের উজ্জ্বল শেডগুলোকে অফসেট প্রেসে নির্ভুলভাবে ফুটিয়ে তোলা।",
        solution: "Calibrated custom ICC press profiles for UPM coated paper and implemented GCR (Gray Component Replacement) for neutral rich shadow tones.",
        solution_bn: "ইউপিএম কোটেড পেপারের জন্য কাস্টম আইসিসি প্রেস প্রোফাইল ক্যালিব্রেশন এবং জিসিআর প্রযুক্তির ব্যবহার।",
        results: [
          "Curators and participating artists approved first-pass press proofs",
          "Flawless color bars and registration marks verified on press",
          "Sold out entire 3,000 limited edition print run at the gala"
        ],
        results_bn: [
          "প্রথম প্রেস প্রুফেই কিউরেটর ও শিল্পীদের চূড়ান্ত অনুমোদন লাভ",
          "প্রেসে যাচাইকৃত নিখুঁত কালার বার ও রেজিস্ট্রেশন মার্ক",
          "উদ্বোধনী দিনেই ৩,০০০ কপির সম্পূর্ণ লিমিটেড এডিশন বিক্রি"
        ]
      }
    },
    {
      id: "bornomala-lettering",
      title: "Bornomala Bengali Calligraphy & Type",
      title_bn: "বর্ণমালা বাংলা ক্যালিগ্রাফি ও টাইপ ডিজাইন",
      category: "Typography & Lettering",
      category_bn: "টাইপোগ্রাফি ও লেটারিং",
      filterCategory: "typography",
      image: "assets/project-typography.jpg",
      badge: "Type Design",
      badge_bn: "টাইপ ডিজাইন",
      shortDesc: "Contemporary Bengali alphabet exhibition poster and bespoke typeface exploration celebrating the expressive curves and architectural balance of Bornomala.",
      shortDesc_bn: "বাংলা বর্ণমালার স্থাপত্যিক সৌন্দর্য ও বক্রতার প্রকাশ—সমসাময়িক বাংলা ডিসপ্লে টাইপফেস এবং ফাইন আর্ট স্ক্রিনপ্রিন্ট পোস্টার।",
      metric: "🖋️ Exhibited at National Typographic Biennial",
      metric_bn: "🖋️ জাতীয় টাইপোগ্রাফিক প্রদর্শনীতে প্রদর্শিত",
      specs: {
        paper: "280 GSM Rives BFK Archival Cotton Printmaking Paper",
        color: "Deep Carbon Black & Vermilion Red Screen Ink",
        finishing: "Hand Pulled Silkscreen Serigraphy",
        printMethod: "Fine Art Screen Printing"
      },
      tags: ["Bangla Typography", "Bornomala", "Lettering", "Serigraphy"],
      tags_bn: ["বাংলা টাইপোগ্রাফি", "বর্ণমালা", "লেটারিং", "স্ক্রিনপ্রিন্ট"],
      caseStudy: {
        client: "Typographic Heritage Foundation",
        duration: "4 Weeks",
        role: "Type Designer & Calligrapher",
        challenge: "Modernizing classical Bengali ligatures and vowel signs (kar & jofola) into a contemporary minimalist Swiss grid layout without losing cultural identity.",
        challenge_bn: "ঐতিহ্যবাহী বাংলা যুক্তাক্ষর ও কার-চিহ্নগুলোকে আধুনিক মিনিমালিস্ট সুইস গ্রিডে রূপান্তর করা।",
        solution: "Hand-inked 50 primary glyphs using Japanese bamboo pens, vectorized with bezier curve optimization, and screen-printed by hand in 2 spot colors.",
        solution_bn: "বাঁশের কলমে ৫০টি মূল গ্লিফ হাতে এঁকে বেজিয়ার কার্ভ অপটিমাইজেশন ও হস্তনির্মিত ২-রঙা স্ক্রিন প্রিন্ট করা হয়।",
        results: [
          "Archived in the permanent collection of Graphic Arts Institute",
          "Over 1,200 fine art screen prints distributed to collectors worldwide",
          "Adapted as custom brand font for leading publishing house"
        ],
        results_bn: [
          "গ্রাফিক আর্টস ইনস্টিটিউটের স্থায়ী আর্কাইভে স্থান লাভ",
          "বিশ্বব্যাপী সংগ্রাহকদের কাছে ১,২০০+ কপি হস্তনির্মিত প্রিন্ট সমাদৃত",
          "শীর্ষস্থানীয় প্রকাশনা সংস্থার ব্র্যান্ড ফন্ট হিসেবে অন্তর্ভুক্ত"
        ]
      }
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Discovery & Creative Brief",
      title_bn: "পরিকল্পনা ও ব্রিফিং",
      desc: "Understanding your brand vision, target demographic, printing requirements, and aesthetic aspirations to lay down a solid creative strategy.",
      desc_bn: "আপনার ব্র্যান্ড ভিশন, লক্ষ্যমাত্রা, প্রিন্টিং প্রয়োজনীয়তা এবং নান্দনিক চাহিদা গভীরভাবে অনুধাবন করে পরিকল্পনা সাজানো।"
    },
    {
      step: "02",
      title: "Typography & Visual Strategy",
      title_bn: "টাইপোগ্রাফি ও কৌশল",
      desc: "Selecting the ideal typographic hierarchy, paper substrates, Pantone palettes, and conceptual moodboards tailored for printing excellence.",
      desc_bn: "আদর্শ টাইপোগ্রাফিক হায়ারার্কি, উপযুক্ত কাগজ নির্বাচন, প্যান্টোন কালার প্যালেট ও মেটেরিয়াল নির্ধারণ।"
    },
    {
      step: "03",
      title: "Concept Design & 3D Prototyping",
      title_bn: "কনসেপ্ট ও থ্রিডি প্রোটোটাইপ",
      desc: "Developing bespoke brand concepts, packaging dielines, and photo-realistic 3D mockups so you experience the tactile finish before printing.",
      desc_bn: "অনন্য ব্র্যান্ড কনসেপ্ট, প্যাকেজিং ডাই-লাইন ও রিয়েলিস্টিক থ্রিডি মকআপ প্রস্তুতকরণ, যাতে প্রেসে যাওয়ার আগেই ফিনিশিং দেখা যায়।"
    },
    {
      step: "04",
      title: "Prepress & CMYK Separation",
      title_bn: "প্রি-প্রেস ও কালার সেপারেশন",
      desc: "Technical file preparation: setting bleed, trim margins, trapping, overprint preview, color separation plates (C, M, Y, K), and PDF/X-1a export.",
      desc_bn: "কারিগরি ফাইল প্রস্তুতি: ব্লিড, ট্রিম মার্জিন, ট্র্যাপিং, ওভারপ্রিন্ট প্রিভিউ, চার রঙের প্লেট সেপারেশন ও PDF/X-1a এক্সপোর্ট।"
    },
    {
      step: "05",
      title: "Press Supervision & Delivery",
      title_bn: "প্রেস তদারকি ও ফাইনাল ডেলিভারি",
      desc: "Liaising with the printing press, approving color proofs and press sheets, ensuring zero errors, and delivering master vector files.",
      desc_bn: "প্রিন্টিং প্রেসের সাথে সমন্বয়, কালার প্রুফ ও প্রেস শিট অনুমোদন, শতভাগ ত্রুটিহীনতা নিশ্চিত করে মাস্টার ভেক্টর ফাইল ডেলিভারি।"
    }
  ],

  whyChooseMe: [
    {
      number: "01",
      title: "Zero Prepress Errors",
      title_bn: "শতভাগ ত্রুটিমুক্ত প্রি-প্রেস",
      desc: "No missing fonts, low-res bitmaps, bleed clipping, or trapping gaps. Your files will run on any commercial Heidelberg or digital press without hesitation.",
      desc_bn: "ফন্ট মিসিং, লো-রেজোলিউশন ছবি, ব্লিড কাট বা ট্র্যাপিং ফাঁকের কোনো ঝুঁকি নেই। যেকেনো আধুনিক হাইডেলবার্গ প্রেসে স্বাচ্ছন্দ্যে চলবে।"
    },
    {
      number: "02",
      title: "Master-Level Typography",
      title_bn: "উচ্চমানের টাইপোগ্রাফি দক্ষতা",
      desc: "Expertise in both Bangla Bornomala calligraphy and international Latin typographic systems, ensuring balanced kerning, leading, and hierarchy.",
      desc_bn: "বাংলা বর্ণমালা ক্যালিগ্রাফি এবং আন্তর্জাতিক লাতিন টাইপোগ্রাফি উভয় ক্ষেত্রে গভীর জ্ঞান—সুষম কার্নিং ও হায়ারার্কি সহ।"
    },
    {
      number: "03",
      title: "True CMYK & Pantone Precision",
      title_bn: "নিখুঁত CMYK ও প্যান্টোন কালার",
      desc: "Expert calibration prevents muddy prints and dull shifts. What you see on calibrated proofs is exactly what dries on the paper stock.",
      desc_bn: "কালার শিফট বা অসঙ্গতি দূর করতে ক্যালিব্রেটেড প্রুফিং। কম্পিউটারে অনুমোদিত শেডটিই কাগজে নিখুঁতভাবে ফুটে ওঠে।"
    },
    {
      number: "04",
      title: "Substrate & Material Knowledge",
      title_bn: "কাগজ ও মেটেরিয়ালের গভীর জ্ঞান",
      desc: "In-depth guidance on choosing the right paper (Art Card, Kraft, Cotton, Textured Linen, Metallic) and finishes (Foil, Spot UV, Emboss).",
      desc_bn: "আর্ট কার্ড, ক্রাফট, কটন, টেক্সচার্ড লিনেন ইত্যাদি সঠিক কাগজের নির্বাচন এবং উপযুক্ত ফিনিশিং সম্পর্কিত বিশেষজ্ঞ পরামর্শ।"
    },
    {
      number: "05",
      title: "Packaging Dieline Engineering",
      title_bn: "প্যাকেজিং ডাই-লাইন ইঞ্জিনিয়ারিং",
      desc: "Accurate structural vector dielines with precise folding creases, glue flaps, and tuck-ends ready for laser die-cutting dies.",
      desc_bn: "লেজার ডাই-কাটিংয়ের জন্য মিলিমিটার-নিখুঁত ভাঁজ, আঠার ফ্ল্যাপ ও টাক-এন্ড সহ নির্ভুল স্ট্রাকচারাল ভেক্টর ডাই-লাইন।"
    },
    {
      number: "06",
      title: "Direct Client & Press Support",
      title_bn: "সরাসরি প্রেস ও ক্লায়েন্ট সাপোর্ট",
      desc: "From initial napkin sketch all the way to final delivery from the printing plant, you receive direct one-on-one professional support.",
      desc_bn: "প্রাথমিক কনসেপ্ট স্কেচ থেকে শুরু করে প্রিন্টিং প্ল্যান্টের ফাইনাল ডেলিভারি পর্যন্ত সার্বক্ষণিক ওয়ান-অন-ওয়ান পেশাদার সহায়তা।"
    }
  ],

  faqs: [
    {
      question: "How is it guaranteed that colors won't shift between digital screens and final printed materials?",
      question_bn: "কম্পিউটার স্ক্রিন এবং ফাইনাল প্রিন্টের মধ্যে রঙের কোনো অমিল হবে না—তা কীভাবে নিশ্চিত করা হয়?",
      answer: "Computer screens display in RGB (additive light), while commercial printing presses deposit physical CMYK inks (subtractive color) onto paper. As a prepress specialist, I work strictly in certified CMYK color spaces, utilize standardized Pantone Formula Guides (Solid Coated & Uncoated), embed calibrated ICC press profiles, and check total ink coverage (TIC/TAC) to ensure flawless color fidelity.",
      answer_bn: "কম্পিউটার স্ক্রিন আরজিবি (RGB) আলোতে কাজ করে, কিন্তু প্রিন্টিং প্রেসে ফিজিক্যাল সিএমওয়াইকে (CMYK) কালিতে মুদ্রণ হয়। প্রি-প্রেস স্পেশালিস্ট হিসেবে আমি সার্টিফায়েড CMYK কালার স্পেসে কাজ করি, প্যান্টোন ফর্মুলা গাইড ব্যবহার করি এবং ক্যালিব্রেটেড আইসিসি (ICC) প্রোফাইল যুক্ত করে শতভাগ কালার অ্যাকুরেসি নিশ্চিত করি।"
    },
    {
      question: "What file formats will be delivered for a print and packaging project?",
      question_bn: "প্রিন্ট বা প্যাকেজিং প্রজেক্ট শেষে কী কী ফরম্যাটে ফাইল সরবরাহ করা হবে?",
      answer: "You receive industry-standard master press files: Adobe Illustrator (.AI) with live text and outlined curves, Vector EPS, high-resolution PDF/X-1a and PDF/X-4 with embedded bleed and crop marks, separate CAD dielines for cutting dies, and web-ready SVG/PNG files.",
      answer_bn: "আপনি পাবেন আন্তর্জাতিক স্ট্যান্ডার্ডের মাস্টার প্রেস ফাইল: অ্যাডোবি ইলাস্ট্রেটর (.AI), হাই-রেজোলিউশন PDF/X-1a ও PDF/X-4 (ব্লিড ও ক্রপ মার্ক সহ), কাটিং ডাইয়ের জন্য আলাদা সিএডি ভেক্টর ডাই-লাইন এবং ওয়েব-রেডি SVG/PNG ফাইল।"
    },
    {
      question: "Do you design custom Bengali fonts and Bornomala typography?",
      question_bn: "আপনি কি কাস্টম বাংলা ফন্ট ও বর্ণমালা টাইপোগ্রাফি তৈরি করেন?",
      answer: "Yes! As a typography specialist, I design bespoke Bengali calligraphy, custom Bornomala display lettering for titles, brand logos, book covers, and full OpenType font files with complete conjuncts (juktakkhor) and vowel marks.",
      answer_bn: "হ্যাঁ! টাইপোগ্রাফি স্পেশালিস্ট হিসেবে আমি কাস্টম বাংলা ক্যালিগ্রাফি, শিরোনাম ও লোগোর জন্য বর্ণমালা ডিসপ্লে লেটারিং এবং যুক্তাক্ষর ও কার-চিহ্ন সহ পূর্ণাঙ্গ ওপেনটাইপ (OpenType) ফন্ট তৈরি করি।"
    },
    {
      question: "Can you provide structural dielines for custom box packaging?",
      question_bn: "কাস্টম বক্স প্যাকেজিংয়ের জন্য কি স্ট্রাকচারাল ডাই-লাইন তৈরি করে দিতে পারবেন?",
      answer: "Absolutely. I design precision vector dielines including cut lines, crease/score lines, perforations, and glue flaps with exact millimeter measurements matching your product dimensions.",
      answer_bn: "অবশ্যই। আপনার পণ্যের সাইজের সাথে মিল রেখে মিলিমিটারের নিখুঁত মাপে কাটিং লাইন, ক্রিজিং/ফোল্ডিং লাইন, পারফোরেশন এবং গ্লু ফ্ল্যাপ সহ প্রিসিশন ভেক্টর ডাই-লাইন প্রস্তুত করে দিই।"
    },
    {
      question: "What is your typical turnaround time for a complete branding or packaging project?",
      question_bn: "একটি পূর্ণাঙ্গ ব্র্যান্ডিং বা প্যাকেজিং প্রজেক্ট সম্পন্ন করতে সাধারণত কত সময় লাগে?",
      answer: "A complete brand identity typically takes 2 to 3 weeks. Packaging dieline and design projects usually take 10 to 14 days including 3D mockup validation and prepress file generation.",
      answer_bn: "একটি পূর্ণাঙ্গ ব্র্যান্ড আইডেন্টিটি সাধারণত ২ থেকে ৩ সপ্তাহ সময় নেয়। আর প্যাকেজিং ডিজাইন ও ডাই-লাইন প্রজেক্ট সম্পন্ন করতে থ্রিডি মকআপ ও প্রি-প্রেস সহ সাধারণত ১০ থেকে ১৪ কর্মদিবস লাগে।"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
