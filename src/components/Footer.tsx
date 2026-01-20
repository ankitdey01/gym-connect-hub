import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl tracking-wider text-foreground">
                H3 FITNESS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body and mind at our state-of-the-art fitness facility. 
              Join the community that pushes limits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Classes", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>5 No, 51275, Kataganj, Bedibhawan, Kalyani, West Bengal 741250</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>9062841189</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@H3 FITNESS.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>6:00 AM - 9:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>Holiday</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>6:00 AM - 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
  <p className="text-sm text-muted-foreground">
    © 2026 H3 FITNESS. All rights reserved.
  </p>
  <div className="flex items-center gap-4">
    <a
      href="https://www.instagram.com/himadri.chakraborty.737/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Instagram className="h-5 w-5" />
    </a>
    <a
      href="https://www.facebook.com/himadri.chakraborty.737"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Facebook className="h-5 w-5" />
    </a>
    <a
      href="tel:7003175525"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Phone className="h-5 w-5" />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}
