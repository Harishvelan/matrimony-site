import Hero from '../components/Hero';
import createBiodata from '../components/CreateBiodata';
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
      <Header/>
      <Hero />
      <createBiodata/>
      <CustomerReviews />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <WelcomeSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
