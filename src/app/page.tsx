import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/scroll-to-top';
import AboutUs from '@/components/sections/about-us';
import EpicentreSection from '@/components/sections/EpicentreSection';
import Location from '@/components/sections/location';
import dynamic from 'next/dynamic';
import {
  PreLeasingIcon,
  RentalIcon,
  ConsultationIcon,
  LocationAdvantageIcon,
} from '@/components/icons/usp-icons';

const FloorPlansGallery = dynamic(
  () => import('@/components/sections/floor-plans-gallery'),
  {
    loading: () => (
      <div className="h-[600px] flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const usps = [
  {
    icon: <PreLeasingIcon className="w-full h-full" />,
    title: 'Pre-Leasing',
    description: 'Secure your space early',
  },
  {
    icon: <RentalIcon className="w-full h-full" />,
    title: 'Rental Income From Day One',
    description: 'Immediate returns on investment',
  },
  {
    icon: <ConsultationIcon className="w-full h-full" />,
    title: 'Book Free Consultation',
    description: 'Expert guidance available',
  },
  {
    icon: <LocationAdvantageIcon className="w-full h-full" />,
    title: 'Prime Location',
    description: 'Strategic positioning for success',
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        projectName="Iris Broadway"
        location="Sector 85-86, Gurugram"
        price="Starting from ₹70 Lakhs*"
        heroImage="TREHANIRISBROADWA_dxdc4w"
        usps={usps}
        showBrochureCTA={false}
      />
      <AboutUs />
      <EpicentreSection />
      <FloorPlansGallery />
      <Location />
      <ScrollToTop />
    </main>
  );
}
