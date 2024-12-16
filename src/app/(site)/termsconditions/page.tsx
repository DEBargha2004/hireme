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
          Hireme User Terms & Conditions
        </Heading>
        <Paragraph>
          The following constitutes the Terms of User Agreement and is legally
          binding and applies to your use of Hireme Application. This agreement
          was written in English (India), and if any translated version of this
          agreement conflicts with the English version, the English version
          overrules the others.
        </Paragraph>
        <Paragraph>
          <InnerHeading>1. Acceptance:</InnerHeading> By accessing and/or using
          any of the Services, you agree to be bound by this Agreement, whether
          you are a &quot;Visitor&quot; (which implies that you essentially
          peruse the Services, including, without impediment, through a
          different remote device, or generally utilise the Services without
          being registered) or you are a &quot;Member&quot; (which implies that
          you have registered with Hireme). The term &quot;User&quot; refers to
          a Visitor or a Member. Your download or use of the Services,
          regardless of whether your access or use is intended, amounts to
          acceptance of these terms, and you agree to abide by all applicable
          laws, rules, and regulations and the terms of this Agreement. In
          addition, in consideration for becoming a member and/or using the
          Services, you must indicate your acceptance of this Agreement during
          the registration process. After that, you may create your account, if
          required, per the terms herein. In our sole discretion, we may modify
          or revise these Terms and policies at any time, and you agree to be
          bound by such modifications or revisions. It is, therefore, crucial
          that you review this Agreement regularly. If you disagree to be bound
          by this Agreement and abide by all Applicable Law (defined below), you
          are not authorised to use the applicable Services. You should delete
          the software that enables access to the Services and discontinue their
          use.
        </Paragraph>
        <Paragraph>
          <InnerHeading>2. Third-Party Sites:</InnerHeading> These Terms apply
          to all users of the Services. The Service may contain links to
          third-party websites not owned or controlled by us. For example,
          companies&apos; websites, Social Media Accounts /Pages of Recruiters
          and Job-Seekers, etc. We have no control over and assume no
          responsibility for any third-party websites&apos; content, privacy
          policies, or practices. In addition, we will not and cannot censor or
          edit the content of any third-party site. By using the Service, you
          expressly relieve us from any liability arising from your use of any
          third-party website. Accordingly, we encourage you to be aware when
          you leave the service and read the terms and conditions and privacy
          policy of each other website you visit.
        </Paragraph>
        <Paragraph>
          <InnerHeading>3. Your Hireme Account:</InnerHeading> To use all the
          features of the App, you may be directed to create an Account. When
          creating your account, you must provide accurate and complete
          information. You are solely responsible for the activity on your
          account, and you must keep your account credentials secured. You must
          notify us immediately of any security breach or unauthorised use of
          your account. Although we will not be liable for your losses caused by
          any unauthorised use of your account, you may be responsible for our
          losses or the losses of others due to such unauthorised use. All
          information collected through Accounts or otherwise through the
          Services are collected and used in accordance with the Privacy Policy.
        </Paragraph>
        <Paragraph>
          <InnerHeading>4. Contents:</InnerHeading> Content includes texts,
          messages, files, images, photos, video, sounds, sound recordings,
          works of authorship, applications, graphics, audio-visual
          combinations, interactive features and other materials you may view on
          access through, or contribute to the Services. As an account holder in
          Hireme, you may submit Content to the Services like photos, videos,
          documents, texts, messages, etc. You understand that we do not
          guarantee any confidentiality with respect to any Content you submit.
          We do not claim any ownership rights in the Content you transmit,
          submit, display or publish (&quot;post&quot;) on, through, or with the
          Services. After posting your Content on, through or in connection with
          the Services, you continue to retain any such rights that you may have
          in your Content, subject to a worldwide, non-exclusive, royalty-free,
          sub-licensable and transferable license granted herein.
        </Paragraph>
        <Paragraph>
          By posting any Content on, through or in connection with the Services,
          you hereby grant to us the license to use, modify, delete from, add
          to, combine with other content, publicly perform, publicly display,
          reproduce, prepare derivative works of, display, publish, adapt, make
          available online or electronically transmit, sell, distribute, and
          otherwise exploit such Content by all means and manners now or later
          known, including, without limitation, on, through or in connection
          with the Services to third-party applications; widgets; websites; or
          mobile, desktop or other services which are linked with your Account,
          including, without limitation, distributing part or all of the
          Services and any Content included therein, in any media formats and
          through any media channels. You also hereby grant each User of the
          Service a non-exclusive licence to access your Content through the
          Services, and to use, reproduce, distribute, display, publish, make
          available online or electronically transmit, and perform such Content
          as permitted through the functionality of the Services and under these
          Terms. You shall be solely responsible for your Content and the
          consequences of submitting and publishing your Content on the
          Services. You affirm, represent, and warrant that you own or have the
          necessary licences, rights, consents, and permissions to publish
          Content you submit; and you licence to us all patent, trademark, trade
          secret, copyright or other proprietary rights in and to such Content
          for publication on the Services pursuant to these Terms, royalty-free.
        </Paragraph>
        <Paragraph>
          <InnerHeading>5. Restricted Contents:</InnerHeading> You shall not
          host, display, upload, modify, publish, transmit, update or share any
          information that is grossly harmful, disparaging, relating or
          encouraging money laundering or gambling, invasive of another&apos;s
          privacy, racial, ethnically objectionable, impersonates another
          person; that which contains software viruses or any other computer
          code, filed or programs designed to interrupt, destroy or limit the
          functionality of any software resource; threatens the unity,
          integrity, defence, security or sovereignty of India.
        </Paragraph>
        <Paragraph>
          <InnerHeading>6. Content Posting Policy:</InnerHeading> You shall not
          post/upload/transmit/share any contents that:
        </Paragraph>
        <Paragraph>
          <InnerHeading>6.a)</InnerHeading> Violates the Agreement, Community
          Guidelines, and other terms and policies that apply to your platform
          use.
        </Paragraph>
        <Paragraph>
          <InnerHeading>6.b)</InnerHeading> Is unlawful, discriminatory,
          fraudulent, harassing, fake, Spam, scam, infringing, etc.
        </Paragraph>
        <Paragraph>
          <InnerHeading>7. Contents Owner:</InnerHeading> Content Regulations in
          Hireme
        </Paragraph>
        <Paragraph>
          <InnerHeading>7.a)</InnerHeading> Any user content will be considered
          non-confidential and non-proprietary.
        </Paragraph>
        <Paragraph>
          <InnerHeading>7.b)</InnerHeading> You shall be solely responsible for
          your content and the consequences of submitting and publishing your
          content on the Services.
        </Paragraph>
        <Paragraph>
          <InnerHeading>7.c)</InnerHeading> We do not endorse any content
          submitted to the Services by any user or any opinion, recommendation,
          or advice expressed therein. Any use or reliance on any content
          obtained through the Service is at your own risk.
        </Paragraph>
        <Paragraph>
          <InnerHeading>7.d)</InnerHeading> We reserve the right to remove
          content that violates The Agreement, Community Guidelines, Google
          Policy of Restricted Contents, and other policies that apply to your
          use of the Service.
        </Paragraph>
        <Paragraph>
          <InnerHeading>8. Report/Block:</InnerHeading> One can report any
          contents in the application with a reason for reporting, like Spam,
          Scam, etc., and submit a proof of screenshot or video. We will review
          that content immediately, and if it violates any policy, we will
          immediately remove that content and take strict action against the
          user.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Note:</InnerHeading> If any user is found asking for
          money in exchange for a job offer, it violates this agreement and will
          be subjected to legal action, including filing an FIR with the police.
        </Paragraph>
        <Paragraph>
          <InnerHeading>9. Intellectual Property Policy:</InnerHeading> We
          respect the intellectual property of others and require that our
          members do so as well. Therefore, you hereby agree and warrant that
          you shall not host, display, upload, modify, publish, transmit,
          update, or share any Content that infringes upon a third person&apos;s
          copyright, patent, design, or other proprietary or intellectual
          property rights. Any such infringing Content is subject to removal or
          blocking in accordance with the rules below. We operate a clear
          copyright policy about any Content alleged to infringe the copyright
          of a third party, and we will terminate user access to the Services if
          a user has been determined to be a repeat infringer. A repeat
          infringer is a member who has been notified of infringing activity
          more than twice. The Content on the Services, and the trademarks,
          service marks, and logos (&quot;Marks&quot;) on the Service, are owned
          by or licensed to us, and you do not gain any right, licence, or
          ownership over the same.
        </Paragraph>
        <Paragraph>
          <InnerHeading>10. The use of your information:</InnerHeading> We may
          collect your personal and non-personal information like your name,
          phone number, email ID, designation, location, PIN Code, company name,
          college name, etc., to personalise your product experience on the
          Hireme App. We may use your phone number and email ID to contact you
          via SMS, email, or direct call. We may also contact you for feedback
          about your experience with Hireme and for taking part in various
          events and research organised by the Hireme team according to these
          Terms & Conditions.
        </Paragraph>
        <Paragraph>
          <InnerHeading>11. Referral Bonus Policy:</InnerHeading>
        </Paragraph>
        <Paragraph>
          <InnerHeading>How the Program Works</InnerHeading>
        </Paragraph>
        <Paragraph>
          To participate, you can visit the referral page on Hireme App
          (&quot;App&quot;) and follow the on-screen instructions to participate
          in the Referral Program and start referring your friend/hiring manager
          looking to hire for their own company.
        </Paragraph>
        <Paragraph>Your referral should:</Paragraph>
        <Paragraph>
          <ul className="list-disc pl-4">
            <li>Be new to the Hireme App</li>
            <li>
              Should be a Human Resource personnel or a hiring manager/CXO/Owner
            </li>
            <li>Should not be an HR Consultant</li>
            <li>Should not belong to a Network Marketing company</li>
          </ul>
        </Paragraph>
        <Paragraph>
          Once you click on the &quot;Refer & Earn&quot; button, you will be
          provided a link and a unique invitation code. You can then share this
          with as many friends and colleagues as you wish. Individuals who
          receive your referral are &quot;Referees&quot;.
        </Paragraph>
        <Paragraph>
          Eligible Referrer and Referee who are fully compliant with these Terms
          and Conditions may receive &quot;Reward(s)&quot; for every
          &quot;Qualified Referral&quot; (all terms in quotes to be understood
          as defined below).
        </Paragraph>
        <Paragraph>
          <InnerHeading>What is a Qualified Referral?</InnerHeading>
        </Paragraph>
        <Paragraph>
          In order to be eligible for a Referral Reward (explained below) the
          Referee must:
        </Paragraph>
        <Paragraph>
          <ul className="list-disc pl-4">
            <li>Have never previously created a Hireme account?</li>
            <li>
              Download the Hireme App through Referrer&apos;s Invitation Link /
              download Hireme App and manually input Referrer&apos;s Invitation
              Code into the App
            </li>
            <li>
              Complete the registration process and get verified as a Recruiter
              If these conditions are met, this will be considered a
              &quot;Qualified Referral&quot;.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          The Referrer will not receive rewards for referring candidates looking
          for jobs or internships. Additionally, hiring Consultants and Network
          Marketing companies don&apos;t qualify and the Referrer will NOT
          receive any Rewards for referring them.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Referral Rewards</InnerHeading>
        </Paragraph>
        <Paragraph>
          For the Referrer & Referee to qualify for the referral reward the
          referral must be a &quot;Qualified Referral&quot;.
        </Paragraph>
        <Paragraph>
          The amount of Referral Reward the Referrer and the Referee is eligible
          to receive depends on the following rules (these rules take effect
          from January, 2022 awards prior to this date will still be issued
          according to previous rules)
        </Paragraph>
        <Paragraph>
          <ul className="list-disc pl-4 space-y-8">
            <li>
              <InnerHeading>
                Referring someone from the same company
              </InnerHeading>
              &nbsp; the Referrer will be rewarded Rs. 700 and Referee will be
              rewarded Rs. 300 once the Referee&apos;s registration and
              verification process is complete.
            </li>
            <li>
              <InnerHeading>
                Referring someone from a different company
              </InnerHeading>
              &nbsp; the Referrer will be rewarded Rs. 1,000 and Referee will be
              rewarded Rs. 500 once the Referee&apos;s registration and
              verification process is complete.
            </li>
            <li>
              <InnerHeading>Job Seekers referring Recruiters</InnerHeading> will
              be rewarded Rs. 1,000 and Referee will be rewarded Rs. 500 once
              the Referee&apos;s registration and verification process is
              complete.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <InnerHeading>Limit</InnerHeading>
        </Paragraph>
        <Paragraph>
          As a Referrer, you can earn rewards for up to 10 qualified Referrals
          each month. A Referrer is welcome to invite as many Referees onto the
          Hireme platform; however, they will not receive any additional rewards
          after 10 Referral rewards each month.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Payment Method and Time</InnerHeading>
        </Paragraph>
        <Paragraph>
          All Referral payments will be made via Bank Transfer. To settle the
          payment, relevant bank information will need to be provided during
          registration. Click on &quot;Referral History&quot; button on the
          referral page of our App, then click on the &quot;REDEEM&quot; button
          to add/edit your bank information.
        </Paragraph>
        <Paragraph>
          The Referral Awards will be credited collectively on every Friday
          between 10:00 am to 5:00 pm (IST), to your preferred bank account. To
          avoid confusion, you will not be able to edit your bank information on
          Fridays from 10:00 am to 5:00 pm (IST). Only in very limited
          circumstances the Referral rewards may take a few weeks to arrive.
          Please be patient and contact us if any issue arises.
        </Paragraph>
        <Paragraph>
          <InnerHeading>How to Track Referral Status?</InnerHeading>
        </Paragraph>
        <Paragraph>
          You can check your referral status by clicking on &quot;Referral
          History&quot; button on the referral page of our App.
        </Paragraph>
        <Paragraph>
          There are two tabs on that page: &quot;VERIFIED&quot; and
          &quot;UNVERIFIED&quot;. You may find all your &quot;Qualified
          Referrals&quot; under &quot;VERIFIED&quot; tab. The referral with
          &quot;Redeemed&quot; status indicates that the reward for the referral
          has been issued, while the referral with &quot;Processing&quot; status
          indicates that the reward for the referral is yet to be issued.
        </Paragraph>
        <Paragraph>
          You may find all your other referral attempts under
          &quot;UNVERIFIED&quot; tab and the stages they&apos;re at. If the
          referral has been &quot;Invited&quot;, it means that this Referee is
          still going through the registration process and is yet to be
          verified. If the referral has been &quot;Rejected&quot;, it means that
          this Referee has been rejected by our audit team because they
          don&apos;t qualify as per Hireme&apos;s standards or need to reupload
          the relevant documents.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Privacy Policy</InnerHeading>
        </Paragraph>
        <Paragraph>
          The personal information collected, processed and used as part of the
          Program will be used in accordance with Company’s Privacy Policy. As
          the provider of the referral service, we will receive the personal
          information you choose to disclose in connection with this Program.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Other Terms of the Program</InnerHeading>
        </Paragraph>
        <Paragraph>
          The following terms shall also apply to your participation in the
          Referral Program.
        </Paragraph>
        <Paragraph>
          <ul className="list-disc pl-4">
            <li>
              Users cannot earn Referral Rewards for referring themselves or
              create multiple, fictitious or fraudulent accounts to participate
              in the Program as &quot;Friends&quot;;
            </li>
            <li>
              All Hireme promotions are run for a limited time only and we
              reserve the rights to modify or amend these Terms and Conditions
              at any time and/or the methods through which rewards are earned;
            </li>
            <li>
              Hireme shall not be liable for your loss due to incomplete,
              unreadable, inaccurate, unreliable or unintelligible entries of
              payment information, regardless of your chosen redeeming method;
            </li>
            <li>In addition, you may not:</li>
            <li>(i) Tamper with the Program</li>
            <li>(ii) Act in an unfair or disruptive manner, or</li>
            <li>
              (iii) Use any system, bot or other device or artifice to
              participate or receive any benefit in the Program. Should such an
              attempt be made, the company reserves the right to seek remedies
              and damages to the fullest extent of the law, including criminal
              prosecution.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <InnerHeading>12. Product & Pricing:</InnerHeading> Hireme is
          India&apos;s 1st Direct hiring platform focused on solving the unique
          problem of the long hiring process, especially for Internet Startups.
          Hireme is a product of PHILOCALIST JOBS PRIVATE LIMITED. We use
          Advanced algorithms to match jobs posted by recruiters with profiles
          of candidates. The matching candidates and recruiters can directly
          chat with each other enabling fast & efficient hiring/job search
          experience.
        </Paragraph>
        <Paragraph>
          Hireme is trusted by 3.8M+ verified job seekers and 190K+ verified
          startups. Hireme is free of cost for job seekers. The Hireme App runs
          on a FREEMIUM model for recruiters so that they can use all its
          features without limitations. However, Hireme will charge a nominal
          fee to the recruiters for initiating chats with more Job Seekers than
          provided in the FREEMIUM plan.
        </Paragraph>
        <Paragraph>
          Recruiters who have signed up and been onboarded with Hireme are
          entitled to a 3-day complimentary trial for 30 chat initiations, after
          which they will be upgraded to the FREEMIUM plan of 5 free chats a
          day.
        </Paragraph>
        <Paragraph>
          To chat and connect with more candidates on the platform, recruiters
          can choose one of the below plans. Hireme will operate on a
          subscription basis so that the payments will have to be made as per
          the selected plan every month.
        </Paragraph>
        <table className="[&>*>tr>td]:border [&>*>tr>td]:border-black [&>*>tr>td]:p-2 [&>*>tr>td]:text-center [&>*>tr>td]:font-bold [&>*>tr>td]:text-black/60 w-full">
          <thead>
            <tr className="bg-black/20">
              <td></td>
              <td>Freemium</td>
              <td>Basic</td>
              <td>Standard</td>
              <td>Premium</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No of chats per day</td>
              <td>5</td>
              <td>15</td>
              <td>30</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Cist per month</td>
              <td>₹0.00</td>
              <td>₹1399.00</td>
              <td>₹2199.00</td>
              <td>₹4499.00</td>
            </tr>
          </tbody>
        </table>
        <Paragraph>
          <InnerHeading>13. Payment Terms and Conditions:</InnerHeading>{" "}
          &apos;Hireme&apos; may offer products and services for purchase on the
          App (“In-App Purchase”). By making an in-app purchase, you agree to
          the payment terms that may apply, which are disclosed at the point of
          purchase, and as such, the payment terms are incorporated herein by
          reference.
        </Paragraph>
        <Paragraph>
          In-App Purchases can be made by the following methods (&quot;Payment
          Method&quot;): (a) making a purchase through a third-party platform
          such as the Apple App Store or Google Play Store (&quot;Third-Party
          Store&quot;). As soon as you make an In-App Purchase, you authorise us
          to charge your chosen Payment Method. If we cannot receive payment
          through the selected Payment Method, then you agree to pay all sums
          due upon demand by us.
        </Paragraph>
        <Paragraph>
          The subscription is not cancelled when an account is deleted, or an
          application is deleted from a device. You will be notified of any
          changes to the pricing of the Premium Services to which you have
          subscribed and given the opportunity to cancel. If we change these
          prices and you do not cancel the subscription, you will be charged at
          Hireme&apos;s then-current subscription pricing.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Cancellation Policy:</InnerHeading>
        </Paragraph>
        <Paragraph>
          If you have purchased a subscription through a Third-Party Store, such
          as the Apple App Store or the Google Play Store, you will need to
          access your account with that Third-Party Store and follow
          instructions to change or cancel their subscription. If you cancel
          your subscription, you may continue to use the paid services until the
          end of the period you last paid for, but (i) you will not (except as
          outlined in the subsection entitled “Refunds” below) be eligible for a
          prorated refund, (iii) you will then no longer be able to use the
          Premium Services or In-App Purchases enabled by their subscription.
        </Paragraph>
        <Paragraph>
          Refunds. Generally, all charges for purchases are non-refundable, and
          there are no refunds or credits for partially used periods.
        </Paragraph>
        <Paragraph>
          You may cancel your subscription without penalty or obligation. Your
          estate shall be entitled to a refund of that portion of any
          subscription payment you had made, which is allocated to the period
          after your death if you die before the end of your subscription
          period. Suppose you become disabled (so that you cannot use Hireme)
          before the end of your subscription period. In that case, you are
          entitled to a refund of that portion of your subscription payment
          transferable to the period after your disability by providing the
          company notice in the same manner that you request a refund.
        </Paragraph>
        <Paragraph>
          Suppose you exercise your right of cancellation (except for purchases
          made through Apple ID, which Apple controls). In that case, we will
          refund (or ask Google to refund) all payments received from you,
          without undue delay and, in any case, within 14 days of the date when
          we received notification of your decision to cancel the Agreement. we
          shall make such a refund using the same means of payment as used by
          you in the initial transaction. In any case, you will not be charged
          any fees due to the refund.
        </Paragraph>
        <Paragraph>
          You who purchased through a payment platform other than those listed
          above should request a refund directly from the third-party merchant
          through which you made the purchase.
        </Paragraph>
        <Paragraph>
          You cannot cancel an order for digital content not delivered on a
          physical medium if you have given your explicit prior consent and have
          acknowledged that you will lose your cancellation rights.
        </Paragraph>
        <Paragraph>
          <InnerHeading>14. User Termination Policy/Legal Action:</InnerHeading>{" "}
          We may terminate a user&apos;s access to the Service if found
          violating this agreement. We reserve the right to decide whether
          Content violates these agreements for any reason, including copyright
          infringement, Spam, Scam, Unprofessional Behaviour, etc. We may at any
          time, without prior notice and in our sole discretion, remove such
          Content and/or terminate a user&apos;s account for sending/posting
          such material in violation of these agreements.
        </Paragraph>
        <Paragraph>
          <InnerHeading>Contact Us:</InnerHeading>
        </Paragraph>
        <Paragraph>
          Email us at <span className="text-primary">support@Hireme.in</span> if
          you have any queries.
        </Paragraph>
      </div>
    </div>
  );
}
