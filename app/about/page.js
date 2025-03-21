import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-16 p-8 bg-purple-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our URL Shortener service! We are dedicated to providing you with the best and most straightforward URL shortening experience. Our mission is to make it easy for you to shorten, share, and manage your URLs.
      </p>
      <p className="text-lg mb-4">
        Our service is designed to be user-friendly and efficient, allowing you to quickly generate short URLs for your long links. Whether you are sharing links on social media, in emails, or anywhere else, our URL shortener ensures that your links are concise and easy to share.
      </p>
      <p className="text-lg mb-4">
        We are committed to providing a reliable and secure service. Your privacy and data security are our top priorities. We use industry-standard security measures to protect your information and ensure that your links are safe.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing our URL Shortener service. We are here to help you with all your URL shortening needs. If you have any questions or feedback, please feel free to contact us.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="text-lg mb-4">
        Our team is made up of passionate and experienced professionals who are dedicated to providing you with the best service possible. We are constantly working to improve our service and add new features to make your experience even better.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-lg">
        If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. You can contact us at <a href="mailto:support@urlshortener.com" className="text-purple-500">support@urlshortener.com</a>.
      </p>
    </div>
  );
};

export default About;
