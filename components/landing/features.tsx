import { ActivitySquare, Apple, Award, Clock, HeartPulse, Trophy } from "lucide-react";

const features = [
    {
        icon: ActivitySquare,
        title: "Premium Workout Plans",
        description:
            "Access professional workout plans designed for different fitness levels and goals.",
    },
    {
        icon: Apple,
        title: "Expert Meal Plans",
        description: "Purchase nutritionist-designed meal plans tailored to your dietary needs.",
    },
    {
        icon: Trophy,
        title: "Exclusive Challenges",
        description: "Join premium fitness challenges with detailed guidance and rewards.",
    },
    {
        icon: HeartPulse,
        title: "Progress Tracking",
        description: "Track your fitness journey with our comprehensive tracking tools.",
    },
    {
        icon: Clock,
        title: "Flexible Access",
        description: "Purchase and access your digital content anytime, anywhere.",
    },
    {
        icon: Award,
        title: "Expert Content",
        description: "High-quality fitness content from certified trainers and nutritionists.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-16 px-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                    Premium Content for Your Journey
                </h2>
                <p className="text-muted-foreground mt-4">
                    Sign up for free and unlock premium content as you progress
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"
                    >
                        <feature.icon className="h-12 w-12 text-primary mb-4" />
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
