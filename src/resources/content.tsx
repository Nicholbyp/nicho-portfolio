import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nicho",
  lastName: "Bayu Praditya",
  name: `Nicho Bayu Praditya`,
  role: "IT & Digital Operations",
  avatar: "/images/formal.jpg",
  email: "nichobayu744@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa Indonesia", "English"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nicholl777",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nichobayu",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/nichollzn/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@nikolltine",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">
        ONCE UI
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
  display: true,
  link: `mailto:${person.email}`,
},
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
         I'm {person.firstName}, an Informatics Engineering graduate
    with an interest in IT Support, Customer Service, and Digital
    Operations. I enjoy solving technical problems, supporting
    people, and building practical technology solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PDAM Toya Wening (PDAM Surakarta)",
        timeframe: "Aug 2025 - Dec 2025",
        role: "IT & IoT Support Intern",
        achievements: [
          <>
             Assisted in developing and implementing an IoT-based water pressure
        monitoring system using ESP32 and water pressure sensors.
          </>,
          <>
             Supported the installation and configuration of IoT devices at more
        than 10 monitoring points.
          </>,
          <>Assisted with real-time monitoring dashboards, database integration,
                  device troubleshooting, and sensor calibration.
          </>

        ],
        images: [
  {
    src: "/images/projects/project-01/cover-01.jpeg",
    alt: "IoT device manufacturing briefing",
    width: 16,
    height: 9,
  },
  {
    src: "/images/projects/project-01/alatbuat.jpeg",
    alt: "working on IoT device monitoring",
    width: 16,
    height: 9,
  },
  {
    src: "/images/projects/project-01/pdamfoto.jpeg",
    alt: "Installation of IoT monitoring device",
    width: 16,
    height: 9,
    },
  {
    src: "/images/projects/project-01/webpdam.png",
    alt: "Installation of IoT monitoring device",
    width: 16,
    height: 9,
  },
],
      },
      {
        company: "Kacar Kucur",
        timeframe: "Jul 2024 - Dec 2024",
        role: "Customer Service & Food Service Crew",
        achievements: [
          <>
            Assisted customers throughout the ordering process, from menu
        selection to serving orders at their tables.
          </>,
          <>
             Provided friendly customer service and helped ensure a positive
        customer experience.
          </>,
          <> Supported promotional activities and daily restaurant operations.
          </>
        ],
        images: [],
          },
  {
    company: "Private Property Management",
    timeframe: "Mar 2024 - Jun 2024",
    role: "Administrative Assistant",
    achievements: [
      <>
        Assisted with daily administrative activities, including recording
        income and expenses.
      </>,
      <>
        Helped manage tenant check-in and check-out processes and maintain
        tenant records.
      </>,
      <>
        Supported daily property operations and cleanliness management.
      </>,
    ],
    images: [],
  },
  {
    company: "Kembang Kuning",
    timeframe: "Jun 2023 - Jan 2024",
    role: "Cashier & Store Assistant",
    achievements: [
      <>
        Assisted customers with product inquiries and purchasing decisions
        for household furniture and hobby-related products.
      </>,
      <>
        Handled cashier activities and supported daily store operations.
      </>,
      <>
        Helped maintain product organization and customer service quality.
      </>,
    ],
    images: [],
  },
  {
    company: "Andromeda Komputer",
    timeframe: "Mar 2021 - Aug 2021",
    role: "IT Support Intern",
    achievements: [
      <>
        Assisted with computer and laptop troubleshooting, software
        installation, operating system reinstallation, and printer servicing.
      </>,
      <>
        Supported basic networking tasks, including Wi-Fi installation
        and configuration.
      </>,
      <>
        Participated in computer maintenance and servicing activities
        for customers and institutional clients.
      </>,
    ],
    images: [],
  },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universitas Duta Bangsa Surakarta",
        description: <>Bachelor's Degree in Informatics Engineering (S1 Teknik Informatika).
        Graduated in 2026 with a GPA of 3.59.</>,
      },
      {
        name: "SMK Muhammadiyah 1 Sukoharjo",
        description: <>Vocational High School education with a focus on Computer and
        Network Engineering (Teknik Komputer dan Jaringan).</>,
      },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Expertise",
    skills: [
      {
        title: "Customer Support & Communication",
        description: <>   Experienced in customer-facing activities, assisting customers,
        handling inquiries, providing information, and supporting
        day-to-day service operations.</>,
        tags: [
          {
            name: "Customer Service",
            icon: "person",
             },
        {
          name: "Communication",
          icon: "email",
           },
        {
          name: "Problem Solving",
          icon: "grid",
        },
        {
          name: "Customer Handling",
          icon: "person",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "IT Support & Troubleshooting",
        description: <>Familiar with computer troubleshooting, software installation,
        operating system configuration, printer maintenance, and
        basic computer networking..</>,
        tags: [
          {
            name: "IT Support",
            icon: "grid",
          },
          {
            name: "Troubleshooting",
            icon: "grid",
          },
          {
            name: "Networking",
            icon: "globe",
             },
        {
          name: "Windows",
          icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
            },
        ],
      },
      {
        title: "IoT & Embedded Systems",
        description: <>Experienced in developing IoT-based prototypes and monitoring
        systems using ESP32, Arduino IDE, sensors, and Firebase.</>,
        tags: [
          {
            name: "ESP32",
            icon: "grid",
          },
          {
            name: "Arduino IDE",
            icon: "grid",
          },
          {
            name: "Firebase",
            icon: "grid",
             },
        {
          name: "Internet of things",
          icon: "globe",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/wkiot.jpeg",
            alt: "Alat IoT Absensi Toko Waroeng Kuota Berbasis ESP32",
            width: 16,
            height: 9,
            },
            {
            src: "/images/projects/project-01/wk.jpeg",
            alt: "Output (Layar LCD I2C) Alat IoT Absensi Toko Waroeng Kuota Berbasis ESP32",
            width: 16,
            height: 9,
            },
            {
            src: "/images/projects/project-01/pm25.jpeg",
            alt: "Alat Monitoring (PM2.5), Suhu, dan Kelembapan, Kualitas Udara Berbasis IoT",
            width: 16,
            height: 9,
            },
            {
            src: "/images/projects/project-01/pdamm.jpeg",
            alt: " Alat Monitoring Water Pressure PDAM Surakarta",
            width: 16,
            height: 9,
            },
            {
            src: "/images/projects/project-01/pm25rangkai.jpeg",
            alt: "Perangkaian Alat Monitoring",
            width: 16,
            height: 9,
            },
            {
            src: "/images/projects/project-01/keamananfinger.jpeg",
            alt: "Sistem Keamanan Fingerprint Berbasis IoT dengan Prototype Tamiya",
            width: 16,
            height: 9,
            },
            
        ],
      },
      {
        title: "Web Development",
        description: <>Familiar with building web interfaces, developing basic web
        applications, and integrating databases for information systems.</>,
        tags: [
          {
            name: "HTML",
            icon: "grid",
          },
          {
            name: "CSS",
            icon: "grid",
          },
          {
            name: "Next.Js",
            icon: "grid",
          },
          {
            name: "JavaScript",
            icon: "javascript",
             },
        {
          name: "PHP",
          icon: "grid",
            },
        {
          name: "MySQL",
          icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/nexlimv.png",
            alt: "Project Web Penjualan vape Menggunakan Next,Js",
            width: 16,
            height: 9,
            },
             {
            src: "/images/projects/project-01/webdesa.jpeg",
            alt: "Project Web Desa untuk KKN menggunakan Next.Js",
            width: 16,
            height: 9,
            },
             {
            src: "/images/projects/project-01/webdesa2.jpeg",
            alt: "Tampilan Dashboard Web Desa untuk KKN menggunakan Next.Js",
            width: 16,
            height: 9,
            },
             {
            src: "/images/projects/project-01/webwk.jpeg",
            alt: "Web Absensi dan Monitoring Kehadiran di Waroeng Kuota ",
            width: 16,
            height: 9,
            },
             {
            src: "/images/projects/project-01/mancink.png",
            alt: "Project Web Game Mancing",
            width: 16,
            height: 9,
            }, 
        ],
      },
      {
        title: "Digital Tools & Content Creation",
        description: <>  Able to create visual content, edit videos, prepare presentations,
        and design basic user interfaces for digital projects.</>,
        tags: [
          {
            name: "CapCut",
            icon: "grid",
          },
          {
            name: "Canva",
            icon: "grid",
          },
          {
            name: "Figma",
            icon: "figma",
             },
        {
          name: "Chart.js",
          icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/pddkkn.png",
            alt: "Project image",
            width: 16,
            height: 9,
            },
        ],
      },
      {
        title: "Administration & Digital Operations",
        description: <>  Familiar with administrative tasks, data recording, documentation,
        digital tools, and supporting daily operational activities.</>,
        tags: [
          {
            name: "Administration",
            icon: "grid",
          },
          {
            name: "Data Management",
            icon: "grid",
          },
          {
            name: "Documentation",
            icon: "grid",
             },
        {
          name: "Digital Operations",
          icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
