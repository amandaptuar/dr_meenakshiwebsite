import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import StatsBar from '../components/StatsBar/StatsBar';
import AboutSection from '../components/AboutSection/AboutSection';
import TransformBanner from '../components/TransformBanner/TransformBanner';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import RoadmapSection from '../components/RoadmapSection/RoadmapSection';
import ClientsSaySection from '../components/ClientsSaySection/ClientsSaySection';
import FooterCTA from '../components/FooterCTA/FooterCTA';
import Footer from '../components/Footer/Footer';
import { ModalProvider } from '../context/ModalContext';
import AppointmentModal from '../components/AppointmentModal/AppointmentModal';

const Home = () => {
  return (
    <ModalProvider>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <TransformBanner />
      <TestimonialsSection />
      <RoadmapSection />
      <ClientsSaySection />
      <FooterCTA />
      <Footer />
      <AppointmentModal />
    </ModalProvider>
  );
};

export default Home;
