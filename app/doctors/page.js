'use client';

import Navbar from '../components/Navbar';
import { Star } from 'lucide-react';

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Hair Transplant Specialist",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      specialty: "Dermatologist",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "PRP Therapy Expert",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 4.9
    },
    {
      id: 4,
      name: "Dr. Neha Verma",
      specialty: "Hair Loss Treatment",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 4.7
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Doctors</h1>
            <p className="text-gray-600 text-lg">Meet our highly qualified hair restoration specialists.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{doctor.rating} rating</span>
                  </div>

                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
