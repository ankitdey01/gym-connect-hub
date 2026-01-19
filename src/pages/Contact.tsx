import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
              Let's Connect
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              CONTACT US
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to start your fitness journey? Have questions about memberships 
              or want to schedule a tour? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              FIND US
            </h2>
            <p className="text-muted-foreground">
              Visit our state-of-the-art facility in the heart of the city
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary rounded-2xl h-80 flex items-center justify-center border border-border"
          >
            <p className="text-muted-foreground">Map integration coming soon</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
