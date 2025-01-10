'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';
import CloudinaryImage from '../cloudinary-image';

interface USP {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

interface HeroProps {
  projectName: string;
  location: string;
  price: string;
  heroImage: string;
  usps?: USP[]; // Optional USPs array
  showBrochureCTA?: boolean; // Optional CTA flag
}

const Hero: React.FC<HeroProps> = ({
  projectName,
  location,
  price,
  heroImage,
  usps,
  showBrochureCTA = false, // Default to true for backward compatibility
}) => {
  return (
    <section className="relative min-h-[100svh] w-full">
      {/* Background Image with Cloudinary */}
      <div className="absolute inset-0">
        <CloudinaryImage
          src={heroImage}
          alt={`${projectName} Hero Image`}
          width={1920}
          height={1080}
          priority
          quality={90}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 100vw,
                 100vw"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content Container */}
      <div className="relative h-full w-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-8 py-24 lg:py-16">
            {/* Left Column - Project Info */}
            <div className="w-full lg:w-1/2 text-white space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                {projectName}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <LocationIcon className="w-6 h-6 flex-shrink-0" />
                  <p className="text-lg md:text-xl">{location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <PriceIcon className="w-6 h-6 flex-shrink-0" />
                  <p className="text-lg md:text-xl">{price}</p>
                </div>

                {/* USPs Section */}
                {usps && usps.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 xs:grid-cols-2 gap-4 mt-6 border-t border-white/20 pt-6"
                  >
                    {usps.map((usp, index) => (
                      <motion.div
                        key={usp.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="text-primary w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                          {usp.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-semibold truncate">
                            {usp.title}
                          </h3>
                          {usp.description && (
                            <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                              {usp.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Optional Download Brochure CTA */}
                {showBrochureCTA && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-4 text-base sm:text-lg"
                  >
                    Download Brochure
                  </motion.button>
                )}
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-1/2 max-w-md"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Register Your Interest
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon components
const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
  </svg>
);

const PriceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7h6m-6 4h6m-6 4h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 11h-4v6"
    />
  </svg>
);

export default Hero;
