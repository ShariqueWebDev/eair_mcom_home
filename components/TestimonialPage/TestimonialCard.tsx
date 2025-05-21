import React from "react";

const TestimonialCard = ({ data }: { data: any }) => {
  return (
    <div className="space-y-5 text-center">
      <h3
        className="text-gray-700 font-normal max-sm:text-base text-xl"
        data-aos="fade-up"
      >
        This company has been our partner for two years. They take full
        responsibility for all assigned tasks and perform the work efficiently
        and on time. This company has competent employees, discipline and a
        strong team spirit.
      </h3>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <h4 className="text-xl font-medium" data-aos="fade-up">
          Ashly William
        </h4>
        <p className="text-gray-400 text-sm" data-aos="fade-up">
          Business Owner
        </p>
        <div
          className="w-16 h-16 !mt-7 rounded-full overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
