import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Francisco Carrillo-Perez",
  initials: "FCP",
  location: "Seville, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Sevilla",
  about:
    "Machine Learning Scientist, love working with data",
  summary:
    "My name is Francisco (Paco) Carrillo-Perez, and I hold a Ph.D. in machine learning applied to bioinformatics from the University of Granada. I am working now as a freelance postdoctoral researcher in the Gevaert's lab at Stanford University, working remotely. I am mainly interested in multi-modal self-supervised learning and generative models for cancer research. In my spare time I like to climb, take long hikes, and read a good book!",
  avatarUrl: "https://avatars.githubusercontent.com/u/7196966?v=4",
  personalWebsiteUrl: "https://pacocp.es/",
  contact: {
    email: "carrilloperezfrancisco@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pacocp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/franciscocp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/pacocp9",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Granada",
      degree: "Ph.D. in machine learning applied to bioinformatics",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Stanford University",
      link: "https://med.stanford.edu/gevaertlab.html",
      badges: ["Remote"],
      title: "Postdoctoral researcher",
      logo: StanfordLogo,
      start: "2023",
      end: "Currently",
      description:
        "Leading biomedical projects on multi-modal generative models, including GANs and Diffusion models, and self-supervised learning techniques for cancer data. Applying for the first time diffusion models in the context of transcriptomics-to-image synthesis.",
    },
    {
      company: "University of Granada",
      link: "https://www.ugr.es/",
      badges: ["In person"],
      title: "Ph.D. Student",
      logo: UGRLogo,
      start: "2019",
      end: "2023",
      description:
        "Applying Deep Learning methods to biological information, including Whole-Slide-Imaging, RNA-Seq, miRNA-Seq, DNA Methylation, and Copy Number Variation. Engaged in the integration of information across various multi-omic and multi-scale modalities through the utilization of machine learning late fusion strategies."
    },
    {
      company: "mDurance Solutions S.L.",
      link: "https://mdurance.com/",
      badges: ["In person"],
      title: "Data Scientist",
      logo: mduranceLogo,
      start: "2017",
      end: "2019",
      description:
        "Leading the data team, and contributing to the growth of the application users from hundreds to thousands. Developing two novel algorithms for the automatic extraction of signal patterns. Technologies used: Python, Numpy, Scipy, Scikit-learn, Matplotlib, Seaborn, and Keras."
    },

  ],
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Digital Pathology",
    "Generative Models",
    "Pytorch",
    "Research"
  ],
  projects: [
    /*{
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },*/
  ],
} as const;
