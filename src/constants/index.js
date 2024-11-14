import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import img from "../assets/img-1.webp";
import img1 from "../assets/img-2.webp";
import img2 from "../assets/img-3.webp";
import img3 from "../assets/img-4.webp";
import img4 from "../assets/img-5.webp";
import img5 from "../assets/img-6.webp";
import img6 from "../assets/img-7.webp";
import img7 from "../assets/img-8.webp";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: "2",
    title: "About",
    url: "/about",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Create Stunning Images Instantly With AI",
    text: "Unlock your creative potential with our AI-powered tool, perfect for generating stunning images in seconds.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assets/benefits/card-1.webp",
  },
  {
    id: "1",
    title: "Generate Unique Image Styles With Text To Image",
    text: "Explore a world of creativity with Pixlr's 16 unique style options, designed to transform your images into captivating works of art.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: "./src/assets/benefits/card-2.webp",
    light: true,
  },
  {
    id: "2",
    title: "Polish Your Vision With Ai Image Generator",
    text: "Take your AI-generated images to the next level. Once you've generated an image, open it and click on Edit Image to seamlessly transfer your creation.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "./src/assets/benefits/card-3.webp",
  },
  {
    id: "3",
    title: "Designing Has Never Been So Safe And Easy",
    text: "AI Image Generator makes it simple and secure to create vibrant graphics. If you prefer to keep your work private, you can easily toggle the ‘make private’ button before generating your image, ensuring that your creations remain confidential. ",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: "./src/assets/benefits/card-4.webp",
    light: true,
  },
  {
    id: "4",
    title: "How to make AI-generated images",
    text: "Tap the input at the top and describe the image you’d like to generate. The more detail you can provide, the better. When using Text to Image, you can also choose an image style from our available options like Enhance, Anime, Digital-Art, Neon Punk, Cinematic etc. Then, click Generate image.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: "./src/assets/benefits/card-5.webp",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const gallery = [
  {
    id: "0",
    title: "Superhero Young Boy",
    img: img,
  },
  {
    id: "1",
    title: "Cat In Clothes",
    img: img1,
  },
  {
    id: "2",
    title: "Robot In Jungle",
    img: img2,
  },
  {
    id: "3",
    title: "Suited Animal Like A Boss In The Office",
    img: img3,
  },
  {
    id: "4",
    title: "Man With His Jeep In Village",
    img: img4,
  },
  {
    id: "5",
    title: "Beautiful girl With Green Eyes",
    img: img5,
  },
  {
    id: "6",
    title: "Fairy Tales",
    img: img6,
  },
  {
    id: "7",
    title: "Young Boy Listening Music",
    img: img7,
  },
];

export const faqData = [
  {
    question: "What is a AI Image Generator?",
    answer:
      "RAI Image Generator is an innovative tool using advanced AI techniques to generate image from a text prompt, just write what you want to generate and our AI will create it.",
  },
  {
    question: "How does AI Generate Images?",
    answer:
      "AI Image Generator creates images with vibrant colors and high quality right out of the box. Our machine learning model scans millions of internet images and associated text, enabling the AI to predict and create images tailored to your provided text. Experience next-level content creation with our AI Image Generation technology.",
  },
  {
    question: "Does the Image Generator Create Unique Images?",
    answer:
      "Absolutely! Each image produced by the AI image generator is one-of-a-kind. Save time by skipping the design process—simply input your description, and witness your vision come to life in vibrant images. The only limit to generating images is your own imagination!",
  },
  {
    question: "Is the Image Generator Free?",
    answer:
      "Yes, Pixlr AI image generator provides a complimentary tier for you to explore our exceptional text-to-image tool. As a new user, enjoy the freedom of generating 20 images using 20 credits. Additionally, take advantage of our free trial to experience 250 credits free of charge. Bring your imagination to life swiftly. If you require assistance, simply reach out to us.!",
  },
  {
    question: "Can I use Generated AI images for commercial purposes?",
    answer:
      "Yes you can, Pixlr do not retain any copyright from the text-to-image generations, but make sure you do follow the T&C and our guidlines",
  },
  {
    question: "Who owns the copyright of the AI Generated images?",
    answer:
      "This remains an open question for the global community, with no definitive answer at present. Pixlr currently refrains from asserting any copyright claims over the content generated by users. Moreover, Pixlr lacks the capability to license or grant usage rights for the output content to users. It's important to be aware that this scenario may evolve with the development of copyright laws in different jurisdictions.",
  },
  {
    question: "Is AI Image Generator legal?",
    answer:
      "While AI-generated artwork itself cannot be copyrighted or attributed to a specific individual, it's important to note that the artwork used to train the generator algorithms is often copyrighted, owned, or credited to human artists and creators. Consequently, there is a potential for copyright infringements when producing AI-generated art.",
  },
];
