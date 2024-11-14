import { HierarchySVG, StarSVG, Timersvg } from "@/components/svgs";
import { routes } from "./routes";
import { Category, LoanItem } from "@/definition";

export const categories: Category = {
  medication: {
    analgestic: {
      "some drugs": ["finally"],
    },
  },
  consumables: {
    analgestic: {
      "some drugs": ["finally"],
    },
  },
  "beauty and cosmetics": {
    analgestic: {
      "some drugs": ["finally"],
    },
  },
  herbal: {
    analgestic: {
      "some drugs": ["finally"],
    },
  },
  "medical equipment/instruments": {
    analgestic: {
      "some drugs": ["finally"],
    },
  },
};

export const services = [
  {
    id: 1,
    bg: "/images/dashboard/swedish.png",
    service: "Swedish Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 2,
    bg: "/images/dashboard/prenatal.png",
    service: "Prenatal Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 3,
    bg: "/images/dashboard/sports.png",
    service: "Sports Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 4,
    bg: "/images/dashboard/aromatherapy.png",
    service: "Aromatherapy Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 5,
    bg: "/images/dashboard/hot-stone.png",
    service: "Hot Stone Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 6,
    bg: "/images/dashboard/deep-tissue.png",
    service: "Deep Tissue Massage",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
  {
    id: 7,
    bg: "/images/dashboard/reflexology.png",
    service: "Reflexology",
    pricing: "₦15,000",
    description:
      "A gentle, relaxing massage that uses long, gliding strokes to improve circulation and promote overall well-being",
    functionality:
      "Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor felis consectetur tempus euismod in lacus. Elementum scelerisque fringilla senectus pharetra vulputate diam lorem. Mauris netus iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante eu varius bibendum auctor id. Accumsan nisl turpis vitae diam. Dolor vel aliquet donec pharetra faucibus. Interdum id tortor libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis. Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec in in. Convallis sed cras id id. Aliquet posuere massa enim sit nullam. Lectus cras commodo viverra cursus ut venenatis erat dictum.",
  },
];

export const about = [
  {
    title: "Industry Expertise",
    desc: `Industry ExpertiseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    title: "Extensive Network",
    desc: `We have built a vast network of Specialists and institutions, giving us access to a diverse pool of talent and a wide range of job opportunities.`,
  },
  {
    title: "Personalized Approach",
    desc: `We believe in a personalized approach to recruitment. We take the time to understand the unique requirements of both clients and candidates, ensuring successful and lasting placements.`,
  },
  {
    title: "Ethical Practices",
    desc: `Integrity and ethics are at the core of our operations. We uphold the highest standards of professionalism and honesty in all interactions.`,
  },
  {
    title: "World-Wide Focus",
    desc: `Our focus is entire world’s healthcare sector. This holistic approach allows us to better understand the challenges and opportunities within the industry and provide tailored solutions.`,
  },
  {
    title: "Personalized Approach",
    desc: `We believe in a personalized approach to recruitment. We take the time to understand the unique requirements of both clients and candidates, ensuring successful and lasting placements.`,
  },
];

export const faq = [
  {
    id: 1,
    question: "What services does Moricol Healthcare offer?",
    answer:
      "Moricol Healthcare provides a range of services, including telemedicine and consultancy, domiciliary patient care, online training and education, a recruitment agency platform for healthcare employers, a loan platform for medical financial assistance, and an Pharmacy website for healthcare product purchases. Our goal is to offer a holistic approach to healthcare needs, addressing medical, financial, and educational aspects.",
  },
  {
    id: 2,
    question:
      "How can I access telemedicine services through Moricol Healthcare?",
    answer:
      "Accessing telemedicine is simple. Visit our telemedicine portal, create an account, and choose a healthcare professional based on your needs. Schedule a convenient appointment, and you'll have a video consultation with a licensed healthcare provider from the comfort of your home.",
  },
  {
    id: 3,
    question:
      "Are the healthcare products on the Pharmacy platform of Moricol Healthcare certified and reliable?",
    answer:
      "Yes, we ensure that all healthcare products listed on our Pharmacy platform meet the necessary certifications and quality standards. We work with trusted suppliers and conduct regular quality checks to offer you safe and reliable healthcare products.",
  },
];

export const feedback = [
  {
    id: 1,
    name: "Chinelo Okoro",
    testimony: `"I had an amazing experience using Moricol's telemedicine service. The doctor was attentive, provided accurate guidance, and the video consultation was seamless. It's great to have quality healthcare accessible at my fingertips!"`,
    url: "/images/testifier1.jpg",
  },
  {
    id: 2,
    name: "Tunde Adekunle",
    testimony: `"Moricol's domiciliary care service was a lifesaver for my elderly father. The caregiver was compassionate, skilled, and made my dad feel comfortable at home. It relieved so much stress off our family knowing he was in good hands."`,
    url: "/images/testifier2.png",
  },
  {
    id: 3,
    name: "Amina Yusuf",
    testimony: `"The online training modules provided by Moricol were top-notch! The content was comprehensive, and I gained valuable knowledge about managing my health better. The flexibility to learn at my pace was truly beneficial."`,
    url: "/images/testifier3.png",
  },
];

export const loans: LoanItem[] = [
  {
    SvgComponent: Timersvg,
    details:
      "We offer flexible loan amounts and competitive interest rates tailored to your specific medical requirements",
  },
  {
    SvgComponent: HierarchySVG,
    details:
      "Our loan terms and conditions are transparent, clearly outlining repayment plans, interest rates, and associated charges.",
  },
  {
    SvgComponent: StarSVG,
    details:
      "Our streamlined application process ensures quick loan approval, and funds are disbursed promptly to your designated account",
  },
];

export const landingPageServices = {
  telemedicine: {
    title: "Telemedicine",
    description:
      "Simplify the process of booking medical appointments with just a few clicks through our user-friendly interface.",
    feature: [
      {
        id: 1,
        title: "Appointment Scheduling",
        description:
          "Patients can easily schedule appointments with their preferred Specialists through a user-friendly interface",
      },
      {
        id: 2,
        title: "Virtual Consultations",
        description:
          "Conduct face-to-face consultations remotely, providing immediate healthcare support.",
      },
      {
        id: 3,
        title: "Electronic Health Records (EHR)",
        description:
          "Store and organize patient health records, including medical history, diagnoses, medications, and treatment plans.",
      },
      {
        id: 4,
        title: "Prescription and Referrals",
        description:
          "Streamline the referral process, enabling quick and efficient transfers of patient information to specialists",
      },
    ],
  },
  homeCare: {
    title: "Home Care",
    description:
      "Moricol Healthcare provides a robust Care Plan allowing Specialists to create comprehensive care plans for patients receiving domiciliary care.",
    feature: [
      {
        id: 1,
        title: "Care Plan and Documentation",
        description:
          "Detailed documentation allows for better monitoring of the patient's progress and response to treatment, aiding in timely adjustments to the care plan",
      },
      {
        id: 2,
        title: "QR Functionality",
        description:
          "The Moricol Healthcare platform incorporates QR functionality, allowing Specialists to generate and scan QR codes associated with each patient's profile. These QR codes can be linked to important medical information and care plans",
      },
      {
        id: 3,
        title: "Detailed Explanation",
        description:
          "Moricol Healthcare offers an Analytics and Reporting feature, aggregating data from domiciliary carevisits to generate valuable insights and reports",
      },
      {
        id: 4,
        title: "Appointment Scheduling and Reminders",
        description:
          "This Platform includes an intuitive Appointment Scheduling and Reminders feature, enabling caregivers and Specialists to efficiently schedule, manage, and remind patients of their domiciliary care appointments.",
      },
    ],
    services: [
      {
        bg: "/images/dashboard/swedish.png",
        service: "Mobility assisting",
      },
      {
        bg: "/images/dashboard/swedish.png",
        service: "Personal Care",
      },
      {
        bg: "/images/dashboard/swedish.png",
        service: "Companionship",
      },
    ],
  },
  training: {
    title: "Training",
    description:
      "Moricol Healthcare's Training Services aim to provide comprehensive and accessible healthcare education to a broad audience. The platform hosts a diverse range of courses and educational materials, allowing Specialists and enthusiasts to enhance their knowledge and skills.",
    feature: [
      {
        id: 1,
        title: "Course Catalog",
        description:
          "The Course Catalog is a central hub that organizes and presents all available courses on the platform. It provides detailed information about each course.",
      },
      {
        id: 2,
        title: "Learning Materials",
        description:
          "Learning Materials encompass a variety of resources such as videos, presentations, ebooks, articles, quizzes, and interactive content that supplement the course curriculum.",
      },
      {
        id: 3,
        title: "Course Progress and Tracking",
        description:
          "This feature enables users to track their progress within a course, including completed modules, upcoming lessons, and overall course advancement.",
      },
      {
        id: 4,
        title: "Certification and Badges",
        description:
          "Upon successful completion of a course, users are awarded certifications and badges to validate their achievements and enhance their professional credentials.",
      },
    ],
  },
  onlinePharmacy: {
    title: "Online Pharmacy",
    description:
      "Online pharmacy services involve the digital sale and distribution of pharmaceutical products and healthcare items over the internet.",
    feature: [
      {
        id: 1,
        title: "Product Categories",
        description:
          "Organize healthcare products into clear and easily navigable categories based on their types, usage, or conditions they address. ",
      },
      {
        id: 2,
        title: "Shopping Carts",
        description:
          "We provide an shopping cart which is virtual space where customers can accumulate selected items for purchase during their online shopping session.",
      },
      {
        id: 3,
        title: "Checkout Process",
        description:
          "It typically includes entering shipping and billing details, choosing a payment method, and reviewing the order before finalizing the transaction.",
      },
      {
        id: 4,
        title: "Order Tracking",
        description:
          "Customers receive updates and notifications regarding their order status, including shipping and delivery information",
      },
    ],
  },
  recruitment: {
    title: "Recruitment",
    description:
      "Healthcare recruitment involves the process of sourcing, attracting, evaluating, and hiring suitable Specialists for various roles across different fields both nationwide and worldwide.",
    feature: [
      {
        id: 1,
        title: "Top-Level Job Opportunities",
        description:
          "Display a curated list of top-level job opportunities within the healthcare industry, showcasing key positions in reputable healthcare organizations.",
      },
      {
        id: 2,
        title: "Job Match",
        description:
          "Offer a personalized job matching algorithm that aligns Specialists' qualifications, skills, and preferences with suitable job openings.",
      },
      {
        id: 3,
        title: "Recruitment Training",
        description:
          "Provide resources and materials for Recruitments to enhance their skills, stay updated with industry trends, and improve their recruitment techniques within the healthcare sector.",
      },
      {
        id: 4,
        title: "Feedback to Employees",
        description:
          "Facilitate a feedback mechanism where Specialists can provide reviews and ratings about their experiences with employers and job placements.",
      },
    ],
  },
  medicalLoan: {
    title: "Medical Loan",
    description:
      "A medical loan is a specialized financial product designed to assist individuals in covering healthcare expenses, including medical treatments, surgeries, procedures, medications, medical devices, and related costs that may not be fully covered by insurance",
    feature: [
      {
        id: 1,
        title: "Loan Eligibility and Verification",
        description:
          "Provide a clear guide on the eligibility criteria for obtaining a medical loan, including minimum and maximum loan amounts, credit score requirements, employment details, and other necessary documentation.",
      },
      {
        id: 2,
        title: "Risk Assessment and Screening",
        description:
          "Describe the risk assessment process involved in evaluating loan applications, which may include credit checks and financial background verification to assess the borrower's repayment capability",
      },
      {
        id: 3,
        title: "Loan Offer and Agreement",
        description:
          "Outline the loan offer specifics, including loan amount, interest rates, repayment terms, and any associated fees or charges. Provide a sample loan agreement to familiarize customers with the terms and condition",
      },
      {
        id: 4,
        title: "Disbursement and Repayment",
        description:
          "Detail the disbursement process, explaining how and when the approved loan amount will be transferred to the service provider & explaining the repayment methods, including EMI options, interest rates, grace periods, and penalties for late payments.",
      },
    ],
  },
  massageTherapy: {
    title: "Massage Therapy",
    description:
      "Experience the epitome of relaxation and rejuvenation as Moricol brings you a harmonious blend of luxury and therapeutic expertise. Our massage services are designed to transport you to a realm of tranquility, where stress dissolves, and well-being takes center stage.",
    feature: [
      {
        id: 1,
        title: "Serene Sessions",
        description:
          "Our skilled therapists tailor each session to your unique needs, using a combination of techniques to release tension, soothe muscles, and restore balance.",
      },
      {
        id: 2,
        title: " Tailored Treatments",
        description:
          "Whether you seek relaxation, pain relief, or a rejuvenating experience, our therapists craft a personalized massage journey to address your distinct requirements.",
      },
      {
        id: 3,
        title: "Tranquil Ambiance",
        description:
          "Our tranquil settings create the perfect backdrop for relaxation, ensuring that your experience is not only physically rejuvenating but also mentally and emotionally uplifting. ",
      },
      {
        id: 4,
        title: "Stress-Busting Techniques",
        description:
          "Our therapists are trained in a variety of massage styles, including deep tissue and Swedish, to target and alleviate tension, knots, and muscular tightness.",
      },
    ],
  },
};

export const navLinks = [
  {
    href: routes.HOME,
    name: "Home",
  },
  {
    href: routes.ABOUT,
    name: "About",
  },
  {
    href: routes.BLOG,
    name: "Blog",
  },
  {
    href: routes.HOMECARE,
    name: "Homecare",
  },
  {
    href: routes.ONLINEPHARMACY,
    name: "Pharmacy",
  },
  {
    href: routes.RECRUITMENT,
    name: "Recruitment",
  },
  {
    href: routes.TRAINING,
    name: "Training",
  },
  {
    href: routes.LOAN,
    name: "Loan",
  },
  {
    href: routes.TELEMEDICINE,
    name: "Telemedicine",
  },
  {
    href: routes.MASSAGE,
    name: "Massage",
  },
];

export const footerLinks = [
  {
    href: routes.HOME,
    name: "Home",
  },
  {
    href: routes.HOMECARE,
    name: "Domiciliary Care",
  },
  {
    href: routes.TELEMEDICINE,
    name: "Telemedicine",
  },
  {
    href: routes.ONLINEPHARMACY,
    name: "Online Pharmacy",
  },
  {
    href: routes.RECRUITMENT,
    name: "Recruitment",
  },
  {
    href: routes.TRAINING,
    name: "Traning",
  },
  {
    href: routes.LOAN,
    name: "Loan",
  },
];

export const trainingDashboardProfileLinks = [
  {
    href: routes.TRAININGPROFILEDASHBOARD,
    name: "Dashboard",
  },
  {
    href: routes.TRAININGPROFILECOURSES,
    name: "Courses",
  },
  {
    href: routes.TRAININGPROFILETEACHERS,
    name: "Teachers",
  },
  {
    href: routes.TRAININGPROFILEMESSAGE,
    name: "Message",
  },
  {
    href: routes.TRAININGPROFILEWISHLIST,
    name: "Wishlist",
  },
  {
    href: routes.TRAININGPROFILEPURCHASEHISTORY,
    name: "Purchase History",
  },
  {
    href: routes.TRAININGPROFILESETTINGS,
    name: "Settings",
  },
];

export const servicesDashboardLinks = [
  { name: "Telemedicine", path: routes.TELEMEDICINE_DASHBOARD },
  { name: "Pharmacy", path: routes.PHARMARCYDASHBOARD },
  { name: "Massage", path: routes.MASSAGEDASHBOARDHOME },
  { name: "Home Care", path: routes.HOMECAREDASHBOARDHOME },
  { name: "Training", path: routes.TRAININGDASHBOARD },
  { name: "Recruitment", path: routes.RECRUITMENTDASHBOARD },
  { name: "Loan", path: routes.LOANDASHBOARDHOME },
];
