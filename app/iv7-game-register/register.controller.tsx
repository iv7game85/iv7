import React from "react";

const RegisterController = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 leading-relaxed text-[#f6f1e9]">
      {/* Header */}
      <header className="mb-12 border-b border-[#3d1624] pb-8">
        <span className="inline-block text-xs uppercase tracking-widest text-[#ffc629] font-bold mb-3 bg-[#19040c] px-3 py-1 rounded-full border border-[#3d1624]">
          Official Guide
        </span>
        <h1 className="text-white uppercase tracking-normal">
          IV7 Game Register - Complete Registration Guide
        </h1>
        <p className="lead">
          Creating an account is usually the first step when you want to access
          an online gaming application. If you&apos;re looking for information
          about IV7 Game registration, the process is generally straightforward,
          but there are a few details you should check before creating an
          account.
        </p>
        <p className="mb-4 text-[#a59ca0]">
          Your registration information needs to be accurate, especially when an
          application uses your phone number or other account details for
          verification and login. Using incorrect information can make it
          difficult to access the account later.
        </p>
        <p className="text-[#a59ca0]">
          This guide explains the IV7 registration process, what information you
          may need, common problems users can face, and some basic
          account-safety practices to keep in mind.
        </p>
      </header>

      {/* Section: What Is IV7 Game Registration? */}
      <section className="mb-14">
        <h2 className="text-[#f6f1e9] uppercase tracking-wide border-l-4 border-[#f20d4d] pl-4 mb-5">
          What Is IV7 Game Registration?
        </h2>
        <p className="mb-4 text-[#a59ca0]">
          IV7 Game registration is the process of creating a new user account
          for the IV7 application or service.
        </p>
        <p className="mb-4 text-[#a59ca0]">
          During registration, you may be asked to provide basic account
          information such as a mobile number, username, or password. The exact
          fields can vary depending on the current version of the application
          and how the registration system is configured.
        </p>
        <p className="text-[#a59ca0]">
          Before submitting your information, check each field carefully. A
          small mistake in a phone number or password can cause problems when
          you later try to log in.
        </p>
      </section>

      {/* Section: How to Register on IV7 Game? */}
      <section className="mb-14">
        <h2 className="text-[#f6f1e9] uppercase tracking-wide border-l-4 border-[#f20d4d] pl-4 mb-5">
          How to Register on IV7 Game?
        </h2>
        <p className="mb-8 text-[#a59ca0]">
          If you&apos;re creating an account for the first time, follow the
          registration instructions shown by the current IV7 application or
          legitimate service source.
        </p>

        {/* Step Cards */}
        <div className="space-y-4">
          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl transition hover:border-[#f20d4d]">
            <h3 className="font-bold text-[#ffc629] mb-2 uppercase tracking-wide text-sm">
              Step 1: Open the Registration Page
            </h3>
            <p className="text-[#a59ca0] text-sm leading-relaxed">
              Launch the IV7 application or visit the relevant registration
              page. Look for an option such as Register, Sign Up, or Create
              Account. The wording may be slightly different depending on the
              version you&apos;re using.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl transition hover:border-[#f20d4d]">
            <h3 className="font-bold text-[#ffc629] mb-2 uppercase tracking-wide text-sm">
              Step 2: Enter Your Mobile Number
            </h3>
            <p className="text-[#a59ca0] text-sm leading-relaxed">
              If registration requires a mobile number, enter a number that you
              can access. Double-check the digits before continuing. If
              verification is required, you may receive a code on the number
              provided during registration. Never share a verification code with
              another person.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl transition hover:border-[#f20d4d]">
            <h3 className="font-bold text-[#ffc629] mb-2 uppercase tracking-wide text-sm">
              Step 3: Create Your Login Details
            </h3>
            <p className="text-[#a59ca0] text-sm leading-relaxed">
              Choose the username and password requested by the registration
              form. Use a password that is difficult for other people to guess.
              Avoid using obvious combinations such as your name, date of birth,
              or a simple sequence of numbers. If the service has specific
              password requirements, follow the instructions displayed on the
              registration screen.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl transition hover:border-[#f20d4d]">
            <h3 className="font-bold text-[#ffc629] mb-2 uppercase tracking-wide text-sm">
              Step 4: Complete Verification
            </h3>
            <p className="text-[#a59ca0] text-sm leading-relaxed">
              Some registration systems require additional verification before
              an account can be created. If a verification code is sent to your
              phone, enter the correct code in the designated field. If you
              don&apos;t receive the code, wait a little before requesting
              another one. Repeatedly requesting codes can sometimes cause
              temporary restrictions.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl transition hover:border-[#f20d4d]">
            <h3 className="font-bold text-[#ffc629] mb-2 uppercase tracking-wide text-sm">
              Step 5: Review Your Information
            </h3>
            <p className="text-[#a59ca0] text-sm leading-relaxed">
              Before submitting the registration form, check the information
              you&apos;ve entered. Make sure your phone number and other
              required details are correct. Once everything looks right, submit
              the form and wait for the registration process to complete.
            </p>
          </div>
        </div>

        {/* Required Info Box */}
        <div className="mt-8 bg-[#0e0307] p-6 rounded-2xl border border-[#3d1624]">
          <h3 className="text-[#f6f1e9] font-bold text-lg mb-3">
            What Information May Be Required for IV7 Registration?
          </h3>
          <p className="text-[#a59ca0] mb-4">
            The information requested during registration can change, so
            don&apos;t assume that every version of the application uses the
            same form.
          </p>
          <ul className="space-y-2 text-[#a59ca0] mb-4 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d4d]"></span>
              Mobile number
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d4d]"></span>
              Username
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d4d]"></span>
              Password
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d4d]"></span>
              Verification code
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d4d]"></span>
              Other basic account information
            </li>
          </ul>
          <p className="text-[#a59ca0] text-sm">
            Only provide information that is genuinely required by the service.
            If a registration page suddenly asks for sensitive information that
            seems unrelated to account creation, stop and verify that
            you&apos;re using the correct website or application.
          </p>
        </div>

        {/* Password Tips */}
        <div className="mt-6 border-l-2 border-[#3d1624] pl-4">
          <h4 className="text-[#f6f1e9] font-bold text-base mb-2">
            Choosing a Strong Password
          </h4>
          <p className="text-[#a59ca0] mb-2 text-sm">
            Your password is one of the simplest ways to protect your account.
            Don&apos;t reuse the same password across multiple services to
            prevent credential compromise.
          </p>
          <p className="text-[#a59ca0] text-sm">
            A good password should be difficult to guess, avoid obvious personal
            details, and ideally be stored in a password manager.
          </p>
        </div>
      </section>

      {/* Section: IV7 Registration Not Working? */}
      <section className="mb-14">
        <h2 className="text-[#f6f1e9] uppercase tracking-wide border-l-4 border-[#f20d4d] pl-4 mb-5">
          IV7 Registration Not Working?
        </h2>
        <p className="text-[#a59ca0] mb-6">
          Sometimes the registration process doesn&apos;t go through even when
          you&apos;ve entered everything correctly. Check these troubleshooting
          steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl">
            <h4 className="font-bold text-[#f6f1e9] mb-1 text-sm">
              Check Your Internet Connection
            </h4>
            <p className="text-[#a59ca0] text-xs">
              A weak connection can interrupt verification requests. Confirm
              your network is stable and retry.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl">
            <h4 className="font-bold text-[#f6f1e9] mb-1 text-sm">
              Check Your Phone Number
            </h4>
            <p className="text-[#a59ca0] text-xs">
              Verify the number format and confirm it is active to receive SMS
              verification codes.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl">
            <h4 className="font-bold text-[#f6f1e9] mb-1 text-sm">
              Check the Verification Code
            </h4>
            <p className="text-[#a59ca0] text-xs">
              Codes expire quickly. Wait for the countdown and request the
              latest code instead of multiple requests.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl">
            <h4 className="font-bold text-[#f6f1e9] mb-1 text-sm">
              Check for Existing Accounts
            </h4>
            <p className="text-[#a59ca0] text-xs">
              If already registered, use the account-recovery or login flow
              instead of registering again.
            </p>
          </div>

          <div className="bg-[#19040c] border border-[#3d1624] p-5 rounded-xl md:col-span-2">
            <h4 className="font-bold text-[#f6f1e9] mb-1 text-sm">
              Update the Application
            </h4>
            <p className="text-[#a59ca0] text-xs">
              Older builds may encounter server-side compatibility errors.
              Ensure you are running the newest package from an authorized
              channel.
            </p>
          </div>
        </div>
      </section>

      {/* Account Safety & Android Details */}
      <section className="mb-14 space-y-6">
        <div className="border border-[#3d1624] p-6 rounded-2xl bg-[#090507]">
          <h3 className="text-[#ffc629] font-bold text-lg mb-2">
            What If I Forgot My IV7 Registration Details?
          </h3>
          <p className="text-[#a59ca0] text-sm mb-3">
            Use the official password-reset or recovery method provided by the
            service. Avoid third-party individuals offering account recovery.
          </p>

          <h4 className="text-[#f6f1e9] font-semibold text-sm mt-4 mb-1">
            Registration vs. Login
          </h4>
          <p className="text-[#a59ca0] text-sm">
            Registration is only done once when creating a profile. Once
            registered, use the login option with your verified credentials.
          </p>

          <h4 className="text-[#f6f1e9] font-semibold text-sm mt-4 mb-1">
            Account Safety After Registration
          </h4>
          <p className="text-[#a59ca0] text-sm">
            Never disclose your OTP, password, or login credentials to support
            representatives or unofficial social media accounts. Watch out for
            phishing mirrors.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#19040c] border border-[#3d1624]">
          <h3 className="text-[#f6f1e9] font-bold text-lg mb-2">
            Important Information Before Creating an Account
          </h3>
          <p className="text-[#a59ca0] text-sm mb-3">
            If the service involves online real-money gaming, deposit options,
            or withdrawals, understand legal regulations and age eligibility
            criteria in your jurisdiction before participating.
          </p>
          <a
            href="https://www.iv7-apps.in/iv7-apk-download"
            className="outline-button mt-2"
          >
            Read APK Download Guide
          </a>
        </div>
      </section>

      {/* Section: Frequently Asked Questions */}
      <section className="mb-14">
        <h2 className="text-[#f6f1e9] uppercase tracking-wide border-l-4 border-[#f20d4d] pl-4 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              How do I complete IV7 Game registration?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              Open the registration page, provide the necessary credentials,
              complete verification, and confirm submission.
            </p>
          </div>

          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              Do I need a mobile number for IV7 registration?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              Yes, if required by the current build, use an active number able
              to receive one-time SMS passwords.
            </p>
          </div>

          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              Why am I not receiving the registration OTP?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              Check network signal and accuracy of the mobile number. If the OTP
              expired, re-request after the countdown completes.
            </p>
          </div>

          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              Can I register again if I already have an account?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              No need to register again. Use the account recovery/login screen
              to regain access.
            </p>
          </div>

          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              What should I do if I forget my password?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              Use the built-in password reset tool with your registered number
              or recovery contact.
            </p>
          </div>

          <div className="bg-[#19040c] p-5 rounded-xl border border-[#3d1624]">
            <h4 className="font-bold text-[#f6f1e9] text-sm mb-2">
              Is IV7 registration available on Android?
            </h4>
            <p className="text-[#a59ca0] text-sm">
              Yes, download the official Android APK and complete registration
              directly through the app.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Summary */}
      <footer className="border-t border-[#3d1624] pt-8 text-center">
        <h4 className="text-xl font-bold text-[#f6f1e9] mb-3">
          Final Thoughts
        </h4>
        <p className="max-w-2xl mx-auto text-sm text-[#a59ca0] mb-6">
          The IV7 Game register process is simple, but ensuring accurate data,
          protecting your login credentials, and downloading only verified
          packages ensures your account stays secure.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.iv7-apps.in/iv7-game-register"
            className="button"
          >
            Register Now
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RegisterController;
