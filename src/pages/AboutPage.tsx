
import React from 'react';
import { Shield, Truck, Headphones, Award } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data and transactions are protected with enterprise-grade security.'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $99 with 2-day delivery available.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our expert team is here to help you with any questions or concerns.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All products come with comprehensive warranty and quality assurance.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300',
      description: 'Tech visionary with 15+ years in electronics retail.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      description: 'Engineering expert passionate about cutting-edge technology.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      description: 'Dedicated to ensuring every customer has an amazing experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">TechGalaxy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about bringing you the latest and greatest in technology. 
            From smartphones to smart homes, we curate the best products to enhance your digital life.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At TechGalaxy, we believe technology should enhance your life, not complicate it. 
                That's why we carefully select every product in our catalog, ensuring it meets our 
                high standards for quality, innovation, and value.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2020, we've grown from a small startup to a trusted destination for 
                tech enthusiasts worldwide. Our commitment to customer satisfaction and cutting-edge 
                products has made us a leader in the electronics retail space.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">Top Brands</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600"
                alt="TechGalaxy team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TechGalaxy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your shopping experience is exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind TechGalaxy who make it all possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly seek out the most innovative and cutting-edge products 
                to keep you ahead of the technology curve.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Customer Obsessed</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers. Your satisfaction 
                and success are our top priorities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product goes through rigorous 
                testing and evaluation before reaching our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
