"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Plus,
  Pencil,
  Trash2,
  Upload,
  Video,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function VideosPage() {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Mock data - replace with actual data fetching
  const videos = [
    {
      id: 1,
      title: "Introduction to React",
      course: "Web Development",
      duration: "15:30",
      uploadDate: "2024-03-20",
      views: 234,
    },
    {
      id: 2,
      title: "State Management",
      course: "Web Development",
      duration: "20:45",
      uploadDate: "2024-03-19",
      views: 186,
    },
    // Add more videos as needed
  ];

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Add your video upload logic here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate upload

      toast({
        title: "Video uploaded successfully",
        description: "Your video has been uploaded and is now processing.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your video.",
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
          <h1 className="text-3xl font-bold">Videos</h1>
          <p className="text-muted-foreground">
            Manage your course videos
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Upload Video
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload New Video</DialogTitle>
              <DialogDescription>
                Upload a new video for your course. Supported formats: MP4, WebM.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpload}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Video Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter video title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    placeholder="Select course"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="video">Video File</Label>
                  <div className="mt-1 flex justify-center rounded-lg border border-dashed border-input p-6">
                    <div className="text-center">
                      <Video className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="mt-4 flex text-sm leading-6">
                        <label
                          htmlFor="video-upload"
                          className="relative cursor-pointer rounded-md bg-background font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
                        >
                          <span>Upload a file</span>
                          <input
                            id="video-upload"
                            name="video-upload"
                            type="file"
                            className="sr-only"
                            accept="video/*"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        MP4 or WebM up to 2GB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter className="mt-6">
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Video
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Views</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.map((video) => (
              <TableRow key={video.id}>
                <TableCell className="font-medium">{video.title}</TableCell>
                <TableCell>{video.course}</TableCell>
                <TableCell>{video.duration}</TableCell>
                <TableCell>{video.uploadDate}</TableCell>
                <TableCell>{video.views}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}