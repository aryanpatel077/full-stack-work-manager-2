"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: " CEO : Good felow Finance ",
    message:
      "Employees rise to thier level of incomptence ",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: " CEO : NSW Film and TV office ",
    message:
      "Somethings are worth getting your heart broken for ",
  },
  {
    id: 3,
    name: "Mr. John Son",
    designation: " CTO, PQR Ltd. ",
    message:
      "On success, strenth, power and motivation : The Rock",
  },
    {
    id: 1,
    name: "Sir John Doe",
    designation: "CEO : Good felow Finance",
    message:
      "Employees rise to thier level of incomptence",
  },
  {
    id: 2,
    name: "Px Jane Smith",
    designation: "CEO : NSW Film and TV office",
    message:
      "Somethings are worth getting your heart broken for",
  },
  {
    id: 3,
    name: "John Son",
    designation: "CTO, PQR Ltd.",
    message:
      "On success, strenth, power and motivation",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="max-w-full mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-1">
        <p className="text-gray-700 mb-4">{testimonial.message}</p>
        <div className="flex items-center">
          <div className="mr-2">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
