
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ScheduleWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMomenceScript = () => {
      // Remove any existing script
      const existingScript = document.querySelector('script[src*="momence.com/plugin"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
      script.type = 'module';
      script.async = true;
      
      // Set the Momence configuration attributes
      script.setAttribute('host_id', '13752');
      script.setAttribute('locale', 'en');
      script.setAttribute('location_ids', '[]');
      script.setAttribute('session_type', 'private');
      script.setAttribute('show_additional_teachers', 'true');
      script.setAttribute('show_substituted_teachers', 'true');
      script.setAttribute('tag_ids', '[134462]');
      script.setAttribute('teacher_ids', '[]');
      script.setAttribute('default_filter', 'show-all');
      script.setAttribute('hide_tags', 'true');

      script.onload = () => {
        console.log('Momence script loaded successfully');
        setTimeout(() => setIsLoading(false), 1000);
      };

      script.onerror = () => {
        console.error('Failed to load Momence script');
        setIsLoading(false);
      };

      if (containerRef.current) {
        containerRef.current.appendChild(script);
      }
    };

    loadMomenceScript();

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[src*="momence.com/plugin"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (isLoading) {
    return (
      <Card className="momence-schedule-container">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
          <Skeleton className="h-12 w-full" />
        </div>
      </Card>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="momence-schedule-container animate-fade-in"
      id="momence-schedule-widget"
    />
  );
};

export default ScheduleWidget;
