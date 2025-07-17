import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Zap } from "lucide-react";

const metrics = [
  {
    title: "Revenue",
    value: "$24,650",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Active Customers",
    value: "1,247",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Conversion Rate",
    value: "3.8%",
    change: "-2%",
    trend: "down",
    icon: Target,
    color: "text-warning"
  },
  {
    title: "AI Actions",
    value: "156",
    change: "+24%",
    trend: "up",
    icon: Zap,
    color: "text-accent"
  }
];

export const MetricsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <Card key={metric.title} className="shadow-soft hover:shadow-elegant transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-success" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive" />
              )}
              <Badge 
                variant={metric.trend === "up" ? "secondary" : "destructive"}
                className="text-xs"
              >
                {metric.change}
              </Badge>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};