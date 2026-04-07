import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import workintechImage from "./img/Workintech.png";
import JourneyImage from "./img/Journey.png";
import RandomJokesImage from "./img/RandomJokes.png";

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
        url: "#hire-me",
      },
    ],
    heroSection: {
      title: "Creative thinker Minimalism lover",
      description:
        "Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      buttons: [
        {
          text: "Hire me",
          url: "#hire-me",
        },
        {
          icon: FaGithub,
          text: "Github",
          url: "https://github.com/yourusername",
        },
        {
          icon: FaLinkedinIn,
          text: "Linkedin",
          url: "https://www.linkedin.com/in/yourusername",
        },
      ],
    },
    skillsSection: {
      title: "Skills",
      skills: [
        {
          title: "Java Script",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "React.Js",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Node.Js",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    profileSection: {
      title: "Profile",
      profile: [
        {
          label: "Date of Birth",
          value: "March 24, 1996",
        },
        {
          label: "City of Residence",
          value: "Ankara, Turkey",
        },
        {
          label: "Education",
          value: "Hacettepe University, Biology",
        },
        {
          label: "Degree",
          value: "Bachelor's Degree, 2016",
        },
        {
          label: "Preferred Role",
          value: "Frontend Developer, UI Designer",
        },
      ],
      aboutMe: {
        title: "About Me",
        description1:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        description2:
          "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      },
    },
    projectsSection: {
      projects: [
        {
          image: workintechImage,
          title: "Workintech",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Workintech",
          site: "https://workintech.com",
        },
        {
          image: RandomJokesImage,
          title: "Random Jokes",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Journey",
          site: "https://journey.com",
        },
        {
          image: JourneyImage,
          title: "Journey",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Portfolio",
          site: "https://portfolio.com",
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
        url: "#hire-me",
      },
    ],
    heroSection: {
      title: "Yaratıcı düşünür, Minimalizm aşığı.",
      description:
        "Merhaba, ben Almila. Ben bir full-stack geliştiriciyim. Eğer bir geliştirici arıyorsanız, beni işe alabilirsiniz.",
      buttons: [
        {
          text: "İşe Alabilirsiniz",
          url: "#hire-me",
        },
        {
          icon: FaGithub,
          text: "Github",
          url: "https://github.com/yourusername",
        },
        {
          icon: FaLinkedinIn,
          text: "Linkedin",
          url: "https://www.linkedin.com/in/yourusername",
        },
      ],
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        {
          title: "Java Script",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "React.Js",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Node.Js",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    profileSection: {
      title: "Profil",
      profile: [
        {
          label: "Doğum Tarihi",
          value: "Mart 24, 1996",
        },
        {
          label: "Yaşadığı Şehir",
          value: "Ankara, Türkiye",
        },
        {
          label: "Eğitim",
          value: "Hacettepe Üniversitesi, Biyoloji",
        },
        {
          label: "Derece",
          value: "Lisans, 2016",
        },
        {
          label: "Tercih Edilen Rol",
          value: "Frontend Geliştirici, UI Tasarımcısı",
        },
      ],
      aboutMe: {
        title: "Hakkımda",
        description1:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        description2:
          "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      },
    },
    projectsSection: {
      projects: [
        {
          image: workintechImage,
          title: "Workintech",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Workintech",
          site: "https://workintech.com",
        },
        {
          image: RandomJokesImage,
          title: "Random Jokes",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Journey",
          site: "https://journey.com",
        },
        {
          image: JourneyImage,
          title: "Journey",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          features: ["react", "redux", "axios"],
          github: "https://github.com/Portfolio",
          site: "https://portfolio.com",
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
    },
  },
};

export default data;
