"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function MainNav() {
    return (
        <header className="sticky top-0 z-50 w-full px-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Dumbbell className="h-6 w-6" />
                    <span className="font-bold">FWGHUB</span>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#features" className="text-sm font-medium hover:text-primary">
                        Features
                    </Link>
                    <Link href="/auth/login" className="text-sm font-medium hover:text-primary">
                        Login
                    </Link>
                    <ModeToggle />
                    <Button asChild>
                        <Link href="/auth/register">Get Started</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
