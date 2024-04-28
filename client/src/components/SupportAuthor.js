import React from "react";

function SupportAuthor() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Support the Author
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">{/* Icon or image can go here */}</div>
          <div>
            <h2 className="text-xl font-medium text-black">Make a Donation</h2>
            <p className="text-gray-500">
              Support my work directly through one-time or recurring donations
              via PayPal or Patreon.
            </p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Donate Now
            </a>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">{/* Icon or image can go here */}</div>
          <div>
            <h2 className="text-xl font-medium text-black">Buy Merchandise</h2>
            <p className="text-gray-500">
              Check out the official merchandise to get something tangible and
              support the story.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">{/* Icon or image can go here */}</div>
          <div>
            <h2 className="text-xl font-medium text-black">Subscribe</h2>
            <p className="text-gray-500">
              Gain access to exclusive content and early chapter releases by
              subscribing.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportAuthor;
