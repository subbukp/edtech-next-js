"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Video,
  Users,
  Settings,
  LogOut,
  LineChart,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Courses",
      href: "/admin/courses",
      icon: BookOpen,
    },
    {
      name: "Videos",
      href: "/admin/videos",
      icon: Video,
    },
    {
      name: "Students",
      href: "/admin/students",
      icon: Users,
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: LineChart,
    },
    {
      name: "Payments",
      href: "/admin/payments",
      icon: CreditCard,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin portal",
    });
    router.push("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-muted/30">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-2xl font-bold">Admin Portal</span>
          </div>
          <ScrollArea className="flex-1 px-3 mt-6">
            <nav className="flex-1 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.name}
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => router.push(item.href)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>
          </ScrollArea>
          <div className="flex-shrink-0 flex border-t p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}