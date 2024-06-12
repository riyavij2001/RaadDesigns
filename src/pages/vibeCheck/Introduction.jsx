import React, { useEffect, useState } from "react";

function Introduction() {
  return (
    <div className>
      <div className=" bg-[#262425] w-full">
        <div class="w-full p-[10vh]">
          <div>
            <div className=" text-[#E0CCBE] items-center justify-center text-center">
              <h1 className=" text-4xl">
                Unleash Your Style, Define Your Space
              </h1>
              <br />
              <p className=" mb-8">
                Welcome to Vibe Check, your go-to destination for finding the
                perfect interior style that resonates with you. At RaaD Designs,
                we believe that your space should reflect your unique
                personality and taste. Whether you're into cozy minimalism,
                eclectic boho, sleek modernism, or timeless elegance, we've got
                a vibe that matches your dream. Explore our diverse range of
                styles and see how each{" "}
                <span className=" italic font-semibold text-[#725641]">
                  {" "}
                  "vibe"{" "}
                </span>{" "}
                can transform your space into a true reflection of you. Dive in
                and find your perfect match!
              </p>
            </div>
          </div>
          <div class="w-full pt-[80px]">
            <div>
              <div className=" text-[#E0CCBE]">
                <h1 className=" text-3xl">1. Sleek Modernism</h1>
                <br />
                <p className=" mb-8">
                  Step into the world of Sleek Modernism, where clean lines,
                  minimalist aesthetics, and cutting-edge functionality converge
                  to create spaces that are both sophisticated and inviting. At
                  RaaD Designs, our sleek modernism vibe is all about simplicity
                  and elegance, characterized by open spaces, neutral palettes,
                  and a harmonious blend of form and function. In a sleek
                  modernist space, less is truly more. Furniture and decor are
                  carefully selected to ensure every piece serves a purpose,
                  contributing to an overall sense of calm and order.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Introduction;
