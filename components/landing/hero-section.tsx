import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-4 pb-8 pt-6 px-10 md:py-10">
            <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                    Transform Your Life with <span className="text-primary">FitnessHub</span>
                </h1>
                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    Your all-in-one platform for personalized workout plans, nutrition guidance, and
                    fitness challenges. Sign up for free and unlock premium content as you progress.
                </p>
            </div>
            <div className="flex gap-4">
                <Button size="lg" asChild>
                    <Link href="/auth/register">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                </Button>
            </div>
            <div className="relative w-full max-w-[1200px] aspect-video mt-8 rounded-lg overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&h=675&fit=crop"
                    alt="Fitness training"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}
