import {
  AlertTriangle,
  ChevronRight,
  Download,
  ExternalLink,
  HelpCircle,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import inviteFriendsEarn from "../public/screenshots/iv7_invite_friends_earn_100_rebate.jpeg";
import paytmQrBonus from "../public/screenshots/iv7_paytm_qr_7_percent_bonus_offer.jpeg";
import spinWheelRewards from "../public/screenshots/iv7_spin_wheel_topup_rewards_100k.jpeg";
import vipFreeSpin from "../public/screenshots/iv7_vip_free_spin_200_500_reward.jpeg";
import welcomeBackBonus from "../public/screenshots/iv7_welcome_back_bonus_610_reward.jpeg";

import { CONCLUSION_DATA, DOWNLOAD_LINKS, FAQ_DATA } from "@/config/constants";
import HomeSlider from "./view/home.slider";

const SLIDER_IMAGES = [
  welcomeBackBonus,
  vipFreeSpin,
  spinWheelRewards,
  paytmQrBonus,
  inviteFriendsEarn,
];

const apkChecklist = [
  "Application name and build version",
  "Trusted and official download source",
  "Available device internal storage",
  "Permissions requested by the app",
  "Original file integrity (unmodified package)",
  "Compatible Android OS version",
  "Antivirus or file scan verification",
];

const installSteps = [
  [
    "Download the APK",
    "Visit the appropriate trusted source and download the available IV7 APK file to your Android device.",
  ],
  [
    "Locate the File",
    "After the download is complete, open your phone's Downloads folder and locate the APK file.",
  ],
  [
    "Check Installation Permissions",
    "Android may display a security notification if the application is being installed from outside the device's usual app marketplace. Review the source carefully before allowing installation.",
  ],
  [
    "Install the Application",
    "Open the APK file and select the installation option. Wait for Android to complete the installation.",
  ],
  [
    "Open IV7",
    "Once installation has finished, launch the application and follow the instructions displayed on the screen.",
  ],
];

const loginIssues = [
  "Incorrect login details",
  "Internet connectivity problems",
  "An outdated application",
  "Temporary service issues",
  "Account verification requirements",
];

const verificationChecks = [
  [
    "1. Source",
    "Make sure you know where the APK came from and whether the source is legitimate.",
  ],
  [
    "2. Application Details",
    "Check the publisher, version, update information, and compatibility details.",
  ],
  [
    "3. Permissions",
    "Review the permissions requested by the application. Be cautious if an application requests access that does not appear relevant to its functionality.",
  ],
  [
    "4. Privacy Information",
    "Read the available privacy policy and terms so you understand how your information may be handled.",
  ],
  [
    "5. Device Security",
    "Don't disable important security features simply to install an application from an unknown source.",
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
              Complete Guide
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="!my-2 max-w-4xl !text-2xl font-black !leading-[1.2] tracking-tight text-[var(--foreground)] xs:!text-3xl sm:!text-5xl lg:!text-6xl">
            What Is IV7 Game?
          </h1>

          {/* App Logo */}
          <div className="my-5 flex justify-start">
            <div className="relative rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[var(--deep)] to-[#0a0709] p-2.5 shadow-xl shadow-black/60 transition-transform duration-300 hover:scale-105">
              <Image
                src="/iv7.jpeg"
                alt="IV7 Game graphic"
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
              Download APK
            </Link>

            <a
              href="#installation"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[40px] border border-[var(--red)] bg-transparent px-6 py-3.5 text-sm font-extrabold text-[#ff3b68] transition-all duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
            >
              <ExternalLink className="h-4 w-4 shrink-0" />
              <span>Installation Steps</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-10 lg:px-16">
        {/* Intro Overview */}
        <section aria-labelledby="overview">
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            IV7 Game is a mobile gaming platform that may provide access to
            different types of games through a single application or online
            interface. Depending on the current version and regional
            availability, the platform may offer various gaming categories and
            account-related features.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            The available games and functions can change as the platform
            receives updates. For this reason, users should always check the
            latest information before downloading an application or creating an
            account.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            A simple interface and mobile accessibility can make it easier for
            users to explore available games from compatible smartphones.
            However, users should understand the platform&apos;s terms,
            requirements, and applicable rules before using any gaming service.
          </p>
        </section>

        {/* H2: IV7 Game – Games, APK Download, Registration & Guide
         */}
        <section
          aria-labelledby="apk-download"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h2
            id="apk-download"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-3xl lg:!text-4xl"
          >
            IV7 Game – Games, APK Download, Registration & Guide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Welcome to our complete IV7 Game guide. This website provides useful
            and easy-tounderstand information for people who want to learn more
            about IV7 Games, the Android application, registration, login,
            installation, features, and general usage. Our goal is to organize
            important information in one place so that visitors can better
            understand the platform before deciding whether to use it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            As mobile gaming continues to grow, users increasingly look for
            platforms that offer convenient access to different games from their
            smartphones. IV7 Game is designed around a mobile-focused
            experience, making it important for users to understand the
            available application, device compatibility, account process, and
            other requirements before getting started.
          </p>

          {/* Checklist Box */}
          <div className="mt-6 rounded-2xl border border-[var(--border)]/80 bg-gradient-to-b from-[var(--deep)]/70 to-[#0c080b] p-5 sm:p-6">
            <h3 className="text-base font-bold text-[var(--gold)] sm:text-lg">
              Before opening an APK file, consider checking:
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {apkChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#0d090b] p-3 text-xs text-[var(--foreground)]/90 transition-colors hover:border-[var(--gold)]/40 sm:text-sm"
                >
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border-l-4 border-[var(--red)] bg-gradient-to-r from-[var(--deep)] to-[#0c080b] p-4 shadow-sm sm:p-5">
            <p className="flex items-start gap-2.5 text-xs font-semibold leading-relaxed text-[#ff3b68] sm:text-sm">
              <ShieldAlert className="h-4 w-4 shrink-0 text-[var(--red)] mt-0.5" />
              <span>
                Avoid downloading modified, cracked, or unofficial APK files
                simply because they promise additional features or faster
                access.
              </span>
            </p>
          </div>
        </section>

        <section className="py-4">
          <h2 className="text-center text-xl font-bold mb-8 uppercase tracking-widest text-accent">
            App Screenshots
          </h2>
          <HomeSlider images={SLIDER_IMAGES} />
        </section>

        {/* H2: IV7 Games */}
        <section
          id="installation"
          aria-labelledby="how-to-install"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h2
            id="how-to-install"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-3xl lg:!text-4xl"
          >
            IV7 Games
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            IV7 Games may include different categories designed for mobile
            users. The exact selection can vary depending on the current version
            of the platform. Some users may be interested in card-style games,
            casual entertainment, or other available gaming options.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            One advantage of having multiple games within a single platform is
            convenience. Instead of installing several unrelated applications,
            users may be able to explore different options from one interface.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            However, game availability should not be assumed to remain the same
            permanently. Developers can add, remove, or modify games and
            features through future updates. Checking the current version and
            available information is therefore recommended.
          </p>

          <div className="mt-6 space-y-3">
            {installSteps.map(([title, text], index) => (
              <div
                key={title}
                className="group rounded-2xl border border-[var(--border)]/70 bg-[#0d090c] p-4 transition-all duration-200 hover:border-[var(--red)]/40 hover:bg-[var(--deep)]/30 sm:p-5"
              >
                <h3 className="flex items-center gap-2 text-sm font-bold text-[var(--foreground)] sm:text-lg">
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-[var(--gold)]/10 px-1.5 text-xs font-black text-[var(--gold)]">
                    Step {index + 1}
                  </span>
                  <span>{title}</span>
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            If the APK does not install, don&apos;t immediately download another
            file from an unknown website. First check your Android version,
            available storage, file integrity, and whether the APK is compatible
            with your device.
          </p>
        </section>

        {/* H2: How to download IV7 APK Download? */}
        <section
          aria-labelledby="apk-download"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h2
            id="apk-download"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-3xl lg:!text-4xl"
          >
            How to download IV7 APK Download?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Android users searching for IV7 APK should pay close attention to
            the source of the file. APK files allow Android applications to be
            installed manually, but downloading an application from an unknown
            website can create security risks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Before starting an IV7 Game Download, users should verify that the
            file is authentic and compatible with their device. It is also
            important to avoid modified, cracked, or unofficial versions that
            may contain unwanted software or request unnecessary permissions.
          </p>

          {/* Checklist Box */}
          <div className="mt-6 rounded-2xl border border-[var(--border)]/80 bg-gradient-to-b from-[var(--deep)]/70 to-[#0c080b] p-5 sm:p-6">
            <h3 className="text-base font-bold text-[var(--gold)] sm:text-lg">
              Before installing an APK, consider the following:
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {apkChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[#0d090b] p-3 text-xs text-[var(--foreground)]/90 transition-colors hover:border-[var(--gold)]/40 sm:text-sm"
                >
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border-l-4 border-[var(--red)] bg-gradient-to-r from-[var(--deep)] to-[#0c080b] p-4 shadow-sm sm:p-5">
            <p className="flex items-start gap-2.5 text-xs font-semibold leading-relaxed text-[#ff3b68] sm:text-sm">
              <ShieldAlert className="h-4 w-4 shrink-0 text-[var(--red)] mt-0.5" />
              <span>
                Avoid downloading modified, cracked, or unofficial APK files
                simply because they promise additional features or faster
                access.
              </span>
            </p>
          </div>
        </section>

        {/* H3:  How to Register IV7 Game? */}
        <section
          aria-labelledby="registration"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="registration"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            How to Register IV7 Game?
          </h3>

          <ul className="mt-4 list-disc list-inside space-y-3 marker:text-white text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            <li>
              Users who want to access account-based features may need to
              complete an IV7 Game Register process. Registration requirements
              can vary depending on the current version and region.
            </li>
            <li>
              Typically, a registration process may require users to enter basic
              information, create login credentials, and complete any
              verification requested by the platform.
            </li>
            <li>
              When creating an account, always use secure credentials and avoid
              sharing your password, OTP, PIN, or other confidential information
              with another person. If a website or individual requests sensitive
              information unnecessarily, users should exercise caution.
            </li>
            <li>
              After completing registration, users can normally use the login
              option to access their account, subject to the platform&apos;s
              current requirements.
            </li>
          </ul>
        </section>

        {/* H3: How to Logion IV7 Games? */}
        <section
          aria-labelledby="login-guide"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="login-guide"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            How to Logion IV7 Games?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            After registration, returning users may be able to access their
            accounts through an IV7 Game Login option. Users should enter their
            credentials carefully and make sure they are using the correct
            website or application.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            If you forget your password, use the platform&lsquo;s legitimate
            account-recovery process rather than relying on third-party
            services. Never provide account credentials to people who claim they
            can recover or unlock an account for you.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            For better account security, choose a strong and unique password and
            keep your login details private.
          </p>

          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[#0d090c] p-5">
            <h4 className="text-sm font-bold text-[var(--gold)] sm:text-base">
              If you cannot log in, check for common issues such as:
            </h4>
            <ul className="mt-3 space-y-2">
              {loginIssues.map((issue) => (
                <li
                  key={issue}
                  className="flex items-center gap-2 text-xs text-[var(--muted)] sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--red)] shrink-0"></span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-xs font-semibold text-[#ff3b68] sm:text-sm">
            Never enter your login information into a suspicious website just
            because it uses the IV7 name or branding.
          </p>
        </section>

        {/* H3: IV7 Games and Categories */}
        <section
          aria-labelledby="categories"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="categories"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            IV7 Games and Categories
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            The types of games available through IV7 can change over time.
            Depending on the current version and availability in your location,
            users may encounter different categories of digital games.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            These can include card-based and other entertainment-oriented
            formats.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Rather than relying on an old article or screenshot, check the
            current application or legitimate information source for the latest
            available categories.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            This is particularly useful when searching for IV7 Games, because
            game availability and features may change with application updates.
          </p>
        </section>

        {/* H3: What Should You Check Before Installing IV7 APK? */}
        <section
          aria-labelledby="before-install"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="before-install"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            What Should You Check Before Installing IV7 APK?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Downloading an application should not be based only on finding the
            first available download button. Take a few minutes to verify the
            following:
          </p>

          <div className="mt-6 space-y-3">
            {verificationChecks.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)]/70 bg-[#0d090c] p-4 sm:p-5"
              >
                <h4 className="text-sm font-bold text-[var(--gold)] sm:text-base">
                  {title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H3: How to Install IV7 APK Game?
         */}
        <section
          aria-labelledby="troubleshooting"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="troubleshooting"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            How to Install IV7 APK Game?
          </h3>

          <ul className="mt-4 list-disc list-inside space-y-3 marker:text-white text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            <li>
              If a legitimate Android version is available, installing an APK
              generally involves a few simple steps. First, download the
              appropriate application file from a trusted source. After the
              download is complete, locate the file in your device&apos;s
              Downloads or Files folder.
            </li>
            <li>
              Open the APK and follow the installation instructions displayed by
              Android. Depending on your device and Android version, you may
              need to review security settings before installing an application
              obtained outside the Google Play Store.
            </li>
            <li>
              After installation, open the application and check whether it
              works correctly on your device. If you experience problems,
              confirm that the APK is compatible with your Android version and
              that sufficient storage is available.
            </li>
            <li>
              Do not install files simply because they claim to be newer or
              offer additional features. Unofficial modified versions can
              present additional security concerns.
            </li>
          </ul>
        </section>

        {/* H3: IV7 Game on Android */}
        <section
          aria-labelledby="latest-version"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="latest-version"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            IV7 Game on Android
          </h3>

          <ul className="mt-4 list-disc list-inside space-y-3 marker:text-white text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            <li>
              Mobile compatibility is an important consideration for anyone
              interested in IV7 Game. Before installing the application, users
              should check whether their smartphone meets the required Android
              version and storage requirements.
            </li>
            <li>
              Keeping your device updated can also improve security and
              compatibility. If the application does not install or operate
              properly, check the application&apos;s requirements and download
              source before attempting to install another version.
            </li>
            <li>
              Avoid downloading multiple APK files from random websites simply
              because the first installation did not work. This can increase the
              risk of installing an unsafe or altered application.
            </li>
          </ul>
        </section>

        {/* H4:  Features of IV7 Game
         */}
        <section
          aria-labelledby="safety-responsible"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="safety-responsible"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Features of IV7 Game
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            The exact features of IV7 can change over time. Depending on the
            current application version, users may find features such as:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-3 marker:text-white text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            <li>Mobile-friendly gaming access</li>
            <li>Multiple gaming options</li>
            <li>User registration and login</li>
            <li>Simple navigation</li>
            <li>Account management</li>
            <li>Application updates</li>
            <li>Compatibility with supported Android devices</li>
          </ul>
        </section>
        {/* H4: Responsible Gaming and Safety*/}
        <section
          aria-labelledby="safety-responsible"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h4
            id="safety-responsible"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Responsible Gaming and Safety
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Safety should always be a priority when using any online gaming
            platform. Users should download applications only from reliable
            sources and carefully review the permissions requested during
            installation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            If a platform offers games involving money or financial
            transactions, users should understand the associated risks before
            participating. Availability and legality can differ depending on the
            user&apos;s location, so users are responsible for checking the laws
            and regulations applicable to them.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Gaming should be treated as entertainment rather than a guaranteed
            method of earning money. Never spend more than you can afford to
            lose, and avoid chasing losses.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Users should also follow applicable age requirements and platform
            rules.
          </p>
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
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Searching for IV7 Game, IV7 APK, registration, or login information
            can produce many different websites and download pages. The most
            important thing is to distinguish useful information from
            unsupported claims and potentially unsafe download sources.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            Before installing an APK, verify its source, check the application
            details, review permissions, and make sure the version is compatible
            with your Android device.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            For account-related issues, use the appropriate legitimate support
            channel. And where gaming involves money, always check the current
            rules and risks applicable to your location before participating.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-loose">
            This approach can help you make a more informed decision while
            keeping your device and account information better protected.
          </p>
        </section>

        {/* H3:  Conclusion */}
        <section
          aria-labelledby="faq"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-16 sm:pt-12"
        >
          <h3
            id="faq"
            className="!text-xl font-bold text-[var(--foreground)] sm:!text-2xl lg:!text-3xl"
          >
            Conclusion
          </h3>
          <div className="mt-6 space-y-3">
            {CONCLUSION_DATA.paragraphs.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)]/70 bg-gradient-to-b from-[var(--deep)]/50 to-[#0d090b] p-4 transition-all duration-200 hover:border-[var(--border)] sm:p-5"
              >
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* H3:  Frequently Asked Questions */}
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
          <div className="mt-6 space-y-3">
            {FAQ_DATA.map(({ q: question, a: answer }) => (
              <div
                key={question}
                className="rounded-2xl border border-[var(--border)]/70 bg-gradient-to-b from-[var(--deep)]/50 to-[#0d090b] p-4 transition-all duration-200 hover:border-[var(--border)] sm:p-5"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-[var(--gold)] sm:text-base">
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
