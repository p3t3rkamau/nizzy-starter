import { BentoGridLayout } from '@/components/BentoGrid'
import { MeteorsDemo } from '@/components/MeteorsCard'
import { HeroScrollDemo } from '@/components/containerScroll'
import { FloatingNavDemo } from '@/components/floatingNavBar'
import { Footer } from '@/components/footer'
import { GoogleGeminiEffectDemo } from '@/components/geminieffect'
import { Header } from '@/components/header'
import { InfiniteMovingCardsDemo } from '@/components/infinitemovingcards'
import { Language } from '@/components/languages'
import { PricingCard } from '@/components/pricing-card'
import { Testimonials } from '@/components/testimonials'
import { WobbleCardDemo } from '@/components/wobblecard'
import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'
import Stats from '@/components/stats'
export default function Home() {
  return (
    <>
      <Hero/>
      <main className="w-full max-w-6xl px-6 space-y-40">
        
        <Header />
       
        <FloatingNavDemo/>
        <HeroScrollDemo/>
        <Language />
        <WobbleCardDemo/>
        <InfiniteMovingCardsDemo/>
        <Testimonials />
        <Stats/>
        
        <MeteorsDemo/>
     

      </main>
      <Footer />
    </>
  )
}
