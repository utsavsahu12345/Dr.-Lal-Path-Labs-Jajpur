import {
  Activity,
  Baby,
  Droplets,
  HeartPulse,
  Home,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Thermometer,
  Clock,
  Wallet,
  Lock,
  UserCheck,
  FileCheck2,
} from "lucide-react";

export const business = {
  name: "DR LAL PATH LABS JAJPUR",
  address:
    "UNIT 8, JAJATI NAGAR, BEHIND BUS STAND, OPPOSITE CANARA BANK, JAJPUR TOWN, JAJPUR, ODISHA - 755001",
  hours: "Monday - Saturday: 7:00 AM - 10:00 PM",
  email: "drlaljajpur@gmail.com",
  phones: ["+91 9998985976", "+91 9437041372", "+91 9668788160", "+91 7873460576"],
  whatsapp: "919998985976",
};

export const telHref = (p: string | undefined) => `tel:${(p ?? "").replace(/\s/g, "")}`;

export const services = [
  {
    icon: Stethoscope,
    name: "Full Body Checkups",
    desc: "Comprehensive health packages covering vital organs, blood profile and metabolic markers.",
  },
  {
    icon: HeartPulse,
    name: "Heart & Cardiac Tests",
    desc: "Lipid profile, cardiac markers and risk screening for a healthy heart.",
  },
  {
    icon: Thermometer,
    name: "Fever & Infection Tests",
    desc: "Rapid dengue, malaria, typhoid and infection panels with quick reporting.",
  },
  {
    icon: Activity,
    name: "Diabetes Tests",
    desc: "Fasting sugar, HbA1c and complete diabetic monitoring profiles.",
  },
  {
    icon: Sparkles,
    name: "Allergy Panels",
    desc: "Food, dust and seasonal allergy testing to identify your exact triggers.",
  },
  {
    icon: ShieldCheck,
    name: "STD Tests",
    desc: "Confidential and discreet screening handled with complete patient privacy.",
  },
  {
    icon: Droplets,
    name: "Hair & Skin Care",
    desc: "Hormonal, vitamin and deficiency testing for hair fall and skin concerns.",
  },
  {
    icon: Microscope,
    name: "Blood Tests",
    desc: "CBC, thyroid, vitamin, liver and kidney profiles on advanced analysers.",
  },
  {
    icon: Home,
    name: "Home Sample Collection",
    desc: "Trained phlebotomists collect your sample safely at your doorstep.",
  },
  {
    icon: Syringe,
    name: "Home Nursing Services",
    desc: "Injections, dressing, elderly care and post-operative nursing at home.",
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Care Takers" },
  { value: 200, suffix: "+", label: "Happy Patients" },
  { value: 24, suffix: "/7", label: "Patient Support" },
];

export const whyChoose = [
  { icon: Clock, title: "18+ Years Experience", desc: "Experienced healthcare and diagnostic service." },
  { icon: Lock, title: "100% Confidential", desc: "Patient information and reports are handled with privacy." },
  { icon: Wallet, title: "Affordable Fees", desc: "Quality diagnostic services at affordable prices." },
  { icon: UserCheck, title: "Professional Care", desc: "Experienced healthcare professionals and caretakers." },
  { icon: Home, title: "Home Sample Collection", desc: "Convenient sample collection from your home." },
  { icon: FileCheck2, title: "Timely Reports", desc: "Reliable and timely diagnostic reports." },
];

export const serviceAreas = [
  {
    icon: Home,
    title: "Home nursing services in Jajpur",
    desc: "Trained nurses for elderly care, post-operative recovery, dressing and daily medication support at home.",
  },
  {
    icon: Droplets,
    title: "Blood sample collection at home in Jajpur",
    desc: "Doorstep phlebotomy across Jajpur Town and nearby blocks, with reports delivered on time.",
  },
  {
    icon: Droplets,
    title: "Blood sample collection at home in Bhadrak",
    desc: "General diagnostics blood test in Bhadrak with safe, hygienic sample collection from your residence.",
  },
  {
    icon: Droplets,
    title: "Blood sample collection at home in Keonjhar",
    desc: "Scheduled home visits for routine and specialised pathology tests across Keonjhar.",
  },
  {
    icon: Microscope,
    title: "Blood sample collection at home in Cuttack",
    desc: "Including HyPath Lab home sample collection in Cuttack for patients who prefer testing at home.",
  },
  {
    icon: Microscope,
    title: "Blood sample collection at home in Bhubaneswar",
    desc: "Convenient home collection slots for working professionals and families in Bhubaneswar.",
  },
  {
    icon: Activity,
    title: "Thyrocare home sample collection in Jajpur",
    desc: "Preventive health packages and profile tests collected from your home in Jajpur.",
  },
  {
    icon: UserCheck,
    title: "Old age patient care services in Bhubaneswar",
    desc: "Compassionate attendants and nursing support for senior citizens living at home.",
  },
  {
    icon: Baby,
    title: "Baby care services at home in Jajpur",
    desc: "Gentle newborn and mother care assistance from experienced caregivers.",
  },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];
