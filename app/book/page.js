'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Calendar, Phone } from 'lucide-react';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

export default function Book() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    service: 'Hair Transplant Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const appointmentsRef = ref(database, 'appointments');
      await push(appointmentsRef, {
        ...formData,
        bookingTime: new Date().toISOString()
      });
      
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        service: 'Hair Transplant Consultation',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to book appointment. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
            <p className="text-gray-600 text-lg">Schedule your hair consultation with our expert doctors today.</p>
          </div>

          {submitted && (
            <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
              ✓ Appointment booked successfully! We'll contact you soon.
            </div>
          )}

          {error && (
            <div className="mb-8 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8" suppressHydrationWarning>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Enter your name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter your phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Service Type</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                >
                  <option>Hair Transplant Consultation</option>
                  <option>PRP Therapy Consultation</option>
                  <option>Hair Diagnosis</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Message</label>
                <textarea 
                  name="message"
                  placeholder="Tell us about your hair concern" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 bg-white text-gray-900"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="mr-2 w-5 h-5" />
                {loading ? 'BOOKING...' : 'BOOK APPOINTMENT'}
              </button>
            </form>
          </div>

          <div className="mt-12 bg-teal-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find a time slot?</h2>
            <p className="text-gray-600 mb-4">Call us directly and our team will assist you immediately.</p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center">
              <Phone className="mr-2 w-5 h-5" />
              CALL US NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
