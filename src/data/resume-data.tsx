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
  work: [
    {
      company: "Stanford University",
      link: "https://med.stanford.edu/gevaertlab.html",
      badges: ["Remote"],
      title: "Postdoctoral researcher",
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
      start: "2017",
      end: "2019",
      description:
        "Leading the data team, and contributing to the growth of the application users from hundreds to thousands. Developing two novel algorithms for the automatic extraction of signal patterns. Technologies used: Python, Numpy, Scipy, Scikit-learn, Matplotlib, Seaborn, and Keras."
    },

  ],
  education: [
    {
      school: "University of Granada",
      degree: "Ph.D. in machine learning applied to bioinformatics",
      start: "2019",
      end: "2023",
    },
    {
      school: "University of Granada",
      degree: "Msc Data Science and Computer Engineering",
      start: "2018",
      end: "2019",
    },
    {
      school: "University of Granada",
      degree: "Bsc Computer Science",
      start: "2013",
      end: "2018",
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
      {
       title: "Synthetic whole-slide image tile generation with gene expression profile-infused deep generative models (2023)",
       authors: "Carrillo-Perez, F., Pizurica, M., Ozawa, M., Vogel, H., West, R., Kong, C., Herrera, L.J., Shen, J., Gevaert, O.",
       journal: "Cell Reports Methods",
       techStack: ["Histopathology", "GANs", "VAEs", "Generative Modelling"],
       link: "https://doi.org/10.1016/j.crmeth.2023.100534",
      },
      {
       title: "Machine-Learning-Based Late Fusion on Multi-Omics and Multi-Scale Data for Non-Small-Cell Lung Cancer Diagnosis (2022)",
       authors: "Carrillo-Perez, F., Morales JC, Castillo-Secilla D, Gevaert O, Rojas I, Herrera LJ.",
       journal: "Journal of Personalized Medicine",
       techStack: ["Histopathology", "Multi-modal data", "Gene Expression", "Information fusion"],
       link: "https://www.mdpi.com/2075-4426/12/4/601",
      },
      {
       title: "Non-small-cell lung cancer classification via RNA-Seq and histology imaging probability fusion (2021)",
       authors: "Carrillo-Perez, F., Morales, J. C., Castillo-Secilla, D., Molina-Castro, Y., Guillén, A., Rojas, I., & Herrera, L. J.",
       journal: "BMC bioinformatics",
       techStack: ["Histopathology", "Multi-modal data", "Gene Expression", "Information fusion"],
       link: "https://doi.org/10.1186/s12859-021-04376-1",
      },
      {
       title: "Deep learning to classify ultra-high-energy cosmic rays by means of PMT signals (2021)",
       authors: "Carrillo-Perez, F., Herrera, L. J., Carceller, J. M., & Guillén, A.",
       journal: "Neural Computing and Applications",
       techStack: ["Particle Physics", "CNN", "Information fusion"],
       link: "https://link.springer.com/article/10.1007/s00521-020-05679-9",
      },
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
