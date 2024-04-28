import React, { useState } from "react";

// Example FAQ data - could be fetched from a backend or stored locally
const faqData = [
  {
    id: 1,
    question: "What is the main theme of 'Pursuing Flesh'?",
    answer:
      "The main theme revolves around the exploration of human desires and fears, portrayed through supernatural events and character interactions.",
  },
  {
    id: 2,
    question: "How often are new chapters released?",
    answer:
      "New chapters are released every Monday. Stay tuned for weekly updates!",
  },
  {
    id: 3,
    question: "Can I contribute fan art?",
    answer:
      "Absolutely! We love to see your art. Please visit the Fan Art Gallery section for details on how to submit your artwork.",
  },
  // Add more FAQs as needed
];

function FAQItem({ faq, onClick, isActive }) {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-t"
      >
        {faq.question}
      </button>
      {isActive && (
        <div className="p-4 bg-white border border-t-0 border-blue-500 rounded-b">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id); // Close if already open, else open the new one
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div>
        {faqData.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            onClick={() => toggleFAQ(faq.id)}
            isActive={activeId === faq.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;