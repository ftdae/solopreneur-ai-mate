import { Header } from "@/components/Header";
import { MetricsOverview } from "@/components/MetricsOverview";
import { BusinessAreaCard } from "@/components/BusinessAreaCard";
import { ActionCenter } from "@/components/ActionCenter";
import { AIInsights } from "@/components/AIInsights";
import { useToast } from "@/hooks/use-toast";
import { 
  Megaphone, 
  Settings, 
  DollarSign, 
  Users 
} from "lucide-react";

const businessAreas = [
  {
    title: "Marketing",
    description: "Campaigns, leads, and growth automation",
    icon: Megaphone,
    activeAutomations: 8,
    suggestions: [
      "Optimize email send times based on engagement data",
      "Create lookalike audience from top customers",
      "A/B test subject lines with AI generation"
    ],
    color: "bg-gradient-accent"
  },
  {
    title: "Operations",
    description: "Workflows, tasks, and process optimization",
    icon: Settings,
    activeAutomations: 12,
    suggestions: [
      "Automate project status updates via Slack",
      "Set up inventory reorder alerts",
      "Create template workflows for common tasks"
    ],
    color: "bg-gradient-primary"
  },
  {
    title: "Finance",
    description: "Invoicing, expenses, and financial tracking",
    icon: DollarSign,
    activeAutomations: 6,
    suggestions: [
      "Automate overdue invoice reminders",
      "Categorize expenses with AI",
      "Generate monthly financial reports"
    ],
    color: "bg-gradient-ai"
  },
  {
    title: "Customer",
    description: "Support, relationships, and satisfaction",
    icon: Users,
    activeAutomations: 9,
    suggestions: [
      "Send personalized follow-up sequences",
      "Predict customer satisfaction scores",
      "Automate support ticket prioritization"
    ],
    color: "bg-gradient-accent"
  }
];

const Index = () => {
  const { toast } = useToast();

  const handleSetupAutomation = (areaTitle: string) => {
    toast({
      title: "Automation Setup",
      description: `Setting up new automation for ${areaTitle}...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Your AI assistant has been busy optimizing your business while you were away.</p>
        </div>

        <MetricsOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {businessAreas.map((area, index) => (
            <div 
              key={area.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BusinessAreaCard
                {...area}
                onSetupAutomation={() => handleSetupAutomation(area.title)}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActionCenter />
          <AIInsights />
        </div>
      </main>
    </div>
  );
};

export default Index;
