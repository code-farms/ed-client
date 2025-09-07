import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for occasional use',
    features: [
      'Up to 5 conversions per day',
      'File size limit: 10MB',
      'Basic conversion formats',
      'Standard processing speed',
      'Email support'
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Great for professionals',
    features: [
      'Unlimited conversions',
      'File size limit: 100MB',
      'All conversion formats',
      'Priority processing',
      'Batch conversion',
      'API access',
      'Priority support'
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '$29.99',
    period: '/month',
    description: 'Perfect for teams',
    features: [
      'Everything in Pro',
      'File size limit: 500MB',
      'Custom branding',
      'Advanced API features',
      'Team management',
      'SSO integration',
      'Dedicated support'
    ],
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <div className='flex flex-col'>
    
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Simple, Transparent{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Pricing
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade at any time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={`p-8 relative ${
            plan.popular ? 'ring-2 ring-primary shadow-glow-card' : ''
          }`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.popular ? "default" : "secondary"} 
              size="lg" 
              className="w-full"
            >
              {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Can I change my plan later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Is there a free trial?</h3>
            <p className="text-muted-foreground">Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Is my data secure?</h3>
            <p className="text-muted-foreground">Yes, we use end-to-end encryption and delete all files within 24 hours of processing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};