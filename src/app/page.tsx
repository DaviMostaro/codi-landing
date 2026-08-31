import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="">
        <Header />
      </header>

      <main className="pt-20">
        <section id="hero">
          {/* <Hero /> */}
        </section>
        <section id="why-full-stack">
          {/* <WhyFullStack /> */}
        </section>
        <section id="about-course">
          {/* <AboutCourse /> */}
        </section>
        <section id="what-you-will-learn">
          {/* <WhatYouWillLearn /> */}
        </section>
        <section id="form">
          {/* <Form /> */}
        </section>
        <section id="contact">
          {/* <Contact /> */}
        </section>
      </main>

      <footer className="">
        {/* <Footer /> */}
      </footer>
    </div>
  );
}
