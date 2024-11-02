import React from "react";
import Header from "./Header";

function SupportAuthor() {
  return (
    <div className="h-screen bg-primary">
      <Header></Header>
      <div className="container mx-auto px-4 py-8 text-tertiary font-text">
        <h1 className="text-2xl font-bold text-center mb-6">
          Support the Author
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-6 max-w-sm mx-auto bg-secondary rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              {/* Icon or image can go here */}
            </div>
            <div>
              <h2 className="text-xl font-medium ">Make a Donation</h2>
              <p className="">
                Support my work directly through one-time or recurring donations
                via PayPal or Patreon. This doesn't work yet
              </p>
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-primary py-2 px-4 rounded"
              >
                Donate Now
              </a>
            </div>
          </div>

          <div className="p-6 max-w-sm mx-auto bg-secondary rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              {/* Icon or image can go here */}
            </div>
            <div>
              <h2 className="text-xl font-medium ">Buy Merchandise</h2>
              <p className="">
                Check out the official merchandise to get something tangible and
                support the story. No merch yet, sorry.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-primary  py-2 px-4 rounded "
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="p-6 max-w-sm mx-auto bg-secondary rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              {/* Icon or image can go here */}
            </div>
            <div>
              <h2 className="text-xl font-medium ">Subscribe</h2>
              <p className="">
                Gain access to exclusive content and early chapter releases by
                subscribing. Coming soon!
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-primary  py-2 px-4 rounded"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportAuthor;
