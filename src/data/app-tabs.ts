export type AppTab = {
  id: string;
  label: string;
  image: string;
  imageFit: "cover" | "contain" | "logo";
  summary: string;
  context: string;
  role?: string;
  technologies?: string[];
  workedOn?: string[];
  links?: { label: string; href: string }[];
  screenshots?: { src: string; alt: string; frame?: "phone" | "screen" }[];
};

export type AppTabGroup = {
  id: string;
  kind: "professional" | "personal";
  tabs: AppTab[];
};

export const ottTabs: AppTabGroup = {
  id: "sports-ott",
  kind: "professional",
  tabs: [
    {
      id: "eurovision",
      label: "Eurovision Sport",
      image: "/apps/eurovision/03.jpg",
      imageFit: "contain",
      summary:
        "iOS, tvOS, and React Native for Eurovision Sport, including server-driven UI and playback used by millions.",
      context: "Nagra Media UK · 2021–present",
      role: "Senior iOS & React Native Developer",
      technologies: ["Swift", "React Native", "AVPlayer", "Bitmovin", "HLS", "FairPlay", "Stripe"],
      links: [
        { label: "Eurovision Sport", href: "https://eurovisionsport.com/en" },
        { label: "App Store", href: "https://apps.apple.com/in/app/eurovision-sport/id6449944134" },
      ],
      workedOn: [
        "Led a UI migration from React Native to native Swift and SwiftUI, improving rendering performance by about 70%.",
        "Designed a two-tier degradation strategy with backend teams across IAS, MDS, and Content Builder: a full-screen \"services down\" state for a total outage, and a \"limp mode\" banner for partial failure.",
        "Built the UAV SDK, analytics covering both AVPlayer and the app itself: launch, screens, and crashes.",
        "Implemented server-driven UI on Eurovision Sport, and owned Bitrise releases, reviews, and mentoring.",
        "Built playback with AVPlayer, Bitmovin, HLS, and FairPlay / Widevine DRM, including error recovery across devices and networks.",
        "Integrated Stripe, Apple Pay, OAuth, and GDPR-compliant analytics, and validated the payment and auth flows.",
      ],
      screenshots: [
        { src: "/apps/eurovision/03.jpg", alt: "Eurovision Sport home", frame: "phone" },
        { src: "/apps/eurovision/04.jpg", alt: "Eurovision Sport schedule", frame: "phone" },
        { src: "/apps/eurovision/05.jpg", alt: "Eurovision Sport latest videos and highlights", frame: "phone" },
        { src: "/apps/eurovision/06.jpg", alt: "Eurovision Sport sports catalogue", frame: "phone" },
        { src: "/apps/eurovision/07.jpg", alt: "Eurovision Sport federations", frame: "phone" },
        { src: "/apps/eurovision/08.jpg", alt: "Eurovision Sport documentaries", frame: "phone" },
        { src: "/apps/eurovision/09.jpg", alt: "Eurovision Sport event player", frame: "phone" },
        { src: "/apps/eurovision/10.jpg", alt: "Eurovision Sport event player with a pre-roll ad", frame: "phone" },
        { src: "/apps/eurovision/11.jpg", alt: "Eurovision Sport athletics competitions", frame: "phone" },
        { src: "/apps/eurovision/12.jpg", alt: "Eurovision Sport biathlon event", frame: "phone" },
      ],
    },
    {
      id: "fih",
      label: "FIH",
      image: "/apps/fih-share.jpg",
      imageFit: "contain",
      summary: "iOS, tvOS, and React Native for the FIH hockey app, with live and on-demand playback.",
      context: "Nagra Media UK · 2021–present",
      role: "Senior iOS & React Native Developer",
      technologies: ["Swift", "React Native", "AVPlayer", "HLS", "FairPlay"],
      workedOn: [
        "Built playback with AVPlayer, HLS, and FairPlay / Widevine DRM, including error recovery across devices and networks.",
        "Owned releases, reviews, and mentoring on the FIH app alongside the other Nagra sports clients.",
      ],
      links: [{ label: "FIH", href: "https://www.fih.hockey/" }],
    },
    {
      id: "claro",
      label: "Claro",
      image: "/apps/claro.png",
      imageFit: "contain",
      summary: "Claro tv+ on iOS, tvOS, and React Native, with DRM playback and subscription flows.",
      context: "Nagra Media UK · 2021–present",
      role: "Senior iOS & React Native Developer",
      technologies: ["Swift", "React Native", "AVPlayer", "HLS", "FairPlay"],
      workedOn: [
        "Shipped Claro tv+ playback with AVPlayer, HLS, and FairPlay / Widevine DRM.",
        "Integrated payments, OAuth, and GDPR-compliant analytics, and validated those flows.",
      ],
      links: [{ label: "Claro", href: "https://www.claro.com/" }],
    },
  ],
};

export const fintechTabs: AppTabGroup = {
  id: "fintech",
  kind: "professional",
  tabs: [
    {
      id: "dbs",
      label: "DBS",
      image: "/clients/dbs.svg",
      imageFit: "logo",
      summary:
        "Mobile banking for DBS Digibank — accounts, transfers, and transaction history on a regulated banking app.",
      context: "IBM India · 2016–2017",
      role: "Senior System Analyst",
      technologies: ["Swift", "OAuth 2.0", "Secure Enclave"],
      workedOn: [
        "Shipped accounts, transfers, and transaction history, including Face ID and Touch ID.",
        "Implemented OAuth 2.0 and JWT authentication backed by the Secure Enclave.",
        "Worked on fraud detection and Open Banking integrations in a regulated environment.",
      ],
      links: [{ label: "App Store", href: "https://apps.apple.com/in/app/digibank-by-dbs-india/id1057836974" }],
    },
  ],
};

export const tokenTabs: AppTabGroup = {
  id: "token-com",
  kind: "professional",
  tabs: [
    {
      id: "token-wallet",
      label: "token.com",
      image: "/apps/token/01.jpg",
      imageFit: "contain",
      summary:
        "Consumer Solana wallet — deposits, withdrawals, and gasless trades — led as a contract principal engineer.",
      context: "token.com · Mar 2025–2026",
      role: "Principal Engineer, contract",
      technologies: ["React Native", "Swift", "Solana"],
      workedOn: [
        "Led a team of five engineers on deposits, withdrawals, and gasless trade execution.",
        "Defined idempotency and consistency with the backend so money-movement stayed correct under retries and failures.",
        "Worked with the CEO daily, then twice weekly, and owned client wallet security: Keychain, secure storage, and transaction signing.",
      ],
      links: [{ label: "App Store", href: "https://apps.apple.com/us/app/token-com-crypto-trading/id1566878207" }],
      screenshots: [
        { src: "/apps/token/01.jpg", alt: "token.com discover and trade trending tokens", frame: "phone" },
        { src: "/apps/token/02.jpg", alt: "token.com watch and trade from a video", frame: "phone" },
        { src: "/apps/token/03.jpg", alt: "token.com token chart and legitimacy score", frame: "phone" },
        { src: "/apps/token/04.jpg", alt: "token.com trusted creators leaderboard", frame: "phone" },
        { src: "/apps/token/05.jpg", alt: "token.com creator profile and reputation", frame: "phone" },
        { src: "/apps/token/06.jpg", alt: "token.com wallet with add cash and withdraw", frame: "phone" },
        { src: "/apps/token/07.jpg", alt: "token.com creator earnings and referrals", frame: "phone" },
        { src: "/apps/token/08.jpg", alt: "token.com premium earnings", frame: "phone" },
      ],
    },
  ],
};

const livesmartLogo = "/companies/livesmart.png";

const livesmartWork = {
  role: "Lead Developer, iOS",
  technologies: ["Swift", "BLE", "MQTT"],
  summary:
    "Smart-home control for home and industrial devices, built end to end in Swift as the sole iOS engineer.",
  workedOn: [
    "Designed and developed the IoT app in Swift, and owned architecture, UI, and App Store releases.",
    "Built BLE end to end, and device onboarding with MQTT.",
    "Supported 180+ device types, including blinds, heaters, locks, lights, doors, and more.",
  ],
};

export const livesmartTabs: AppTabGroup = {
  id: "livesmart",
  kind: "professional",
  tabs: [
    {
      id: "livesmart-old",
      label: "LiveSmart",
      image: "/apps/livesmart/old.png",
      imageFit: "logo",
      context: "LiveSmart KK · 2020–2023 · Tokyo",
      ...livesmartWork,
      links: [
        { label: "App Store", href: "https://apps.apple.com/jp/app/%E6%97%A7-livesmart-old/id1348347425" },
        { label: "Support", href: "https://support.livesmart.co.jp/hc/ja/categories/900000086686" },
      ],
    },
    {
      id: "livesmart-next",
      label: "LiveSmart Next",
      image: "/apps/livesmart/next.png",
      imageFit: "logo",
      context: "LiveSmart KK · 2020–2023 · Tokyo",
      ...livesmartWork,
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/jp/app/livesmart-next-%E3%83%AA%E3%83%96%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88/id1509382615",
        },
        { label: "Support", href: "https://support.livesmart.co.jp/hc/ja/categories/900000086706" },
      ],
    },
    {
      id: "livesmart-user",
      label: "User app",
      image: "/apps/livesmart/user.png",
      imageFit: "logo",
      context: "LiveSmart KK · 2020–2023 · Tokyo",
      ...livesmartWork,
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/jp/app/livesmart%E5%88%A9%E7%94%A8%E8%80%85%E3%82%A2%E3%83%97%E3%83%AA/id1549779293",
        },
        { label: "Support", href: "https://support-resident.livesmart.co.jp/hc/ja" },
      ],
    },
    {
      id: "ast-hems",
      label: "AST HEMS",
      image: livesmartLogo,
      imageFit: "logo",
      summary: "AST HEMS on iOS.",
      context: "LiveSmart KK · 2020–2023 · Tokyo",
      links: [{ label: "App Store", href: "https://apps.apple.com/jp/app/%E3%82%A2%E3%82%B9%E3%83%88hems/id1609024207" }],
    },
  ],
};
