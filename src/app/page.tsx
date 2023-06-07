
import GetInTouch from '@/compontents/GetInTouch/GetInTouch'
import IntroductionPage from '@/compontents/indtriodutionSection/IntroductionPage'
import PeojectsPage from '@/compontents/projectsSection/PeojectsPage'
import HowWeCanHelp from '@/compontents/whatWeOffer/HowWeCanHelp'
import WhatWeOffer from '@/compontents/whoAreWe/WhatWeOffer'
import WhoAreWe from '@/compontents/whoAreWe/WhoAreWe'
import WhoWeAreMobile from '@/compontents/whoAreWe/WhoWeAreMobile'


export default function Home() {
  return (
    <main className="overflow-x-hidden lg:px-5">
      <IntroductionPage />
      <WhoWeAreMobile />
      <WhoAreWe />

      <PeojectsPage />
      <WhatWeOffer></WhatWeOffer>

      <HowWeCanHelp></HowWeCanHelp>
      {/* <GetInTouch /> */}

    </main>
  )
}
