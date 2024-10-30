"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload } from "lucide-react";

// Mock data - replace with actual data from your backend
const existingCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development",
    price: 49.99,
    level: "Beginner",
    duration: "10 hours",
    enrolled: 234,
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Master advanced React concepts",
    price: 69.99,
    level: "Advanced",
    duration: "8 hours",
    enrolled: 186,
  },
];

export default function CoursesPage() {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    level: "",
    thumbnail: null as File | null,
  });

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Add your course creation logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Course created successfully",
        description: "Your new course has been created and is ready for content.",
      });
    } catch (error) {
      toast({
        title: "Error creating course",
        description: "There was an error creating your course.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">
            Create and manage your courses
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Create New Course</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new course. You can add content after creating the course.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateCourse}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter course title"
                    value={newCourse.title}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, title: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter course description"
                    value={newCourse.description}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, description: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="49.99"
                      value={newCourse.price}
                      onChange={(e) =>
                        setNewCourse({ ...newCourse, price: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="level">Level</Label>
                    <Select
                      value={newCourse.level}
                      onValueChange={(value) =>
                        setNewCourse({ ...newCourse, level: value })
                      }
                    >
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Course Thumbnail</Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload thumbnail
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            thumbnail: e.target.files?.[0] || null,
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? "Creating..." : "Create Course"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {/* Existing Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Courses</CardTitle>
            <CardDescription>
              Manage your current course offerings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Enrolled</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {existingCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell>{course.level}</TableCell>
                    <TableCell>${course.price}</TableCell>
                    <TableCell>{course.duration}</TableCell>
                    <TableCell>{course.enrolled} students</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}