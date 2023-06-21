"use client"
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PricingPlan from '@/components/pricing';
import Statics from '@/components/Static';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import Faqs from '@/components/Faq';
import QuickStart from '@/components/Quickstart';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Statics />
      <PricingPlan />
      <Form />
      <Faqs />
      <QuickStart />
      <Footer />
    </div>
  );
}
