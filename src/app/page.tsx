import AboutUs from '@/components/AboutUs';
// import Banner from '@/components/Banner';
// import Events from '@/components/Events';
// import Navbar from '@/components/Navbar';
// import Stakeholders from '@/components/Stakeholders';
// import Faq from '@/components/Faq';
// import Footer from '@/components/Footer';
// import Copyright from '@/components/Copyright';
// import SocialLinks from '@/components/SocialLinks';

export default function Home(): JSX.Element {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-16">
        {/* <Banner /> */}
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="events">
          {/* <Events /> */}
        </div>
        {/* <Stakeholders /> */}
        {/* <Donators /> */}
        <div id="socialLinks">
          {/* <SocialLinks /> */}
        </div>
        <div id="faq">
          {/* <Faq /> */}
        </div>
        {/* <Footer /> */}
        {/* <Copyright /> */}
      </div>
    </div>
  );
}
