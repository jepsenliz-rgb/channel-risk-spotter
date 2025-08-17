import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Training Module",
    description: "Interactive e-learning course covering social engineering attacks across multiple communication channels. Features scenario-based learning and real-world case studies.",
    category: "eLearning Course",
    tools: ["Storyline 360", "Adobe XD", "Camtasia"],
    image: "/api/placeholder/400/250"
  },
  {
    id: "profitability",
    title: "Strategic Account Management",
    description: "Comprehensive training program on profitability levers for account managers. Includes interactive simulations and performance tracking.",
    category: "Blended Learning",
    tools: ["Rise 360", "Notion", "Figma"],
    image: "/api/placeholder/400/250"
  },
  {
    id: "salesforce",
    title: "Bullhorn for Salesforce Integration",
    description: "Step-by-step training modules for CRM integration. Features guided walkthroughs and hands-on practice scenarios.",
    category: "Software Training",
    tools: ["Storyline 360", "Snagit", "LMS Integration"],
    image: "/api/placeholder/400/250"
  },
  {
    id: "onboarding",
    title: "New Hire Onboarding Series",
    description: "Multi-part onboarding journey with microlearning modules, progress tracking, and manager dashboards.",
    category: "Onboarding Program",
    tools: ["Rise 360", "SCORM", "Analytics Dashboard"],
    image: "/api/placeholder/400/250"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of eLearning projects showcasing innovative instructional design, 
            engaging interactions, and measurable learning outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Tools Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;