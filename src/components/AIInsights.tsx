import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

const insights = [
  {
    type: "opportunity",
    title: "Revenue Optimization",
    message: "Your email open rates are 15% above industry average. Consider increasing email frequency by 20%.",
    impact: "Potential +$2,400/month",
    confidence: 85,
    icon: TrendingUp,
    color: "text-success"
  },
  {
    type: "alert",
    title: "Customer Churn Risk",
    message: "3 high-value customers haven't engaged in 30+ days. Automated re-engagement sequence recommended.",
    impact: "Prevent -$8,500 revenue loss",
    confidence: 92,
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    type: "suggestion",
    title: "Process Automation",
    message: "Invoice generation takes 45 min weekly. AI can reduce this to 5 minutes with 98% accuracy.",
    impact: "Save 40 min/week",
    confidence: 78,
    icon: Lightbulb,
    color: "text-accent"
  }
];

export const AIInsights = () => {
  const handleImplement = (insightTitle: string) => {
    console.log(`Implementing: ${insightTitle}`);
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-ai-primary animate-pulse-ai" />
          <CardTitle>AI Insights</CardTitle>
          <Badge variant="secondary" className="ml-auto bg-gradient-ai text-primary-foreground">
            Real-time
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={insight.title} 
            className="p-4 border rounded-lg space-y-3 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-3">
              <insight.icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{insight.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.message}</p>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={insight.type === "alert" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {insight.impact}
                  </Badge>
                  <Button 
                    size="sm" 
                    variant="accent"
                    onClick={() => handleImplement(insight.title)}
                  >
                    Implement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};