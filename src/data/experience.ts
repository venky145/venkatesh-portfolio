export type ExperiencePoint = {
  text: string;
  children?: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  domain: string;
  summary: string;
  highlights: ExperiencePoint[];
  workedOn?: string;
  stack: string;
};

/** Public timeline, newest first, in the order Venkatesh set. */
export const experience: ExperienceEntry[] = [
  {
    company: "Nagra Media UK",
    role: "Senior iOS & React Native Developer",
    start: "Dec 2021",
    end: "Present",
    location: "Newport, UK",
    domain: "OTT / Streaming",
    summary:
      "I own native iOS and tvOS playback for OTT apps used by millions, and I build the SDKs underneath them, from the NMP Player to the UAV analytics SDK.",
    highlights: [
      {
        text: "Led a UI migration from React Native to native Swift and SwiftUI, improving rendering performance by roughly 70%.",
      },
      {
        text: "Designed a two-tier degradation strategy with backend teams across IAS, MDS, and Content Builder. I co-owned the API contracts and error semantics.",
        children: [
          'A full-screen "services down" state for a total outage.',
          'A "limp mode" banner for partial failure.',
        ],
      },
      {
        text: "Built the UAV SDK, a mobile analytics SDK. The data feeds into Tableau.",
        children: [
          "It attaches to AVPlayer and tracks startup time, latency, buffering, ABR, and errors.",
          "It tracks the app itself: launch, screens, actions, and crashes.",
        ],
      },
      {
        text: "Modified a React Native player library at the native iOS layer to fix playback behaviour the JavaScript layer could not reach.",
      },
      {
        text: "Built Player-MCP: a SwiftUI AVPlayer test app with a debug HTTP bridge and a TypeScript MCP server. It lets AI agents inspect and drive live player state for automated analytics testing.",
      },
      {
        text: "Shipped Apple Pay and Stripe payment flows, GDPR-compliant consent handling, and fixes for ad frequency capping and React Native text rendering.",
      },
    ],
    workedOn: "Eurovision Sport · Claro tv+ · FIH · IBU · NMP Player SDK · UAV SDK",
    stack: "Swift, SwiftUI, tvOS, AVPlayer, FairPlay DRM, React Native, TypeScript, Conviva, Mux",
  },
  {
    company: "token.com",
    role: "Principal Engineer, contract",
    start: "Mar 2025",
    end: "2026",
    location: "Remote",
    domain: "Fintech / Crypto",
    summary:
      "I led engineering on a consumer Solana wallet app and worked directly with the CEO on product direction.",
    highlights: [
      {
        text: "Led a team of five engineers building deposits, withdrawals, and gasless trade execution.",
      },
      {
        text: "Defined idempotency and consistency guarantees with the backend team, so money-movement flows stayed correct under retries and failures.",
      },
      {
        text: "Worked with the CEO daily, then twice weekly, shaping product direction and delivery priorities.",
      },
      {
        text: "Owned wallet security on the client: Keychain, secure storage, and transaction-signing flows.",
      },
    ],
    stack: "React Native, TypeScript, Swift, Solana, Keychain",
  },
  {
    company: "Conviva",
    role: "Senior Integration Engineer, iOS / tvOS / JS",
    start: "Mar 2021",
    end: "Sep 2021",
    location: "Bangalore, India",
    domain: "Streaming Analytics",
    summary:
      "I worked on the Conviva SDK and partnered with 12–14 of the world's biggest streaming services to improve playback quality and meet their monetisation goals.",
    highlights: [
      {
        text: "Managed integrations for 12–14 major streaming clients across the UK, Europe, and North America.",
      },
      {
        text: "Worked with client engineering teams to turn analytics SDK data into playback improvements in startup time, rebuffering, and error rates.",
      },
      {
        text: "Contributed to Conviva SDK development across a footprint of 300+ devices and players.",
      },
    ],
    workedOn: "DAZN · HBO Max · NBA · Discovery · Mediaset · RTL · OSN · Sony",
    stack: "Swift, Objective-C, tvOS, JavaScript, AVPlayer, Analytics SDKs",
  },
  {
    company: "LiveSmart KK / Senior Life.AI",
    role: "Lead Developer, iOS",
    start: "Dec 2020",
    end: "Feb 2023",
    location: "Tokyo, Japan",
    domain: "AI Health / IoT",
    summary:
      "I was the sole iOS engineer on two live App Store products, an AI gait-analysis app and a smart-home control app, while leading a wider team of five.",
    highlights: [
      {
        text: "Senior Life.AI: built the on-device video capture pipeline feeding a Mayo Clinic-trained AI gait-analysis backend, covering 9,000+ lives.",
      },
      {
        text: "LiveSmart IoT: built smart-home control over BLE and MQTT, supporting 180+ device types.",
      },
      {
        text: "Owned both apps end to end: architecture, UI, and App Store releases.",
      },
    ],
    stack: "Swift, AVFoundation, CoreBluetooth, MQTT, Firebase",
  },
  {
    company: "Nagra Vision",
    role: "Senior Developer and Technical Lead",
    start: "Jul 2017",
    end: "Mar 2021",
    location: "Bangalore, India",
    domain: "OTT / Streaming",
    summary:
      "I built Nagra's player foundations from first principles and led the team delivering OTT apps for operators worldwide. The ION platform shipped to 10M+ users.",
    highlights: [
      {
        text: "Built a custom tvOS video player on AVPlayer from scratch.",
        children: [
          "Clear content first.",
          "Then performance, low latency, error handling, and ABR.",
          "Then encrypted content with FairPlay DRM, using AVContentKeySession and SPC/CKC.",
        ],
      },
      {
        text: "Extended the DRM work to Android with ExoPlayer and Widevine.",
      },
      {
        text: "Helped develop the NMP Player SDK for iOS, tvOS, and React Native, used by operators.",
      },
      {
        text: "Led a team of about 10 engineers in 2019 while staying hands-on in the codebase.",
      },
      {
        text: "Integrated Mux analytics into OTT apps in 2019, when Mux was still a small team.",
      },
    ],
    workedOn: "Claro tv+ · Eutelsat · TransAM · SVRA · Jackson · Gibson",
    stack: "Swift, Objective-C, tvOS, AVPlayer, FairPlay, HLS, ExoPlayer, Widevine",
  },
  {
    company: "IBM India / DBS Digibank",
    role: "Senior System Analyst",
    start: "Dec 2016",
    end: "Jul 2017",
    location: "India",
    domain: "Banking",
    summary: "I built regulated mobile banking features for DBS Digibank, a digital-only bank.",
    highlights: [
      {
        text: "Shipped accounts, transfers, and transaction history, including Face ID and Touch ID.",
      },
      {
        text: "Implemented OAuth 2.0 and JWT authentication backed by the Secure Enclave.",
      },
      {
        text: "Worked on fraud detection and Open Banking integrations in a regulated environment.",
      },
    ],
    stack: "Objective-C, Swift, OAuth 2.0, JWT, Secure Enclave",
  },
  {
    company: "Aricent",
    role: "Senior iOS Developer",
    start: "Jan 2015",
    end: "Nov 2016",
    location: "India",
    domain: "Wearables / BLE",
    summary: "I built Bluetooth LE connectivity for smartwatches and automotive clients.",
    highlights: [
      {
        text: "Worked with Intel on launching the Titan Juxt Pro smartwatch, and demonstrated the BLE connection stability that won the project.",
      },
      {
        text: "Delivered CoreBluetooth work for Fossil smartwatches and Volkswagen.",
      },
    ],
    workedOn: "Titan Juxt Pro · Fossil Smartwatch · Volkswagen",
    stack: "Objective-C, CoreBluetooth, UIKit",
  },
  {
    company: "R2 International",
    role: "iOS Developer",
    start: "Apr 2013",
    end: "Dec 2014",
    location: "India",
    domain: "Mobile",
    summary: "Where it started: building native iOS apps in Objective-C.",
    highlights: [],
    stack: "Objective-C, UIKit",
  },
];
