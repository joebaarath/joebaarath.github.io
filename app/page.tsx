import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TimelineSection from '@/components/TimelineSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ContactSection />
    </Layout>
  )
}
