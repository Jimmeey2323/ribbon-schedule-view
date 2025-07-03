
import React from 'react';
import Header from '@/components/Header';
import ScheduleWidget from '@/components/ScheduleWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 sm:p-12">
      <Header />
      <main className="w-full max-w-5xl flex-1">
        <ScheduleWidget />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
