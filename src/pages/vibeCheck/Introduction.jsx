import React, { useEffect, useState } from "react";
import After1 from "/static/images/After1.jpg";
import Before1 from "/static/images/Before1.jpg";
import After2 from "/static/images/After2.jpg";
import Before2 from "/static/images/Before2.jpg";
import After3 from "/static/images/After3.jpg";
import Before3 from "/static/images/Before3.jpeg";
import After4 from "/static/images/After4.jpg";
import Before4 from "/static/images/Before4.png";
import After5 from "/static/images/After5.jpg";
import Before5 from "/static/images/Before5.jpg";

function Introduction() {
  const [imageRevealFraq, setImagerevealFraq] = useState(0.5);
  return (
    <div className>
      <div className=" bg-[#262425]">
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
          <div>
            <div class="w-full pt-[70px]">
              <div>
                <div className=" text-[#E0CCBE]">
                  <h1 className=" text-3xl items-center justify-center text-center">
                    1. Sleek Modernism
                  </h1>
                  <br />
                  <p className=" mb-16">
                    Step into the world of Sleek Modernism, where clean lines,
                    minimalist aesthetics, and cutting-edge functionality
                    converge to create spaces that are both sophisticated and
                    inviting. At RaaD Designs, our sleek modernism vibe is all
                    about simplicity and elegance, characterized by open spaces,
                    neutral palettes, and a harmonious blend of form and
                    function. In a sleek modernist space, less is truly more.
                    Furniture and decor are carefully selected to ensure every
                    piece serves a purpose, contributing to an overall sense of
                    calm and order.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[60vw] h-[70vh] ml-[210px]">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="daisy" src={After1} />
                </div>
                <div className="diff-item-2">
                  <img alt="daisy" src={Before1} />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
          </div>

          <div>
            <div class="w-full pt-[20px]">
              <div>
                <div className=" text-[#E0CCBE]">
                  <h1 className=" text-3xl items-center justify-center text-center">
                    2. Modern-contemporary
                  </h1>
                  <br />
                  <p className=" mb-16">
                    Defined by clean lines, open spaces, and a balanced mix of
                    textures and materials, Modern-Contemporary interiors
                    embrace neutral color palettes with pops of vibrant hues.
                    Explore our curated selection of furnishings and decor to
                    transform your home into a chic and comfortable sanctuary.
                    Let RaaD Designs help you create a space that captures the
                    essence of modern living with a contemporary twist.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[60vw] h-[70vh] ml-[210px]">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="daisy" src={After2} />
                </div>
                <div className="diff-item-2">
                  <img alt="daisy" src={Before2} />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
          </div>

          <div>
            <div class="w-full pt-[20px]">
              <div>
                <div className=" text-[#E0CCBE]">
                  <h1 className=" text-3xl items-center justify-center text-center">
                    3. Eclectic Luxe
                  </h1>
                  <br />
                  <p className=" mb-16">
                    Eclectic Luxe interiors are characterized by a rich mix of
                    textures, patterns, and colors, blending vintage finds with
                    modern pieces, and ornate details with sleek lines. Imagine
                    opulent fabrics, statement lighting, and curated art pieces
                    coming together in perfect harmony. This style is all about
                    expressing your individuality while maintaining an air of
                    refined elegance. Explore the essence of Eclectic Luxe with
                    our curated selection of furnishings and decor. Transform
                    your home into a lavish and dynamic sanctuary where every
                    corner tells a story. Let RaaD Designs help you craft a
                    space that is as bold and glamorous as you are.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[60vw] h-[70vh] ml-[210px]">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="daisy" src={After3} />
                </div>
                <div className="diff-item-2">
                  <img alt="daisy" src={Before3} />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
          </div>

          <div>
            <div class="w-full pt-[20px]">
              <div>
                <div className=" text-[#E0CCBE]">
                  <h1 className=" text-3xl items-center justify-center text-center">
                    4. Parisian Modern
                  </h1>
                  <br />
                  <p className=" mb-16">
                    arisian Modern Living interiors are characterized by high
                    ceilings, ornate moldings, and large windows, combined with
                    sleek, minimalist furniture and contemporary decor. Picture
                    a harmonious blend of antique mirrors, plush textiles, and
                    modern art pieces, all set against a backdrop of neutral
                    tones and subtle hues. This style effortlessly balances the
                    old with the new, creating a space that is both
                    sophisticated and inviting. Explore the beauty of Parisian
                    Modern Living with our curated selection of furnishings and
                    decor. Transform your home into a refined sanctuary where
                    elegance meets modernity. Let RaaD Designs help you create a
                    space that embodies the timeless allure of Parisian style
                    with a fresh, contemporary twist.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[60vw] h-[70vh] ml-[210px]">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="daisy" src={After4} />
                </div>
                <div className="diff-item-2">
                  <img alt="daisy" src={Before4} />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
          </div>

          <div>
            <div class="w-full pt-[20px]">
              <div>
                <div className=" text-[#E0CCBE]">
                  <h1 className=" text-3xl items-center justify-center text-center">
                    5. Warm Minimalist
                  </h1>
                  <br />
                  <p className=" mb-16">
                    Warm Minimalist interiors are characterized by clean lines,
                    uncluttered spaces, and a focus on quality over quantity.
                    Think of natural materials, soft textures, and a neutral
                    color palette infused with warm tones. This style harmonizes
                    sleek, modern design with elements that add a sense of
                    warmth and comfort, such as plush rugs, wooden accents, and
                    cozy lighting. Explore the essence of Warm Minimalist design
                    with our curated selection of furnishings and decor.
                    Transform your home into a tranquil retreat where every
                    element serves a purpose and exudes understated elegance.
                    Let RaaD Designs help you create a space that perfectly
                    balances simplicity and warmth, providing a serene
                    environment to relax and unwind.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[60vw] h-[70vh] ml-[210px]">
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <img alt="daisy" src={After5} />
                </div>
                <div className="diff-item-2">
                  <img alt="daisy" src={Before5} />
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
