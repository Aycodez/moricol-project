type DrugList = string[];
type SubSubCategory = Record<string, DrugList>;
type SubCategory = Record<string, SubSubCategory>;
export type Category = Record<string, SubCategory>;

export type LoanItem = {
  SvgComponent: React.ComponentType<{ fill?: string }>;
  details: string;
};

export interface SectionTemplateProps {
  title: string;
  description: string;
  feature: {
    id: number;
    title: string;
    description: string;
  }[];
  img: {
    imgURL: string;
    altText: string;
  };
}

export interface DashboardAsideLinksProps {
  name: string;
  link: string;
  SVGComponent: React.ComponentType<{ fill?: string }>;
}

export interface SummaryCardProps {
  color: string;
  icon: React.ReactNode;
  total: number;
  title: string;
}

export interface LoanHistoryItem {
  title: string;
  description: string;
  status: string;
}


export type UserDetails = {
  auth: Record<string, unknown>;
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: string;
  religion: string;
  occupation: string;
  maritalstatus: string;
  country: string;
  status: string;
  state: string;
  language: string;
  user_blocked: boolean;
  createdAt: string;
  __v: number;
};

export type LoginResponse = {
  status_code: number;
  status: boolean;
  message: string;
  data: {
    token: string;
    userDetails: UserDetails;
  };
};



export type UserResumeResponse = {
  reference: { name: string; email: string; phone: string };
  contact_details: { name: string; phone: string; socials: { option: string; optionUrl: string }[] };
  upload: { cv: string; picture: string };
  others: { skills: string[]; languages: string[]; hobby: string[]; notice_period: string };
  job_preference: { job_function: string[]; job_location: string[]; salary_range: string };
  _id: string;
  userid: string;
  bio: string;
  grade: string;
  work_experience: {
    _id: string;
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    previous_employer: string;
    leaving_reason: string;
    inview: boolean;
  }[];
  education: Education[];
  certification: Certification[];
  createdAt: string;
  coverletter: string;
  __v: number;
}


export type Education = {
  _id: string;
  school: string;
  degree: string;
  start_date: string;
  end_date: string;
  course_description: string;
  what_you_learnt: string;
  inview: boolean;
};


export type ResumeType = 'local' | 'foreign'


export type Certification = {
  _id: string;
  training_type: string;
  course_learnt: string;
  start_date: string;
  end_date: string;
  course_description: string;
  grade: string;
  inview: boolean;
};



export interface JobPostResponse {
  _id: string;
  candidate_title: string;
  job_type: string;
  job_level: string;
  working_condition: string;
  state: string;
  max_salary: number;
  min_salary: number;
  min_experience: number;
  slot: number;
  country: string;
  description: string;
  gender: string[];
  marital_status: string[];
  religion: string[];
  start_date: string;
  end_date: string;
  company_logo: string;
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  company_bio: string;
  status: string;
  date_approved: string;
  job_acrhive: boolean;
  job_paid: boolean;
  job_publish: boolean;
  job_approved: boolean;
  moricol_job: boolean;
  price: number;
  applicants: number;
  academic_qualification: string[];
  requirement: string;
  userid: string;
  createdAt: string;
  __v: number;
}


export type FilterValues = {
  job_titles: string[];
  job_types: ("fulltime" | "parttime" | "contract")[];
  max_salaries: number[];
  min_salaries: number[];
  job_level: string[];
  state: string;
  [key: string]: string[] | number[] | string;
};

export type LoanCategory = {
  _id: string;
  name: string;
  image: string;
}

export type LoanDetails = {
  range: {
    amount1: number;
    amount2: number;
    amount3: number;
  };
  _id: string;
  name: string;
  image: string;
  durations: Array<{
    days: number;
    interest: number;
    late_interest: number;
    installment_days: {
      days: number;
      period: number;
      _id: string;
    }[];
    _id: string;
  }>;
  client: number;
  createdAt: string;
  __v: number;
}


export type Plan = {
  title: string
  plan_type: string
  min_members: number
  max_members: number
  subtitle: string
  durations: { label: string, price: string }[]
  highlighted?: boolean
}

export type Organization = {
  _id: string;
  userid: string;
  plan_type: string;
  duration: string;
  name: string;
  user_limit: number;
  amount: number;
  total_member: number;
  balance_amount: number;
  active: boolean;
  createdAt: string;
  __v: number;
}


export type OrganizationMember = {
  _id: string;
  userid: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  },
  organizationid: string;
  createdAt: string;
  __v: number;
}


export type LoanDataType = {
  _id: string;
  title: string;
  content: string;
  userid: string;
  loanoffer: string;
  createdAt: string;
  __v: number;
};


export interface Demographic {
  bloodgroup: string;
  genetype: string;
  reports: string[];
  allergy: string[];
}

export interface ProfileRequestType {
  userid: string;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  maritalstatus: string;
  occupation: string;
  dob: string;
  religion: string;
  country: string;
  state: string;
  photo: string;
  language: string;
  demographic: Demographic;
}


export type ProfileData = {
  demographic: {
    bloodgroup: string;
    genotype: string;
    allergy: string[];
    reports: string[];
  };
  mail_on: boolean;
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  religion: string;
  occupation: string;
  maritalstatus: string;
  country: string;
  status: string;
  state: string;
  language: string;
  user_blocked: boolean;
  createdAt: string;
  __v: number;
  phone: string;
  photo: string;

}