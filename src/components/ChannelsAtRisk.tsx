import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, MessageSquare, Video, Mail, Phone, ChevronRight, AlertTriangle, Info, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Scenario {
  id: string;
  channel: string;
  icon: React.ReactNode;
  prompt: string;
  scenario: string;
  options: Array<{
    id: string;
    text: string;
    isCorrect: boolean;
  }>;
  feedback: {
    correct: string;
    incorrect: string;
  };
  caseStudy: {
    title: string;
    description: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "messaging",
    channel: "Messaging Apps",
    icon: <MessageSquare className="w-6 h-6" />,
    prompt: "You just got this message on WhatsApp. What stands out as suspicious?",
    scenario: "Hey, this is your bank. We detected unusual activity. Please click here immediately to secure your account.",
    options: [
      { id: "urgency", text: "Message uses urgency", isCorrect: true },
      { id: "bank", text: "They say it's from your bank", isCorrect: false },
      { id: "secure", text: "Asking you to secure your account", isCorrect: false },
    ],
    feedback: {
      correct: "Yes! Scammers push urgency to get you to act fast without thinking.",
      incorrect: "Not quite. The main red flag here is the urgent language designed to pressure you into acting quickly."
    },
    caseStudy: {
      title: "WhatsApp CFO Impersonation",
      description: "In one case, criminals impersonated a CFO on WhatsApp to trick an accountant into transferring nearly $100,000."
    }
  },
  {
    id: "video",
    channel: "Video Conferencing",
    icon: <Video className="w-6 h-6" />,
    prompt: "You're in a Teams meeting and your CFO suddenly asks you to authorize a payment. What should you check before acting?",
    scenario: "This is urgent - we need to process this payment before the bank closes today. Can you authorize the transfer to this new vendor account?",
    options: [
      { id: "verify", text: "Confirm identity through another channel", isCorrect: true },
      { id: "approve", text: "Approve quickly to avoid holding up the meeting", isCorrect: false },
      { id: "trust", text: "Trust since it's a company meeting", isCorrect: false },
    ],
    feedback: {
      correct: "Right! Always verify through another channel. Deepfake and impersonation scams are on the rise.",
      incorrect: "Always verify identity through a separate channel, even in video calls. Deepfakes are becoming more sophisticated."
    },
    caseStudy: {
      title: "Deepfake CFO Scam",
      description: "A Hong Kong firm lost $25M after a deepfake CFO instructed fraudulent transfers during a video conference."
    }
  },
  {
    id: "email",
    channel: "Email",
    icon: <Mail className="w-6 h-6" />,
    prompt: "You receive this email: 'We need you to update your payroll information. Click the link here.' What's the first red flag?",
    scenario: "Action Required: Update your payroll information immediately. Our system shows outdated details. Click here to update: [suspicious-link.com]",
    options: [
      { id: "unexpected", text: "Unexpected request", isCorrect: true },
      { id: "payroll", text: "Mentions payroll", isCorrect: false },
      { id: "email", text: "It came via email", isCorrect: false },
    ],
    feedback: {
      correct: "Correct! Unexpected requests are often phishing attempts. Always verify directly with HR.",
      incorrect: "The main red flag is that this is an unexpected request. Always verify such requests through official channels."
    },
    caseStudy: {
      title: "Corporate Payroll Phishing",
      description: "A major corporation lost employee data when staff clicked malicious payroll update links, compromising 10,000+ records."
    }
  },
  {
    id: "phone",
    channel: "Phone Calls",
    icon: <Phone className="w-6 h-6" />,
    prompt: "You get a call from 'IT Support' saying they need your login credentials to update your account. What do you do?",
    scenario: "Hello, this is IT Support. We're doing emergency security updates and need your username and password to update your account before it gets locked.",
    options: [
      { id: "give", text: "Give credentials since it's IT", isCorrect: false },
      { id: "hangup", text: "Hang up and call IT directly", isCorrect: true },
      { id: "email", text: "Ask them to email you", isCorrect: false },
    ],
    feedback: {
      correct: "Yes! Always verify by contacting IT directly through known channels.",
      incorrect: "Never give credentials over the phone. Always verify by calling IT through official contact methods."
    },
    caseStudy: {
      title: "VoIP Credential Theft",
      description: "Phone-based VoIP scammers stole credentials from 200+ employees by impersonating IT support across multiple companies."
    }
  }
];

export default function ChannelsAtRisk() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const isComplete = currentStep >= scenarios.length;
  const currentScenario = scenarios[currentStep];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
    setCurrentStep(prev => prev + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowCaseStudy(null);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowCaseStudy(null);
    setCompletedSteps(new Set());
  };

  const getAnswerVariant = (option: any) => {
    if (!showFeedback) return "outline";
    if (selectedAnswer === option.id) {
      return option.isCorrect ? "success" : "destructive";
    }
    if (option.isCorrect) return "success";
    return "outline";
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-learning-success">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-learning-success flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-learning-success-foreground" />
              </div>
              <CardTitle className="text-3xl">Module Complete!</CardTitle>
              <CardDescription className="text-lg mt-4">
                You've successfully completed the Channels at Risk training module.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-learning-info/10 p-6 rounded-lg border border-learning-info/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-learning-info" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always be suspicious of urgent requests across any communication channel</li>
                  <li>• Verify identity through separate, known channels before taking action</li>
                  <li>• Never provide credentials over phone, email, or messaging apps</li>
                  <li>• Report suspicious activity immediately to your security team</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Button onClick={handleRestart} variant="outline" size="lg">
                  Take Module Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Channels at Risk
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cybercriminals can target almost any communication channel. Whether it's messaging apps, video calls, email, or phone — the tactics are often the same: urgency, spoofing, or requests for sensitive access.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / scenarios.length) * 100}%` }}
          />
        </div>

        {/* Step Counter */}
        <div className="text-center">
          <Badge variant="secondary" className="text-sm">
            Step {currentStep + 1} of {scenarios.length}
          </Badge>
        </div>

        {/* Channel Overview */}
        {currentStep === 0 && !showFeedback && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {scenarios.map((scenario, index) => (
              <Card key={scenario.id} className="text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    {scenario.icon}
                  </div>
                  <p className="text-sm font-medium">{scenario.channel}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Current Scenario */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                {currentScenario.icon}
              </div>
              <div>
                <CardTitle className="text-xl">{currentScenario.channel}</CardTitle>
                <CardDescription>{currentScenario.prompt}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Scenario Text */}
            <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-learning-warning">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-learning-warning flex-shrink-0 mt-0.5" />
                <p className="italic">{currentScenario.scenario}</p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <h4 className="font-medium">Choose your answer:</h4>
              {currentScenario.options.map((option) => (
                <Button
                  key={option.id}
                  variant={getAnswerVariant(option)}
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={showFeedback}
                >
                  <div className="flex items-center gap-3">
                    {showFeedback && selectedAnswer === option.id && (
                      option.isCorrect ? 
                        <CheckCircle className="w-5 h-5" /> : 
                        <XCircle className="w-5 h-5" />
                    )}
                    {showFeedback && option.isCorrect && selectedAnswer !== option.id && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    <span>{option.text}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="space-y-4">
                <div className={cn(
                  "p-4 rounded-lg border",
                  currentScenario.options.find(o => o.id === selectedAnswer)?.isCorrect 
                    ? "bg-learning-success/10 border-learning-success/20" 
                    : "bg-learning-error/10 border-learning-error/20"
                )}>
                  <p className="font-medium">
                    {currentScenario.options.find(o => o.id === selectedAnswer)?.isCorrect 
                      ? currentScenario.feedback.correct 
                      : currentScenario.feedback.incorrect}
                  </p>
                </div>

                {/* Case Study Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setShowCaseStudy(showCaseStudy ? null : currentScenario.id)}
                  className="w-full"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showCaseStudy ? "Hide" : "Show"} Real-World Case Study
                </Button>

                {/* Case Study Content */}
                {showCaseStudy && (
                  <Card className="bg-learning-info/5 border-learning-info/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{currentScenario.caseStudy.title}</h4>
                      <p className="text-sm text-muted-foreground">{currentScenario.caseStudy.description}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Next Button */}
                <div className="flex justify-end">
                  <Button onClick={handleNext} className="gap-2">
                    Continue <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}