import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const galleryImages = [
  "https://scontent.fccu27-3.fna.fbcdn.net/v/t39.30808-6/512478853_3599015180234610_5590643670117237214_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=7xm_UW-j0PIQ7kNvwGu4IAW&_nc_oc=Adn0G7TSRZ4XH9Q7sum-lD6KtluaTnNbr_7Chb5A_icCtyzlilfa4PXhxZSz1fLGbQ4mD-rUH5XR89anKWCu0UYd&_nc_zt=23&_nc_ht=scontent.fccu27-3.fna&_nc_gid=ia5YS_mY6zmJ1CeOHDF_6g&oh=00_AfqMe4liDxgmQYXGAet9boPSW9baQLk-EVG77K_jUuwjdQ&oe=6975721E",
  "https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/546625949_3690958364373624_8600097440506018320_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p91C0AZB7aAQ7kNvwHpK-ZY&_nc_oc=AdlwaxC3O0ppct8tTpOX4Jz6ogfS77ibAP5McP9_3r6QmPTNXngHZyePXFc5GfQlzet3aCGD7m74EcsfQy3Vxw9-&_nc_zt=23&_nc_ht=scontent.fccu27-2.fna&_nc_gid=0MytsoIgRmAvI26SZ2qlGg&oh=00_AfqLIfAkFl4-OnizO9z_8wzbsAcOVBtI5LbJSZ8-S2sshQ&oe=697580F2",
  "https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/495608039_3534505600018902_3158021435579935548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ISgzCv15ZXAQ7kNvwEwIUfT&_nc_oc=Adm_F0WpvK1_A3uzfhyWvuMmvP9kGkEle0FFoJNafzVuPN7XKyHHx1wBOteDaqgQ1cKxh80npLcU56lQCGWHNdJ9&_nc_zt=23&_nc_ht=scontent.fccu20-1.fna&_nc_gid=khg9qd4XVVXJmk9x0rMYwQ&oh=00_AfrPNJfvnsATMn2osm9XG5i4RXqrHSf25vCtQSlxfvwDYQ&oe=69756929",
  "https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-6/495560682_3535445833258212_7048288697163891942_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oSsixg6zU7IQ7kNvwHED3yl&_nc_oc=AdmDWJe1rJU2TEIF--VtPZr_1C_33HZvO3WSy1G7haFIoLzM0eWP9rzlBcErWc_9Y8tAO0VChpWOkOuR7T3IUQjN&_nc_zt=23&_nc_ht=scontent.fccu27-1.fna&_nc_gid=orM-ElsHhrQDP0h10smrkw&oh=00_AfpKAsAfjn0WYE-6lPM8raflV_gMipTr3i6bm26ebZbXVQ&oe=69757C89",
  "https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/511193231_3598912253578236_5218759373563337846_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SixQ5Mz7otkQ7kNvwH_SfTE&_nc_oc=AdmdLaKM3QooHoq5WtOlu20ajkUBU_sQbPpJ-Jbe5EPwHW29zwy5lqBY7SnHun0Eu_Nuf9kFHJMYFCtsqB2lXjKu&_nc_zt=23&_nc_ht=scontent.fccu20-1.fna&_nc_gid=wSayqQN4GMdelhktug3IxA&oh=00_AfppRDv87NyefEhmMDbk7gi3tX8Yfjt47Fj-BIAOeMMh8Q&oe=697570F8",
  "https://scontent.fccu27-3.fna.fbcdn.net/v/t39.30808-6/518273040_3620546734748121_8582166773864610809_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uk8jFCvaAhoQ7kNvwEx1olw&_nc_oc=AdkVlO9sjMUy3FmDj1LI5JwFHRoLitg788nhsQCFwlPPFzd9HV81otmuBdlSapMObD4kjl1vn44t8WSrrtVQMfBq&_nc_zt=23&_nc_ht=scontent.fccu27-3.fna&_nc_gid=_kz_K6nIGppdG4IoNDV8Yg&oh=00_AfoAayYQsnQ1TLCd_H0Ux1EtLMjkrX_KgwOAdIR3vGHwTQ&oe=6975873A",
];

const Gallery = () => {
  useEffect(() => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
              Our Gallery
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              FITNESS MOMENTS
            </h1>
            <p className="text-muted-foreground text-lg">
              Capturing the energy, dedication, and transformation at H3 FITNESS.
              See our community in action and get inspired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32" id="gallery">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our fitness community through these captured moments of dedication,
              strength, and achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;