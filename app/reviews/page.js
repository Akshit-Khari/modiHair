'use client';

import Navbar from '../components/Navbar';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Singh",
      rating: 5,
      text: "Amazing experience! The doctors are very professional and the results exceeded my expectations. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      text: "The team was very caring and supportive throughout my treatment. Best decision ever!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Vikram Patel",
      rating: 4,
      text: "Great service and excellent results. The staff is very friendly and helpful.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Anita Gupta",
      rating: 5,
      text: "I got my confidence back! The hair transplant looks so natural. Thank you HairClinic!",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Arjun Kumar",
      rating: 5,
      text: "Professional doctors, modern facility, and outstanding results. Worth every penny!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Deepa Nair",
      rating: 4,
      text: "Excellent treatment and great follow-up care. Highly satisfied with the experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h1>
            <p className="text-gray-600 text-lg">See what our satisfied patients have to say about us.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
