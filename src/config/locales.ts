import { appConfig } from "./config";

const theme = appConfig.theme as "tulips" | "sunflowers" | "roses";
const flowerEmoji =
  {
    tulips: "🌷",
    sunflowers: "🌻",
    roses: "🌹",
    lilies: "",
  }[theme] || "🌸";

export const locales = {
  es: {
    title: "Si no lo abres, me pondré triste 😢",

    greetings: `Hola mi bello angel 😊🌞🦇`,
    ask_question: "Deseo hacerle una pregunta si no fuera mucha molestia 🤔💬",
    be_my_valentine: "¿Deseas ser mi San Valentín? 💘❤️",
    thank_you:
      "¡Gracias mi bello angel, por aceptar! No sabes lo feliz que me hace saber que compartiremos este día tan especial. 🥰🐉",
    bad_mood: "¡Oh! Parece que no estás de buen humor 😔...",
    sorry: "Lo siento mucho, no era mi intención molestarla 😢...",
    final_no_response_1: "No aceptaré un no como respuesta 😤...",
    final_no_response_2:
      "Oh no... 😢 Mi corazón está roto, pero aún te quiero. 💔",
    final_no_response_3:
      "Está bien... 😞 *me voy con mi caja de chocolates a llorar en un rincón* 🍫😭.",
    final_no_response_4: "No me duele... me quema... ¡me lastima! 😭🔥💔",

    buttons: {
      hello: "Saber más [inlove]🦇",
      no_disturb: "No molestes! [angry]🚫",
      ask: "Pregunta con confianza [hands]💬",
      another_day: "Otro día joven! [angry]⏳",
      yes: "Sí, claro! [inlove][heart]",
      no: "Lo siento [cry][brokenheart]",
      retry: "De acuerdo, pregúntame otra vez [smile]🔄",
      reconsider: "Reconsiderar respuesta [hugface]🔄",
      final_no_response_1: "No, en serio no [angry]🚫",
      final_no_response_2:
        "[grimacing] Uy… mira la hora, es momento de irme 🚶‍♀️💨",
      final_no_response_3: "Me parece bien [smile]",
      final_no_response_4: "Jaja, era bromita [laugh], pregúntame otra vez 🔄",
    },
  },
  en: {
    title: "If you don't open it, I'll be sad 😢",
    greetings: `Good morning, Miss {name}! 😊🌞${flowerEmoji}`,
    ask_question: "I have a question for you, if you don't mind 🤔💬",
    be_my_valentine: "Would you be my Valentine? 💘❤️",
    thank_you:
      "Thank you, my beautiful {name}, for accepting! You have no idea how happy it makes me to know that we will share this special day. 🥰🐉",
    bad_mood: "Oh no! You don’t seem to be in a good mood 😔...",
    sorry: "I'm really sorry, I didn't mean to bother you 😢...",
    final_no_response_1: "I refuse to take no for an answer! 😤...",
    final_no_response_2:
      "Oh no... 😢 My heart is shattered, but I still love you. 💔",
    final_no_response_3:
      "Alright then... 😞 *I'll just go cry in a corner with my box of chocolates* 🍫😭.",
    final_no_response_4: "It doesn’t hurt... it burns... it wounds me! 😭🔥💔",

    buttons: {
      hello: "Good morning! [inlove]🌞",
      no_disturb: "Don’t bother me! [angry]🚫",
      ask: "Go ahead and ask [hands]💬",
      another_day: "Maybe another day! [angry]⏳",
      yes: "Yes, of course! [inlove][heart]",
      no: "Sorry [cry][brokenheart]",
      retry: "Alright, ask me again [smile]🔄",
      reconsider: "Reconsider [hugface]🔄",
      final_no_response_1: "No, seriously no [rage]🚫",
      final_no_response_2:
        "[grimacing] Oh wow… look at the time, gotta go! 🚶‍♀️💨",
      final_no_response_3: "That’s fine [smile]",
      final_no_response_4: "Haha, just kidding [laugh], ask me again 🔄",
    },
  },
} as const;
