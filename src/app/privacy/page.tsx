import Image from 'next/image'
import { FC } from 'react'


import arrow from "@/../public/arrow.svg"
import Link from 'next/link'
interface PrivacyProps {

}
let mbottom = "mb-7 "
const Privacy: FC<PrivacyProps> = ({ }) => {
  return <section className='py-32 '>
    <Link prefetch={false} href={`/contact`}>
      <span className='text-lg relative pl-10 underline mb-20 block  tracking-wide'>

        <Image className='rotate-180 scale-75 -left-5 -top-2.5 absolute tracking-tight' src={arrow} alt={``}></Image> Back to contacts
      </span>
    </Link>
    <div>
      <h2 className=' font-bold my-20 text-5xl'>Privacy Policy</h2>
    </div>
    <div className=' max-w-4xl'>
      <p className='leading-7 mb-7  '>We take your privacy seriously and are committed to respect and safeguard it. The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR) and in accordance with the country-specific data protection regulations applicable to UXIS. </p>
      <p className='leading-7  mb-7 '>By means of this data protection declaration, our agency would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled. </p>
      <p className='leading-7  mb-7 '> As the data controller, UXIS has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. This includes the use of encryption, pseudonymisation, and restricting our employee access to your data to the minimum.</p>

    </div>
    <div className='font-bold text-2xl mb-10'>
      What information we may collect and process?
    </div>
    <div className='max-w-4xl'>
      <p className={`${mbottom}`}> We may collect and process personal information from you in the course of our business, including through your use of our website; when you communicate with us via email or other channels; when you sign up for or request that we send you newsletters, alerts, or other materials; when you sign up for a meeting, when you submit an application for a position with us; when you engage our services or as a result of your relationship with one or more of our staff and clients; and when you respond to our communications or requests for information.</p>
      <p className={`${mbottom}`}>  The personal information that we may collect and process includes:</p>
      <p className={`${mbottom}`}> -  Basic information, such as your name (including name prefix or title), the company you work or worked for;

        -  Contact information, such as your postal address, email address and phone number(s);

        -  Financial information, such as payment-related information;

        -  Technical information, such as information from your visits to our website or applications or in relation to materials and communications we send to you electronically;

        -  Information you provide to us for the purposes of attending meetings and events;

        -  Identification and background information provided by you or collected as part of our business processes.
      </p>
      <p className={`${mbottom}`}>

        Third party services like Google, Facebook, Twitter may provide us with certain information about you when you link/connect/login to any third party provider. The amount of information may vary and can be/is controlled by that service provider or by you via privacy settings controls available in the account settings of that service provider.

      </p>


      <div className='font-bold text-3xl mb-16'>
        How we may obtain your personal information?
      </div>
      <div className='font-bold text-xl mb-4'> Personal information you provide to us </div>
      <p className={`${mbottom}`}>

        Third party services like Google, Facebook, Twitter may provide us with certain information about you when you link/connect/login to any third party provider. The amount of information may vary and can be/is controlled by that service provider or by you via privacy settings controls available in the account settings of that service provider.

      </p>
      <div className='font-bold  mb-4 text-xl'>Information we may collect automatically </div>
      <p className={`${mbottom}`}>

        Visiting our website does not require you to provide any personally identifiable information, such as your name, address, e-mail address or phone number. When you visit our website, we automatically collect certain information, which, however, does not allow us to identify you. This information may include the following:

      </p>
      <div className='font-bold  mb-4 text-xl'> Cookies </div>
      <p className={`${mbottom}`}>

        We use technologies like cookies and pixel tags to provide, improve, protect, and promote our Services. For example, cookies help us with things like remembering your username for your next visit, understanding how you are interacting with our Services, and improving them based on that information. You can set your browser to not accept cookies, but this may limit your ability to use the Services. You may find more information about cookies here. You may disable cookies by your browser settings or by clicking here.
      </p>
      <p className={`${mbottom}`}> We rely on our legitimate interest to ensure technical functionality of the website when collecting your cookies data.     </p>
      <p className={`${mbottom}`}>    We do not share or transfer the collected information from our website with the third parties.   </p>

      <div className='font-bold  mb-4 text-xl'> Browsing statistics </div>

      <p className={`${mbottom}`}> We collect information about the websites’ content mostly viewed by the visitors, frequency of the connections to the website, software and hardware exploited to visit our website, geography of our visitors. This information enables us to understand the manner how you (our visitor) work with our website. In order to obtain such information we employ Google Analytics (the detailed information about this tool is available here). You may disable any data collections by this tool at your discretion as instructed here.     </p>

      <div className='font-bold  mb-4 text-xl'>Logs </div>


      <p className={`${mbottom}`}>   The hardware of our website hosting provider may record requests made by the visitors to the website, the information on software and hardware exploited to visit our website, IP address assigned as well as timing related to access. We use this information to enhance the security of our website. We rely on our legitimate interest to ensure security of our website when collecting your logs data.  </p>

      <div className='font-bold  mb-4 text-xl'>Google Analytics </div>


      <p className={`${mbottom}`}>  Weblium websites are using Google Analytics, a web analytics service designed by Google, Inc. (“Google”). Google Analytics software uses cookies to analyze users’ behavior. All data (i.e. your activity within Weblium websites) is gathered by cookies and stored on Google servers in the United States.

        Google in its turn uses this data to evaluate user behavior in general, compile reports for site managers as well as providing data to services relating to website activity and internet usage. Google may transfer various data to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.

        In no way, Google will associate your IPaddress with any other data held by Google. In case you don’t want to provide Google with the browsing data you can block the use of cookies via your browser settings. More information on Google analytics opt-out, https://www.google.com/intl/en/policies/privacy/, and http://www.google.com/analytics/terms/us.html.

        Google Analytics is explained under the following link https://www.google.com/analytics/. </p>

      <div className='font-bold  mb-4 text-2xl'>How we may use your personal information? </div>

      <p className={`${mbottom}`} > We collect and process personal information about you in a number of ways, including through your use of our website and in the provision of services by us. We use that information: </p>

      <p className={`${mbottom}`}>-  To respond to your requests and provide you with services that you request; </p>
      <p className={`${mbottom}`}>  -  To provide and improve this website, including auditing and monitoring its use;</p>
      <p className={`${mbottom}`}>  -  To manage and administer our relationship with you including to receive feedbacks and maintain our list of contacts;</p>
      <p className={`${mbottom}`}>  -  To assess the quality of our services and the effectiveness of our promotional campaigns, and publications;</p>
      <p className={`${mbottom}`}> -  For the purposes of recruitment.</p>


      <div className='font-bold  mb-4 text-2xl'> Changes to this policy</div>
      <p className={`${mbottom}`}>
        We reserve the right to update this policy from time to time. Therefore, we encourage you to periodically review this page. If we make any material changes in the way we collect, use, and/or share the personal information that you have provided, we will notify you by posting notice of the changes in a clear and conspicuous manner on our website.
      </p>

      <div className='font-bold  mb-4 text-2xl'> Contact us</div>
      <p className={`${mbottom} `}>
        If you have any questions about this Privacy Policy, please contact us:
        <br />
        <span className='underline'> contact@unitmk.com</span>
      </p>
      <Link href={`/`}>
        <span className='text-lg relative pl-10  underline  block  tracking-wide'>

          <Image className='rotate-180  scale-75 -left-5 -top-2.5 absolute tracking-tight' src={arrow} alt={``}></Image> Back to contacts
        </span>
      </Link>

    </div>



  </section >
}

export default Privacy