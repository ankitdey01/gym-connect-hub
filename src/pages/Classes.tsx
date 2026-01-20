import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Flame, Zap, Heart, Dumbbell, Timer, Users } from "lucide-react";

const allClasses = [
  {
    id: "hiit",
    name: "Weight Training",
    description: "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness. Short bursts of intense exercise followed by brief recovery periods.",
    icon: Flame,
    duration: "45 min",
    level: "All Levels",
    schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM",
    capacity: 20,
  },
  {
    id: "strength",
    name: "Personal Training",
    description: "Build functional strength and raw power through compound movements and progressive overload. Perfect for those looking to increase muscle mass and strength.",
    icon: Dumbbell,
    duration: "60 min",
    level: "Intermediate",
    schedule: "Tue, Thu, Sat - 7:00 AM & 5:00 PM",
    capacity: 15,
  },
  {
    id: "cardio",
    name: "Cardio Training",
    description: "Heart-pumping workouts combining various cardio exercises to boost endurance, burn fat, and improve overall cardiovascular health.",
    icon: Heart,
    duration: "50 min",
    level: "All Levels",
    schedule: "Daily - 8:00 AM & 12:00 PM",
    capacity: 25,
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "Functional movements performed at high intensity. Combines elements of weightlifting, gymnastics, and metabolic conditioning.",
    icon: Zap,
    duration: "60 min",
    level: "Advanced",
    schedule: "Mon-Sat - 5:30 AM & 5:30 PM",
    capacity: 12,
  },
  {
    id: "yoga",
    name: "Power Yoga",
    description: "Dynamic yoga practice that builds strength, flexibility, and mental focus. Perfect for recovery days or as a complement to intense training.",
    icon: Timer,
    duration: "75 min",
    level: "All Levels",
    schedule: "Tue, Thu, Sun - 9:00 AM",
    capacity: 20,
  },
  {
    id: "bootcamp",
    name: "Diet and Nutrition",
    description: "Comprehensive nutrition guidance and meal planning to fuel your fitness goals. Learn about macronutrients, micronutrients, and sustainable eating habits.",
    icon: Users,
    duration: "55 min",
    level: "Intermediate",
    schedule: "Mon, Wed, Fri - 5:00 AM & 7:00 PM",
    capacity: 30,
  },
];

const Classes = () => {
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
              Our Programs
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              FITNESS CLASSES
            </h1>
            <p className="text-muted-foreground text-lg">
              From high-intensity training to mindful movement, find the perfect 
              class to match your fitness goals and schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allClasses.map((classItem, i) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/classes/${classItem.id}`}
                  className="group block h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <classItem.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-3">
                    {classItem.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level</span>
                      <span className="text-primary">{classItem.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="text-foreground">{classItem.capacity} people</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-2">Schedule</div>
                    <div className="text-foreground text-sm">{classItem.schedule}</div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
