import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Users } from "lucide-react";

// Mock data - replace with actual data fetching
const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript",
    instructor: "John Doe",
    duration: "10 hours",
    students: 1234,
    price: 49.99,
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Master advanced React concepts and patterns",
    instructor: "Jane Smith",
    duration: "8 hours",
    students: 856,
    price: 69.99,
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  // Add more courses as needed
];

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Available Courses</h1>
          <p className="text-muted-foreground mt-2">
            Browse our selection of premium courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <div className="relative h-48 w-full">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    {course.students.toLocaleString()} students
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  ${course.price.toFixed(2)}
                </span>
                <Button>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}