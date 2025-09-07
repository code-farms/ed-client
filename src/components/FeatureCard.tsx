import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  featureKey: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="group">
      <div className="bg-gradient-card border border-border rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-glow-card transform hover:scale-[1.02] transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <Button
          variant="default"
          size="lg"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};