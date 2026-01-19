import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Zap, Heart, Dumbbell } from "lucide-react";

const classes = [
  {
    id: "hiit",
    name: "HIIT Training",
    description: "High-intensity intervals for maximum calorie burn",
    icon: Flame,
    duration: "45 min",
    level: "All Levels",
  },
  {
    id: "strength",
    name: "Strength & Power",
    description: "Build muscle and increase raw strength",
    icon: Dumbbell,
    duration: "60 min",
    level: "Intermediate",
  },
  {
    id: "cardio",
    name: "Cardio Blast",
    description: "Heart-pumping workouts to boost endurance",
    icon: Heart,
    duration: "50 min",
    level: "All Levels",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "Functional movements at high intensity",
    icon: Zap,
    duration: "60 min",
    level: "Advanced",
  },
];

export function ClassesSection() {
  return (
    <section className="py-20 md:py-32 bg-card" id="classes">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium uppercase tracking-wider mb-6">
            Our Classes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            FIND YOUR WORKOUT
          </h2>
          <p className="text-muted-foreground text-lg">
            From high-intensity training to strength building, we offer a variety 
            of classes to match your fitness goals.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem, i) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/classes/${classItem.id}`}
                className="group block h-full bg-secondary rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <classItem.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {classItem.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {classItem.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{classItem.duration}</span>
                  <span className="text-primary">{classItem.level}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
