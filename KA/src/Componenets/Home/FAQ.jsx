import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { question: "What is your return policy?", answer: "You can return your order within 30 days of purchase." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with additional shipping charges." },
  { question: "How can I track my order?", answer: "You will receive a tracking number via email once your order is shipped." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              className="w-full flex justify-between items-center text-left p-3 rounded-lg shadow-md hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              className="overflow-hidden text-gray-700 px-3"
            >
              <p className="mt-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FAQ;
