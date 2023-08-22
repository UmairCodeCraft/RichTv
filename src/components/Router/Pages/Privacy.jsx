import React from "react";
import Use_privcy from "../Use_privcy";
const use_terms = [
  {
    pra1: "RICH TV. (“RICH TV”, “we,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by RICH TV.",
    pra2: "This Privacy Policy applies to our website, RICH TV, and its associated subdomains (collectively, our “Service”). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.",
    pra3: "We will not disclose personal information about you to any third party without your express consent. Please read the following to learn more about our privacy policy. Our Privacy Policy is subject to change.",
  },
  {
    heading: "WHAT INFORMATION DOES RICH TV COLLECT?",
    pra1: "By registering with Rich TV or signing up to receive a newsletter from Rich TV, we will automatically opt your email address into our email lists, where we will look to send you relevant content. You can opt-out at any time. Rich TV does not share your email address with any third-party advertisers.",
    pra2: "RICH TV maintains logs which contain information on anonymous users such as IP address, browser type, operating system, and referring web page. We use this information to track usage and diagnose bugs. We also gather regular statistical information regarding site usage, browser information, OS, device and network information, and user interaction on our various websites and services from all users without any personally identifiable information.",
    pra3: "Websites and apps with logins require personal data, and, without such, gaining access may not be possible. When you set up an account, we collect personal data such as your name, address, company, telephone number, email address, username and password. We also collect information from third party providers (e.g., if you log-in to our site using a Google, Facebook or another third-party log-in, you grant permission to the third-party to share your user details with us). This will include your user ID, first name, last name, and email address which we will then use to create a Rich TV account.",
    list_heading1: "Device Information.",
    list_heading2: "Billing Information.",
    list_heading3: "Survey Data.",
    list_heading4: "Other Data.",
    list_heading5: "Email Information.",
    list1:
      "We automatically track and collect data from the devices and applications you use to access our Services, such as IP addresses, domain servers, length of visit and the pages you viewed, operating system version, device type, system and performance information and browser type. We may also infer your geographic location based on your IP address or using your device’s native features. We also automatically log your activity when you use our Services. These logs may identify features you use, actions you take, and information you access. This data is anonymous and does not personally identify you, but is helpful for marketing purposes or for improving our Services.",
    list2:
      " If you sign up for our services, we require you to provide billing details, such as a name, address, telephone number, email address and financial information corresponding to your applicable method of payment (e.g., payment card information).",
    list3:
      "We will occasionally post surveys on our sites. Participation in RICH TV surveys is voluntary, and information collected from surveys will be used to improve RICH TV user experience and our services.",
    list4:
      " We may collect your personal information or data if you submit it to us in other contexts (e.g., sales inquiries, customer support requests, feedback forms, etc.).",
    list5:
      " We record the time and date a user opts-in or opts-out of email lists as well as the source of the subscription (which form was used to sign up), your name, email address, and IP. We may track interaction within any email sent such as opens or click-throughs as well as the email client used (e.g., Gmail, Yahoo, Outlook, etc.) and/or device and OS.",
  },
  {
    heading: "DOES RICH TV USE COOKIES?",
    pra1: "To optimize the user experience RICH TV may make use of cookies technology. We may use cookies and other storage methods to target ads via third party providers, keep temporary user preferences per the user’s device, or for some mapping services we offer. RICH TV also uses functional cookies to enhance the performance of our websites and services which are unrelated to collecting or storing personal information.",
  },
  {
    heading:
      "HOW DO I OPT-OUT OF COMMERCIAL EMAIL COMMUNICATIONS FROM RICH TV?",
    pra1: "Commercial email communications from RICH TV come with an unsubscribe link at the bottom of the email where you can opt-out of future such marketing communications. You can also email RICH TV at any time and request to be removed from one or all of our email lists.",
  },
  {
    heading:
      "CAN YOU OPT-OUT OF PROVIDING PERSONALLY IDENTIFYING INFORMATION OR RECEIVING MARKETING MESSAGES?",
    pra1: "You may opt-out altogether from providing personally identifying information to us by not registering with Rich TV and thereby not providing personal information, or by not visiting the Rich TV site. You can delete your Rich TV account by emailing us. Such a request must include your user name. Members can automatically deactivate or delete their Rich TV account through your member profile page. If you choose not to register or provide mandatory information in the registration form, Rich TV will not be fully accessible to you. You can edit your account information, including your newsletter preferences, at any time.",
  },
  {
    heading:
      "I AM A CALIFORNIA RESIDENT, HOW DO I DELETE ANY PERSONAL INFORMATION STORED ON ME OR REQUEST MORE INFORMATION?",
    pra1: "Please see the section below: Your California Privacy Rights & Do Not Sell My Personal Information",
  },
  {
    heading: "HOW DOES RICH TV PROTECT ITS CONTENT AND USER INFORMATION?",
    pra1: "To prevent unauthorized access, maintain data accuracy, and ensure the appropriate use of information, we have put in place commercially reasonable physical, electronic, and managerial procedures to protect the information we collect online, including security for credit card submissions. Such commercially reasonable precautions, however, do not absolutely guarantee the absolute protection of your personally identifying information. You must understand that there will always be some risk that any personally identifying information that you provide to us may be released without our permission or knowledge.",
  },
  {
    heading:
      "WHAT DOES RICH TV DO WITH THE INFORMATION IT GATHERS AND/OR TRACKS?",
    pra1: "RICH TV uses information for the following general purposes:",
    list1: "To fulfill your requests for products and services",
    list2:
      "To process and collect your payments, to fulfill orders and contractual obligations",
    list3: "To fulfill customer support requests",
    list4: "To customize the advertising and content you see",
    list5: "To improve our services",
    list6: "To contact you",
    list7: "To contact you",
    list8: "To provide trend reporting for internal and external clients.",
    pra5: "We may send you certain communications relating to the RICH TV service, such as service announcements, administrative messages and the RICH TV Newsletter, that are considered part of your RICH TV account.",
  },
  {
    heading:"WITH WHOM DOES RICH TV SHARE THE INFORMATION IT GATHERS AND/OR TRACKS?",
    pra1:"Rich TV may share user information it gathers, in aggregate or statistical form, that does not identify individuals nor include personal information, with anyone. Rich TV utilizes email service providers for its commercial email communications which requires providing personal information, such as email address, to the email service providers for the purpose of using their service to send commercial emails. Rich TV uses reputable email service providers that implement high standards of care, protection and security of personal information. We also may share information about you, including personally identifying information, if sought by legal process or requested by law enforcement, or in order to protect the rights and property of Rich TV or the safety of our users or the public, or to protect against unauthorized use of our site.",
    pra2:"If RICH TV is acquired by another company or otherwise merged into another company, we will transfer collected registrant and user information subject to this policy to a successor. In the event that information will be subject to a materially different privacy policy, RICH TV or its successor will provide notice.",
  },
  {
    heading: "HOW LONG DOES RICH TV STORE THE DATA IT COLLECTS?",
    pra1: "RICH TV can store usage data for the life of the service starting from its release date. Personal data can be stored indefinitely or until a request has been made to delete the data.",
    
  },
  {
    heading:"SECURITY BREACH NOTIFICATION",
    pra1:"In the event of a security breach that exposes your personal information, Rich TV shall notify you that there has been a breach of the system containing your Personal Information and related details. The notification will be done as quickly as possible and will be reported to any required authorities."
  },
  {
    heading:"YOUR CALIFORNIA PRIVACY RIGHTS & DO NOT SELL MY PERSONAL INFORMATION",
    pra1:"The California Consumer Privacy Act (CCPA), also known as AB-375, provides California residents with the following rights: The right of Californians to know what personal information is being collected about them; The right of Californians to know whether their personal information is sold or disclosed and to whom; The right of Californians to say no to the sale of personal information; The right of Californians to access their personal information; The right of Californians to equal service and price, even if they exercise their privacy rights. In addition, a consumer shall have the right to request that a business delete any personal information about the consumer which the business has collected from the consumer.",
    pra2:"To exercise your California rights and request any of the actions or information under the California Consumer Privacy Act (CCPA), you can contact RICH TV through the methods below.",
    pra6:"Email: ",
    pra7:"Phone: +1 778-237-2402",
    pra8:"Mail: 438 Seymour St, Vancouver, B.C, V6B6H4",
    pra9:"To contact RICH TV or if you have any additional questions, please visit",
    pra10:"RICH TV",
    pra11:"438 Seymour St,",
    pra12:"Vancouver, B.C, V6B6H4",
    Email:"support@richtv.io",
    site_link:" https://richtv.io/contact/",
  }
];
const Privacy = () => {
  return (
    <>
      <section className="use_terms">
        <div className="container">
          <h1>PRIVACY POLICY</h1>
          <div className="border_heading"></div>
          <div className="row">
            <div className="col">
              {use_terms.map((value, index) => {
                return (
                  <Use_privcy
                    heading={value.heading}
                    pra1={value.pra1}
                    pra2={value.pra2}
                    pra3={value.pra3}
                    pra4={value.pra4}
                    pra5={value.pra5}
                    pra6={value.pra6}
                    pra7={value.pra7}
                    pra8={value.pra8}
                    pra9={value.pra9}
                    pra10={value.pra10}
                    pra11={value.pra11}
                    pra12={value.pra12}
                    Email={value.Email}
                    site_link={value.site_link}
                    list_heading1={value.list_heading1}
                    list_heading2={value.list_heading2}
                    list_heading3={value.list_heading3}
                    list_heading4={value.list_heading4}
                    list_heading5={value.list_heading5}
                    // list_heading6={value.list_heading6}
                    // list_heading7={value.list_heading7}
                    // list_heading8={value.list_heading8}
                    list1={value.list1}
                    list2={value.list2}
                    list3={value.list3}
                    list4={value.list4}
                    list5={value.list5}
                    list6={value.list6}
                    list7={value.list7}
                    list8={value.list8}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
