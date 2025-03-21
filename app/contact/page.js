import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-16 p-8 bg-purple-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        We would love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. You can contact us using the information below.
      </p>
      <h2 className="text-2xl font-bold mb-2">Email</h2>
      <p className="text-lg mb-4">
        You can email us at <a href="mailto:support@urlshortener.com" className="text-purple-500">support@urlshortener.com</a>. We strive to respond to all inquiries within 24 hours.
      </p>
      <h2 className="text-2xl font-bold mb-2">Phone</h2>
      <p className="text-lg mb-4">
        If you prefer to speak with us directly, you can call us at (123) 456-7890. Our phone lines are open Monday to Friday, from 9 AM to 5 PM.
      </p>
      <h2 className="text-2xl font-bold mb-2">Address</h2>
      <p className="text-lg mb-4">
        You can also visit us at our office:
      </p>
      <p className="text-lg mb-4">
        URL Shortener Inc.<br />
        123 Shorten St.<br />
        Short City, SC 12345
      </p>
      <h2 className="text-2xl font-bold mb-2">Social Media</h2>
      <p className="text-lg mb-4">
        Follow us on social media to stay updated with the latest news and updates:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li><a href="https://twitter.com/urlshortener" className="text-purple-500">Twitter</a></li>
        <li><a href="https://facebook.com/urlshortener" className="text-purple-500">Facebook</a></li>
        <li><a href="https://instagram.com/urlshortener" className="text-purple-500">Instagram</a></li>
      </ul>
    </div>
  );
};

export default Contact;
