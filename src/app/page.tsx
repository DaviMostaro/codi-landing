import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyFullStack } from "@/components/WhyFullStack";
import { AboutCourse } from "@/components/AboutCourse";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Form } from "@/components/Form";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="">
        <Header />
      </header>

      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="why-full-stack">
          <WhyFullStack />
        </section>
        <section id="about-course">
          <AboutCourse />
        </section>
        <section id="what-you-will-learn">
          <WhatYouWillLearn />
        </section>
        <section id="form">
          <Form />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="">
        {/* <Footer /> */}
      </footer>
    </div>
  );
}
