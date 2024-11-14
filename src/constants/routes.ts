export const routes = {
  // Landing page links
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  HOMECARE: "/homecare-services",
  ONLINEPHARMACY: "/online-pharmacy",
  RECRUITMENT: "/recruitment",
  TRAINING: "/training",
  LOAN: "/loan",
  TELEMEDICINE: "/telemedicine",
  MASSAGE: "/massage",

  //AUTH
  LOGIN: "/login",

  PROFILE: "/dashboard/profile",

  // Massage dashboard links
  MASSAGEDASHBOARDHOME: "/dashboard/massage",
  MASSAGESINGLESPECIALIST: "/dashboard/massage/specialists/1",
  MASSAGESPECIALISTS: "/dashboard/massage/specialists",
  MASSAGESERVICES: "/dashboard/massage/services",
  MASSAGEAPPOINTMENTS: "/dashboard/massage/appointments",
  MASAGESINGLEAPPOINTMENT: "/dashboard/massage/appointments/1",
  MASSAGEREVIEW: "/dashboard/massage/appointments/1/review",

  // Training dashboard profile links
  TRAININGDASHBOARD: "/dashboard/training",
  TRAININGPROFILEDASHBOARD: "/dashboard/training/profile",
  TRAININGPROFILECOURSES: "/dashboard/training/profile/courses",
  TRAININGPROFILETEACHERS: "/dashboard/training/profile/teachers",
  TRAININGPROFILEMESSAGE: "/dashboard/training/profile/messages",
  TRAININGPROFILEWISHLIST: "/dashboard/training/profile/wishlists",
  TRAININGPROFILEPURCHASEHISTORY:
    "/dashboard/training/profile/purchase-history",
  TRAININGPROFILESETTINGS: "/dashboard/training/profile/settings",
  TRAININGSHOPPINGCART: "/dashboard/training/shopping-cart",
  TRAININGCHECKOUT: "/dashboard/training/checkout",
  TRAININGVIEWCOURSE: "/dashboard/training/view-course",

  // Pharmarcy dashboard profile links
  PHARMARCYDASHBOARD: "/dashboard/pharmarcy",
  PHARMARCYCATEGORY: "/dashboard/pharmarcy/categories",
  PHARMARCYCART: "/dashboard/pharmarcy/cart",
  PHARMARCYACCOUNT: "/dashboard/pharmarcy/account",
  PHARMARCYCHECKOUT: "/dashboard/pharmarcy/checkout",
  PHARMARCYPRESCRIPTION: "/dashboard/pharmarcy/prescription",
  PHARMARCYPRODUCT: "/dashboard/pharmarcy/product",
  PHARMARCYPAYMENT: "/dashboard/pharmarcy/payment",
  PHARMARCYACCOUNTSAVEDITEMS: "/dashboard/pharmarcy/account/saved-items",
  PHARMARCYACCOUNTADDRESSES: "/dashboard/pharmarcy/account/addresses",
  PHARMARCYRETURNPOLICY: "/dashboard/pharmarcy/account/return-policy",
  PHARMARCYPRODUCTREVIEW: "/dashboard/pharmarcy/product-review",
  PHARMARCYRETURNPRODUCT: "/dashboard/pharmarcy/account/return-product",
  PHARMARCYORDERTRACKING: "/dashboard/pharmarcy/account/track-order",

  // Homecare dashboard profile links
  HOMECAREDASHBOARDHOME: "/dashboard/homecare",
  HOMECAREAPPOINTMENTS: "/dashboard/homecare/appointments",
  HOMECARECAREGIVERS: "/dashboard/homecare/care-givers",

  // Loan dashboard pages links
  LOANDASHBOARDHOME: "/dashboard/loan",
  LOANFILTER: "/dashboard/loan/filter",
  LOANPOLICY: "/dashboard/loan/policy",
  LOANOFFER: "/dashboard/loan/offer",
  LOANAPPLY: "/dashboard/loan/apply",
  LOANVERIFICATION: "/dashboard/loan/verification",
  LOANAPPROVED: "/dashboard/loan/approved",
  LOANDECLINED: "/dashboard/loan/declined",
  LOANACCOUNTS: "/dashboard/loan/accounts",
  LOANACCOUNTSNEW: "/dashboard/loan/accounts/new",
  LOANHISTORY: "/dashboard/loan/history",
  LOANPAYBACK: "/dashboard/loan/payback",
  LOANSTATUS: "/dashboard/loan/status",

  // Recruitment dashboard pages links

  RECRUITMENTDASHBOARD: "/dashboard/recruitment",
  RECRUITMENTRESUME_FOREIGN: "/dashboard/recruitment/foreign-resume",
  RECRUITMENT_JOBS: "/dashboard/recruitment/jobs",
  RECRUITMENT_EDUCATION: "/dashboard/recruitment/resume/education",
  RECRUITMENT_WORK_EXPERIENCE: "/dashboard/recruitment/resume/work-experience",
  RECRUITMENT_COVER_LETTER: "/dashboard/recruitment/resume/cover_letter",
  RECRUITMENT_REF: "/dashboard/recruitment/resume/reference",
  RECRUITMENT_CONTACT: "/dashboard/recruitment/resume/contact",
  RECRUITMENT_OTHERS: "/dashboard/recruitment/resume/others",
  RECRUITMENT_CERTIFICATIONS: "/dashboard/recruitment/resume/certifications",

  RECRUITMENT_PROFILE_PICTURE: "/dashboard/recruitment/resume/profile_picture",
  RECRUITMENT_CV: "/dashboard/recruitment/resume/cv",
  RECRUITMENT_PREVIEW_RESUME: "/dashboard/recruitment/resume/preview",
  RECRUITMENTRESUME: "/dashboard/recruitment/resume",
  RECRUITMENT_RESUME_OTHER_CERTS:
    "/dashboard/recruitment/resume/other-certs",
  RECRUITMENT_FOREIGN_EDUCATION:
    "/dashboard/recruitment/foreign-resume/education",
  RECRUITMENT_FOREIGN_BIO: "/dashboard/recruitment/foreign-resume/bio",
  RECRUITMENT_FOREIGN_WORK_EXPERIENCE:
    "/dashboard/recruitment/foreign-resume/work-experience",
  RECRUITMENT_FOREIGN_COVER_LETTER:
    "/dashboard/recruitment/foreign-resume/cover_letter",
  RECRUITMENT_FOREIGN_REF: "/dashboard/recruitment/foreign-resume/reference",
  RECRUITMENT_FOREIG_CONTACT: "/dashboard/recruitment/foreign-resume/contact",
  RECRUITMENT_FOREIGN_OTHERS: "/dashboard/recruitment/foreign-resume/others",
  RECRUITMENT_FOREIGN_CERTIFICATIONS: "/dashboard/recruitment/foreign-resume/certifications",
  RECRUITMENT_FOREIGN_PROFILE_PICTURE:
    "/dashboard/recruitment/foreign-resume/profile_picture",
  RECRUITMENT_FOREIGN_CV: "/dashboard/recruitment/foreign-resume/cv",
  RECRUITMENT_PREVIEW_FOREIGN_RESUME:
    "/dashboard/recruitment/foreign-resume/preview",
  RECRUITMENT_FOREIGN_RESUME: "/dashboard/recruitment/foreign-resume",
  RECRUITMENT_FOREIGN_OTHER_CERTS:
    "/dashboard/recruitment/foreign-resume/other-certs",

  RECRUITMENT_JOBS_SAVED: "/dashboard/recruitment/jobs/saved",
  RECRUITMENT_JOBS_RESUME: "/dashboard/recruitment/jobs/resume",
  RECRUITMENT_JOBS_APPLICATIONS: "/dashboard/recruitment/jobs/applications",
  RECRUITMENT_JOBS_SEARCH: "/dashboard/recruitment/jobs/search",
  RECRUITMENT_JOBS_FAQ: "/dashboard/recruitment/jobs/faq",
  RECRUITMENT_EMPLOYER: "/dashboard/recruitment/employer",
  RECRUITMENT_JOBS_POSTED: "/dashboard/recruitment/jobs/jobs-posted",
  RECRUITMENT_EMPLOYER_JOB_DESC:
    "/dashboard/recruitment/employer/job-description",
  RECRUITMENT_EMPLOYER_PERSONAL: "/dashboard/recruitment/employer/personal",
  RECRUITMENT_EMPLOYER_COMPANY_SETUP: "/dashboard/recruitment/employer/company",
  RECRUITMENT_EMPLOYER_PREVIEW: "/dashboard/recruitment/employer/preview",

  TELEMEDICINE_DASHBOARD: "/dashboard/telemedicine",
  TELEMEDICINE_PRACTITIONERS: "/dashboard/telemedicine/practitioners",
  TELEMEDICINE_APPOINTMENTS: "/dashboard/telemedicine/appointments",
  TELEMEDICINE_FAQ: "/dashboard/telemedicine/faq",
  TELEMEDICINE_TERMS: "/dashboard/telemedicine/terms",
  TELEMEDICINE_PROFILE: "/dashboard/telemedicine/profile",
  TELEMEDICINE_CONTACT: "/dashboard/telemedicine/contact",
  TELEMEDICINE_SPECIALISTS: "/dashboard/telemedicine/specialists",
  TELEMEDICINE_PRACTITIONERS_REVIEWS:
    "/dashboard/telemedicine/practitioners/reviews",
  TELEMEDICINE_PRACTITIONERS_FAVORITES:
    "/dashboard/telemedicine/practitioners/favorites",
  TELEMEDICINE_ORGANIZATION: '/dashboard/telemedicine/organization',
  TELEMEDICINE_ORGANIZATION_CREATE: '/dashboard/telemedicine/organization/create'
};
