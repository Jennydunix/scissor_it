import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="pricing bg-white py-20 mt-10">
      <div className="container mx-auto">
        <div className="title text-center mb-10">
          <h2 className="font-bold text-3xl mb-4">
            A <span className="text-blue-500">price perfect</span> for your needs.
          </h2>
          <p className="text-gray-700">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
        <div className="priceCards flex flex-wrap justify-center gap-6">
          <div className="card bg-white border border-blue-500 rounded-lg w-full md:w-auto transition-transform duration-300 transform hover:scale-105 relative">
            <div className="content p-6">
              <h2 className="ctitle font-medium text-xl mb-2">Basic</h2>
              <h2 className="cpricing font-bold text-4xl mb-4">Free</h2>
              <h3 className="cdesc font-medium text-lg mb-4">Free plan for all users</h3>
              <ul className="list-disc pl-6">
                <li>Unlimited URL Shortening</li>
                <li>Basic Link Analytics</li>
                <li>Customizable Short Links</li>
                <li>Standard Support</li>
                <li>Ad-supported</li>
              </ul>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-blue-900 text-white py-2 px-4 rounded-lg">
              Select Plan
            </button>
          </div>
          <div className="card bg-white border border-blue-500 rounded-lg w-full md:w-auto transition-transform duration-300 transform hover:scale-105 relative">
            <div className="content p-6">
              <h2 className="ctitle font-medium text-xl mb-2">Professional</h2>
              <h2 className="cpricing font-bold text-4xl mb-4">$15/month</h2>
              <h3 className="cdesc font-medium text-lg mb-4">Ideal for business creators</h3>
              <ul className="list-disc pl-6">
                <li>Enhanced Link Analytics</li>
                <li>Custom Branded Domains</li>
                <li>Advanced Link Customization</li>
                <li>Priority Support</li>
                <li>Ad-free Experience</li>
              </ul>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-blue-900 text-white py-2 px-4 rounded-lg">
              Select Plan
            </button>
          </div>
          <div className="card bg-white border border-blue-500 rounded-lg w-full md:w-auto transition-transform duration-300 transform hover:scale-105 relative">
            <div className="content p-6">
              <h2 className="ctitle font-medium text-xl mb-2">Teams</h2>
              <h2 className="cpricing font-bold text-4xl mb-4">$25/month</h2>
              <h3 className="cdesc font-medium text-lg mb-4">Share with up to 10 users</h3>
              <ul className="list-disc pl-6">
                <li>Team Collaboration</li>
                <li>User Roles and Permissions</li>
                <li>Enhanced Security</li>
                <li>API Access</li>
                <li>Dedicated Account Manager</li>
              </ul>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-blue-900 text-white py-2 px-4 rounded-lg">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
