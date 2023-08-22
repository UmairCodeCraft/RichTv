import React from 'react'
import Use_privcy from '../Use_privcy'
const use_terms=[
  {
    heading:'DISCLAIMER',
    pra1:'Welcome to RICH TV. These Terms of Use govern your use of the RICH TV website, all content and services (the “Services”) offered therein.',
    pra2:'YOUR USE OF RICH TV IS AN INDICATION OF YOUR AGREEMENT TO THE FOLLOWING TERMS OF USE AND YOUR APPROVAL OF THE COLLECTION, USE AND DISCLOSURE OF PERSONAL INFORMATION AS STATED IN OUR PRIVACY POLICY. IF YOU DO NOT AGREE, PLEASE STOP USING THIS WEBSITE IMMEDIATELY.'
  },
  {
    heading:'CHANGES TO THE TERMS OF USE',
    pra1:'These Terms of Use may be changed by us any time. The latest version of these terms can be accessed from the link titled “Terms of Use” located at the bottom of our web pages. Please check these terms periodically for any changes. Your use of Rich TV after we post changes to these Terms of Use signifies your acceptance of the new terms.',
    // pra2:'',
  },
  {
    heading:'CHANGES TO RICH TV',
    pra1:'We may stop or modify any service or feature on RICH TV at any time and without any prior notice.',
    // pra2:'',
  },
  {
    heading:'OWNERSHIP OF INFORMATION; LICENSE TO USE RICH TV; REDISTRIBUTION OF DATA.',
    pra1:'All information made available through RICH TV in all formats and media throughout the world are the exclusive property of RICH TV, its affiliates or its Data Providers. Any content hosted by RICH TV and/or its affiliates, is owned by or licensed to RICH TV. Such content includes data and prices owned and/or managed by RICH TV on behalf of a Site or Sites. You may not capture, record, publish, display, create derivative works of, republish the Content owned or hosted by RICH TV in whole or in part without consent from RICH TV or its clients.',
    pra2:'In no event shall any user publish, retransmit, redistribute or otherwise reproduce any RICH TV Content in any format to anyone, and no user shall use any RICH TV Content in or in connection with any business or commercial enterprise, including, without limitation, any securities, investment, accounting, banking, legal or media business or enterprise, without the express written consent of RICH TV. You may use RICH TV and the Content offered on RICH TV only for personal, non-commercial purposes. You may use Content offered for downloading, such as daily data files, for personal use only and subject to the rules that accompany that particular Content. You may not use any data mining, robots, or similar data gathering and extraction tools on the Content, frame any portion of RICH TV or Content, or reproduce, reprint, copy, store, publicly display, broadcast, transmit, modify, translate, port, publish, sublicense, assign, transfer, sell, loan, or otherwise distribute the Content without our prior written consent. You may not circumvent any mechanisms included in the Content for preventing the unauthorized reproduction or distribution of the Content.',
    pra3:'EXCEPT AS OTHERWISE EXPRESSLY PERMITTED BY THE PRECEDING PARAGRAPH, YOU AGREE NOT TO REPRODUCE, RETRANSMIT, DISSEMINATE, SELL, DISTRIBUTE, PUBLISH, BROADCAST OR CIRCULATE ANY OF THE SERVICES OR MATERIALS IN ANY MANNER OR FOR ANY PURPOSES (WHETHER PERSONAL OR BUSINESS) WITHOUT THE PRIOR EXPRESS WRITTEN CONSENT OF RICH TV AND/OR THE DATA PROVIDERS. IN ADDITION, YOU SHALL NOT, WITHOUT THE PRIOR EXPRESS WRITTEN CONSENT OF RICH TV AND THE RELEVANT DATA PROVIDERS, MAKE COPIES OF ANY OF THE SOFTWARE OR DOCUMENTATION THAT MAY BE PROVIDED, ELECTRONICALLY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, TRANSLATING, DECOMPILING, DISASSEMBLING OR CREATING DERIVATIVE WORKS.'
  },
  {
    heading:'EMAIL LISTS',
    pra1:'If you register as a user (a “Member”) of any of the features of Rich TV, including the Rich TV newsletter, Rich TV will automatically opt you into our email lists. As a Member, Rich TV will look to send you relevant content. From time to time, we may ask Members to review and agree to our Terms and Conditions. Upon your acceptance, you agree to let Rich TV add you back to our commercial email lists',
    pra2:'You can edit your Account Information, including your newsletter preferences, at any time. Commercial email communications from RICH TV comes with an unsubscribe link at the bottom for you to opt-out of future such marketing communications. You can also email RICH TV at any time and request to be removed, temporarily or permanently from one or all of our email lists.',
    pra3:'Rich TV does not share your email address with any third party advertisers.'
  },
  {
    heading:'DISCLAIMER REGARDING CONTENT',
    pra1:'RICH TV cannot and does not represent or guarantee that any of the information available through the Services or on RICH TV is accurate, reliable, current, complete or appropriate for your needs. Various information available through the Services or on RICH TV may be specially obtained by RICH TV from professional businesses or organizations, such as exchanges, news providers, market data providers and other content providers (e.g., the New York Stock Exchange, NASDAQ, CME Group and Dow Jones), who are believed to be sources of reliable information (collectively, the “Data Providers”). Nevertheless, due to various factors — including the inherent possibility of human and mechanical error — the accuracy, completeness, timeliness, results obtained from use, and correct sequencing of information available through the Services and Website are not and cannot be guaranteed by RICH TV. Neither RICH TV nor its affiliates make any express or implied warranties (including, without limitation, any warranty or merchantability or fitness for a particular purpose or use) regarding the Content on RICH TV. The RICH TV Content is provided to the users “as is.” Neither RICH TV nor its affiliates will be liable to any user or anyone else for any interruption, inaccuracy, error or omission, regardless of cause, in the RICH TV Content or for any damages (whether direct or indirect, consequential, punitive or exemplary).',
    
  },
  {
    heading:'REPRESENTATION',
    pra1:'Any views or opinions represented on the Website are personal and belong solely to RICH TV and do not represent those of people, institutions or organizations that RICH TV may or may not be associated with in professional or personal capacity unless explicitly stated. Any views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.',
  },
  {
    heading:'COMPENSATION AND SPONSORSHIP',
    pra1:'The Website and Services may contain forms of sponsorship, paid insertions or other forms of compensation. On certain occasions RICH TV may be compensated to provide opinions on products, services, or various other topics. The compensation received may influence such opinions of the advertised content or topics available on the Website. Sponsored content and advertising space will always be identified as such.',
    
  },
  {
    heading:'DISCLAIMER REGARDING INVESTMENT DECISIONS AND TRADING',
    pra1:'Decisions to buy, sell, hold or trade in securities, commodities and other investments involve risk and are best made based on the advice of qualified financial professionals. Any trading in securities or other investments involves a risk of substantial losses. The practice of “Day Trading” involves particularly high risks and can cause you to lose substantial sums of money. Please consider carefully whether such trading is suitable for you in light of your financial condition and ability to bear financial risks. Under no circumstances shall we be liable for any loss or damage you or anyone else incurs as a result of any trading or investment activity that you or anyone else engages in based on any information or material you receive through RICH TV or our Services. Neither the information, nor any opinion expressed, constitutes a solicitation of the purchase or sale of any securities, futures, or options.',
    
  },
  {
    heading:'DISCLAIMER REGARDING HYPOTHETICAL PERFORMANCE RESULTS',
    pra1:'Hypothetical performance results have many inherent limitations, some of which are mentioned below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and actual results subsequently achieved by any particular trading program',
    
  },
   {
    heading:'NOT FINANCIAL ADVICE',
    pra1:'The information on the Website is provided for your convenience only and is not intended to be treated as financial, investment, tax, or other advice. Nothing contained on the Website constitutes a solicitation, recommendation, endorsement, or offer by RICH TV, its agents, employees, contractors, and any affiliated companies to buy or sell any securities or other financial instruments.',
    pra2:'All content on this site is the information of a general nature and does not address the circumstances of any particular individual or entity. Nothing on the Website constitutes professional and/or financial advice, nor does any information on the Website constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other content on the Website before making any decisions based on such information. You agree not to hold RICH TV, its agents, employees, contractors, and any affiliated companies liable for any possible claim for damages arising from any decision you make based on the information made available to you through the Website.',
    
  },
   {
    heading:'NOT INVESTMENT ADVICE',
    pra1:'All investments are highly speculative in nature and involve substantial risk of loss. We encourage everyone to invest very carefully. We also encourage investors to get personal advice from your professional investment advisor and to make independent investigations before acting on information found on the Website. We do not in any way whatsoever warrant or guarantee the success of any action you take in reliance on statements or information available on the Website.',
    pra2:'Past performance is not necessarily indicative of future results. All investments carry significant risk and all investment decisions of an individual remain the specific responsibility of that individual. There is no guarantee that systems, indicators, or signals will result in profits or that they will not result in full or partial losses. All investors are advised to fully understand all risks associated with any kind of investing they choose to do.',
    
  },
   {
    heading:'REGISTERED USERS',
    pra1:'Certain services are available only to registered users of the Rich TV website and require you to sign in with a username and password to use them. If you register as a user (a “Member”) of any of the features of Rich TV, during the registration process you may be prompted to click a “Register Now,” “Submit” or similar button; your clicking on such button will further confirm your agreement to be legally bound by these Terms and Conditions.',
    pra2:'In consideration of your use of the Rich TV website, you represent that you are of legal age to form a binding contract and are not a person barred from receiving Rich TV Services. You also agree to: (a) provide true, accurate, current and complete information about yourself as prompted by the Rich TV’s registration form (the “Registration Data”) and (b) maintain and promptly update the Registration Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or Rich TV has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Rich TV has the right to suspend or terminate your account and refuse any and all current or future use of the Rich TV Services (or any portion thereof).',
    
  },
    {
    heading:'ACCESS AND SECURITY',
    pra1:'You accept responsibility for the confidentiality and use of any user name and email address that you may register for your access to and use of the Services. You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify RICH TV of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session. RICH TV cannot and will not be liable for any loss or damage arising from your failure to comply.',
    
  },
    {
    heading:'FEEDBACK TO RICH TV',
    pra1:'By submitting ideas, suggestions, documents, and/or proposals to RICH TV through its contact or feedback webpages, you acknowledge and agree that: (a) your Contributions do not contain confidential or proprietary information; (b) RICH TV is not under any obligation of confidentiality, express or implied, with respect to the Contributions; (c) RICH TV shall be entitled to use or disclose (or choose not to use or disclose) such Contributions for any purpose, in any way, in any media worldwide; (d) RICH TV may have something similar to the Contributions already under consideration or in development; (e) your Contributions automatically become the property of RICH TV without any obligation of RICH TV to you; and (f) you are not entitled to any compensation or reimbursement of any kind from RICH TV under any circumstances.',
    
  },
   {
    heading:'REVIEWS AND TESTIMONIALS',
    pra1:'Testimonials are received in various forms through a variety of submission methods. The testimonials are not necessarily representative of all of those who will use Website and Services, and RICH TV is not responsible for the opinions or comments available on the Website, and does not necessarily share them. All opinions expressed are strictly the views of the reviewers.',
    pra2:'The testimonials displayed are given verbatim except for grammatical or typing error corrections. Some testimonials may have been edited for clarity, or shortened in cases where the original testimonial included extraneous information of no relevance to the general public. Testimonials may be reviewed for authenticity before they are available for public viewing.',
    
  },
   {
    heading:'REWARD POINT REDEMPTION CENTER',
    pra1:'You fully understand that RICH TV reserves the right to modify the modalities of its reward points system anytime without any prior notice. You also acknowledge that any attempt on your part as a user to score reward points through unfair means (e.g. spamming, flooding, etc.) may result in cancellation of all your reward points and/or removal of your member account from the site altogether.',
   
  },
   {
    heading:'INDEMNITY​',
    pra1:'You agree to indemnify and hold RICH TV and its subsidiaries, affiliates, officers, agents, employees, partners and licensors harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of Content you submit, post, transmit, modify or otherwise make available through the RICH TV Services, your use of the RICH TV Services, your connection to the RICH TV Services, your violation of the Terms of Use, or your violation of any rights of another.',
    
  },
   {
    heading:'TERMINATION​',
    pra1:'You may terminate your Rich TV account, any associated email address and access to the Rich TV Services by submitting such termination request to Rich TV. Members can cancel their Rich TV membership at any stage.',
    pra2:'You agree that Rich TV may, without prior notice, immediately terminate, limit your access to or suspend your Rich TV account, any associated email address, and access to the Rich TV Services. Cause for such termination, limitation of access or suspension shall include, but not be limited to, (a) breaches or violations of the Terms of Use or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) discontinuance or material modification to the Rich TV Services (or any part thereof), (d) unexpected technical or security issues or problems, (e) extended periods of inactivity, (f) engagement by you in fraudulent or illegal activities, (g) and/or abusive correspondence with Rich TV. Further, you agree that all terminations, limitations of access and suspensions for cause shall be made in Rich TV’s sole discretion and that Rich TV shall not be liable to you or any third party for any termination of your account, any associated email address, or access to the Rich TV Services.',
    
  },
   {
    heading:'RICH TV PREMIER & AD-FREE BILLING, CANCELLATION & REFUND POLICY​',
    pra1:'Unless otherwise stated, all subscriptions are automatically renewing.',
    pra2:'To cancel your RICH TV membership, please login to your RICH TV account and access your profile or send us a request to cancel through our contact form. Upon receipt and processing of the cancellation request, RICH TV will email you a cancellation confirmation. Please retain a copy of the cancellation email for your records.',
    pra3:'Once your membership begins, you can’t get a refund for any payments you’ve already made. In case you wish to avoid being charged for the next month’s membership fee, you are required to cancel your membership before it renews for the subsequent month. No credit, refunds or prorated billing are provided for memberships that are canceled mid-month.',
    pra4:'RICH TV does not offer partial cancellations. Upon cancellation your service will remain active through the end of your paid term.'
  },
   {
    heading:'RICH TV NOTICE/DISCLAIMER FOR FUNDAMENTAL DATA​',
    pra1:'© 2022 Rich TV. All Rights Reserved. The information contained herein: (1) is proprietary to Rich TV and/or its content providers; (2) may not be copied or distributed; and (3) is not warranted to be accurate, complete or timely. Neither Rich TV nor its content providers are responsible for any damages or losses arising from any use of this information. Past performance is no guarantee of future results.',
    
  },
   {
    heading:'DISPUTES',
    pra1:'ALL DISPUTES (EXCEPT ACTIONS FOR INJUNCTIVE RELIEF BROUGHT BY RICH TV) ARISING UNDER THIS AGREEMENT SHALL BE RESOLVED EXCLUSIVELY THROUGH BINDING ARBITRATION. YOU AGREE THAT IN ANY SUCH DISPUTE OR ARBITRATION, YOU WILL ONLY ASSERT CLAIMS IN AN INDIVIDUAL (NON-CLASS, NONREPRESENTATIVE) BASIS, AND THAT YOU WILL NOT SEEK OR AGREE TO SERVE AS A NAMED REPRESENTATIVE IN A CLASS ACTION OR SEEK RELIEF ON BEHALF OF THOSE OTHER THAN YOURSELF. YOU UNDERSTAND THAT BY AGREEING TO THIS SECTION, YOU ARE GIVING UP THE RIGHT TO LITIGATE (OR PARTICIPATE AS A PARTY OR CLASS MEMBER) IN COURT. YOU ALSO AGREE THAT ANY DISPUTE RESOLUTION PROCEEDING WILL ONLY CONSIDER YOUR INDIVIDUAL CLAIMS AND YOU AGREE THAT NO DISPUTE WILL BE HEARD AS A CLASS ACTION, REPRESENTATIVE ACTION OR CONSOLIDATED ACTION. ANY ACTION, PROCEEDING, OR ARBITRATION BROUGHT BY A PARTY PURSUANT TO THIS AGREEMENT OR ANY BREACH THEREOF MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CLAIM OR CAUSE OF ACTION AROSE, WHETHER OR NOT THE PARTY HAD ANY KNOWLEDGE OR NOTICE THEREOF.',
    
  }
]
const Use_terms = () => {
  return (
    <>
      <section className='use_terms'>
        <div className='container'>
        <h1>TERMS OF USE</h1>
        <div className='border_heading'></div>
        <div className='row'>
          <div className='col'>
            {
          use_terms.map((value,index)=>{
            return <Use_privcy heading={value.heading} pra1={value.pra1} pra2={value.pra2} pra3={value.pra3} pra4={value.pra4}/>
          })
        }
          </div>
        </div>
        
      </div>
      </section>
    </>
  )
}

export default Use_terms
