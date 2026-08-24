import Link from "next/link";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

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
    <article className="min-h-screen bg-[#08090b] text-[#f4f1ea]">
      <header className="border-b border-[#26313b] bg-[radial-gradient(circle_at_top_right,#203743,transparent_45%),linear-gradient(135deg,#0b1117,#08090b)] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#e6b84e]">
            IV7 Games Guide
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            IV7 Game – Explore IV7 Games, Download &amp; Register
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#b8c2c9]">
            Explore IV7 Games, learn about the IV7 Games Download process, and
            find clear information about IV7 Game Register, Android access,
            account security, and responsible gaming.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Image
              src="/iv7.png"
              alt="IV7 Game app graphic"
              width={140}
              height={140}
              priority
              unoptimized
              className="h-36 w-36 object-contain"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#e6b84e] px-5 py-3 font-bold text-[#17130a] transition hover:bg-[#f4cc70]"
            >
              <Download className="h-4 w-4" />
              Official source
            </Link>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-md border border-[#52616c] px-5 py-3 font-bold text-[#f4f1ea] transition hover:border-[#e6b84e]"
            >
              <ExternalLink className="h-4 w-4" />
              Read the download guide
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 lg:px-16">
        <section aria-labelledby="welcome">
          <h2 id="welcome" className="text-3xl font-bold sm:text-4xl">
            Welcome to IV7 Game
          </h2>
          <p className="mt-5">
            Welcome to the IV7 Game platform, a mobile-focused destination where
            users can explore a variety of games through a simple and convenient
            interface. Whether you are looking for information about IV7 Games,
            want to learn about the IV7 Games Download process, or need help
            with IV7 Game Register, this website provides the essential
            information you need to get started.
          </p>
          <p className="mt-4">
            IV7 is designed for users who prefer accessing different gaming
            options from one platform rather than switching between multiple
            applications. Depending on the current version and availability,
            users may find different categories of games, including card games,
            casual games, prediction-style games, and other entertainment
            options.
          </p>
          <p className="mt-4">
            If you are new to IV7, this homepage gives you an overview of the
            platform, its features, download process, registration steps, and
            important information to consider before using the service.
          </p>
        </section>

        <section
          aria-labelledby="what-is-iv7"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="what-is-iv7" className="text-3xl font-bold sm:text-4xl">
            What Is IV7 Game?
          </h2>
          <p className="mt-5">
            IV7 Game is presented as a mobile gaming platform that brings
            different gaming experiences together in one place. The platform is
            primarily focused on convenient smartphone access, making it easy
            for users to browse available games and manage their accounts from a
            mobile device.
          </p>
          <p className="mt-4">
            The exact selection of games and platform features can change as new
            versions are introduced. Users should always check the current
            version and information available through the legitimate IV7
            platform before downloading or registering.
          </p>
          <p className="mt-4">
            One advantage of a multi-game platform is convenience. Instead of
            searching for separate applications for different games, users can
            access multiple options through one interface.
          </p>
          <p className="mt-4">
            For Android users, IV7 may be distributed through an APK
            installation process. Anyone downloading an APK should verify the
            source carefully and avoid modified or suspicious files.
          </p>
        </section>

        <section
          aria-labelledby="games"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="games" className="text-3xl font-bold sm:text-4xl">
            Explore IV7 Games
          </h2>
          <p className="mt-5">
            The IV7 Games section is designed around providing different types
            of gaming experiences through one platform. Depending on the current
            version, users may encounter several categories of games.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {gameCategories.map(([title, text]) => (
              <div key={title} className="border-l-2 border-[#e6b84e] pl-5">
                <h3 className="text-xl font-semibold text-[#f4d27d]">
                  {title}
                </h3>
                <p className="mt-2">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-7">
            The available game library can change, so the current platform
            should always be treated as the most accurate source for available
            games.
          </p>
        </section>

        <section
          id="download"
          aria-labelledby="download-heading"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="download-heading" className="text-3xl font-bold sm:text-4xl">
            IV7 Games Download
          </h2>
          <p className="mt-5">
            Searching for IV7 Games Download usually means you want to access
            the IV7 application on an Android smartphone.
          </p>
          <p className="mt-4">
            Before downloading an APK, always verify that you are using a
            legitimate source. APK files obtained from unknown websites can
            potentially be modified or unsafe.
          </p>
          <p className="mt-5 border-l-2 border-[#e6b84e] bg-[#11181d] p-4 font-semibold text-[#f4d27d]">
            Only download APK files from a legitimate and verified source. Avoid
            modified, cracked, or suspicious APK files.
          </p>
          <h3 className="mt-10 text-2xl font-semibold text-[#f4d27d]">
            General Android Installation Process
          </h3>
          <div className="mt-6 space-y-5">
            {downloadSteps.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-md border border-[#26313b] bg-[#0d1318] p-5"
              >
                <h4 className="text-lg font-bold">
                  <span className="mr-2 text-[#e6b84e]">Step {index + 1}:</span>
                  {title}
                </h4>
                <p className="mt-2">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="register"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="register" className="text-3xl font-bold sm:text-4xl">
            IV7 Game Register
          </h2>
          <p className="mt-5">
            After accessing the platform, new users may need to complete the IV7
            Game Register process before using account-based features.
          </p>
          <p className="mt-4">
            The registration process can vary depending on the current version,
            but it generally involves creating an account with basic information
            and completing any required verification.
          </p>
          <h3 className="mt-10 text-2xl font-semibold text-[#f4d27d]">
            Typical Registration Steps
          </h3>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-[#c3cbd0]">
            {registerSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h5 className="mt-8 text-lg font-bold text-[#f4d27d]">
            Account security reminder
          </h5>
          <p className="mt-2">
            Keep your account information private. Never share your password,
            OTP, PIN, or other security credentials with another person.
          </p>
        </section>

        <section
          aria-labelledby="features"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="features" className="text-3xl font-bold sm:text-4xl">
            Why Choose a Mobile Gaming Platform?
          </h2>
          <p className="mt-5">
            Mobile gaming has become increasingly convenient because users can
            access entertainment directly from their smartphones.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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
                className="border border-[#26313b] bg-[#0d1318] p-4 text-[#c3cbd0]"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            The actual features available can depend on the current version,
            device, region, and platform policies.
          </p>
          <h3 className="mt-12 text-2xl font-semibold text-[#f4d27d]">
            IV7 Game Features
          </h3>
          <p className="mt-4">
            The IV7 platform focuses on providing a straightforward experience
            for mobile users. Features can change over time, but users may find
            several useful functions.
          </p>
          <div className="mt-6 space-y-5">
            {featureDetails.map(([title, text]) => (
              <div key={title}>
                <h4 className="text-lg font-bold text-[#f4d27d]">{title}</h4>
                <p className="mt-1">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="android"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="android" className="text-3xl font-bold sm:text-4xl">
            IV7 on Android
          </h2>
          <p className="mt-5">
            Android users are often interested in IV7 Games Download because APK
            installation provides another way to access an application outside a
            conventional app-store listing.
          </p>
          <p className="mt-4">
            Before installing an APK, check the Android requirements listed with
            the current version. Compatibility can depend on your
            operating-system version, device hardware, available storage, and
            the APK release.
          </p>
          <p className="mt-4">
            If installation fails, do not repeatedly download files from random
            websites. First verify the source, file integrity, storage space,
            and Android compatibility.
          </p>
          <h3 className="mt-10 text-2xl font-semibold text-[#f4d27d]">
            IV7 Game Login
          </h3>
          <p className="mt-4">
            Existing users can use the platform&apos;s login option to access
            their account. Always use the official login page or application,
            and avoid entering credentials into websites or forms that you do
            not recognize.
          </p>
          <p className="mt-4">
            For better account security, use a strong and unique password and
            keep verification information private. If you forget your password,
            use the official account-recovery procedure provided by the
            platform.
          </p>
        </section>

        <section
          aria-labelledby="safety"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="safety" className="text-3xl font-bold sm:text-4xl">
            Safety Tips Before IV7 Games Download
          </h2>
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
            <div key={title}>
              <h3 className="mt-8 text-xl font-semibold text-[#f4d27d]">
                {title}
              </h3>
              <p className="mt-2">{text}</p>
            </div>
          ))}
        </section>

        <section
          aria-labelledby="responsible"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="responsible" className="text-3xl font-bold sm:text-4xl">
            Responsible Gaming
          </h2>
          <p className="mt-5">
            Some online gaming platforms may offer features involving deposits,
            withdrawals, rewards, or other financial transactions. If such
            features are available through IV7, users should carefully review
            the applicable terms and conditions before using them.
          </p>
          <p className="mt-4">
            Real-money gaming can involve financial risk. Do not treat gaming as
            a guaranteed way to earn money, and never spend money that you
            cannot afford to lose.
          </p>
          <p className="mt-4">
            Users should also check the laws and age restrictions applicable in
            their location before using any real-money gaming feature.
          </p>
        </section>

        <section
          aria-labelledby="faq"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="faq" className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-7 space-y-7">
            {FAQ_DATA.map(({ q: question, a: answer }) => (
              <div key={question}>
                <h3 className="text-xl font-semibold text-[#f4d27d]">
                  {question}
                </h3>
                <p className="mt-2">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="final-thoughts"
          className="mt-16 border-t border-[#26313b] pt-12"
        >
          <h2 id="final-thoughts" className="text-3xl font-bold sm:text-4xl">
            Final Thoughts
          </h2>
          <p className="mt-5">
            IV7 Game provides a mobile-oriented platform for users interested in
            exploring different gaming options through one interface. From IV7
            Games and the IV7 Games Download process to IV7 Game Register, the
            platform is designed to give new and existing users a
            straightforward way to access its available features.
          </p>
          <p className="mt-4">
            If you are planning to download IV7, make sure you obtain the
            application from a legitimate source and check the current version
            before installation. Android users should also review security
            settings and application permissions when installing an APK.
          </p>
          <p className="mt-4">
            For new users, registration should be completed through the
            platform&apos;s official process, and account credentials should
            always be kept private.
          </p>
          <h6 className="mt-8 text-sm font-bold uppercase tracking-wider text-[#e6b84e]">
            Important note
          </h6>
          <p className="mt-2">
            Use gaming platforms responsibly. If real-money features are
            available, understand the risks, terms, age requirements, and laws
            applicable to your location before participating.
          </p>
          <p className="mt-4">
            IV7 Game is best presented as a convenient mobile gaming platform,
            not as a guaranteed source of income. By using reliable information,
            protecting your account, and making informed decisions, you can have
            a safer and more transparent experience.
          </p>
        </section>

        <section
          className="mt-16 border-t border-[#26313b] pt-12 text-center"
          aria-labelledby="final-cta"
        >
          <h2 id="final-cta" className="text-3xl font-bold sm:text-4xl">
            Explore IV7 Game Information
          </h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Review the current source, verify any APK before installation, and
            follow the platform&apos;s latest instructions for access,
            registration, and login.
          </p>
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#e6b84e] px-5 py-3 font-bold text-[#17130a] transition hover:bg-[#f4cc70]"
          >
            <Download className="h-4 w-4" />
            Visit the current source
          </Link>
        </section>
      </div>
    </article>
  );
}
