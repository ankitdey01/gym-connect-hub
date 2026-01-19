import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, BarChart3, Calendar, CheckCircle2 } from "lucide-react";
import { Flame, Zap, Heart, Dumbbell, Timer } from "lucide-react";

const classData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  icon: typeof Flame;
  duration: string;
  level: string;
  schedule: string;
  capacity: number;
  benefits: string[];
  whatToBring: string[];
}> = {
  hiit: {
    name: "HIIT Training",
    tagline: "Maximum Results, Minimum Time",
    description: "High-intensity interval training is one of the most efficient ways to burn calories and improve cardiovascular fitness. Our HIIT classes alternate between intense bursts of activity and fixed periods of less-intense activity or rest. Each session is designed to push your limits while being adaptable to all fitness levels.",
    icon: Flame,
    duration: "45 min",
    level: "All Levels",
    schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM",
    capacity: 20,
    benefits: ["Burns more calories in less time", "Boosts metabolism for hours after", "Improves cardiovascular health", "No equipment required", "Scalable for all fitness levels"],
    whatToBring: ["Water bottle", "Towel", "Athletic shoes", "Comfortable workout clothes"],
  },
  strength: {
    name: "Strength & Power",
    tagline: "Build Your Foundation",
    description: "Our Strength & Power program focuses on compound movements and progressive overload to help you build functional strength and increase muscle mass. Whether you're looking to get stronger for sports, daily activities, or aesthetic goals, our expert trainers will guide you through proper technique and programming.",
    icon: Dumbbell,
    duration: "60 min",
    level: "Intermediate",
    schedule: "Tue, Thu, Sat - 7:00 AM & 5:00 PM",
    capacity: 15,
    benefits: ["Increases muscle mass", "Boosts resting metabolism", "Improves bone density", "Enhances functional strength", "Builds mental toughness"],
    whatToBring: ["Lifting shoes (optional)", "Wrist wraps (optional)", "Water bottle", "Workout log"],
  },
  cardio: {
    name: "Cardio Blast",
    tagline: "Elevate Your Endurance",
    description: "Cardio Blast combines various cardiovascular exercises into one heart-pumping session. From jump rope to cycling intervals, boxing drills to dance-inspired movements, each class is designed to improve your endurance, burn fat, and boost your overall cardiovascular health.",
    icon: Heart,
    duration: "50 min",
    level: "All Levels",
    schedule: "Daily - 8:00 AM & 12:00 PM",
    capacity: 25,
    benefits: ["Improves heart health", "Increases stamina", "Burns significant calories", "Reduces stress", "Boosts energy levels"],
    whatToBring: ["Heart rate monitor (optional)", "Water bottle", "Athletic shoes", "Towel"],
  },
  crossfit: {
    name: "CrossFit",
    tagline: "Forging Elite Fitness",
    description: "CrossFit is a strength and conditioning program consisting of constantly varied functional movements performed at high intensity. Our classes combine elements of weightlifting, gymnastics, and metabolic conditioning to create a comprehensive fitness experience that prepares you for any physical challenge.",
    icon: Zap,
    duration: "60 min",
    level: "Advanced",
    schedule: "Mon-Sat - 5:30 AM & 5:30 PM",
    capacity: 12,
    benefits: ["Develops overall fitness", "Builds functional strength", "Creates community accountability", "Improves athletic performance", "Constantly varied workouts"],
    whatToBring: ["CrossFit shoes", "Knee sleeves (optional)", "Wrist wraps", "Water bottle", "Chalk (optional)"],
  },
  yoga: {
    name: "Power Yoga",
    tagline: "Strength Through Stillness",
    description: "Power Yoga is a dynamic, fitness-based approach to vinyasa-style yoga. Our classes emphasize strength building, flexibility, and mental focus through a series of flowing poses. Perfect as a standalone practice or as recovery from intense training.",
    icon: Timer,
    duration: "75 min",
    level: "All Levels",
    schedule: "Tue, Thu, Sun - 9:00 AM",
    capacity: 20,
    benefits: ["Increases flexibility", "Builds core strength", "Reduces stress and anxiety", "Improves balance", "Enhances mind-body connection"],
    whatToBring: ["Yoga mat", "Water bottle", "Comfortable stretchy clothes", "Yoga blocks (optional)"],
  },
  bootcamp: {
    name: "Boot Camp",
    tagline: "Train Like a Warrior",
    description: "Our Boot Camp classes deliver military-inspired training that combines strength, cardio, and agility drills into one intense session. These group workouts build physical fitness while fostering team spirit and mental toughness.",
    icon: Users,
    duration: "55 min",
    level: "Intermediate",
    schedule: "Mon, Wed, Fri - 5:00 AM & 7:00 PM",
    capacity: 30,
    benefits: ["Full-body conditioning", "Builds mental toughness", "Creates team camaraderie", "Varied and challenging", "Burns maximum calories"],
    whatToBring: ["Water bottle", "Towel", "Athletic shoes", "Gloves (optional)", "Positive attitude"],
  },
};

const ClassDetail = () => {
  const { classId } = useParams<{ classId: string }>();
  const classInfo = classData[classId || "hiit"];

  if (!classInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Class Not Found</h1>
          <Link to="/classes" className="text-primary hover:underline">
            Back to Classes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = classInfo.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Classes
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
              <IconComponent className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
                {classInfo.name}
              </h1>
              <p className="text-xl text-primary font-medium">{classInfo.tagline}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "Duration", value: classInfo.duration },
              { icon: BarChart3, label: "Level", value: classInfo.level },
              { icon: Users, label: "Capacity", value: `${classInfo.capacity} people` },
              { icon: Calendar, label: "Schedule", value: classInfo.schedule },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-foreground font-medium text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl text-foreground mb-6">About This Class</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {classInfo.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-display text-3xl text-foreground mb-6">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {classInfo.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-display text-xl text-foreground mb-4">What to Bring</h3>
                <ul className="space-y-3">
                  {classInfo.whatToBring.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-primary rounded-2xl p-6 text-center"
              >
                <h3 className="font-display text-2xl text-primary-foreground mb-2">
                  Ready to Start?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-6">
                  Join this class and transform your fitness
                </p>
                <Button variant="heroOutline" size="lg" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">Book Now</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassDetail;
