import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, FileText, Palette, Code, TestTube } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  methods: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: "analyze",
    title: "Analyze & Discover",
    description: "Understanding learner needs, business objectives, and performance gaps through stakeholder interviews and analysis.",
    icon: <Users className="w-8 h-8" />,
    methods: ["ADDIE Framework", "Learner Personas", "Needs Assessment"]
  },
  {
    id: "design",
    title: "Design & Storyboard",
    description: "Creating learning objectives, content structure, and detailed storyboards that align with learning goals.",
    icon: <FileText className="w-8 h-8" />,
    methods: ["Action Mapping", "Storyboarding", "Learning Objectives"]
  },
  {
    id: "prototype",
    title: "Prototype & Review",
    description: "Developing interactive prototypes and conducting iterative reviews with subject matter experts.",
    icon: <Palette className="w-8 h-8" />,
    methods: ["SAM Methodology", "Rapid Prototyping", "SME Collaboration"]
  },
  {
    id: "develop",
    title: "Develop & Build",
    description: "Creating engaging, interactive content using industry-leading authoring tools and best practices.",
    icon: <Code className="w-8 h-8" />,
    methods: ["Storyline 360", "Rise 360", "SCORM Packaging"]
  },
  {
    id: "test",
    title: "Test & Launch",
    description: "Comprehensive QA testing across devices and platforms, followed by deployment and launch support.",
    icon: <TestTube className="w-8 h-8" />,
    methods: ["Cross-platform Testing", "LMS Integration", "Launch Support"]
  },
  {
    id: "evaluate",
    title: "Evaluate & Iterate",
    description: "Analyzing learning analytics, gathering feedback, and making data-driven improvements.",
    icon: <CheckCircle className="w-8 h-8" />,
    methods: ["Analytics Review", "Learner Feedback", "Continuous Improvement"]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Design Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to creating effective learning experiences, 
            from initial analysis to ongoing optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <Card key={step.id} className="relative bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">Key Methods:</p>
                  <div className="space-y-2">
                    {step.methods.map((method) => (
                      <div key={method} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Collaborative & Agile Approach
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Every project benefits from close collaboration with subject matter experts, 
                stakeholders, and learners throughout the development process. I emphasize 
                regular check-ins, iterative feedback, and agile methodologies to ensure 
                the final product exceeds expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">SME Collaboration</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Iterative Design</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">Quality Assurance</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">User-Centered</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;