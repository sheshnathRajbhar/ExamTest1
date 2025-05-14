import React from 'react';

const About = () => {
  return (
    <div className=" bg-white px-6 py-12 lg:px-24 flex items-center justify-center mt-0">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-600">
            We are a team of educators, developers, and designers working together to make learning engaging and accessible. Our platform provides modern tools and content to help students grow.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to simplify learning through technology. We aim to provide easy-to-understand material, online quizzes, and result tracking to support self-paced learning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 inline-block text-left">
            <li>Interactive courses and quizzes</li>
            <li>Student and admin dashboards</li>
            <li>Progress tracking and reports</li>
            <li>24/7 online access</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
