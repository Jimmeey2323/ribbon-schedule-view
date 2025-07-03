
import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full max-w-5xl mb-12 animate-fade-in">
      <div className="text-center space-y-6">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Schedule Ribbon
          </h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Book your perfect session with our modern, intuitive scheduling platform. 
          Choose from available time slots and connect with expert instructors.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>Real-time availability</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>Expert instructors</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Flexible scheduling</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
