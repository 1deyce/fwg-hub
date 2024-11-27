import { HeroSection } from "@/components/landing/hero-section";
import { Features } from "@/components/landing/features";
import { MainNav } from "@/components/landing/main-nav";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <MainNav />
            <main className="flex-1">
                <HeroSection />
                <Features />
            </main>
        </div>
    );
}
