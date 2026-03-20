import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../sections/Banner";
import Discover from "../sections/Discover";
import Features from "../sections/Features";
import Menu from "../sections/Menu";
import Promo from "../sections/Promo";
import Subscribe from "../sections/Subscribe";
import Testimonials from "../sections/Testimonials";


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Discover />
      <Menu />
      <Features />
      <Promo />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;