import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/69fa64a6-b117-4b02-9e2b-021f13758da1/bucket/4c9ebc61-616a-492e-9a5a-551126c1ce5b.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <Expertise />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}