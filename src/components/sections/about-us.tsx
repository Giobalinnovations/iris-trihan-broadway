'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <Section id="about" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Modern Header */}
          <div className="relative mb-20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 left-0 h-1 bg-primary"
            />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              About
              <span className="text-primary"> Us</span>
            </h2>
          </div>

          {/* Content with Modern Layout */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-5 border-l-2 border-primary/30"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary" />
              <p className="text-xl leading-relaxed text-foreground/80">
                Renowned project by Trehan IRIS, Iris Broadway redefines
                contemporary commercial and residential life right in the middle
                of New Gurugram. Strategically situated in Sector 85-86, this
                2.8-acre property is the only mall in the area with an amazing
                1,000 ft. frontage to serve a vibrant catchment of over 300,000
                people. Iris Broadway has a smooth mix of shopping,
                entertainment, and hotels, all geared at providing convenience,
                connection, and lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-5 border-l-2 border-primary/30"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary" />
              <p className="text-xl leading-relaxed text-foreground/80">
                The project offers a remarkable variety of venues, ranging from
                fine dining restaurants to luxury retail stores to entertainment
                choices. Anchored by well-known companies, Iris Broadway is a
                go-to location for both consumers and businesses alike. The 79
                fully equipped Soho Suites, meant to mix home comfort with
                professional utility, add to their attractiveness. Ideal for
                business travellers and young professionals, these suites span
                555 sq. ft. to 821 sq. ft. and include careful design equipped
                with a kitchenette and long balcony.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative pl-5 border-l-2 border-primary/30"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary" />
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-foreground/80">
                  Iris Broadway guarantees easy access by being strategically
                  close to a projected metro station and with great connection
                  to NH-8 and the Dwarka Motorway. Among its contemporary
                  conveniences are over 600 parking spots over surface and
                  multi-level basements, a 4,500 square foot banquet room, a
                  rooftop swimming pool, a gym, and a spa. Further improving the
                  convenience and utility of the property are laundry
                  facilities, distinct access and departure points, and
                  dedicated service levels.
                </p>
                <p className="text-xl leading-relaxed text-foreground/80">
                  With 500,000 average monthly visitors, Iris Broadway is a
                  dynamic lifestyle attraction rather than just a commercial
                  centre. Iris Broadway is the best urban experience in
                  Gurugram, as it provides a flawless mix of elegance and
                  utility for shopping, eating, entertainment, or lodging in the
                  well-appointed Soho Suites.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
