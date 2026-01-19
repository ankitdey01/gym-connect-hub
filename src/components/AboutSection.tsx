import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-gym.jpg";

const features = [
  "State-of-the-art equipment",
  "Personalized training programs",
  "Nutrition counseling",
  "Recovery zone with sauna",
  "24/7 facility access",
  "Group fitness classes",
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Training at IronForge"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary rounded-2xl p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              MORE THAN JUST A GYM
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              IronForge is a community of dedicated individuals who believe in pushing boundaries. 
              Founded in 2009, we've helped thousands transform their lives through fitness. 
              Our mission is simple: provide the tools, environment, and support you need to 
              become the strongest version of yourself.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
