import React from 'react';
import Hero from '../components/Hero';
import CreateBiodata from '../components/CreateBiodata';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import WelcomeSection from '../components/WelcomeSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CustomerReviews from '../components/CustomerReviews';

function Home() {
  return (
    <div>
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="welcome">
        <WelcomeSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="reviews">
        <CustomerReviews />
      </section>

      {/* <section id="testimonials">
        <Testimonials />
      </section> */}

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="create-biodata">
        <CreateBiodata />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
