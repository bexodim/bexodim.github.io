import React from 'react';
import { Navigation } from "./navigation"
import { Hero } from "./hero"
import { Services } from "./services"
import { WorkingModels } from "./working-models"
import { Divider } from "./divider"
import { About } from "./about"
import { ContactForm } from "./contact-form"
import { Footer } from "./footer"

function MainContent() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fff]">
        <Hero />
        <Divider />
        <Services />
        <Divider />
        <WorkingModels />
        <Divider />
        <About />
        <Divider />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default MainContent;
