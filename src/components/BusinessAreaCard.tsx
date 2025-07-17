import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface BusinessAreaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  activeAutomations: number;
  suggestions: string[];
  color: string;
  onSetupAutomation: () => void;
}

export const BusinessAreaCard = ({ 
  title, 
  description, 
  icon: Icon, 
  activeAutomations, 
  suggestions,
  color,
  onSetupAutomation 
}: BusinessAreaCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="animate-pulse-ai">
            {activeAutomations} active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-muted-foreground">AI Suggestions</h4>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className="text-sm p-2 bg-muted/50 rounded-md border-l-2 border-accent animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
        <Button 
          variant="ai" 
          className="w-full" 
          onClick={onSetupAutomation}
        >
          Setup New Automation
        </Button>
      </CardContent>
    </Card>
  );
};