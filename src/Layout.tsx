import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    {/* Header */}
    <header className="flex flex-col">
    <Navbar />
      <div className="hidden xl:block">
          <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-32 flex items-center justify-center sticky top-24">
            <div className="text-muted-foreground">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs font-medium">AD</span>
              </div>
              <p className="text-sm">Advertisement Space</p>
            </div>
          </div>
        </div>
    </header>
    
    {/* Body: 25% | 50% (main via <Outlet />) | 25% */}
    <div className="flex flex-1">
      <aside className="w-1/4 flex items-center justify-center">
        <div className="hidden xl:block">
          <div className="bg-gradient-card border border-border rounded-xl p-10 text-center h-[720px] flex items-center justify-center sticky top-24">
            <div className="text-muted-foreground">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs font-medium">AD</span>
              </div>
              <p className="text-sm">Advertisement Space</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="w-1/2 py-10 flex items-center justify-center">
        <Outlet />
      </main>
      <aside className="w-1/4 flex items-center justify-center">
        <div className="hidden xl:block">
          <div className="bg-gradient-card border border-border rounded-xl p-10 text-center h-[720px] flex items-center justify-center sticky top-24">
            <div className="text-muted-foreground">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs font-medium">AD</span>
              </div>
              <p className="text-sm">Advertisement Space</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
    {/* Footer */}
    <footer className="w-full bg-gray-800 text-white p-2 text-center">
      Footer
    </footer>
  </div>
);

export default Layout;
