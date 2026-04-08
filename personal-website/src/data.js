import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import movieProject from "./img/movieProject.PNG";
import rentACarImage from "./img/rent-a-car.PNG";
import adminDashboardImage from "./img/admin-dashboard.PNG";

const githubUrl = "https://github.com/KbraEser";
const linkedinUrl = "https://www.linkedin.com/in/kübra-eser-612851169/";

const data = {
  en: {
    headerSection: [
      {
        title: "Skills",
        url: "#skills",
      },
      {
        title: "Projects",
        url: "#projects",
      },
      {
        title: "Hire me",
        url: "#footer",
      },
    ],
    heroSection: {
      title: "Creative thinker Minimalism lover",
      description:
        "Hi, I’m Kübra. I’m a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      buttons: [
        {
          text: "Hire me",
          url: "#footer",
        },
        {
          icon: FaGithub,
          text: "Github",
          url: githubUrl,
        },
        {
          icon: FaLinkedinIn,
          text: "Linkedin",
          url: linkedinUrl,
        },
      ],
    },
    skillsSection: {
      title: "Skills",
      skills: [
        {
          title: "JavaScript / TypeScript",
          description:
            "I developed a Vanilla Amazon Clone project with JavaScript. I usually use TypeScript in my projects.",
        },
        {
          title: "React.Js",
          description:
            "In my projects, I usually manage the state using Redux Toolkit.",
        },
        {
          title: "Next.Js",
          description:
            "I've just started developing projects with Next.JS and I'm building an e-commerce site where I'm developing the admin dashboard.",
        },
      ],
    },
    profileSection: {
      title: "Profile",
      profile: [
        {
          label: "Date of Birth",
          value: "September 29, 1995",
        },
        {
          label: "City of Residence",
          value: "Ankara, Turkey",
        },
        {
          label: "Education",
          value: "Gazi University, Energy Systems Engineering",
        },
        {
          label: "Degree",
          value: "Bachelor's Degree, 2018",
        },
        {
          label: "Preferred Role",
          value: "Frontend Developer, UI Designer",
        },
      ],
      aboutMe: {
        title: "About Me",
        description1:
          "I've been playing around with HTML, CSS, SCSS ,Tailwind CSS, JavaScript, TypeScript, Tan Stack Query, React and  Next.JS turning designs into real, live websites that people can interact with.",
        description2:
          "Always curious about what's next in the tech world, I'm constantly learning and trying out new things to keep my skills sharp.",
      },
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          image: movieProject,
          title: "Movie Project",
          description:
            "A React-based movie and TV series platform built with the TMDB API. It features a hero slider with categorized discovery, real-time search, multilingual support (Turkish/English), a fully responsive design, and detailed content pages. Built using React 19, TypeScript, Material-UI, SCSS, Redux Toolkit,Router, Axios, and Swiper.",
          features: ["React", "RTK", "Router"],
          github: `${githubUrl}/cine-fusion`,
          site: "https://www.youtube.com/watch?v=2aHeprJTS-A&t=6s",
        },
        {
          image: rentACarImage,
          title: "Rent a Car",
          description:
            "A modern and user-friendly car rental web application. Features include authentication, car listing and filtering, a reservation system, user dashboard, and responsive design. Built with React 19, TypeScript, Date-Picker,React Hook Form, Redux Toolkit, and Supabase.",
          features: ["React", "RTK", "Supabase"],
          github: `${githubUrl}/RentACar/tree/main/rent-a-car`,
          site: "https://www.youtube.com/watch?v=2aHeprJTS-A&t=6s",
        },
        {
          image: adminDashboardImage,
          title: "Admin Dashboard",
          description:
            "A modern dashboard application featuring charts and analytics, payment and user management, dark mode support, responsive design, and interactive data visualization. Built with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, and Recharts.",
          features: ["Zod", "TanStack", "Axios"],
          github: `${githubUrl}/admin`,
          site: `${githubUrl}/admin`,
        },
      ],
    },
    apiDemoSection: {
      title: "Axios — external API demo",
      description:
        "Sends the first project entry from local data (data.js) as JSON to a public test API. Not a real backend — it only proves the request works.",
      button: "Send POST request",
      loading: "Sending…",
      successLabel: "Sample server response",
      errorLabel: "Request failed",
      note: "Uses Reqres public POST /api/users (demo only).",
    },
    footerSection: {
      title: "Let's work together on your next product",
      github: githubUrl,
      linkedin: linkedinUrl,
    },
  },
  tr: {
    headerSection: [
      {
        title: "Yetenekler",
        url: "#skills",
      },
      {
        title: "Projeler",
        url: "#projects",
      },
      {
        title: "İşe Alabilirsiniz",
        url: "#footer",
      },
    ],
    heroSection: {
      title: "Yaratıcı düşünür, Minimalizm aşığı.",
      description:
        "Merhaba, ben Kübra. Ben bir full-stack geliştiriciyim. Eğer bir geliştirici arıyorsanız, beni işe alabilirsiniz.",
      buttons: [
        {
          text: "İşe Alabilirsiniz",
          url: "#footer",
        },
        {
          icon: FaGithub,
          text: "Github",
          url: githubUrl,
        },
        {
          icon: FaLinkedinIn,
          text: "Linkedin",
          url: linkedinUrl,
        },
      ],
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        {
          title: "JavaScript / TypeScript",
          description:
            "JS ile bir Vanilla Amazon Klon projesi geliştirdim. Genellikle projelerimde TypeScript kullanıyorum.",
        },
        {
          title: "React.Js",
          description:
            "Projelerimde genellikle state yönetim kısmını Redux Toolkit ile yapıyorum.",
        },
        {
          title: "Next.Js",
          description:
            "Next.JS ile proje geliştirme yeni başladım ve admin dashboard kısmını geliştirdiğim bir e-commerce sitesi yapıyorum.",
        },
      ],
    },
    profileSection: {
      title: "Profil",
      profile: [
        {
          label: "Doğum Tarihi",
          value: "Eylül 29, 1995",
        },
        {
          label: "Yaşadığı Şehir",
          value: "Ankara, Türkiye",
        },
        {
          label: "Eğitim",
          value: "Gazi Üniversitesi, Enerji Sistemleri Mühendisliği",
        },
        {
          label: "Derece",
          value: "Lisans, 2018",
        },
        {
          label: "Tercih Edilen Rol",
          value: "Frontend Geliştirici, UI Tasarımcısı",
        },
      ],
      aboutMe: {
        title: "Hakkımda",
        description1:
          "HTML, CSS, SCSS ,Tailwind CSS, JavaScript , TypeScript, Tan Stack Query, React,  ve Next.JS ile uğraşıyorum, tasarımları insanların etkileşim kurabileceği gerçek, canlı web sitelerine dönüştürüyorum.",
        description2:
          "Teknoloji dünyasında gelecekte ne olacağını merak ediyorum, becerilerimi keskin tutmak için sürekli olarak yeni şeyler öğreniyor ve deniyorum.",
      },
    },
    projectsSection: {
      title: "Projeler",
      projects: [
        {
          image: movieProject,
          title: "Movie Project",
          description:
            "TMDB API ile geliştirilmiş React tabanlı film ve dizi platformu. Hero slider ve kategorilerle keşif, gerçek zamanlı arama, Türkçe/İngilizce destek, tüm cihazlara uyumlu tasarım ve detay sayfaları sunar.React 19,TypeScript, Material-UI,SCSS, Redux Toolkit, React Router DOM, Axios + Swiper,Redux Toolkit, Swiper",
          features: ["RTK", "Axios", "Router"],
          github: `${githubUrl}/cine-fusion`,
          site: "https://www.youtube.com/watch?v=2aHeprJTS-A&t=6s",
        },
        {
          image: rentACarImage,
          title: "Rent a Car",
          description:
            "Modern ve kullanıcı dostu bir araç kiralama web uygulaması. Kimlik doğrulama, araç listeleme ve filtreleme, rezervasyon sistemi, kullanıcı paneli ve responsive tasarım özellikleri sunar. React 19, TypeScript,Date-Picker,React Hook Form, Redux Toolkit ve Supabase ile geliştirilmiştir.",
          features: ["React", "RTK", "Supabase"],
          github: `${githubUrl}/RentACar/tree/main/rent-a-car`,
          site: "https://www.youtube.com/watch?v=2aHeprJTS-A&t=6s",
        },
        {
          image: adminDashboardImage,
          title: "Admin Dashboard",
          description:
            "Modern bir dashboard uygulaması. Grafikler ve istatistikler, ödeme ve kullanıcı yönetimi, dark mode desteği, responsive tasarım ve interaktif veri görselleştirme sunar. Next.js 16, TypeScript, Tailwind CSS, shadcn/ui ve Recharts kullanılarak geliştirilmiştir.",
          features: ["React", "Zod", "TanStack"],
          github: `${githubUrl}/admin`,
          site: `${githubUrl}/admin`,
        },
      ],
    },
    apiDemoSection: {
      title: "Axios — dış API demosu",
      description:
        "Yereldeki projelerden (data.js) ilk örneğin başlığını ve etiketlerini POST ile test servisine gönderir. Gerçek bir backend değil; sadece isteğin gittiğini gösterir.",
      button: "POST isteği gönder",
      loading: "Gönderiliyor…",
      successLabel: "Sunucu yanıtı (örnek)",
      errorLabel: "İstek başarısız",
      note: "Reqres üzerindeki genel demo endpoint’i POST /api/users kullanılır.",
    },
    footerSection: {
      title: "Diğer projelerde birlikte çalışalım",
      github: githubUrl,
      linkedin: linkedinUrl,
    },
  },
};

export default data;
