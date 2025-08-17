import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Building2, 
  Lightbulb, 
  Award,
  Users,
  BookOpen
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Lizzie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating learning experiences that stick. 
            With years of experience bridging the gap between complex concepts and engaging education.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Bio Card */}
            <div className="lg:col-span-2">
              <Card className="h-full bg-gradient-to-br from-card to-card/80">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                      <div className="prose prose-lg text-muted-foreground space-y-4">
                        <p>
                          My career in learning and development began as a corporate trainer, 
                          where I discovered my passion for transforming complex business processes 
                          into clear, actionable learning experiences. This foundation taught me 
                          the critical importance of understanding both the learner and the business context.
                        </p>
                        <p>
                          As I transitioned into eLearning development and instructional design, 
                          I found my calling in creating digital learning solutions that engage 
                          learners through storytelling, real-world scenarios, and interactive experiences. 
                          Every project is an opportunity to solve a unique learning challenge.
                        </p>
                        <p>
                          In founding In-House Learning (IHL), I recognized that small businesses 
                          needed affordable, high-quality training solutions. IHL focuses on 
                          providing done-for-you training packages that deliver the same level 
                          of professional development typically reserved for larger organizations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats/Highlights Card */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Experience Highlights
                  </h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">eLearning Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">10,000+</div>
                      <div className="text-sm text-muted-foreground">Learners Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Storyline 360</Badge>
                    <Badge variant="secondary">Rise 360</Badge>
                    <Badge variant="secondary">Camtasia</Badge>
                    <Badge variant="secondary">Adobe Creative Suite</Badge>
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Notion</Badge>
                    <Badge variant="secondary">SCORM/xAPI</Badge>
                    <Badge variant="secondary">LMS Integration</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Corporate Trainer</h4>
                <p className="text-sm text-muted-foreground">
                  Started career delivering in-person training programs, developing expertise 
                  in adult learning principles and engagement strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">eLearning Developer</h4>
                <p className="text-sm text-muted-foreground">
                  Transitioned to digital learning, mastering authoring tools and 
                  creating interactive, multimedia-rich learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Founder, IHL</h4>
                <p className="text-sm text-muted-foreground">
                  Founded In-House Learning to provide affordable, done-for-you 
                  training solutions specifically for small businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;