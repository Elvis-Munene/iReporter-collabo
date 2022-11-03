import React from "react";
import TestimonialCard from "./TestimonialsCard";
import { testimonialInfo } from '../data/testimonials'



const Testimonials = () => {
  const TestimonialList = testimonialInfo.map((testimonial, index) => {
    return (
      <TestimonialCard
        key={index}
        image={testimonial.image}
        quote={testimonial.quote}
        name={testimonial.name}
        
      />
    );
  });
  return (
    <div className="w-full">
      <h2 className="pt-20 text-3xl font-extrabold align-center">
      Testimonials
      </h2>
      <div className="pt-20 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{TestimonialList}</div>
    </div>
  );
};

export default Testimonials;