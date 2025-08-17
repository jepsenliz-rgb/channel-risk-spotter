import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-secondary pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Learning Experience 
              <span className="block text-primary">Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specializing in eLearning development, instructional design, and digital learning solutions that engage, educate, and inspire.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-accent/20 px-4 py-2 rounded-full">Storytelling</span>
              <span className="bg-accent/20 px-4 py-2 rounded-full">Scenario-based Learning</span>
              <span className="bg-accent/20 px-4 py-2 rounded-full">Interactive Design</span>
              <span className="bg-accent/20 px-4 py-2 rounded-full">Process-driven</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToPortfolio}
                className="group gap-2"
              >
                Explore My Work 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                Watch Demo Reel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;