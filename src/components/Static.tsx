import React from "react";

const Statics: React.FC = () => {
  return (
    <section className="static bg-blue-50 mt-20">
      <div className="container px-4 mx-auto">
        <div className="boxs flex flex-col items-center justify-center py-8 md:flex-row md:py-16">
          <div className="text text-center mb-6 md:w-64 md:h-24 md:text-left md:mb-0 md:mr-20 md:pr-20">
            One Stop<br /> Four <span className="text-blue-500">Possibilities</span>.
          </div>
          <div className="statics flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <h2 className="w-12 h-10 font-semibold text-2xl">3M</h2>
              <p className="w-24 h-6 font-medium text-base">Active users</p>
            </div>
            <div className="text-center">
              <h2 className="w-12 h-10 font-semibold text-2xl">60M</h2>
              <p className="w-32 h-14 font-medium text-base">Links & QR codes created</p>
            </div>
            <div className="text-center">
              <h2 className="w-12 h-10 font-semibold text-2xl">1B</h2>
              <p className="w-36 h-16 font-medium text-base">Clicked & Scanned connections</p>
            </div>
            <div className="text-center">
              <h2 className="w-12 h-10 font-semibold text-2xl">300k</h2>
              <p className="w-32 h-6 font-medium text-base">App Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;

