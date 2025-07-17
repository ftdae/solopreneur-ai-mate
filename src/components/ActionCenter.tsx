import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Clock, CheckCircle, AlertCircle, Zap } from "lucide-react";

const pendingActions = [
  {
    id: 1,
    title: "Review email campaign performance",
    description: "Campaign 'Summer Sale' ended 2 hours ago",
    priority: "high",
    category: "Marketing",
    estimatedTime: "5 min"
  },
  {
    id: 2,
    title: "Approve automated invoice",
    description: "Invoice #INV-2024-156 ready for client ABC Corp",
    priority: "medium", 
    category: "Finance",
    estimatedTime: "2 min"
  },
  {
    id: 3,
    title: "Customer follow-up needed",
    description: "John Doe hasn't responded to proposal in 5 days",
    priority: "medium",
    category: "Customer",
    estimatedTime: "10 min"
  }
];

export const ActionCenter = () => {
  const { toast } = useToast();

  const handleApprove = (actionId: number) => {
    console.log(`Approved action ${actionId}`);
    toast({
      title: "Action Approved",
      description: `Successfully approved action ${actionId}`,
    });
  };

  const handleSkip = (actionId: number) => {
    console.log(`Skipped action ${actionId}`);
    toast({
      title: "Action Skipped",
      description: `Action ${actionId} has been skipped`,
      variant: "destructive"
    });
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-ai-primary" />
          <CardTitle>Action Center</CardTitle>
          <Badge variant="destructive" className="ml-auto">
            {pendingActions.length} pending
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingActions.map((action, index) => (
          <div 
            key={action.id} 
            className="p-4 border rounded-lg space-y-3 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{action.title}</h4>
                  <Badge 
                    variant={action.priority === "high" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {action.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{action.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {action.estimatedTime}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {action.category}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="premium"
                onClick={() => handleApprove(action.id)}
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Approve
              </Button>
              <Button 
                size="sm" 
                variant="ghost"
                onClick={() => handleSkip(action.id)}
              >
                Skip
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};