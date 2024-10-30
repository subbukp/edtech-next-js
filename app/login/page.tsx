"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { LogIn, Shield } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to EduStream!",
    });
    router.push("/courses");
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify admin credentials
    if (email === "admin@edustream.com" && password === "admin123") {
      toast({
        title: "Admin Login Successful",
        description: "Welcome to the admin dashboard!",
      });
      router.push("/admin");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid admin credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Student Login</TabsTrigger>
            <TabsTrigger value="admin">Admin Login</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <form onSubmit={handleStudentLogin} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="student-email">Email address</Label>
                  <Input
                    id="student-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="student-password">Password</Label>
                  <Input
                    id="student-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:text-primary/90"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Sign in
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </TabsContent>

          <TabsContent value="admin">
            <form onSubmit={handleAdminLogin} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="admin@edustream.com"
                  />
                </div>

                <div>
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Admin Login
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}