import { cn } from "@/lib/utils";

const Heading: React.FC<React.ComponentProps<"h1">> = ({
  className,
  ...props
}) => (
  <h1
    className={cn("md:text-4xl text-3xl font-semibold text-left", className)}
    {...props}
  >
    {props.children}
  </h1>
);

const Paragraph: React.FC<React.ComponentProps<"p">> = ({
  className,
  ...props
}) => (
  <div
    className={cn("text-black/70 text-left md:text-lg text-base", className)}
    {...props}
  >
    {props.children}
  </div>
);

const SubHeading: React.FC<React.ComponentProps<"h2">> = ({
  className,
  ...props
}) => (
  <h2
    className={cn(
      "md:text-2xl text-xl font-semibold text-left text-black/80",
      className,
    )}
    {...props}
  >
    {props.children}
  </h2>
);

const InnerHeading: React.FC<React.ComponentProps<"span">> = ({
  className,
  ...props
}) => (
  <span
    className={cn("md:text-xl text-lg text-black font-semibold", className)}
    {...props}
  >
    {props.children}
  </span>
);

export default function Page() {
  return (
    <div className="py-20">
      <div className="section space-y-8">
        <Heading className="text-center">
          Please read this Privacy Policy of Hireme Carefully
        </Heading>
        <Paragraph>
          This Privacy Policy describes the practices by the “Hirect”
          application. It explains the storage, disclosure, use, other
          processing of your data (Personal & Non-Personal, and usage and
          sharing of contents). Hence, before start using this application or
          giving information about you, kindly review this Privacy Policy.
        </Paragraph>
        <SubHeading>
          Information we collect through In-App Disclosure (aka Android
          Permission)
        </SubHeading>
        <Paragraph>
          <InnerHeading>A. Storage:</InnerHeading> If allowed, we enable you to
          upload files from your device such as your Resume, Profile Picture,
          any document for verification of your profile, etc.
        </Paragraph>
        <Paragraph>
          <InnerHeading>B. Location:</InnerHeading> If allowed, we help to find
          Jobs/Candidates near your location.
        </Paragraph>
        <Paragraph>
          <InnerHeading>C. Contacts:</InnerHeading> If allowed, we enable you to
          invite your friends through SMS, and WhatsApp.
        </Paragraph>
        <Paragraph>
          <InnerHeading>D. Camera:</InnerHeading> If allowed, we enable you to
          shoot a picture or video.
        </Paragraph>
        <Paragraph>
          <InnerHeading>E. Microphone:</InnerHeading> If allowed, we enable you
          to record an audio.
        </Paragraph>
        <Paragraph>
          <InnerHeading>F. Telephone:</InnerHeading> If allowed, we read the
          Phone Status and identity.
        </Paragraph>
        <SubHeading>
          Other Information we collect during your usage of Hireme App:
        </SubHeading>
        <Paragraph>
          <InnerHeading>A.</InnerHeading> When you connect to our application,
          we take some non-personal data about yourself like the Android model,
          version, browser, resolution of your mobile phone, IMEI, Language,
          network/Wi-Fi connectivity, Mobile carriers to provide you the best
          services.
        </Paragraph>
        <Paragraph>
          <InnerHeading>B.</InnerHeading> When you create your profile, we ask
          your personal data like phone number, email ID, date of birth, etc in
          order to make your profile uniquely identifiable.
        </Paragraph>
        <SubHeading>Third Party Tools, SDKs, Services used</SubHeading>
        <Paragraph>
          <InnerHeading>A. Firebase SDK:</InnerHeading> Help us to develop and
          distribute App. Track Performance and Analytics.
        </Paragraph>
        <Paragraph>
          <InnerHeading>B. Send Bird:</InnerHeading> It helps you to with each
          other efficiently within the App.
        </Paragraph>
        <Paragraph>
          <InnerHeading>C. Agora Video SDK:</InnerHeading> To provide you a
          video interview platform.
        </Paragraph>
        <Paragraph>
          <InnerHeading>D. Payment Gateway:</InnerHeading> It enables you make
          payments through various payment modes like UPI, Credit Card, Debit
          Card, Internet Banking, etc.
        </Paragraph>
        <SubHeading>Policy for DND / NDNC</SubHeading>
        <Paragraph>
          By using the Website and/or registering yourself at Hireme.in you
          authorize us to contact you via E-mail or phone call or SMS and offer
          you our services, imparting product knowledge, offer promotional
          offers running on website & offers offered by the associated third
          parties, for which reasons, personally identifiable information may be
          collected. And irrespective of the fact if also you have registered
          yourself under DND or DNC or NCPR service, you still authorize us to
          give you a call from Hireme for the above mentioned purposes till 365
          days of your registration with us. This Privacy Policy covers
          Hireme&apos;s treatment of personally identifiable information that
          Hireme collects when you are on the Hireme site, and when you use
          Hireme&apos;s services.
        </Paragraph>
        <Paragraph>
          This policy also covers Hireme&apos;s treatment of personally
          identifiable information that Hireme&apos;s business partner shares
          with Hireme. Hireme may also receive personally identifiable
          information from our business partners. When you registered with
          Hireme, we ask for your first name, last name, contact no, email,
          company name & job title. Once you register with Hireme and sign in to
          our services, you are not anonymous to us. Also, during registration,
          you may be requested to register your mobile phone and email id,
          pager, or other device to receive text messages, and other services to
          your wireless device. By registration you authorize us to send
          SMS/E-mail alerts to you for your login details and any other service
          requirements or some advertising messages/emails from us.
        </Paragraph>
        <SubHeading>The Use of the Information Collected</SubHeading>
        <Paragraph>
          <InnerHeading>A.</InnerHeading> To provide the best-personalized
          services to you.
        </Paragraph>
        <Paragraph>
          <InnerHeading>B.</InnerHeading> To facilitate you to provide all the
          information required in the recruitment/job search.
        </Paragraph>
        <Paragraph>
          <InnerHeading>C.</InnerHeading> Helps in research and statistical
          analysis of users to make business decisions.
        </Paragraph>
        <Paragraph>
          <InnerHeading>D.</InnerHeading> To improve and develop our Platform
          and conduct product development.
        </Paragraph>
        <Paragraph>
          <InnerHeading>E.</InnerHeading> To help us detect abuse, fraud, and
          illegal activity on the Platform and communicate to you.
        </Paragraph>
        <SubHeading>How your information may be disclosed</SubHeading>
        <Paragraph>
          <InnerHeading>A.Personal Information:</InnerHeading> In general, we
          use the data internally to serve our Users and enable them to take
          maximum advantage of the Application. We do not disclose your Personal
          Information to any third party.
        </Paragraph>
        <Paragraph>
          <InnerHeading>B.Non-Personal Information:</InnerHeading> We may
          disclose Non-Personal Information to our trusted partners who shall
          comply with this privacy policy and the relevant privacy laws. We do
          not combine Non-Personal Information with Personal Information (such
          as combining your name with your unique User Device number). We
          strictly follow GDPR.
        </Paragraph>
        <SubHeading>International Users:</SubHeading>
        <Paragraph>
          Your personal and non-personal information may be stored and processed
          in any country where we provide our services as described in the
          Privacy Policy. By agreeing to our Privacy Policy and using our
          application you consent to transfer your personal and non-personal
          information to us despite the fact that different countries have
          different data protection rules. If you object to your
          Personal/non-personal Information being processed as described in this
          Policy, please do not use this Application.
        </Paragraph>
        <SubHeading>Notification of Changes:</SubHeading>
        <Paragraph>
          We reserve the right to change, alter this Privacy Policy at any time.
          It is your responsibility to keep checking it and stay updated on a
          regular basis. Your continued use of this application following the
          posting of any changes/modifications to the Privacy Policy constitutes
          your acceptance of the revised Privacy Policy.
        </Paragraph>
        <SubHeading>M. Jurisdiction:</SubHeading>
        <Paragraph>
          If you choose to visit the Apps/Services, your visit and any dispute
          over privacy are subject to this Privacy Policy and the
          Apps/Services&apos; terms of use. Any disputes arising under this
          Privacy Policy shall be strictly governed by the laws of India.
        </Paragraph>
        <SubHeading>Contact Us:</SubHeading>
        <Paragraph>
          If you have any concerns regarding this privacy policy, please email
          us at <span className="text-primary">support@hirect.in</span>
        </Paragraph>
      </div>
    </div>
  );
}
