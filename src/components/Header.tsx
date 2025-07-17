import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Zap, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const { toast } = useToast();

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Opening settings panel...",
    });
  };

  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Opening user profile...",
    });
  };

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-ai rounded-lg flex items-center justify-center animate-glow">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SoloPilot AI
            </h1>
          </div>
          <Badge variant="secondary" className="animate-pulse-ai">
            Active
          </Badge>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative" onClick={handleNotifications}>
            <Bell className="h-4 w-4" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSettings}>
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleProfile}>
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};