'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import { Phone, Check } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-12 sm:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          <div className="w-full">
            <div className="text-teal-600 font-semibold mb-4 flex items-center text-sm sm:text-base">
              <span className="mr-2">👋</span> WELCOME TO HAIRCLINIC
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Simplified hair restoration for everyone
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-8">
              HairClinic doctors go beyond symptoms to treat the root cause of your hair loss and provide a personalized long-term solution.
            </p>
            <Link href="/book" className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-teal-700 transition flex items-center text-sm sm:text-base">
              <Phone className="mr-2 w-5 h-5" />
              SCHEDULE YOUR CONSULTATION
            </Link>
          </div>
          
          <div className="relative w-full hidden md:block">
            <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop" 
                alt="Happy patient" 
                className="rounded-2xl w-full h-64 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center w-full">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-3xl sm:text-5xl font-bold text-teal-600 mb-2">+3,500</div>
            <div className="text-gray-600 text-sm sm:text-base">Patients treated</div>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-3xl sm:text-5xl font-bold text-teal-600 mb-2">+15</div>
            <div className="text-gray-600 text-sm sm:text-base">Specialists available</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-bold text-teal-600 mb-2">+10</div>
            <div className="text-gray-600">Years in practice</div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-teal-600 font-semibold mb-2">SERVICES</div>
            <h2 className="text-4xl font-bold text-gray-900">
              How can we help you feel better?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digestive Issues</h3>
              <p className="text-gray-600">
                Advanced FUE/FUT hair transplant techniques with minimal discomfort. Our expert surgeons ensure natural-looking results with fast healing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hormonal Health</h3>
              <p className="text-gray-600">
                Regrow hair naturally using your own platelet-rich plasma. PRP therapy stimulates hair follicles for natural regrowth.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Wellness</h3>
              <p className="text-gray-600">
                Comprehensive hair loss diagnosis with expert medical examination. We identify root causes for effective treatment.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pediatric Care</h3>
              <p className="text-gray-600">
                Specialized treatments for various hair and scalp conditions. Our personalized approach ensures optimal results.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Immune & Inflammation</h3>
              <p className="text-gray-600">
                Advanced scalp treatments to reduce inflammation and promote healthy hair growth with proven methods.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heart Health</h3>
              <p className="text-gray-600">
                Complete health assessment to ensure safe procedures. We care about your overall wellbeing and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-teal-100 rounded-3xl p-4">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop" 
                alt="Medical team" 
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          <div>
            <div className="text-teal-600 font-semibold mb-2">ABOUT US</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Understand who we are and why we exist
            </h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience, HairClinic has become a trusted hair transplant and restoration clinic. Our internationally trained surgeons use advanced techniques to deliver natural-looking results.
            </p>
            <p className="text-gray-600 mb-8">
              We believe everyone deserves to feel confident about their appearance. Our personalized treatment plans ensure the best possible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-600 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-2">
            Hair<span className="font-normal">Clinic</span>
          </div>
          <div className="text-teal-100 text-sm">
            ©2024 - HairClinic. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
