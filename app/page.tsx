import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  Users,
  PlayCircle,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Courses",
      description:
        "Access a wide range of courses designed to help you master new skills.",
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: "HD Video Content",
      description:
        "Learn with high-quality video lessons that you can watch anytime.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of practical experience.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Self-Paced Learning",
      description:
        "Study at your own pace and track your progress as you learn.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Transform Your Future with
            <span className="text-primary"> Online Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access premium educational content and learn at your own pace. Join
            thousands of students already learning on our platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/courses">
                Browse Courses
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/register">
                Get Started
                <GraduationCap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose EduStream?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card text-card-foreground hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of learners and start your educational journey
            today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-accent"
            asChild
          >
            <Link href="/register">
              Create Free Account
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}