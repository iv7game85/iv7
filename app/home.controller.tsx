import {
  AlertTriangle,
  ChevronRight,
  Download,
  ExternalLink,
  Gamepad2,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DOWNLOAD_LINKS, FAQ_DATA } from "@/config/constants";

const gameCategories = [
  [
    "Card Games",
    "Card-based games are popular among mobile gaming users because they are familiar and easy to understand. Depending on availability, IV7 may provide games based on traditional card formats and other digital variations.",
  ],
  [
    "Teen Patti",
    "Teen Patti is a well-known card game with a strong following among Indian players. Digital versions allow users to experience the familiar card format through a mobile interface.",
  ],
  [
    "Dragon Tiger",
    "Dragon Tiger is another card-based game that may be available on gaming platforms such as IV7. Users should understand the rules of each game before participating.",
  ],
  [
    "Slots and Casual Games",
    "Some versions or sections of the platform may include slot-style and casual games designed for short gaming sessions.",
  ],
  [
    "Prediction-Style Games",
    "Prediction-based games may also be available depending on the current platform and region. These games can involve chance, so users should understand the rules and risks before participating.",
  ],
];

const downloadSteps = [
  [
    "Visit the Official Source",
    "Start by visiting the legitimate IV7 website or authorized download page. Check the application name, version information, and source before downloading.",
  ],
  [
    "Download the APK",
    "Select the appropriate Android download option and allow the file to finish downloading. Make sure your phone has sufficient storage and a stable internet connection.",
  ],
  [
    "Find the Downloaded File",
    "Open the Files or Downloads application on your Android device and locate the APK.",
  ],
  [
    "Check Android Security Settings",
    "Android may restrict installations from sources outside Google Play. Only continue after verifying that the APK is legitimate.",
  ],
  [
    "Install IV7",
    "Open the APK and follow the installation instructions displayed on your screen. Review the requested permissions before completing the installation.",
  ],
  [
    "Open the Application",
    "After installation, open IV7 and follow the platform's current login or registration instructions.",
  ],
];

const registerSteps = [
  "Open the IV7 platform or application.",
  "Select the Register or Sign Up option.",
  "Enter the requested mobile number or account details.",
  "Complete the verification process if required.",
  "Create a strong password.",
  "Review the platform's terms and conditions.",
  "Complete registration and log in.",
];

const featureDetails = [
  [
    "Multiple Gaming Options",
    "Different categories in one platform allow users to explore various games without needing separate applications for every type.",
  ],
  [
    "Mobile-Friendly Design",
    "IV7 is designed around smartphone access, making it convenient for users who prefer gaming on Android devices.",
  ],
  [
    "Simple Navigation",
    "A clear interface can make it easier to find games, account settings, registration options, and other sections.",
  ],
  [
    "Account Management",
    "Registered users can access account-related features through their login details.",
  ],
  [
    "Regular Updates",
    "Application updates can improve compatibility, fix technical issues, and introduce changes to available features.",
  ],
];

export default function HomeController() {
  return (
    <article className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--red)] selection:text-white">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(ellipse_at_top,_var(--deep)_0%,_var(--background)_80%)] px-4 py-8 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--deep)]/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--gold)] shadow-sm backdrop-blur-md sm:text-xs">
              <Sparkles className="h-3 w-3 text-[var(--gold)]" />
              IV7 Games Guide
            </span>
          </div>

          {/* Title as requested */}
          <p className="sr-only">
            IV7 Game – Explore IV7 Games, Download &amp; Register
          </p>

          {/* H1 Heading */}
          <h1 className="!my-2 max-w-4xl !text-2xl font-black !leading-[1.2] tracking-tight text-[var(--foreground)] xs:!text-3xl sm:!text-5xl lg:!text-6xl">
            Welcome to IV7 Game &amp; Platform Overview
          </h1>

          {/* App Logo */}
          <div className="my-5 flex justify-start">
            <div className="relative rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--deep)] to-[#0a0709] p-2.5 shadow-xl shadow-black/60 transition-transform duration-300 hover:scale-105">
              <Image
                src="/iv7.jpeg"
                alt="IV7 Game app graphic"
                width={100}
                height={100}
                priority
                unoptimized
                className="h-20 w-20 object-contain drop-shadow-[0_8px_16px_rgba(242,13,77,0.3)] sm:h-28 sm:w-28"
              />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="button button-small w-full justify-center text-center font-bold sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download
            </Link>

            <a
              href="#download"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[40px] border border-[var(--red)] bg-transparent px-6 py-3.5 text-sm font-extrabold text-[#ff3b68] transition-all duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
            >
              <ExternalLink className="h-4 w-4 shrink-0" />
              <span>Read the download guide</span>
            </a>
          </div>

          {/* Lead Text */}
          <p className="lead mt-5 pt-5 max-w-3xl text-xs leading-relaxed text-[var(--muted)] sm:text-base lg:text-lg">
            Explore IV7 Games, learn about the IV7 Games Download process, and
            find clear information about IV7 Game Register, Android access,
            account security, and responsible gaming.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-10 lg:px-16">
        <section aria-labelledby="welcome">
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Welcome to the IV7 Game platform, a mobile-focused destination where
            users can explore a variety of games through a simple and convenient
            interface. Whether you are looking for information about IV7 Games,
            want to learn about the IV7 Games Download process, or need help
            with IV7 Game Register, this website provides the essential
            information you need to get started.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            IV7 is designed for users who prefer accessing different gaming
            options from one platform rather than switching between multiple
            applications. Depending on the current version and availability,
            users may find different categories of games, including card games,
            casual games, prediction-style games, and other entertainment
            options.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            If you are new to IV7, this homepage gives you an overview of the
            platform, its features, download process, registration steps, and
            important information to consider before using the service.
          </p>
        </section>

        {/* H2: What Is IV7 Game */}
        <section
          aria-labelledby="what-is-iv7"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h2
            id="what-is-iv7"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-3xl lg:!text-4xl"
          >
            What Is IV7 Game?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            IV7 Game is presented as a mobile gaming platform that brings
            different gaming experiences together in one place. The platform is
            primarily focused on convenient smartphone access, making it easy
            for users to browse available games and manage their accounts from a
            mobile device.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            The exact selection of games and platform features can change as new
            versions are introduced. Users should always check the current
            version and information available through the legitimate IV7
            platform before downloading or registering.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            One advantage of a multi-game platform is convenience. Instead of
            searching for separate applications for different games, users can
            access multiple options through one interface.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            For Android users, IV7 may be distributed through an APK
            installation process. Anyone downloading an APK should verify the
            source carefully and avoid modified or suspicious files.
          </p>
        </section>

        {/* H3: Explore IV7 Games */}
        <section
          aria-labelledby="games"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="games"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Explore IV7 Games
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            The IV7 Games section is designed around providing different types
            of gaming experiences through one platform. Depending on the current
            version, users may encounter several categories of games.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gameCategories.map(([title, text]) => (
              <div
                key={title}
                className="group rounded-2xl border border-[var(--border)]/70 bg-gradient-to-b from-[var(--deep)]/60 via-[#0e070c] to-[#080507] p-5 transition-all duration-300 hover:border-[var(--gold)]/40 hover:shadow-lg hover:shadow-black/50"
              >
                <div className="border-l-2 border-[var(--gold)] pl-3.5">
                  {/* H4 Subheadings */}
                  <h4 className="flex items-center gap-2 text-base font-bold text-[var(--gold)] sm:text-xl">
                    <Gamepad2 className="h-4 w-4 text-[var(--gold)]/80" />
                    <span>{title}</span>
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm sm:leading-normal">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted)] sm:text-base">
            The available game library can change, so the current platform
            should always be treated as the most accurate source for available
            games.
          </p>
        </section>

        {/* H2: IV7 Games Download, Registration & Safety Guide */}
        <section
          id="download"
          aria-labelledby="download-guide-section"
          className="mt-14 border-t border-[var(--border)] pt-10 sm:mt-16 sm:pt-12"
        >
          <h2
            id="download-guide-section"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-3xl lg:!text-4xl"
          >
            IV7 Games Download, Registration &amp; Safety Guide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Searching for IV7 Games Download usually means you want to access
            the IV7 application on an Android smartphone.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Before downloading an APK, always verify that you are using a
            legitimate source. APK files obtained from unknown websites can
            potentially be modified or unsafe.
          </p>

          <div className="mt-5 rounded-2xl border-l-4 border-[var(--gold)] bg-gradient-to-r from-[var(--deep)] to-[#0c080b] p-4 shadow-sm sm:p-5">
            <p className="flex items-start gap-2.5 text-xs font-semibold leading-relaxed text-[var(--gold)] sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--gold)] mt-0.5" />
              <span>
                Only download APK files from a legitimate and verified source.
                Avoid modified, cracked, or suspicious APK files.
              </span>
            </p>
          </div>
        </section>

        {/* H4: IV7 Games Download */}
        <section
          aria-labelledby="download-heading"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="download-heading"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            IV7 Games Download
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Follow the standard installation procedure below to set up the IV7
            application on compatible devices.
          </p>

          {/* H4 Steps Header */}
          <h4 className="mt-8 text-lg font-bold text-[var(--gold)] sm:text-2xl">
            General Android Installation Process
          </h4>
          <div className="mt-4 space-y-3">
            {downloadSteps.map(([title, text], index) => (
              <div
                key={title}
                className="group rounded-2xl border border-[var(--border)]/70 bg-[#0d090c] p-4 transition-all duration-200 hover:border-[var(--red)]/40 hover:bg-[var(--deep)]/30 sm:p-5"
              >
                {/* H4 Step Items */}
                <h4 className="flex items-center gap-2 text-sm font-bold text-[var(--foreground)] sm:text-lg">
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-[var(--gold)]/10 px-1.5 text-xs font-black text-[var(--gold)]">
                    Step {index + 1}
                  </span>
                  <span>{title}</span>
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H3: IV7 Game Register */}
        <section
          aria-labelledby="register"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="register"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            IV7 Game Register
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            After accessing the platform, new users may need to complete the IV7
            Game Register process before using account-based features.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            The registration process can vary depending on the current version,
            but it generally involves creating an account with basic information
            and completing any required verification.
          </p>

          <p className="mt-8 text-lg font-bold text-[var(--gold)] sm:text-2xl">
            Typical Registration Steps
          </p>
          <ol className="mt-4 space-y-2.5">
            {registerSteps.map((step, idx) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)]/60 bg-[#0d080b]/70 p-3 text-xs text-[var(--foreground)] transition-colors hover:border-[var(--border)] sm:p-4 sm:text-sm"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--red)]/20 text-[11px] font-bold text-[var(--red)]">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--deep)]/70 p-4 sm:p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-[var(--gold)] sm:text-lg">
              <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
              <span>Account security reminder</span>
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              Keep your account information private. Never share your password,
              OTP, PIN, or other security credentials with another person.
            </p>
          </div>
        </section>

        {/* H3: Why Choose a Mobile Gaming Platform? */}
        <section
          aria-labelledby="features"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="features"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Why Choose a Mobile Gaming Platform?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Mobile gaming has become increasingly convenient because users can
            access entertainment directly from their smartphones.
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {[
              "A mobile-friendly interface",
              "Multiple game categories in one place",
              "Quick access to available games",
              "Simple account navigation",
              "Convenient smartphone access",
              "A straightforward registration process",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#0d090b] p-3 text-xs text-[var(--foreground)]/90 transition-colors hover:border-[var(--gold)]/40 sm:text-sm"
              >
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--muted)] sm:text-base">
            The actual features available can depend on the current version,
            device, region, and platform policies.
          </p>

          {/* H4: IV7 Game Features */}
          <h4 className="mt-8 text-lg font-bold text-[var(--gold)] sm:text-2xl">
            IV7 Game Features
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            The IV7 platform focuses on providing a straightforward experience
            for mobile users. Features can change over time, but users may find
            several useful functions.
          </p>
          <div className="mt-4 space-y-3">
            {featureDetails.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)]/70 bg-[#0d090c] p-4 sm:p-5"
              >
                {/* H5 Features */}
                <h5 className="text-sm font-bold text-[var(--gold)] sm:text-lg">
                  {title}
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H3: IV7 on Android */}
        <section
          aria-labelledby="android"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="android"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            IV7 on Android
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Android users are often interested in IV7 Games Download because APK
            installation provides another way to access an application outside a
            conventional app-store listing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Before installing an APK, check the Android requirements listed with
            the current version. Compatibility can depend on your
            operating-system version, device hardware, available storage, and
            the APK release.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            If installation fails, do not repeatedly download files from random
            websites. First verify the source, file integrity, storage space,
            and Android compatibility.
          </p>

          {/* H3: IV7 Game Login */}
          <h3 className="mt-8 text-lg font-bold text-[var(--gold)] sm:text-2xl">
            IV7 Game Login
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Existing users can use the platform&apos;s login option to access
            their account. Always use the official login page or application,
            and avoid entering credentials into websites or forms that you do
            not recognize.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            For better account security, use a strong and unique password and
            keep verification information private. If you forget your password,
            use the official account-recovery procedure provided by the
            platform.
          </p>
        </section>

        {/* H4: Safety Tips Before IV7 Games Download */}
        <section
          aria-labelledby="safety"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="safety"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Safety Tips Before IV7 Games Download
          </h4>
          <div className="mt-4 space-y-3">
            {[
              [
                "Download From a Reliable Source",
                "Avoid websites that provide modified, cracked, or suspicious versions.",
              ],
              [
                "Check App Permissions",
                "Review the permissions requested by the application. If something appears unrelated to the application's purpose, investigate before continuing.",
              ],
              [
                "Keep Your Phone Updated",
                "Install Android security updates and keep your device's built-in security protections enabled.",
              ],
              [
                "Avoid Modified APKs",
                "Modified applications may contain altered code or unwanted software. They can also create account and privacy risks.",
              ],
              [
                "Protect Your Personal Information",
                "Never share passwords, OTPs, banking PINs, or other sensitive information with unknown individuals.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)]/70 bg-[#0d090c] p-4 transition-colors hover:border-[var(--red)]/40 sm:p-5"
              >
                {/* H5 Safety Items */}
                <h5 className="text-sm font-bold text-[var(--gold)] sm:text-lg">
                  {title}
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H4: Responsible Gaming */}
        <section
          aria-labelledby="responsible"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="responsible"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Responsible Gaming
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Some online gaming platforms may offer features involving deposits,
            withdrawals, rewards, or other financial transactions. If such
            features are available through IV7, users should carefully review
            the applicable terms and conditions before using them.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Real-money gaming can involve financial risk. Do not treat gaming as
            a guaranteed way to earn money, and never spend money that you
            cannot afford to lose.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Users should also check the laws and age restrictions applicable in
            their location before using any real-money gaming feature.
          </p>
        </section>

        {/* H3: Frequently Asked Questions */}
        <section
          aria-labelledby="faq"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="faq"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Frequently Asked Questions
          </h3>
          <div className="mt-4 space-y-3">
            {FAQ_DATA.map(({ q: question, a: answer }) => (
              <div
                key={question}
                className="rounded-2xl border border-[var(--border)]/70 bg-gradient-to-b from-[var(--deep)]/50 to-[#0d090b] p-4 transition-all duration-200 hover:border-[var(--border)] sm:p-5"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-[var(--gold)] sm:text-lg">
                  <HelpCircle className="h-4 w-4 shrink-0 text-[var(--gold)]/80" />
                  <span>{question}</span>
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H4: Final Thoughts */}
        <section
          aria-labelledby="final-thoughts"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="final-thoughts"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Final Thoughts
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            IV7 Game provides a mobile-oriented platform for users interested in
            exploring different gaming options through one interface. From IV7
            Games and the IV7 Games Download process to IV7 Game Register, the
            platform is designed to give new and existing users a
            straightforward way to access its available features.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            If you are planning to download IV7, make sure you obtain the
            application from a legitimate source and check the current version
            before installation. Android users should also review security
            settings and application permissions when installing an APK.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            For new users, registration should be completed through the
            platform&apos;s official process, and account credentials should
            always be kept private.
          </p>

          <div className="mt-5 rounded-2xl border border-[var(--red)]/40 bg-gradient-to-r from-[var(--deep)] to-[#0e070c] p-4 sm:p-5">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold)] sm:text-sm">
              <AlertTriangle className="h-3.5 w-3.5 text-[var(--gold)]" />
              <span>Important note</span>
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              Use gaming platforms responsibly. If real-money features are
              available, understand the risks, terms, age requirements, and laws
              applicable to your location before participating.
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            IV7 Game is best presented as a convenient mobile gaming platform,
            not as a guaranteed source of income. By using reliable information,
            protecting your account, and making informed decisions, you can have
            a safer and more transparent experience.
          </p>
        </section>

        {/* Final CTA Section */}
        <section
          className="mt-12 rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--deep)] to-[#0c080a] px-4 py-8 text-center sm:mt-16 sm:px-10 sm:py-14"
          aria-labelledby="final-cta"
        >
          <p
            id="final-cta"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Explore IV7 Game Information
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            Review the current source, verify any APK before installation, and
            follow the platform&apos;s latest instructions for access,
            registration, and login.
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="button w-full justify-center sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Visit the current source
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
