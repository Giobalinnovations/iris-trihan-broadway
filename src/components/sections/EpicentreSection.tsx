'use client';

import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

interface Highlight {
  image?: string;
  text: string;
}

const highlights: Highlight[] = [
  {
    image: 'acress_tscbyl',
    text: 'Spread over 2.8 acres',
  },
  {
    image: 'peoples_aubp5r',
    text: '3 lakh+ people in the vicinity',
  },
  {
    image: 'brands_upc8w2',
    text: 'More than 30 Brands onboard',
  },
  {
    text: 'More than 1 Lakh* footfall in a week',
    image: 'footfal_ri5wc6',
  },
  {
    text: 'Low maintenance cost',
    image: 'cost_b5po9z',
  },
  {
    text: 'Parking space over 400',
    image: 'parking_xevqlm',
  },
  {
    text: '1000 ft. Frontage',
    image: 'front_hgsuc9',
  },
  {
    text: 'Bang on Dwarka Expressway',
    image: 'expresway_vdn7fz',
  },
];

const HighlightCard = ({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) => {
  if (highlight.image) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <CloudinaryImage
            src={highlight.image}
            alt={highlight.text}
            width={400}
            height={300}
            remove={{
              prompt: 'remove text',
            }}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>

        <div className="absolute inset-0 flex items-end p-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-white font-semibold text-lg md:text-xl relative z-10 transform group-hover:translate-y-[-8px] transition-transform duration-300"
          >
            {highlight.text}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-card to-card/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

      <div className="relative p-8 h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-primary/40 to-transparent" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-foreground font-semibold text-lg md:text-xl text-center group-hover:text-primary transition-colors duration-300"
        >
          {highlight.text}
        </motion.p>
      </div>
    </motion.div>
  );
};

const EpicentreSection = () => {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-background to-muted relative overflow-hidden"
      id="key-highlights"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary inline-block border-b-2 border-primary pb-2"
            >
              Key Highlights
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Iris Broadway the perfect destination for your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.text}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Epicentre of New Gurugram
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed text-justify">
              From a business perspective, retailing is the key driver of sales
              through direct marketing activities and exhibition of products to
              a wider audience. Retail stores not only bring goods closer to a
              larger audience but also deeply influence purchase decisions and
              help enhance a product&apos;s image for the brand. Retailing
              involves the skill to communicate products and engage with the
              ultimate consumers at a personal level. This makes the disbursal
              of large quantities of goods more efficient as it enables
              businesses to tap into a far wider map of potential buyers
              effectively. The importance of retailing is integral in shaping
              businesses across industries and simply cannot be understated.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EpicentreSection;
