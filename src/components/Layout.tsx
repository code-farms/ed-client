import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  showAdSpaces?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showAdSpaces = true }) => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="px-4 py-8">
        <div className="container mx-auto">
          {showAdSpaces ? (
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Left Ad Space - 25% on desktop */}
              <div className="hidden xl:block">
                <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center sticky top-24">
                  <div className="text-muted-foreground">
                    <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xs font-medium">AD</span>
                    </div>
                    <p className="text-sm">Advertisement Space</p>
                  </div>
                </div>
              </div>

              {/* Main Content - 50% on desktop, full width on mobile */}
              <div className="xl:col-span-2">
                {children}
              </div>

              {/* Right Ad Space - 25% on desktop */}
              <div className="hidden xl:block">
                <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center sticky top-24">
                  <div className="text-muted-foreground">
                    <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xs font-medium">AD</span>
                    </div>
                    <p className="text-sm">Advertisement Space</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};