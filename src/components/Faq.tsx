import React, { useState } from 'react';

type Faq = {
  question: string;
  answer: string;
};

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: Faq[] = [
    {
      question: 'How does URL shortening work?',
      answer: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
    },
    {
      question: 'Is it necessary to create an account to use the URL shortening service?',
      answer: 'No, it is not necessary to create an account. The URL shortening service can be used without an account.',
    },
    {
      question: 'Are the shortened links permanent? Will they expire?',
      answer: 'The shortened links are typically permanent and do not expire unless specified otherwise. However, it may vary depending on the specific URL shortening service you are using.',
    },
    {
      question: 'Are there any limitations on the number of URLs I can shorten?',
      answer: 'The limitations on the number of URLs you can shorten may vary depending on the URL shortening service. Some services may have limitations based on the account type or subscription plan.',
    },
    {
      question: 'Can I customize the shortened URLs to reflect my brand or content?',
      answer: 'Yes, many URL shortening services provide options to customize the shortened URLs. You can often customize the domain or use custom aliases to reflect your brand or content.',
    },
    {
      question: 'Can I track the performance of my shortened URLs?',
      answer: 'Yes, most URL shortening services offer analytics and tracking features that allow you to monitor the performance of your shortened URLs. You can track metrics such as the number of clicks, referrers, and geographical data.',
    },
    {
      question: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
      answer: 'The security of a URL shortening service depends on the specific service provider. Reputable providers take measures to protect against spam, malware, and malicious activity. It is important to choose a trusted and reliable service.',
    },
    {
      question: 'What is a QR code and what can it do?',
      answer: 'A QR code (Quick Response code) is a type of two-dimensional barcode that can be scanned using a smartphone or QR code reader. It can store various types of information, such as URLs, text, contact details, and more. QR codes are commonly used to provide easy access to websites or to share information digitally.',
    },
    {
      question: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
      answer: 'Many URL shortening services provide APIs (Application Programming Interfaces) that allow developers to integrate the service into their own applications or websites. These APIs offer functionality to create, manage, and track shortened URLs programmatically.',
    },
    // Add more FAQ items here
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq bg-gray-100 py-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 text-center">FAQs</h2>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div key={index} className="question border-b border-gray-300 pb-4 mb-4">
              <div
                className="q flex justify-between font-medium text-lg cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <p>{faq.question}</p>
                <span>{index === activeIndex ? '-' : '+'}</span>
              </div>
              {index === activeIndex && (
                <div className="a text-base mt-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
