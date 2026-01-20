import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    { icon: MapPin, label: "Address", value: "5 No, 51275, Kataganj, Bedibhawan, Kalyani, West Bengal 741250" },
    { icon: Phone, label: "Phone", value: "090628 41189" },
    { icon: Mail, label: "Email", value: "info@H3 FITNESS.com" },
    { icon: Clock, label: "Hours", value: "Mon-Sun: 6AM - 9:30PM (Fri Holiday)" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
              Contact Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to start your fitness journey? Have questions about our memberships 
              or classes? We're here to help you every step of the way.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl text-foreground mb-6">
              Find Us
            </h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.5!2d88.4770525!3d22.9535893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895917f631dab:0x87a36634a370b77d!2sH3+Fitness+Gym!5e0!3m2!1sen!2s!4v!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
