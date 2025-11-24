// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов копирайтинга
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем copywriting изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview (10-second previews for catalog)
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/vid10sec/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 2) {
    return "/videos/vid10sec/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 3) {
    return "/videos/vid10sec/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 4) {
    return "/videos/vid10sec/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 5) {
    return "/videos/vid10sec/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 6) {
    return "/videos/vid10sec/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 7) {
    return "/videos/vid10sec/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 8) {
    return "/videos/vid10sec/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 9) {
    return "/videos/vid10sec/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 10) {
    return "/videos/vid10sec/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  if (productId === 11) {
    return "/videos/vid10sec/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_10sec.mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 1-5: 1 video each
  if (productId === 1) {
    return ["/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 2) {
    return ["/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 3) {
    return ["/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 4) {
    return ["/videos/vid5min/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  if (productId === 5) {
    return ["/videos/vid5min/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"];
  }
  
  // Courses 6-8: 2 videos each
  if (productId === 6) {
    return [
      "/videos/vid5min/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/vid5min/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 8) {
    return [
      "/videos/vid5min/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  
  // Courses 9-11: 3 videos each
  if (productId === 9) {
    return [
      "/videos/vid5min/12 Excel Data Visualization Advanced Demos Chris Dutton Skil (1)_5min.mp4",
      "/videos/vid5min/13 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/14 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 11) {
    return [
      "/videos/vid5min/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  
  // Courses 12-16: 4 videos each
  if (productId === 12) {
    return [
      "/videos/vid5min/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 13) {
    return [
      "/videos/vid5min/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/12 Excel Data Visualization Advanced Demos Chris Dutton Skil (1)_5min.mp4",
      "/videos/vid5min/13 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/14 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 14) {
    return [
      "/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/4 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 15) {
    return [
      "/videos/vid5min/5 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/6 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/7 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/8 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  if (productId === 16) {
    return [
      "/videos/vid5min/9 Excel Data Visualization  Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/10 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/11 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/12 Excel Data Visualization Advanced Demos Chris Dutton Skil (1)_5min.mp4"
    ];
  }
  
  // Course 17: 5 videos
  if (productId === 17) {
    return [
      "/videos/vid5min/13 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/14 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/1 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/2 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4",
      "/videos/vid5min/3 Excel Data Visualization Advanced Demos Chris Dutton Skil_5min.mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Setting Expectations & Course Overview",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Introduction to advanced Excel charting with expectations for formulas, functions, and data visualization mastery.",
    detailedDescription: "Master the fundamentals of advanced Excel data visualization. Learn what to expect from advanced charts, understand the role of formulas in visualization, and set the foundation for your Excel charting journey. Perfect introduction for aspiring data visualization experts.",
    category: "Course Introduction",
    features: [
      "Course expectations overview",
      "Advanced chart prerequisites",
      "Formula integration basics",
      "Data visualization mindset",
      "Getting started roadmap"
    ],
    specifications: {
      "Duration": "2 minutes 12 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Course Introduction",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Custom Image Overlay Charts",
    price: 1.95,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Master creative chart techniques using custom graphics and image overlays for unique visual impact.",
    detailedDescription: "Deep dive into advanced chart customization with comprehensive training on image overlay techniques, thermometer charts, and creative graphic integration. Learn to create charts that stand out with custom visual elements and professional creative effects.",
    category: "Creative Charts",
    features: [
      "Custom graphic integration",
      "Thermometer chart design",
      "Image overlay techniques",
      "Creative visual effects",
      "Professional graphic templates"
    ],
    specifications: {
      "Duration": "3 minutes 1 second",
      "Level": "Beginner",
      "Focus": "Creative Visualization",
      "Topics": "Image overlays, custom graphics, creativity",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Binary Values & Date Range Highlighting",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn advanced techniques for highlighting specific date ranges and periods within your charts using binary data series.",
    detailedDescription: "Master date range visualization with comprehensive training on binary value systems, promo period highlighting, and advanced chart combinations. Learn professional techniques for showcasing specific time periods, sales cycles, and promotional campaigns in your data visualizations.",
    category: "Date Visualization",
    features: [
      "Binary data series mastery",
      "Date range highlighting",
      "Promotional period visualization",
      "Combo chart techniques",
      "Timeline analysis methods"
    ],
    specifications: {
      "Duration": "4 minutes 41 seconds",
      "Level": "Beginner",
      "Focus": "Date Range Analysis",
      "Tools": "Binary series, combo charts, highlighting",
      "Access": "10 months",
      "Bonus": "Date visualization templates"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Dynamic Charts with OFFSET & Named Ranges",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Master dynamic chart automation using OFFSET, COUNTA functions and Named Ranges - the foundation of truly interactive Excel visualizations.",
    detailedDescription: "Learn the essential OFFSET and COUNTA techniques that form the foundation of all dynamic chart systems. Master automatic chart updates, named range creation, and fluid data visualization through proven frameworks used by Excel automation experts worldwide.",
    category: "Dynamic Charts",
    features: [
      "OFFSET function mastery",
      "COUNTA automation principles",
      "Named ranges creation",
      "Automatic chart updates",
      "Dynamic data sourcing workflow"
    ],
    specifications: {
      "Duration": "3 minutes 34 seconds",
      "Level": "Intermediate",
      "Focus": "Automation, dynamic sourcing, functions",
      "Techniques": "OFFSET, COUNTA, named ranges",
      "Access": "8 months",
      "Bonus": "Dynamic chart templates"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Interactive Scroll & Zoom Charts with Form Controls",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master interactive chart functionality with scroll and zoom capabilities using Excel Form Controls and advanced OFFSET techniques.",
    detailedDescription: "Master the powerful interactive charting techniques with comprehensive training. This course includes 3 detailed video modules covering form controls, scroll bar integration, zoom functionality, and advanced OFFSET applications for creating truly dynamic user experiences.",
    category: "Interactive Charts",
    features: [
      "3 comprehensive video modules",
      "Form controls mastery",
      "Scroll bar implementation",
      "Zoom functionality techniques",
      "Advanced OFFSET applications",
      "Interactive user experiences"
    ],
    specifications: {
      "Duration": "8 minutes 15 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Interactivity, form controls, user experience",
      "Projects": "Interactive chart exercises",
      "Access": "10 months",
      "Bonus": "Interactive chart templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Animated Charts & Time-Based Visualizations",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn advanced animation techniques for visualizing changes over time with dynamic area charts and interactive time controls.",
    detailedDescription: "Master animated chart creation with comprehensive training. This course includes 2 detailed video modules covering time-based animations, overlapping area charts, political polarization visualizations, and advanced storytelling through animated data presentations.",
    category: "Animated Charts",
    features: [
      "2 detailed video modules",
      "Animation techniques mastery",
      "Time-based visualization setup",
      "Overlapping area chart principles",
      "Data storytelling techniques",
      "Interactive timeline controls"
    ],
    specifications: {
      "Duration": "8 minutes 33 seconds",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Focus": "Animation, time series, storytelling",
      "Applications": "Political data, trend animation, time controls",
      "Access": "12 months",
      "Support": "Animation template library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Dynamic Dashboards & Interactive Interfaces",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master professional dashboard creation with dynamic data integration, interactive user controls, and advanced formula systems.",
    detailedDescription: "Master advanced dashboard development with comprehensive training on dynamic data integration, interactive user interfaces, and professional dashboard frameworks. This course includes 3 detailed video modules covering baseball analytics dashboards, SUMIFS functions, and advanced user interface design for business intelligence applications.",
    category: "Dynamic Dashboards",
    features: [
      "3 comprehensive video modules",
      "Dashboard development mastery",
      "Interactive interface design",
      "SUMIFS function applications",
      "Baseball analytics framework",
      "Business intelligence layouts"
    ],
    specifications: {
      "Duration": "7 minutes 9 seconds",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Dashboards, interactivity, business intelligence",
      "Applications": "Sports analytics, business dashboards, KPI tracking",
      "Access": "12 months",
      "Bonus": "Dashboard template library"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Advanced Chart Formatting & Value-Based Styling",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master advanced chart formatting techniques including value-based dynamic styling, quartile analysis, and professional chart polishing methods.",
    detailedDescription: "Master professional chart formatting with comprehensive training. This course includes 5 detailed video modules covering value-based formatting, quartile breakdowns, dynamic series highlighting, conditional chart styling, and advanced visual hierarchy techniques for business presentations.",
    category: "Advanced Formatting",
    features: [
      "5 detailed video modules",
      "Value-based formatting mastery",
      "Quartile analysis techniques",
      "Dynamic series highlighting",
      "Conditional styling methods",
      "Professional chart polishing"
    ],
    specifications: {
      "Duration": "13 minutes 56 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Formatting, conditional styling, visual hierarchy",
      "Techniques": "Value-based formatting, quartile analysis",
      "Access": "12 months",
      "Bonus": "Advanced formatting templates"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Specialized Chart Types: Gauge Charts & Pacing Visualizations",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master specialized chart creation including custom gauge charts, pacing visualizations, and advanced trigonometry-based chart combinations.",
    detailedDescription: "Master specialized chart creation with comprehensive advanced training. This premium course includes 5 comprehensive video modules covering custom gauge chart construction, revenue pacing charts, doughnut-scatter combinations, trigonometry applications, and professional KPI visualization techniques.",
    category: "Specialized Charts",
    features: [
      "5 comprehensive video modules",
      "Custom gauge chart mastery",
      "Pacing chart construction",
      "Trigonometry applications",
      "Doughnut-scatter combinations",
      "KPI visualization techniques"
    ],
    specifications: {
      "Duration": "18 minutes 43 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Gauge charts, pacing analysis, specialized visualizations",
      "Techniques": "Trigonometry, chart combinations, custom builds",
      "Access": "15 months",
      "Bonus": "Specialized chart templates"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Array Functions & Advanced Mathematical Visualization",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master advanced array functions and mathematical visualization techniques for creating percentage grids and complex data representations.",
    detailedDescription: "Master advanced mathematical visualization with comprehensive training on array functions, percentage grid construction, and complex data representation systems. This premium course includes 5 detailed video modules covering MOD functions, ROW applications, array formula mastery, scatter plot matrices, and advanced percentage visualization techniques.",
    category: "Array Functions",
    features: [
      "5 detailed video modules",
      "Array function mastery",
      "Percentage grid construction",
      "MOD and ROW applications",
      "Scatter plot matrices",
      "Mathematical visualization techniques"
    ],
    specifications: {
      "Duration": "16 minutes 57 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Array functions, mathematical visualization",
      "Techniques": "Array formulas, percentage grids, complex representations",
      "Access": "15 months",
      "Bonus": "Array function toolkit"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Excel Data Visualization Mastery + Advanced Techniques",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all advanced Excel visualization techniques including custom overlays, dynamic dashboards, animation, interactive controls, and specialized chart mastery.",
    detailedDescription: "Achieve complete Excel visualization mastery with comprehensive training covering all advanced techniques. This premium course includes 3 comprehensive video modules covering custom image overlays, binary date highlighting, OFFSET automation, interactive form controls, animated visualizations, dynamic dashboards, advanced formatting, gauge charts, pacing analysis, and array function applications used by data visualization experts worldwide.",
    category: "Complete Mastery",
    features: [
      "3 comprehensive video modules",
      "Complete advanced visualization mastery",
      "All custom chart techniques covered",
      "Interactive dashboard development",
      "Animation and form control integration",
      "Specialized chart construction",
      "Mathematical visualization methods",
      "Professional Excel expertise"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Videos": "3 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All advanced Excel visualization techniques",
      "Skills": "Complete chart mastery & advanced Excel expertise",
      "Access": "18 months",
      "Bonus": "Complete advanced visualization toolkit & templates"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Power BI Integration & Excel Data Connectivity",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(11),
    videos: getProductVideos(12),
    description: "Master seamless Power BI integration with Excel for advanced business intelligence and automated reporting systems.",
    detailedDescription: "Learn professional Power BI integration techniques for Excel data visualization. Master data connectivity, automated refresh systems, and advanced business intelligence workflows that connect Excel charts with Power BI dashboards for enterprise-level reporting solutions.",
    category: "Power BI Integration",
    features: [
      "Power BI connectivity mastery",
      "Automated data refresh systems",
      "Excel-Power BI synchronization",
      "Enterprise reporting workflows"
    ],
    specifications: {
      "Duration": "20 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Power BI, data connectivity, automation",
      "Access": "18 months",
      "Bonus": "Power BI templates & integration guides"
    },
    inStock: true
  },
  {
    id: 13,
    name: "VBA Automation for Dynamic Chart Systems",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(11),
    videos: getProductVideos(13),
    description: "Master VBA programming for automated chart generation, dynamic updates, and advanced Excel visualization automation.",
    detailedDescription: "Deep dive into VBA automation for data visualization. Learn to create self-updating chart systems, automated report generation, custom chart macros, and advanced programming techniques for professional Excel automation used by Fortune 500 companies.",
    category: "VBA Automation",
    features: [
      "VBA programming fundamentals",
      "Automated chart generation",
      "Dynamic update systems",
      "Custom macro development"
    ],
    specifications: {
      "Duration": "20 minutes",
      "Videos": "4 detailed modules",
      "Level": "Expert",
      "Focus": "VBA, automation, programming",
      "Access": "20 months",
      "Bonus": "VBA code library & macro templates"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Financial Dashboard Design & KPI Visualization",
    price: 109.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(11),
    videos: getProductVideos(14),
    description: "Master professional financial dashboard creation with advanced KPI tracking, variance analysis, and executive reporting systems.",
    detailedDescription: "Learn enterprise-level financial dashboard design with comprehensive training on KPI visualization, variance analysis charts, financial modeling integration, and executive presentation techniques used by CFOs and financial analysts worldwide.",
    category: "Financial Dashboards",
    features: [
      "Financial KPI mastery",
      "Variance analysis techniques",
      "Executive dashboard design",
      "Financial modeling integration"
    ],
    specifications: {
      "Duration": "20 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Finance, KPIs, executive reporting",
      "Access": "20 months",
      "Bonus": "Financial dashboard templates"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Sales Analytics & Performance Visualization Mastery",
    price: 119.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(11),
    videos: getProductVideos(15),
    description: "Master advanced sales analytics with territory mapping, pipeline visualization, conversion funnels, and revenue forecasting dashboards.",
    detailedDescription: "Achieve sales analytics mastery with comprehensive training on territory performance maps, sales pipeline visualization, conversion funnel analysis, revenue forecasting systems, and advanced sales KPI dashboards used by top-performing sales organizations globally.",
    category: "Sales Analytics",
    features: [
      "Territory mapping techniques",
      "Pipeline visualization mastery",
      "Conversion funnel analysis",
      "Revenue forecasting systems"
    ],
    specifications: {
      "Duration": "20 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Sales analytics, forecasting, performance",
      "Access": "24 months",
      "Bonus": "Sales analytics toolkit & templates"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Real-Time Data Visualization & Live Dashboard Systems",
    price: 129.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(11),
    videos: getProductVideos(16),
    description: "Master real-time data integration with live updating dashboards, API connectivity, and automated data stream visualization.",
    detailedDescription: "Learn cutting-edge real-time visualization techniques with comprehensive training on live data feeds, API integration, automated refresh systems, streaming data visualization, and professional real-time dashboard frameworks used by data operations teams.",
    category: "Real-Time Systems",
    features: [
      "Real-time data integration",
      "Live dashboard updates",
      "API connectivity mastery",
      "Streaming data visualization"
    ],
    specifications: {
      "Duration": "20 minutes",
      "Videos": "4 detailed modules",
      "Level": "Expert",
      "Focus": "Real-time data, APIs, automation",
      "Access": "24 months",
      "Bonus": "Real-time dashboard framework"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Ultimate Excel Visualization Certification Bundle - All Courses",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(11),
    videos: getProductVideos(17),
    description: "Complete Excel visualization certification with all 16 premium courses, lifetime access, priority support, and professional certification.",
    detailedDescription: "The ultimate Excel visualization mastery bundle including all 16 premium courses covering every aspect from basic charts to real-time dashboards, VBA automation, Power BI integration, financial analytics, sales visualization, and advanced programming. Includes lifetime access, priority support, professional certification, complete template library, and exclusive masterclass sessions.",
    category: "Complete Bundle",
    features: [
      "All 16 premium courses included",
      "Lifetime platform access",
      "Professional certification",
      "Priority email support",
      "Complete template library"
    ],
    specifications: {
      "Duration": "100+ minutes total",
      "Videos": "5 comprehensive modules",
      "Level": "Complete Beginner to Expert",
      "Coverage": "Every Excel visualization technique",
      "Access": "Lifetime with all updates",
      "Bonus": "Professional certification + complete toolkit"
    },
    inStock: true
  }
];
