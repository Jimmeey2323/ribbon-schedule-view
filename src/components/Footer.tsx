
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mt-16 mb-6 text-center animate-fade-in">
      <div className="border-t border-border pt-8">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span>© 2024 Schedule Ribbon. Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>for seamless booking experiences.</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          All rights reserved. Powered by modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
