import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Settings, 
  Users, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  pricing: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "elearning",
    title: "Custom eLearning Design & Development",
    description: "End-to-end eLearning solutions tailored to your organization's specific needs and learning objectives.",
    icon: <BookOpen className="w-8 h-8" />,
    features: [
      "Interactive course development",
      "Scenario-based learning design",
      "SCORM/xAPI compliance",
      "Multi-device optimization",
      "Learning analytics integration"
    ],
    pricing: "Starting at $3,000"
  },
  {
    id: "storyboarding",
    title: "Storyboarding & Scripting",
    description: "Detailed storyboards and scripts that serve as blueprints for engaging and effective learning content.",
    icon: <FileText className="w-8 h-8" />,
    features: [
      "Visual storyboard creation",
      "Narration script writing",
      "Interaction specifications",
      "Assessment design",
      "Review and revision cycles"
    ],
    pricing: "Starting at $1,500",
    popular: true
  },
  {
    id: "lms",
    title: "LMS Integration & Testing",
    description: "Seamless integration of your learning content with Learning Management Systems and comprehensive testing.",
    icon: <Settings className="w-8 h-8" />,
    features: [
      "SCORM package creation",
      "LMS compatibility testing",
      "Tracking and reporting setup",
      "Performance optimization",
      "Technical documentation"
    ],
    pricing: "Starting at $800"
  },
  {
    id: "consulting",
    title: "Training Strategy & SOPs",
    description: "Strategic guidance for building effective training programs and standard operating procedures for learning teams.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Training needs analysis",
      "Learning strategy development",
      "Process documentation",
      "Team onboarding guides",
      "Quality assurance frameworks"
    ],
    pricing: "Starting at $2,000"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive instructional design services to help your organization 
            create impactful learning experiences that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {services.map((service) => (
            <Card key={service.id} className={`relative bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300 ${
              service.popular ? 'border-primary shadow-md' : ''
            }`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary mt-1">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-3">What's Included:</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-portfolio-success flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 group"
                    onClick={scrollToContact}
                  >
                    Get Started 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                In-House Learning (IHL) Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                As the founder of In-House Learning, I specialize in providing affordable, 
                done-for-you training solutions specifically designed for small businesses. 
                From compliance training to skill development, IHL offers cost-effective 
                alternatives to expensive external training programs.
              </p>
              <Button size="lg" onClick={scrollToContact} className="gap-2">
                Learn More About IHL
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;