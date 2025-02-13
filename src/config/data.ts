import { appConfig } from "./config";
import { locales } from "./locales";

const NAME = appConfig.userName;
const LANGUAGE = appConfig.language as keyof typeof locales;
const THEME = appConfig.theme;

const t = locales[LANGUAGE];

// Definir fondos y clases de botones por tema
const themeConfig = {
  roses: {
    backgrounds: [
      "abbley_bominable_AatY2FWlb?updatedAt=1739461865198",
      "WhatsApp%20Image%202025-02-13%20at%2002.07.20.jpeg?updatedAt=1739463044500",
      "WhatsApp%20Image%202025-02-13%20at%2002.07.20%20(1).jpeg?updatedAt=1739463044607",
      "2a9ec814502331.5628528cdfaad.jpg?updatedAt=1739463477999",
    ],
    buttonClass: "rose-btn",
  },
  tulips: {
    backgrounds: [
      "/tulips/bg_tulips1.png?updatedAt=1739137532427",
      "/tulips/bg_tulips2.png?updatedAt=1739137532740",
      "/tulips/bg_tulips3.png?updatedAt=1739137532222",
      "/tulips/bg_tulips4.png?updatedAt=1739137537426",
    ],
    buttonClass: "tulip-btn",
  },
  sunflowers: {
    backgrounds: [
      "/sunflowers/bg_sunflowers1.png?updatedAt=1739137328426",
      "/sunflowers/bg_sunflowers2.png?updatedAt=1739137327900",
      "/sunflowers/bg_sunflowers3.png?updatedAt=1739137327922",
      "/sunflowers/bg_sunflowers4.png?updatedAt=1739137328157",
    ],
    buttonClass: "sunflower-btn",
  },
  lilies: {
    backgrounds: [
      "/lilies/bg_lilies1.png?updatedAt=1739128936136",
      "/lilies/bg_lilies2.png?updatedAt=1739129704173",
      "/lilies/bg_lilies3.png?updatedAt=1739129828642",
      "/lilies/bg_lilies4.png?updatedAt=1739129828780",
    ],
    buttonClass: "lily-btn",
  },
};

// Obtener configuración del tema actual
const { backgrounds, buttonClass } =
  themeConfig[THEME as keyof typeof themeConfig];

const screens = [
  {
    screenNumber: 1,
    message: t.greetings.replace("{name}", NAME),
    background: backgrounds[0],
    buttons: [
      {
        text: t.buttons.hello,
        className: `${buttonClass} btn-primary`,
        nextScreen: 2,
      },
      {
        text: t.buttons.no_disturb,
        className: `${buttonClass} btn-primary`,
        nextScreen: 5,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 2,
    message: t.ask_question,
    background: backgrounds[1],
    buttons: [
      {
        text: t.buttons.ask,
        className: `${buttonClass} btn-primary`,
        nextScreen: 3,
      },
      {
        text: t.buttons.another_day,
        className: `${buttonClass} btn-primary`,
        nextScreen: 6,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 3,
    message: t.be_my_valentine,
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.yes,
        className: `${buttonClass} btn-primary`,
        nextScreen: 4,
      },
      {
        text: t.buttons.no,
        className: `${buttonClass} btn-primary`,
        nextScreen: 7,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 4,
    message: t.thank_you.replace("{name}", NAME),
    background: backgrounds[3],
    buttons: [],
    iconSrc: "/heart.png",
  },
  {
    screenNumber: 5,
    message: t.bad_mood,
    background: backgrounds[0],
    buttons: [
      {
        text: t.buttons.retry,
        className: `${buttonClass} btn-primary`,
        nextScreen: 1,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 6,
    message: t.sorry,
    background: backgrounds[1],
    buttons: [
      {
        text: t.buttons.retry,
        className: `${buttonClass} btn-primary`,
        nextScreen: 2,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 7,
    message: t.final_no_response_1,
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.final_no_response_1,
        className: `${buttonClass} btn-primary`,
        nextScreen: 8,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 8, // Nueva pantalla después del "No" definitivo
    message: t.final_no_response_2, // Mensaje especial
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.final_no_response_2,
        className: `${buttonClass} btn-primary`,
        nextScreen: 9, // Regresar al inicio
      },
    ],
    iconSrc: "", // Ícono triste para darle más efecto
  },
  {
    screenNumber: 9, // Nueva pantalla después del "No" definitivo
    message: t.final_no_response_3, // Mensaje especial
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.final_no_response_3,
        className: `${buttonClass} btn-primary`,
        nextScreen: 10, // Regresar al inicio
      },
    ],
    iconSrc: "", // Ícono triste para darle más efecto
  },
  {
    screenNumber: 10, // Nueva pantalla después del "No" definitivo
    message: t.final_no_response_4, // Mensaje especial
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.final_no_response_4,
        className: `${buttonClass} btn-primary`,
        nextScreen: 3, // Regresar al inicio
      },
    ],
    iconSrc: "", // Ícono triste para darle más efecto
  },
];

export { screens };
