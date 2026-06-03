import memoriesData from "@/data/memories-images.json";

export const PASSWORD = "JERRY";

export const LANDING_IMAGE = memoriesData.hero;

export const LANDING = {
  title: "🎂 Happy Birthday Jerry",
  subtitle:
    "A small surprise from someone who truly values your friendship.",
  errorMessage: "Oops! That's not the secret password.",
} as const;

export const MUSIC_PATH = "/music/birthday.mp3";

export const GALLERY_IMAGES = memoriesData.images.map((src, index) => ({
  src,
  alt: `Friendship memory ${index + 1}`,
}));

export const MEMORY_SECTIONS = [
  {
    id: "journey",
    title: "Our Journey",
    tagline: "Where it all began",
    imageIndex: 0,
    paragraphs: [
      "I still remember the days when we first met in the B2 ODC at TCS.",
      "At first, I genuinely thought you were a senior because you were always studying or focused on work. You looked so serious and dedicated that I hesitated to even start a conversation.",
      "Little did I know that behind that serious face was one of the most wonderful friends I would ever have.",
      "Some friendships start with a big moment. Ours started quietly — and grew into something truly special.",
    ],
  },
  {
    id: "gang",
    title: "The Gang",
    tagline: "Our office family",
    imageIndex: 1,
    gangMembers: [
      "Kartheswari Akka",
      "Sandra",
      "Lakshmi",
      "Jerry",
      "Me",
    ],
    paragraphs: [
      "Our little gang shared countless laughs, conversations, tea breaks, and unforgettable moments.",
      "Those ordinary office days became special because of the people around us.",
      "Kartheswari Akka, Sandra, Lakshmi, you, and all of us — we were more than teammates. We were family inside those four walls.",
      "Every tea break, every shared joke, every “shall we go?” after work — that was our world, and you were at the heart of it.",
    ],
  },
  {
    id: "language",
    title: "The Language Barrier That Became Friendship",
    tagline: "Words were optional",
    imageIndex: 2,
    paragraphs: [
      "One of my favorite memories is our language confusion.",
      "I didn't know Hindi. You didn't know Tamil.",
      "Sometimes when you spoke, I honestly wondered whether you were explaining something or scolding me.",
      "And when I replied in Tamil, I am sure you were equally confused.",
      "Yet somehow we understood each other.",
      "Friendship found a way where language couldn't.",
      "That is the beautiful thing about real friends — you don't need perfect words. You just need heart.",
    ],
  },
  {
    id: "evening",
    title: "Evening Chats",
    tagline: "The best part of the day",
    imageIndex: 3,
    paragraphs: [
      "The evening chats, random conversations, funny moments with Sandra, team discussions, and countless small interactions slowly became some of my happiest memories.",
      "Those moments may have seemed ordinary then, but today they are memories I genuinely cherish.",
      "End of the workday never felt like an ending when we were still talking, laughing, and planning the next silly thing.",
      "Those chats reminded us that work was never just about tasks — it was about the people beside us.",
    ],
  },
  {
    id: "missing",
    title: "Missing You",
    tagline: "Distance, not goodbye",
    imageIndex: 4,
    paragraphs: [
      "Today you are in a different location.",
      "Work has taken us on different paths.",
      "But some friendships never change with distance.",
      "The memories, laughter, conversations, and support remain.",
      "We truly miss having you around.",
      "The office feels different without your presence — quieter in a way that only friends notice.",
      "No matter how many new people we meet, there is a Jerry-shaped space in our hearts that nobody else can fill.",
    ],
  },
  {
    id: "little-things",
    title: "The Little Things We Remember",
    tagline: "Friendship lives in details",
    imageIndex: 5,
    paragraphs: [
      "Your focus when work needed to get done.",
      "The way you showed up for the team without making a big deal about it.",
      "Inside jokes that only our gang understood.",
      "The patience when language got in the way — and the smile when we figured it out anyway.",
      "These small things are not small at all. They are the proof of a friendship built day by day.",
    ],
  },
  {
    id: "what-you-mean",
    title: "What You Mean to Us",
    tagline: "More than a colleague",
    imageIndex: 6,
    paragraphs: [
      "You are the friend who made hard days lighter.",
      "You are the person we trusted, laughed with, and leaned on during long office hours.",
      "You reminded us that kindness and dedication can live in the same person.",
      "We are grateful — not only for the memories, but for who you are.",
    ],
  },
  {
    id: "best-friend",
    title: "Best Friend",
    tagline: "Always, no matter what",
    imageIndex: 7,
    paragraphs: [
      "Thank you for being an amazing friend.",
      "Thank you for the laughs.",
      "Thank you for the memories.",
      "Thank you for being part of our journey.",
      "No matter where life takes us, you will always be one of my best friends.",
      "Happy Birthday Jerry ❤️",
    ],
  },
] as const;

export const FRIENDSHIP_QUOTES = [
  {
    text: "True friendship is not about being inseparable — it is about being separated and nothing changes.",
    author: "For Jerry",
  },
  {
    text: "The best memories are made with the people who turn ordinary days into stories you tell forever.",
    author: "Our gang",
  },
  {
    text: "Some friends are family we choose. Jerry, you are that friend for us.",
    author: "With love",
  },
] as const;

export const TIMELINE_ITEMS = [
  {
    title: "First Day in B2 ODC",
    description: "Where our story quietly began — a new desk, a new team, a future friend.",
  },
  {
    title: "First Conversation",
    description: "Breaking the ice and discovering the person behind the serious focus.",
  },
  {
    title: "Tea Break Memories",
    description: "Small breaks that became big memories with the gang.",
  },
  {
    title: "Evening Chats",
    description: "End-of-day talks that meant everything.",
  },
  {
    title: "Team Fun Moments",
    description: "Laughter with Sandra, the team, and friends who felt like home.",
  },
  {
    title: "Best Friend Forever",
    description: "A bond that distance cannot change — only makes more precious.",
  },
] as const;

export const FINAL_SURPRISE = {
  quote: [
    "Some people become colleagues.",
    "Some become teammates.",
    "A very few become lifelong friends.",
    "You are one of them.",
  ],
  buttonLabel: "🎁 Open Final Surprise",
  celebrationTitle: "🎂 Happy Birthday Jerry ❤️",
  closing: [
    "Distance may change locations,",
    "but it can never change true friendship.",
    "Thank you for being part of some of my happiest memories.",
    "We miss you.",
    "We appreciate you.",
    "We are lucky to have you as our friend.",
    "Happy Birthday once again.",
  ],
} as const;
