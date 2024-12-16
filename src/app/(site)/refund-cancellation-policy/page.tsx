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

export default function Page() {
  return (
    <div className="py-20">
      <div className="section space-y-8 ">
        <Heading className="text-center">Products and Pricing</Heading>
        <Paragraph>
          We allow recruiters to initiate a limited number of unsolicited chats
          with candidates on Hireme for free. We will charge the recruiter when
          the number of unsolicited chats with candidates exceeds the daily free
          limit.
        </Paragraph>
        <Paragraph>
          <ul className="list-disc pl-4">
            <li>
              Recruiters can improve and increase the number of chats with the
              most relevant candidates per day by subscription.
            </li>
            <li>
              Hireme will provide different levels of chat upgrade benefits to
              meet the needs of other recruiters.
            </li>
            <li>
              The number of active chats, valid days, and prices for each level
              of upgrade rights would be based on the specific display
              information on the product payment page.
            </li>
            <li>
              Hireme has the right to make changes based on the service provided
              and the price of the charged goods. The modification will not
              affect the recruiters who have already purchased but will only
              affect the new users buying after the changed subscription model.
            </li>
          </ul>
        </Paragraph>
        <Heading>Refund and Cancellation Policy</Heading>
        <Paragraph>
          This subscription model is a digital offering, and Hireme will not
          provide a refund post completion of the payment. The user may not
          request a refund from Hireme unless the subscription service cannot be
          used generally due to a platform failure after due diligence. If the
          applicant&apos;s account is closed due to inappropriate behavior on
          Hireme&apso;s platform, no refund will be issued in such cases. If the
          user has any concerns/objections, they can contact Hireme&apos;s
          customer support team.
        </Paragraph>
        <Heading>Payment Terms and Conditions:</Heading>
        <Paragraph>
          &apos;Hireme&apos; may offer products and services for purchase on the
          App (&ldquo;In-App Purchase&rdquo;). By making an in-app purchase, the
          subscriber agrees to the payment terms that may apply, which are
          disclosed at the point of purchase, and as such, the payment terms are
          incorporated herein by reference.
        </Paragraph>
        <Paragraph>
          In-App Purchases can be made by the following methods (&ldquo;Payment
          Methods&rdquo;): (a) making a purchase through a third-party platform
          such as the Apple App Store or Google Play Store (&ldquo;Third Party
          Store&rdquo;). As soon as someone makes an In-App Purchase, they
          authorize Hireme to charge their chosen Payment Method. If Hireme
          cannot receive payment through the selected Payment Method, the
          customer agrees to pay all sums due upon demand by Hireme.
        </Paragraph>
        <Paragraph>
          The subscription is not canceled when an account is deleted, or an
          application is deleted from a device. The subscriber will be notified
          of any changes to the pricing of the Premium Services to which they
          have subscribed and given the opportunity to cancel. If Hireme changes
          these prices and the customer does not cancel their subscription, they
          will be charged at Hireme&apos;s then-current subscription pricing.
        </Paragraph>
        <Heading>Canceling Subscriptions</Heading>
        <Paragraph>
          If someone has purchased a subscription through a Third Party Store,
          such as the Apple App Store or the Google Play Store, they will need
          to access their account with that Third Party Store and follow
          instructions to change or cancel their subscription. If a subscriber
          cancels their subscription, they may continue to use the paid services
          until the end of the period they last paid for, but (i) the subscriber
          will not (except as outlined in the subsection entitled “Refunds”
          below) be eligible for a prorated refund, (iii) they will then no
          longer be able to use the Premium Services or In-App Purchases enabled
          by their subscription.
        </Paragraph>
        <Paragraph className="font-semibold">
          Generally, all charges for purchases are non-refundable, and there are
          no refunds or credits for partially used periods.
        </Paragraph>
        <Paragraph>
          The subscriber may cancel their subscription without penalty or
          obligation. Their estate shall be entitled to a refund of the amount
          for any payment subscribe had made allocated to the period post-death
          if they die before the end of their subscription period. Suppose one
          becomes disabled (so that they cannot use Hireme) before the end of
          their subscription period. In that case, they are entitled to a refund
          of that portion of their subscription payment transferable to the
          period after their disability by providing the company notice; in the
          same manner, they request a refund.
        </Paragraph>
        <Paragraph>
          Suppose a subscriber exercises their right of cancellation (except for
          purchases made through Apple ID, which Apple controls). In that case,
          Hireme will refund (or ask Google to refund) all payments received
          from the subscriber without undue delay and, in any case, within 14
          days of the date when Hireme received notification of the
          subscriber&apos;s decision to cancel the Agreement. Hireme shall make
          such a refund using the same means of payment as used by the
          subscriber in the initial transaction. In any case, no fees will be
          charged to the subscriber due to the refund.
        </Paragraph>
        <Paragraph>
          The subscriber who purchased through a payment platform other than
          those listed above should request a refund directly from the
          third-party merchant through which they made the purchase.
        </Paragraph>
        <Paragraph>
          A subscriber cannot cancel an order for digital content not delivered
          on a physical medium if they have given their explicit prior consent
          and have acknowledged that they will lose their cancellation rights.
        </Paragraph>
        <Heading>To request a refund</Heading>
        <Paragraph>
          If the subscriber wishes to receive a refund, they must cancel the
          subscription and request a refund. If they subscribed using their
          Apple ID, refunds are handled by Apple, not Hireme. Go to iTunes,
          click on your Apple ID, select “Purchase history,” find the
          transaction, and hit “Report Problem” to request a refund. The
          subscriber can also submit a request at&nbsp;
          <span className="text-primary">https://getsupport.apple.com</span>.
        </Paragraph>
        <Paragraph>
          For all other purchases, Hireme will refund (or ask Google to refund)
          all payments received from the subscriber within 21 days of the date
          Hireme received notice of the subscriber&apos;s decision to cancel the
          Agreement. Hireme will refund the subscriber&apos;s payment using the
          same method as the original transaction. The subscriber will not be
          charged any fees for the refund.
        </Paragraph>
        <Paragraph>
          If the subscriber made a purchase using a payment platform not listed
          above, they should request a refund directly from the third-party
          merchant through which they made the purchase.
        </Paragraph>
        <Paragraph>
          A subscriber may not cancel an order for delivery of digital content
          that is not delivered on a physical medium so long as order processing
          has begun with their prior consent and acknowledgement that they may
          lose their cancellation rights.
        </Paragraph>
        <Heading>Taxes</Heading>
        <Paragraph>
          All prices include taxes for payments collected via In-App payments
          for the product or service. If Hireme determines that it is legally
          obliged to collect a Sales Tax or GST from the subscriber, the Sales
          Tax or GST will be collected in addition to the required payments.
        </Paragraph>
      </div>
    </div>
  );
}
