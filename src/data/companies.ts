export type CompanyApp = { name: string; href: string };

export type Company = {
  name: string;
  src: string;
  app?: string;
  apps?: CompanyApp[];
};

export const companies: Company[] = [
  { name: "Nagra Media UK", src: "/companies/nagra.svg" },
  { name: "Conviva", src: "/companies/conviva.png" },
  { name: "Nagra Vision", src: "/companies/nagra-vision.png" },
  { name: "IBM", src: "/companies/ibm.svg" },
  { name: "Aricent", src: "/companies/aricent.jpg" },
  {
    name: "LiveSmart",
    src: "/companies/livesmart.png",
    apps: [
      { name: "LiveSmart (old)", href: "https://apps.apple.com/jp/app/%E6%97%A7-livesmart-old/id1348347425" },
      { name: "LiveSmart Next", href: "https://apps.apple.com/jp/app/livesmart-next-%E3%83%AA%E3%83%96%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88/id1509382615" },
      { name: "LiveSmart user app", href: "https://apps.apple.com/jp/app/livesmart%E5%88%A9%E7%94%A8%E8%80%85%E3%82%A2%E3%83%97%E3%83%AA/id1549779293" },
      { name: "AST HEMS", href: "https://apps.apple.com/jp/app/%E3%82%A2%E3%82%B9%E3%83%88hems/id1609024207" },
    ],
  },
  { name: "token.com", src: "/companies/token.png", app: "https://apps.apple.com/us/app/token-com-crypto-trading/id1566878207" },
  { name: "Himalaya Exchange", src: "/companies/himalaya.jpg" },
  { name: "Senior Life.AI", src: "/companies/seniorlife-lockup.png" },
];
