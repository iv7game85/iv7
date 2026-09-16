import {
  AlertTriangle,
  Coins,
  Copyright,
  Flame,
  Gamepad2,
  Gift,
  Globe,
  Lock,
  Mail,
  MessageSquare,
  PhoneCall,
  RotateCcw,
  Scale,
  Send,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------
   INTERFACES & TYPES
--------------------------------------------------------- */

export interface NavLink {
  name: string;
  href: string;
}

export interface AppSpecs {
  label: string;
  value: string;
}

export interface GameItem {
  name: string;
  category: string;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}

export interface RewardItem {
  icon: LucideIcon;
  amount: string;
  title: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

export interface WinnerItem {
  name: string;
  game: string;
  amount: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

/* ---------------------------------------------------------
   GLOBAL URLS & NAVIGATION
--------------------------------------------------------- */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.iv7-apps.in";

export const SITE_CONFIG = {
  name: "IV7 Games",
  url: SITE_URL,
  title: "IV7 Game – IV7 Games Download & Register",
  description:
    "Explore IV7 Games, download guidance, registration information, Android access, safety tips, FAQs, and responsible gaming information.",
  keywords: [
    "IV7",
    "IV7 Game",
    "IV7 APK",
    "IV7 App",
    "IV7 download guide",
    "IV7 Login",
    "IV7 Android",
    "IV7 FAQ",
  ],
  language: "en-IN",
  ogImage: "/iv7.jpeg",
  publisher: "IV7 Games",
} as const;

export const DOWNLOAD_LINKS = {
  DEFAULT_APK:
    "https://share-rxapq9cajg.iv7.info/web/share/index.html?ic=AD62TB6F&ts=1788382020&m=2&lang=en&id=1",
  TELEGRAM: "https://t.me/iv7gameofficial",
  WHATSAPP: "https://wa.me/919876543210",
  EMAIL: "support@iv7-apps.in",
} as const;

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/iv7-apk-download" },
  { name: "Register", href: "/iv7-game-register" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export const LEGAL_LINKS: NavLink[] = [
  { name: "Disclaimer", href: "/disclaimer" },
];

/* ---------------------------------------------------------
   APP SPECS, FEATURES & STATS
--------------------------------------------------------- */

export const APP_DETAILS: AppSpecs[] = [
  { label: "App Name", value: "IV7 Game Official" },
  { label: "Category", value: "Online Skill & Prediction Gaming" },
  { label: "Version", value: "v2.1.0 (Latest 2026 Build)" },
  { label: "APK Size", value: "35 MB (Optimized Lite)" },
  { label: "OS Compatibility", value: "Android 5.0+ • iOS Web App" },
  { label: "Registration Bonus", value: "₹200 – ₹500 Free Spin" },
  { label: "Minimum Withdrawal", value: "₹100 (Instant Processing)" },
  { label: "Supported Payments", value: "UPI (PhonePe, GPay, Paytm) & IMPS" },
];

export const APP_FEATURES: FeatureItem[] = [
  {
    icon: Gamepad2,
    title: "Diverse Game Library",
    description:
      "Access Win Go 1-minute color prediction, Aviator crash curves, high-paying slots, Teen Patti, and Live Dragon vs Tiger all in one lightweight app.",
  },
  {
    icon: Zap,
    title: "Instant UPI Payouts",
    description:
      "Withdraw your winnings directly into any Indian bank account or UPI ID (Google Pay, PhonePe, Paytm) within 5 to 15 minutes seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "RNG & Secure Architecture",
    description:
      "Enjoy 100% fair play powered by verified random number generation and 256-bit encryption ensuring funds and personal data stay strictly protected.",
  },
];

export const PLATFORM_STATS: StatItem[] = [
  { value: "5M+", label: "Total Downloads" },
  { value: "50+", label: "Skill Games" },
  { value: "₹100M+", label: "Monthly Payouts" },
  { value: "99%", label: "Instant UPI Speed" },
  { value: "24/7", label: "Live Support" },
];

export const GAMES_LIST: GameItem[] = [
  { name: "Win Go 1Min", category: "Prediction" },
  { name: "Aviator", category: "Crash Games" },
  { name: "Trx Hash", category: "Crypto Games" },
  { name: "Dragon vs Tiger", category: "Live Casino" },
  { name: "Fortune Tiger", category: "Slots" },
  { name: "Teen Patti", category: "Cards" },
  { name: "Andar Bahar", category: "Cards" },
  { name: "Rummy Pro", category: "Skill" },
];

/* ---------------------------------------------------------
   REWARDS, WINNERS & FAQ
--------------------------------------------------------- */

export const REWARDS_DATA: RewardItem[] = [
  {
    icon: Gift,
    amount: "₹199 – ₹500",
    title: "New User Register Bonus",
    description:
      "Instant cash rewards added directly to your game wallet upon completing mobile verification.",
    badge: "Claim Now",
    highlight: true,
  },
  {
    icon: Coins,
    amount: "100%",
    title: "First Deposit Match",
    description:
      "Double your balance instantly on your initial recharge of ₹100 or above.",
    badge: "Instant Credit",
  },
  {
    icon: Users,
    amount: "₹600",
    title: "Referral Commission",
    description:
      "Earn flat cash per active invite plus up to 30% lifetime rebate on player bets.",
    badge: "Invite Link",
  },
  {
    icon: RotateCcw,
    amount: "20%",
    title: "Daily Loss Rebate",
    description:
      "Automated cashback credited to your account every morning at 08:00 AM.",
    badge: "Daily Payout",
  },
  {
    icon: Trophy,
    amount: "₹10 Lakh",
    title: "Weekly VIP Pool",
    description:
      "Top the weekly ranking charts to unlock luxury gift packages and cash pots.",
    badge: "VIP Club",
  },
  {
    icon: Flame,
    amount: "50%",
    title: "Weekend Reload Bonus",
    description:
      "Extra balance rewards on all wallet top-ups made throughout Saturday and Sunday.",
    badge: "Weekend Only",
  },
];

export const LATEST_WINNERS: WinnerItem[] = [
  { name: "Rahul S.", game: "Aviator", amount: "₹12,500" },
  { name: "Priya M.", game: "Ganesha Fortune", amount: "₹8,200" },
  { name: "Arjun K.", game: "Dragon Tiger", amount: "₹45,000" },
  { name: "Deepa R.", game: "Teen Patti", amount: "₹22,700" },
  { name: "Vikram P.", game: "Crash Cricket", amount: "₹18,400" },
  { name: "Sunita D.", game: "Lucky Neko", amount: "₹6,800" },
  { name: "Karan B.", game: "Baccarat", amount: "₹35,000" },
  { name: "Meera T.", game: "Fishing War", amount: "₹11,200" },
  { name: "Rohan G.", game: "Tiger Fortune", amount: "₹9,600" },
  { name: "Ananya S.", game: "Aviator", amount: "₹28,500" },
  { name: "Ajay N.", game: "Fortune Rabbit", amount: "₹14,100" },
  { name: "Ritu V.", game: "3 Pot Dragons", amount: "₹7,300" },
];

export const FAQ_CATEGORIES = [
  "All",
  "General",
  "Account & APK",
  "Legality & Rules",
] as const;

export const FAQ_DATA: FAQItem[] = [
  {
    category: "General",
    q: "What is IV7 Game?",
    a: "IV7 Game is a mobile-oriented gaming platform that may provide users with access to different games and account-based features.",
  },
  {
    category: "Download & APK",
    q: "How can I download IV7 APK?",
    a: "If an official or legitimate APK is available, download it from a trusted source and verify that it is compatible with your Android device before installation.",
  },
  {
    category: "Account & Access",
    q: "How do I register for IV7 Game?",
    a: "Users can generally look for the Register or Sign Up option and provide the information requested by the platform. Registration requirements may change.",
  },
  {
    category: "Compatibility",
    q: "Is IV7 Game available on Android?",
    a: "The platform is focused on mobile access, but Android compatibility can depend on the current application version, device, and region.",
  },
  {
    category: "Security & Safety",
    q: "Is the IV7 APK safe?",
    a: "The safety of an APK depends largely on its authenticity and source. Avoid modified or suspicious files and verify an application before installing it.",
  },
];

export const CONCLUSION_DATA = {
  title: "Conclusion",
  paragraphs: [
    "IV7 Game offers a mobile-focused way to explore different gaming options through a convenient platform. Whether you are researching IV7 Games, looking for information about an IV7 APK, learning about the download process, or trying to understand registration and login, it is important to verify the latest information before using the service.",
    "Always prioritize account security, download applications from trusted sources, review permissions carefully, and follow the laws and age requirements applicable in your region. By taking these precautions, users can make more informed decisions about mobile gaming and the applications they choose to use.",
  ],
};

/* ---------------------------------------------------------
   BLOG POSTS
--------------------------------------------------------- */

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "iv7-game-apk-download-guide-2026",
    title: "How to Download & Install IV7 APK (2026 Latest Version)",
    excerpt:
      "A complete step-by-step walkthrough to download the verified IV7 APK on Android, register an account, and claim your ₹500 welcome bonus.",
    category: "Guides",
    date: "Aug 15, 2026",
    readTime: "4 min read",
    image: "/blog/apk-guide.jpg",
    author: "IV7 Editorial Team",
  },
  {
    id: "2",
    slug: "top-color-prediction-strategies-iv7",
    title: "Top 5 Winning Formulas for Win Go & Color Prediction on IV7",
    excerpt:
      "Master trend chart reading, 3X investment strategies, and proper bankroll discipline to maximize profits in IV7 color prediction.",
    category: "Strategy",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    image: "/blog/strategy-guide.jpg",
    author: "Pro Gaming Analyst",
  },
  {
    id: "3",
    slug: "instant-withdrawal-upi-guide-iv7",
    title: "How to Withdraw Money Instantly via UPI on IV7 App",
    excerpt:
      "Learn how to link your UPI ID, understand daily withdrawal thresholds, and troubleshoot pending payout requests on IV7.",
    category: "Finance",
    date: "Aug 10, 2026",
    readTime: "3 min read",
    image: "/blog/upi-guide.jpg",
    author: "Finance Support",
  },
  {
    id: "4",
    slug: "iv7-vip-club-rewards-explained",
    title: "IV7 VIP Club: Level-Up Bonuses, Rebates & Daily Salaries",
    excerpt:
      "Explore the benefits of leveling up your IV7 VIP tier, including weekly mystery cashbacks, higher withdrawal caps, and dedicated managers.",
    category: "VIP Rewards",
    date: "Aug 06, 2026",
    readTime: "5 min read",
    image: "/blog/vip-guide.jpg",
    author: "Rewards Specialist",
  },
];

export const points = [
  {
    title: "1. Financial Risk & Gaming Warning",
    icon: AlertTriangle,
    content:
      "Participating in online prediction games, real-cash slots, Aviator, Win Go, or card matches involves financial risk and may be habit-forming. Players must exercise self-control, manage their bankroll responsibly, and never wager funds beyond their personal budget.",
  },
  {
    title: "2. Strictly 18+ Age Restriction",
    icon: ShieldAlert,
    content: `All content, APK downloads, and services featured on ${SITE_URL.replace(
      "https://www.",
      "",
    )} are strictly intended for individuals aged 18 years and older. Minors are strictly prohibited from creating accounts, making deposits, or accessing IV7 gaming software.`,
  },
  {
    title: "3. Legal & Territorial Compliance in India",
    icon: Scale,
    content:
      "Online real-money skill gaming regulations vary across different states in India. Residents residing in jurisdictions where online gaming with real cash is restricted by state laws (including Andhra Pradesh, Telangana, Assam, Nagaland, Sikkim, Odisha, and Tamil Nadu) must adhere to their local state legislation and refrain from participating.",
  },
  {
    title: "4. Informational & Download Portal Notice",
    icon: Globe,
    content: `${SITE_URL.replace(
      "https://www.",
      "",
    )} functions solely as an informational, tutorial, and APK download reference portal. We do not directly operate games, hold deposits, or handle financial transactions. For account recovery, gameplay queries, or payout assistance, users should contact official in-app support channels.`,
  },
  {
    title: "5. No Financial Guarantees",
    icon: TrendingUp,
    content:
      "Game strategies, probability guides, bonus examples, and promotional figures (e.g., ₹200 – ₹500 welcome bonus) are provided for illustrative purposes only. Past outcomes do not guarantee future returns, and no monetary winnings are guaranteed.",
  },
  {
    title: "6. Trademark & Brand Ownership",
    icon: Copyright,
    content:
      "All trademarks, logos, brand names, and digital game assets referenced belong strictly to their respective registered owners. Brand mentions are used solely for user identification, routing, and descriptive purposes.",
  },
];

export const corePillars = [
  {
    icon: Zap,
    title: "Lightweight & Ultra-Fast",
    desc: "Optimized 35 MB package size ensures quick installation, zero latency, and instant game launch across all mobile devices.",
  },
  {
    icon: Gamepad2,
    title: "All-in-One Gaming Hub",
    desc: "Play Win Go color prediction, Aviator crash curves, high-paying slots, Teen Patti, and Live Dragon vs Tiger in one app.",
  },
  {
    icon: Lock,
    title: "Secure & Fair Architecture",
    desc: "Powered by 256-bit SSL encryption and RNG-verified game algorithms to guarantee transparent results and protected transactions.",
  },
  {
    icon: Gift,
    title: "Daily Rewards & VIP Perks",
    desc: "Claim ₹199 to ₹500 welcome bonuses, daily login rebates, referral commissions, and weekly leaderboard rewards.",
  },
];

export const supportChannels = [
  {
    title: "In-App Live Chat",
    icon: MessageSquare,
    desc: "Fastest response time (1-5 minutes). Available 24/7 directly inside the IV7 APK application.",
    badge: "Recommended 24/7",
    actionText: "Open App Chat",
    href: DOWNLOAD_LINKS.DEFAULT_APK,
  },
  {
    title: "Official Telegram",
    icon: Send,
    desc: "Get live channel updates, daily promo codes, prediction tips, and direct manager help.",
    badge: "Instant Channel",
    actionText: "Join Telegram",
    href: DOWNLOAD_LINKS.TELEGRAM,
  },
  {
    title: "WhatsApp Helpdesk",
    icon: PhoneCall,
    desc: "Direct helpdesk for registration queries, deposit confirmations, and UPI withdrawal tracking.",
    badge: "Fast Help",
    actionText: "Chat on WhatsApp",
    href: DOWNLOAD_LINKS.WHATSAPP,
  },
  {
    title: "Email Support",
    icon: Mail,
    desc: "For corporate inquiries, VIP account queries, partnership requests, and formal tickets.",
    badge: "Official Mail",
    actionText: "Send Email",
    href: `mailto:${DOWNLOAD_LINKS.EMAIL}`,
  },
];

export const blogContentMap: Record<
  string,
  {
    content: string;
  }
> = {
  "iv7-game-apk-download-guide-2026": {
    content: `
      <p>Downloading the <strong>IV7 Game APK</strong> is quick, straightforward, and secure. Because real-money skill gaming apps are distributed outside the Google Play Store, users can download the official verified package directly from our website.</p>
      
      <h3>Step 1: Download the Verified APK Package</h3>
      <p>Click on the <strong>Download IV7 APK</strong> button on our homepage. The total package size is approximately <strong>35 MB</strong>, engineered for rapid downloads and zero lag across 4G and 5G connections.</p>
      
      <h3>Step 2: Enable Unknown Sources on Android</h3>
      <p>Open your device's <em>Settings &gt; Security &gt; Allow Installation from Unknown Sources</em> (or allow your browser permission to install packages). This standard step is required for manual Android APK installations.</p>

      <h3>Step 3: Complete Installation & Mobile Verification</h3>
      <p>Locate the downloaded APK file in your notification panel or Download Manager, tap <strong>Install</strong>, and launch the app. Register using your active Indian mobile number and enter the received OTP.</p>

      <h3>Step 4: Claim Free Welcome Spin Bonus</h3>
      <p>Newly verified accounts automatically trigger the welcome reward wheel to claim starting bonus balance ranging from <strong>₹200 to ₹500</strong>.</p>
    `,
  },
  "top-color-prediction-strategies-iv7": {
    content: `
      <p>Achieving consistent success in Win Go color prediction and skill multiplier games on IV7 requires tactical chart observation, disciplined bet sizing, and proper risk control.</p>
      
      <h3>1. Apply Strict Bankroll Discipline (3X Strategy)</h3>
      <p>Avoid wagering large chunks of your balance in a single round. Using structured progression management (such as conservative 3X stage scaling) helps protect your core capital against unexpected streak runs.</p>

      <h3>2. Analyze Historical Trend Patterns</h3>
      <p>Study the recent 10 to 30 round history charts inside the Win Go room (look for single-color streaks, alternate parity patterns, and mirror sequences) before placing high-confidence stakes.</p>

      <h3>3. Leverage Daily VIP Rebates</h3>
      <p>Take advantage of automatic daily morning cashback rebates and free reload bonuses to build your working capital without relying entirely on fresh deposits.</p>
    `,
  },
  "instant-withdrawal-upi-guide-iv7": {
    content: `
      <p>Transferring your winnings from the IV7 wallet directly to your Indian bank account is fast, reliable, and available 24/7.</p>
      
      <h3>Supported Withdrawal Channels</h3>
      <ul>
        <li><strong>Instant UPI:</strong> PhonePe, Google Pay, Paytm UPI, BHIM</li>
        <li><strong>Direct IMPS:</strong> All major Indian commercial banks</li>
        <li><strong>Paytm Wallet:</strong> Instant wallet settlement</li>
      </ul>

      <h3>Step-by-Step Payout Process</h3>
      <p>Open the IV7 app, navigate to <em>Wallet &gt; Withdraw</em>, enter your verified UPI ID or Bank account details, input the desired payout amount (minimum threshold is ₹100), and tap Submit. UPI payouts are processed and credited in 5 to 15 minutes.</p>
    `,
  },
  "iv7-vip-club-rewards-explained": {
    content: `
      <p>The IV7 VIP Club program offers dedicated tier-based rewards, daily salaries, and higher withdrawal limits for active community players.</p>

      <h3>VIP Club Tier Benefits</h3>
      <p>As you wager across Win Go, Aviator, and Slot games, your VIP experience points accumulate automatically. Key perks include:</p>
      <ul>
        <li><strong>Level-Up Cash:</strong> One-time instant cash unlocked at every tier level.</li>
        <li><strong>Weekly Mystery Cashbacks:</strong> Automated Monday bonus drops.</li>
        <li><strong>Higher Withdrawal Caps:</strong> Increased daily transaction limits and prioritized queue processing.</li>
      </ul>
    `,
  },
};
