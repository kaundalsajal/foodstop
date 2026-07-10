"use client";

import { useRef } from "react";
import Typography from "./typography/Typography";
import { hero } from "@/data/hero-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "./ui/Button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const circleRef = useRef<HTMLDivElement>(null);

  const smallImages = [
    "/foodImages/image1.png",
    "/foodImages/image2.png",
    "/foodImages/image3.png",
    "/foodImages/image4.png",
    "/foodImages/image5.png",
    "/foodImages/image2.png",
    "/foodImages/image3.png",
    "/foodImages/image4.png",
    "/foodImages/image5.png",
    "/foodImages/image6.png",
  ];

  const largeImages = [
    "/foodImages/bimage1.png",
    "/foodImages/bimage2.png",
    "/foodImages/bimage3.png",
    "/foodImages/bimage4.png",
  ];

  const ellipsesRight = [
    "/cuisineLabel/EllipseR1.png",
    "/cuisineLabel/EllipseR2.png",
    "/cuisineLabel/EllipseR3.png",
    "/cuisineLabel/EllipseR4.png",
  ];

  const ellipsesLeft = [
    "/cuisineLabel/EllipseL1.png",
    "/cuisineLabel/EllipseL2.png",
    "/cuisineLabel/EllipseL3.png",
    "/cuisineLabel/EllipseL4.png",
  ];

  const backgroundColor = ["#F7D297", "#35580F99", "#FC9A63", "#F45E5E"];

  const buttonTextColor = ["#F7D297", "#35580F", "#F7D297", "#F45E5E"];

  const headingColor = ["#EFA662B5", "#35580FB5", "#FC9A63B5", "#F45E5EB5"];

  const cuisines = [
    "South Indian Cuisine",
    "Healthy Salads",
    "Mexican cuisine",
    "Italian cuisine",
  ];

  function onClickScroll(direction: "forward" | "backward") {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (direction === "forward") {
      if (scrollPosition >= 0 && scrollPosition < 250) {
        window.scrollTo({
          top: 250,
          behavior: "smooth",
        });
      } else if (scrollPosition >= 250 && scrollPosition < 500) {
        window.scrollTo({
          top: 749,
          behavior: "smooth",
        });
      } else if (scrollPosition >= 500 && scrollPosition < 750) {
        window.scrollTo({
          top: 1011,
          behavior: "smooth",
        });
        console.log(window.scrollY);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else if (direction === "backward") {
      if (scrollPosition >= 0 && scrollPosition < 250) {
        window.scrollTo({
          top: 1011,
          behavior: "smooth",
        });
      } else if (scrollPosition >= 250 && scrollPosition < 500) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (scrollPosition >= 500 && scrollPosition < 750) {
        window.scrollTo({
          top: 250,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 749,
          behavior: "smooth",
        });
      }
    }
  }

  useGSAP(() => {
    if (!circleRef.current) return;

    const smallImages = gsap.utils.toArray<HTMLElement>(".smallImage");
    const largeImages = gsap.utils.toArray<HTMLElement>(".largeImage");
    const cuisineLabels = gsap.utils.toArray<HTMLElement>(".cuisine-label");
    const ellipsesR = gsap.utils.toArray<HTMLElement>(".ellipse-right");
    const ellipsesL = gsap.utils.toArray<HTMLElement>(".ellipse-left");

    const radius = circleRef.current.offsetWidth / 2;

    const angles = [20, 55, 90, 125, 160, 195, 240, 275, 310, 345];

    smallImages.forEach((node, index) => {
      const angle = angles[index % angles.length] * (Math.PI / 180);
      gsap.to(node, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        duration: 0.7,
      });
    });

    function playAnimation(step: number) {
      largeImages.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            scale: 0.1,
            duration: 0.7,
          });
        }
      });

      cuisineLabels.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            background: backgroundColor[step],
            duration: 0.7,
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
          });
        }
      });

      ellipsesR.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            duration: 0.7,
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
          });
        }
      });

      ellipsesL.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            duration: 0.7,
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
          });
        }
      });

      gsap.to(circleRef.current, {
        rotate: 180 + step * 35,
        duration: 0.7,
      });

      gsap.to(".circle", {
        background: backgroundColor[step],
        duration: 0.7,
      });

      gsap.to(".order-button", {
        background: backgroundColor[step],
        duration: 0.7,
      });

      gsap.to(".book-table-button", {
        color: buttonTextColor[step],
        duration: 0.7,
      });

      gsap.to(".main-heading", {
        color: headingColor[step],
        duration: 0.7,
      });
    }
    playAnimation(0);

    let previousStep = 0;

    ScrollTrigger.create({
      trigger: ".panel",
      start: "top top",
      end: "+=2000 bottom",
      pin: true,

      onUpdate(self) {
        const totalSteps = 4;

        const step = Math.round(self.progress * (totalSteps - 1));

        if (step !== previousStep) {
          previousStep = step;
          playAnimation(step);
        }
      },
    });
    return () => ScrollTrigger.killAll();
  });
  return (
    <section className=" max-w-275 md:px-5 flex flex-col-reverse lg:flex-row justify-between lg:mx-auto md:mx-10 mx-4 lg:py-9.5">
      {/* Text Section  */}
      <div className="max-w-full lg:max-w-110 mt-5 lg:mt-54.25">
        <Typography variant="h2" weight="semibold" className="main-heading">
          {hero.heading1}
        </Typography>
        <Typography variant="h3" weight="medium" className="mt-2.5">
          {hero.heading2}
        </Typography>
        <Typography variant="body-sm" className="mt-2.5" color="text-secondary">
          {hero.description}
        </Typography>
        <Typography variant="h5" className="italic mt-14">
          {hero.heading3}
        </Typography>
        <div className="flex gap-3.75 mt-4">
          <Button
            variant="outline"
            className="book-table-button w-27 flex items-center justify-center"
          >
            <Typography variant="caption" weight="bold" color="inherit">
              {hero.button1Text}
            </Typography>
          </Button>
          <Button
            variant="normal"
            className="order-button w-49.75 flex items-center justify-center"
          >
            <Typography variant="caption" weight="bold">
              {hero.button2Text}
            </Typography>
          </Button>
        </div>
      </div>

      {/* Rotating Section  */}
      <div className="relative flex flex-col items-center justify-end w-full h-[30vh] sm:h-[40vh] lg:h-[80vh] lg:max-h-220 ">
        <div className="circle absolute w-[200%] sm:w-[150%] lg:w-[180%] bottom-1/2 rounded-full aspect-square overflow-hidden">
          {/* Circle with the images on the edge */}
          <div
            ref={circleRef}
            className="absolute
              left-1/2
              top-full
              -translate-x-1/2
              -translate-y-1/2
              aspect-square
              w-1/3
              lg:w-1/2
              rounded-full
              border-2
              border-dashed
              border-white
              rotate-180"
          >
            {smallImages.map((img, index) => (
              <div
                key={index}
                className="smallImage absolute w-[20%] max-w-20 left-1/2 top-1/2 "
              >
                <div className="w-full max-w-20 overflow-hidden rounded-full -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={img}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large image in the edge of the circle */}
        {largeImages.map((img, index) => {
          return (
            <div
              key={index}
              className="largeImage w-[30%] max-w-40 lg:max-w-54.5 absolute bottom-1/2 overflow-hidden rounded-full translate-y-1/2"
            >
              <Image
                src={img}
                alt=""
                width={218}
                height={218}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          );
        })}

        {/* Bottom cuisine label */}
        <div className="relative lg:bottom-50 flex h-8.75 w-[65%] min-w-75 max-w-100 mx-auto">
          {/* Left Side Toogle button */}
          <div className="relative h-8.75 w-[25%]">
            {ellipsesLeft.map((e, index) => (
              <Image
                key={index}
                alt="ellipse Image"
                src={e}
                height={43}
                width={65}
                className="ellipse-left top-[60%] -translate-y-1/2 w-[60%] absolute z-10 cursor-pointer"
                onClick={() => onClickScroll("backward")}
              />
            ))}
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-[60%] h-auto">
              <Image
                alt="vector image"
                src="/cuisineLabel/Vector.png"
                height={19}
                width={60}
              />
            </div>
          </div>

          {/* Center Label */}
          <div className="relative h-8.75 w-[50%] max-w-54.5 z-10">
            {cuisines.map((cuisine, index) => (
              <div
                key={index}
                className="absolute cuisine-label h-8.75 w-full rounded-[50px] flex justify-center items-center opacity-0 "
              >
                <Typography variant="caption" weight="medium" className="">
                  {cuisine}
                </Typography>
              </div>
            ))}
          </div>

          {/* Right Side Toogle button */}
          <div className="relative h-8.75 w-[25%]">
            {ellipsesRight.map((e, index) => (
              <Image
                key={index}
                alt="ellipse Image"
                src={e}
                height={43}
                width={65}
                className="ellipse-right absolute top-[60%] -translate-y-1/2 right-0 w-[60%] z-10 cursor-pointer"
                onClick={() => onClickScroll("forward")}
              />
            ))}
            <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-[60%] h-auto rotate-180">
              <Image
                alt="vector image"
                src="/cuisineLabel/Vector.png"
                height={19}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
