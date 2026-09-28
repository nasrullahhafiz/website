/**
 * Bilingual Translations Dictionary (English <-> বাংলা)
 * Nasrullah Hafiz Portfolio
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.calculator": "Print Pre View",
    "nav.talk": "Let's Talk",

    // Hero Section
    "hero.trust_headline": "Trusted by startups & businesses worldwide",
    "hero.trust_rating": "Rated <strong>5.0/5</strong> on client satisfaction",
    "hero.title_line1": "Flawless Design,",
    "hero.title_line2": "Reliable",
    "hero.title_accent": "Printing.",
    "hero.bio": "I'm <strong>Nasrullah Hafiz</strong>, a Professional Graphic Designer, Typography Specialist & Print Production Expert. Through meticulous CMYK prepress calibration and premium packaging design, I create brand identities that ensure precise commercial results.",
    "hero.btn_work": "View Work",
    "hero.btn_talk": "Let's Talk",

    // Hero Stats
    "hero.stat1_header": "Projects Completed",
    "hero.stat1_num": "300+",
    "hero.stat1_desc": "Corporate & commercial print projects",
    "hero.stat2_header": "Happy Clients",
    "hero.stat2_num": "270+",
    "hero.stat2_desc": "Worldwide brands & publishing houses",
    "hero.stat3_header": "Press & Color Accuracy",
    "hero.stat3_num": "100%",
    "hero.stat3_desc": "Zero-error prepress print calibration",

    // About
    "about.tag": "( About )",
    "about.title": "From Design to Output—<span class=\"text-accent\">Quality in Every Detail</span>.",
    "about.desc": "Crafting high-impact graphic design, commercial print production, engaging video edits, and modern web solutions.",
    "about.p1": "Nasrullah Hafiz — a multidisciplinary creative specialist delivering dependable solutions across graphic design, video production, and modern web development. With deep technical expertise across print and digital mediums, every project is executed with precision from initial concept to final delivery.",
    "about.p2": "Great design must work effortlessly in the real world. Whether calibrating zero-defect CMYK print files for packaging, crafting dynamic motion graphics for video campaigns, or architecting intuitive web interfaces, the priority is always commanding trust and delivering tangible commercial value.",
    "about.p3": "From launching new brand identities and luxury print assets to building high-converting websites and commercial video content—dedicated to elevating your brand with speed and craft.",
    "about.pillar1_title": "Graphics & Print Design",
    "about.pillar1_desc": "Brand identities, luxury packaging, and 100% press-ready CMYK prepress calibration.",
    "about.pillar2_title": "Video & Motion Production",
    "about.pillar2_desc": "Commercial video editing, dynamic motion graphics, color grading, and sound design.",
    "about.pillar3_title": "Web & Software Solutions",
    "about.pillar3_desc": "Responsive, modern web development, intuitive UX/UI design, and digital platforms.",

    // Services
    "services.tag": "( Services )",
    "services.title": "Creative <span class=\"text-accent\">Services</span>.",
    "services.desc": "Explore complete capabilities, deliverables, and production workflows for your brand and business.",
    "services.tab_all": "Services",
    "services.tab_print": "Graphics & Printing",
    "services.tab_video": "Video Production",
    "services.tab_dev": "Web & Software Dev",
    "services.view_details": "View Deliverables",
    "services.hide_details": "Hide Deliverables",
    "services.inquire_btn": "Inquire This Service",

    // CMYK Studio
    "cmyk.tag": "( Industrial Print & Prepress Lab )",
    "cmyk.title": "Interactive <span class=\"text-accent\">CMYK Color Plate</span> Separator.",
    "cmyk.desc": "Experience how digital artwork translates into physical 4-color process printing plates (Cyan, Magenta, Yellow, Key/Black) with registered crop marks and bleed safety zones.",
    "cmyk.artwork_label": "Select Press Artwork Sample:",
    "cmyk.plates_label": "Inspect Individual Color Plates:",
    "cmyk.btn_all": "All CMYK (Composite)",
    "cmyk.btn_c": "Cyan (C) Plate",
    "cmyk.btn_m": "Magenta (M) Plate",
    "cmyk.btn_y": "Yellow (Y) Plate",
    "cmyk.btn_k": "Black (K) Plate",
    "cmyk.btn_toggle_dieline": "Toggle Registration Crosshairs & Bleed Lines",
    "cmyk.specs_title": "Technical Press Plate Specifications",
    "cmyk.spec1_label": "Halftone Screen Angle:",
    "cmyk.spec2_label": "Ink Formulation:",
    "cmyk.spec3_label": "Optical Target:",

    // Featured Work
    "work.tag": "( Work )",
    "work.title": "Selected <span class=\"text-accent\">Works</span>.",
    "work.desc": "",
    "work.filter_all": "All Projects",
    "work.filter_branding": "Branding & Identity",
    "work.filter_packaging": "Packaging & Labels",
    "work.filter_prepress": "Print & Prepress",
    "work.filter_typography": "Typography & Lettering",
    "work.view_case_study": "View Case Study",

    // Print Estimator
    "estimator.tag": "( Print Pre View )",
    "estimator.title": "Configure Your Print & <span class=\"text-accent\">Design Scope</span>.",
    "estimator.desc": "Select your project parameters, paper stock, finishing enhancements, and volume to receive an instantaneous estimate and submit your direct order inquiry.",
    "estimator.specs_title": "Production Specifications",
    "estimator.step1_label": "01. Project Category / Deliverable",
    "estimator.step2_label": "02. Paper Substrate / Material Stock",
    "estimator.step3_label": "03. Premium Finishing Treatments (Select All That Apply)",
    "estimator.step4_label": "04. Production Volume / Units",
    "estimator.summary_title": "Estimated Project Estimate",
    "estimator.summary_desc": "Estimated Design, Structural CAD Dieline & Prepress Plate Setup",
    "estimator.turnaround_label": "Estimated Turnaround:",
    "estimator.press_label": "Recommended Press:",
    "estimator.btn_submit": "Submit Print Inquiry",
    "estimator.btn_whatsapp": "Chat Directly on WhatsApp",
    "estimator.inq_name_ph": "Your Name or Studio",
    "estimator.inq_email_ph": "Your Business Email",
    "estimator.inq_phone_ph": "Phone or WhatsApp Number",
    "estimator.inq_notes_ph": "Any specific requirements (e.g. custom dimensions, Pantone color codes)...",

    // Process
    "process.tag": "( Working Process )",
    "process.title": "From Napkin Sketch to <span class=\"text-accent\">The Printing Press</span>.",
    "process.desc": "A structured 5-stage methodology ensuring pixel-perfect screen design and flawless ink-on-paper realization.",

    // Why Choose
    "why.tag": "( Why Choose NSR. )",
    "why.title": "Craft That Eliminates <span class=\"text-accent\">Pressroom Risks</span>.",
    "why.desc": "Why leading brands, luxury manufacturers, and publishing houses trust these design and prepress files.",

    // FAQ
    "faq.tag": "( Frequently Asked Questions )",
    "faq.title": "Frequently Asked Questions & Clear Answers.",

    // CTA
    "cta.title": "Ready to Elevate Your Brand & <span class=\"text-accent\">Print Quality</span>?",
    "cta.desc": "From creative design and precision print to packaging and total brand solutions, we are right by your side.",
    "cta.btn": "Discuss Your Project",

    "footer.brand_title": "Nasrullah Hafiz",
    "footer.tagline": "Helping Brands & Teams Shine Globally",
    "footer.col_company": "Company",
    "footer.link_home": "Home",
    "footer.link_playground": "Playground",
    "footer.link_about": "About",
    "footer.link_contact": "Contact",
    "footer.col_legal": "Legal",
    "footer.link_privacy": "Privacy Policy",
    "footer.link_terms": "Terms of Use",
    "footer.link_sales": "Sales Policy",
    "footer.col_get_started": "Get Started",
    "footer.bottom_terms": "Terms & Support",
    "footer.bottom_privacy": "Privacy Policy",
    "footer.bottom_credit": "Nasrullah Hafiz × NSR.",
    "footer.rights": "© 2026 Nasrullah Hafiz. All rights reserved."
  },

  bn: {
    // Navigation
    "nav.about": "পরিচিতি",
    "nav.services": "সেবাসমূহ",
    "nav.work": "কাজ",
    "nav.calculator": "প্রিন্ট প্রি-ভিউ",
    "nav.talk": "যোগাযোগ করুন",

    // Hero Section
    "hero.trust_headline": "বিশ্বজুড়ে স্টার্টআপ ও স্বনামধন্য ব্র্যান্ডের বিশ্বস্ত সহযোগী",
    "hero.trust_rating": "গ্রাহক সন্তুষ্টিতে <strong>৫.০/৫</strong> রেটিং প্রাপ্ত",
    "hero.title_line1": "নিখুঁত ডিজাইন,",
    "hero.title_line2": "নির্ভরযোগ্য",
    "hero.title_accent": "প্রিন্টিং।",
    "hero.bio": "আমি <strong>নাসরুল্লাহ হাফিজ</strong>, একজন প্রফেশনাল গ্রাফিক ডিজাইনার, টাইপোগ্রাফি স্পেশালিস্ট ও প্রিন্ট প্রোডাকশন এক্সপার্ট। নিখুঁত CMYK প্রি-প্রেস ক্যালিব্রেশন এবং প্রিমিয়াম প্যাকেজিং ডিজাইনের মাধ্যমে আমি তৈরি করি এমন ব্র্যান্ড আইডেন্টিটি, যা সঠিক বাণিজ্যিক ফলাফল নিশ্চিত করে।",
    "hero.btn_work": "কাজ দেখুন",
    "hero.btn_talk": "যোগাযোগ করুন",

    // Hero Stats
    "hero.stat1_header": "সম্পন্ন প্রজেক্ট",
    "hero.stat1_num": "৩০০+",
    "hero.stat1_desc": "কর্পোরেট ও বাণিজ্যিক প্রিন্ট প্রজেক্ট",
    "hero.stat2_header": "সন্তুষ্ট ক্লায়েন্ট",
    "hero.stat2_num": "২৭০+",
    "hero.stat2_desc": "বিশ্বব্যাপী ব্র্যান্ড ও প্রকাশনা সংস্থা",
    "hero.stat3_header": "প্রেস ও কালার নির্ভুলতা",
    "hero.stat3_num": "১০০%",
    "hero.stat3_desc": "শতভাগ ত্রুটিমুক্ত প্রি-প্রেস কালার ক্যালিব্রেশন",

    // About
    "about.tag": "( পরিচিতি )",
    "about.title": "আইডিয়া থেকে আউটপুট—<span class=\"text-accent\">সবকিছুতেই নিখুঁত কোয়ালিটি</span>।",
    "about.desc": "গ্রাফিক্স ডিজাইন, প্রিন্টিং প্রেসের কাজ, ভিডিও এডিটিং কিংবা আধুনিক ওয়েবসাইট—প্রতিটি প্রজেক্টে ব্র্যান্ডের ভ্যালু বাড়াতে কাজ করি নির্ভরযোগ্যভাবে।",
    "about.p1": "নাসরুল্লাহ হাফিজ—গ্রাফিক্স ডিজাইন, ভিডিও প্রোডাকশন এবং প্রফেশনাল প্রিন্টিং সলিউশনের এক নির্ভরযোগ্য নাম। প্রতিটি মাধ্যমের কারিগরি খুঁটিনাটি বোঝার কারণে আইডিয়া থেকে শুরু করে ফাইনাল আউটপুট পর্যন্ত সবকিছুতেই থাকে নিখুঁত ফিনিশিং।",
    "about.p2": "গ্রাফিক্স ডিজাইন কেবল দেখতে সুন্দর হলেই চলে না, প্রেসে প্রিন্ট দেওয়ার সময় যেন এক ফোঁটাও রঙ না ফাটে কিংবা প্যাকেজিংয়ের কাটিং ঠিক থাকে—সেটা নিশ্চিত করা জরুরি। একইভাবে ভিডিও এবং ওয়েবের ক্ষেত্রেও দর্শক যাতে এক দেখাতেই আকৃষ্ট হয় এবং ব্র্যান্ডের ওপর ভরসা পায়, সেটাই প্রতিটি প্রজেক্টের মূল ফোকাস।",
    "about.p3": "নতুন ব্র্যান্ড শুরু করা, প্রোডাক্টের প্রিমিয়াম প্যাকেজিং ও বিজ্ঞাপন তৈরি করা, কিংবা ক্লায়েন্টদের জন্য আধুনিক ওয়েবসাইট বানানো—যেকোনো ক্রিয়েটিভ কাজে নিখুঁত ও দ্রুত রেজাল্ট দেওয়াই লক্ষ্য।",
    "about.pillar1_title": "গ্রাফিক্স ও প্রিন্ট ডিজাইন",
    "about.pillar1_desc": "লোগো, ব্র্যান্ডিং, প্রিমিয়াম প্যাকেজিং এবং প্রেসে প্রিন্ট করার জন্য শতভাগ নির্ভুল CMYK ফাইল তৈরি।",
    "about.pillar2_title": "ভিডিও ও মোশন প্রোডাকশন",
    "about.pillar2_desc": "সোশ্যাল মিডিয়া ও ব্র্যান্ডের জন্য আকর্ষণীয় ভিডিও এডিটিং, সাউন্ড ডিজাইন এবং ডায়নামিক মোশন গ্রাফিক্স।",
    "about.pillar3_title": "ওয়েব ও সফটওয়্যার সলিউশন",
    "about.pillar3_desc": "ইউজার-ফ্রেন্ডলি ইন্টারফেস, আধুনিক রেসপনসিভ ওয়েবসাইট এবং বিজনেস বৃদ্ধির জন্য উপযোগী ডিজিটাল প্ল্যাটফর্ম।",

    // Services
    "services.tag": "( সেবাসমূহ )",
    "services.title": "সৃজনশীল <span class=\"text-accent\">সেবাসমূহ</span>।",
    "services.desc": "আপনার ব্র্যান্ড ও ব্যবসার সামগ্রিক প্রবৃদ্ধির জন্য ৩টি মূল সৃজনশীল পরিষেবা—বিস্তারিত দেখতে কার্ডগুলো এক্সপ্লোর করুন।",
    "services.tab_all": "সেবাসমূহ",
    "services.tab_print": "গ্রাফিক্স অ্যান্ড প্রিন্টিং",
    "services.tab_video": "ভিডিও প্রোডাকশন",
    "services.tab_dev": "ওয়েব ও সফটওয়্যার",
    "services.view_details": "বিস্তারিত দেখুন",
    "services.hide_details": "সংক্ষিপ্ত করুন",
    "services.inquire_btn": "এই সার্ভিসের জন্য যোগাযোগ",

    // CMYK Studio
    "cmyk.tag": "( ইন্ডাস্ট্রিয়াল প্রিন্ট ও প্রি-প্রেস ল্যাব )",
    "cmyk.title": "ইন্টারেক্টিভ <span class=\"text-accent\">CMYK কালার প্লেট</span> সেপারেটর।",
    "cmyk.desc": "কম্পিউটারের ডিজিটাল আর্টওয়ার্ক কীভাবে বাস্তব প্রেসে ৪টি রঙের প্লেটে (Cyan, Magenta, Yellow, Black) আলাদা হয়ে নিখুঁতভাবে কাগজে মুদ্রিত হয় তা প্রত্যক্ষ করুন।",
    "cmyk.artwork_label": "প্রেস আর্টওয়ার্ক স্যাম্পল নির্বাচন করুন:",
    "cmyk.plates_label": "স্বতন্ত্র কালার প্লেট পরীক্ষা করুন:",
    "cmyk.btn_all": "সবগুলো CMYK (কম্পোজিট)",
    "cmyk.btn_c": "সায়ান (C) প্লেট",
    "cmyk.btn_m": "ম্যাজেন্টা (M) প্লেট",
    "cmyk.btn_y": "ইয়েলো (Y) প্লেট",
    "cmyk.btn_k": "ব্ল্যাক (K) প্লেট",
    "cmyk.btn_toggle_dieline": "রেজিস্ট্রেশন ক্রসহেয়ার ও ব্লিড লাইন দেখুন",
    "cmyk.specs_title": "টেকনিক্যাল প্রেস প্লেট স্পেসিফিকেশন",
    "cmyk.spec1_label": "হাফটোন স্ক্রিন অ্যাঙ্গেল:",
    "cmyk.spec2_label": "কালি ফর্মুলেশন:",
    "cmyk.spec3_label": "অপটিক্যাল টার্গেট:",

    // Featured Work
    "work.tag": "( কাজ )",
    "work.title": "<span class=\"text-accent\">কাজসমূহ</span>",
    "work.desc": "",
    "work.filter_all": "সকল প্রজেক্ট",
    "work.filter_branding": "ব্র্যান্ডিং ও আইডেন্টিটি",
    "work.filter_packaging": "প্যাকেজিং ও লেবেল",
    "work.filter_prepress": "প্রিন্ট ও প্রি-প্রেস",
    "work.filter_typography": "টাইপোগ্রাফি ও লেটারিং",
    "work.view_case_study": "কেস স্টাডি দেখুন",

    // Print Estimator
    "estimator.tag": "( প্রিন্ট প্রি-ভিউ )",
    "estimator.title": "আপনার প্রিন্ট ও <span class=\"text-accent\">ডিজাইন বাজেট</span> নির্ধারণ করুন।",
    "estimator.desc": "প্রজেক্টের ধরন, কাগজের উপাদান, বিশেষ ফিনিশিং এবং কপি সংখ্যা নির্বাচন করে তাৎক্ষণিক প্রাক্কলিত বাজেট জানুন এবং সরাসরি অর্ডার রিকোয়েস্ট পাঠান।",
    "estimator.specs_title": "প্রোডাকশন স্পেসিফিকেশন",
    "estimator.step1_label": "০১. প্রজেক্ট ক্যাটাগরি / আউটপুট",
    "estimator.step2_label": "০২. কাগজের ধরন / উপাদান",
    "estimator.step3_label": "০৩. প্রিমিয়াম ফিনিশিং ট্রিটমেন্ট (প্রয়োজনীয়গুলো বেছে নিন)",
    "estimator.step4_label": "০৪. উৎপাদন পরিমাণ / কপি সংখ্যা",
    "estimator.summary_title": "আনুমানিক প্রজেক্ট বাজেট",
    "estimator.summary_desc": "আনুমানিক ডিজাইন, স্ট্রাকচারাল ডাই-লাইন ও প্রি-প্রেস সেটআপ সহ",
    "estimator.turnaround_label": "আনুমানিক সময়:",
    "estimator.press_label": "প্রস্তাবিত প্রিন্টিং প্রেস:",
    "estimator.btn_submit": "প্রিন্ট কোটেশনের জন্য পাঠান",
    "estimator.btn_whatsapp": "হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন",
    "estimator.inq_name_ph": "আপনার নাম বা প্রতিষ্ঠানের নাম",
    "estimator.inq_email_ph": "আপনার বিজনেস ইমেইল",
    "estimator.inq_phone_ph": "ফোন অথবা হোয়াটসঅ্যাপ নম্বর",
    "estimator.inq_notes_ph": "আপনার বিশেষ কোনো চাহিদা (যেমন: সাইজ, প্যান্টোন কালার কোড ইত্যাদি)...",

    // Process
    "process.tag": "( কার্যপদ্ধতি )",
    "process.title": "প্রাথমিক স্কেচ থেকে <span class=\"text-accent\">ফাইনাল প্রিন্টিং প্রেস</span>।",
    "process.desc": "একটি সুশৃঙ্খল ৫ ধাপের পদ্ধতি যা স্ক্রিনের পিক্সেল-পারফেক্ট ডিজাইনকে কাগজে নিখুঁত কালিতে রূপান্তর করে।",

    // Why Choose
    "why.tag": "( বিশেষত্ব ও সক্ষমতা )",
    "why.title": "যে কারিগরি দক্ষতা দূর করে <span class=\"text-accent\">প্রেসে ভুলের ঝুঁকি</span>।",
    "why.desc": "বিশ্বমানের ব্র্যান্ড, লাক্সারি প্রস্তুতকারক এবং প্রকাশনা সংস্থাগুলো যে কারণে এই ডিজাইন ও প্রি-প্রেস ফাইলের ওপর আস্থা রাখে।",

    // FAQ
    "faq.tag": "( সাধারণ জিজ্ঞাসা )",
    "faq.title": "সাধারণ জিজ্ঞাসা ও স্পষ্ট উত্তর।",

    // CTA
    "cta.title": "আপনার ব্র্যান্ড ও <span class=\"text-accent\">প্রিন্টের মান</span> এক ধাপ এগিয়ে নিতে প্রস্তুত?",
    "cta.desc": "ক্রিয়েটিভ ডিজাইন, নিখুঁত প্রিন্ট, প্যাকেজিং এবং টোটাল ব্র্যান্ড সল্যুশনে আমরা আছি আপনার পাশে।",
    "cta.btn": "আপনার প্রজেক্ট নিয়ে কথা বলুন",

    "footer.brand_title": "নাসরুল্লাহ হাফিজ",
    "footer.tagline": "ব্র্যান্ড ও প্রকাশনাকে বিশ্বমানের প্রিন্ট ও টাইপোগ্রাফিতে রূপান্তর",
    "footer.col_company": "কোম্পানি",
    "footer.link_home": "হোম",
    "footer.link_playground": "পোর্টফোলিও",
    "footer.link_about": "পরিচিতি",
    "footer.link_contact": "যোগাযোগ",
    "footer.col_legal": "নীতিমালা",
    "footer.link_privacy": "গোপনীয়তা নীতি",
    "footer.link_terms": "ব্যবহারের শর্তাবলী",
    "footer.link_sales": "পেমেন্ট ও সেলস পলিসি",
    "footer.col_get_started": "শুরু করুন",
    "footer.bottom_terms": "শর্তাবলী ও সহায়তা",
    "footer.bottom_privacy": "গোপনীয়তা নীতি",
    "footer.bottom_credit": "নাসরুল্লাহ হাফিজ × NSR.",
    "footer.rights": "© ২০২৬ নাসরুল্লাহ হাফিজ। সর্বস্বত্ব সংরক্ষিত।"
  }
};

// Explicitly attach to window object for global availability
if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
