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
    const scrollTop = window.scrollY || window.pageYOffset;
    console.log(scrollTop);
    if (direction === "forward") {
      if (scrollTop >= 0 && scrollTop < 250) {
        window.scrollTo({
          top: 250,
          behavior: "smooth",
        });
      } else if (scrollTop >= 250 && scrollTop < 500) {
        window.scrollTo({
          top: 749,
          behavior: "smooth",
        });
      } else if (scrollTop >= 500 && scrollTop < 750) {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else if (direction === "backward") {
      if (scrollTop >= 0 && scrollTop < 250) {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      } else if (scrollTop >= 250 && scrollTop < 500) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (scrollTop >= 500 && scrollTop < 750) {
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

    const radius =
      window.innerWidth >= 560 ? 560 / 2 : (window.innerWidth * 0.8) / 2;

    const angles = [20, 55, 90, 125, 160, 195, 240, 275, 310, 345];

    function playAnimation(step: number) {
      smallImages.forEach((node, index) => {
        const angle = angles[(index + step) % angles.length] * (Math.PI / 180);
        if ((index + step) % angles.length > 4) {
          gsap.to(node, {
            opacity: 0,
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            duration: 0.7,
          });
        } else {
          gsap.to(node, {
            opacity: 1,
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            duration: 0.7,
            // ease: "power3.out",
          });
        }
      });

      largeImages.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            duration: 0.7,
            // ease: "power3.out",
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
            // ease: "power3.out",
          });
        }
      });

      cuisineLabels.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            background: backgroundColor[step],
            duration: 0.7,
            // ease: "power3.inOut",
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
            // ease: "power3.inOut",
          });
        }
      });

      ellipsesR.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            duration: 0.7,
            // ease: "power3.inOut",
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
            // ease: "power3.inOut",
          });
        }
      });

      ellipsesL.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            duration: 0.7,
            // ease: "power3.inOut",
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            duration: 0.7,
            // ease: "power3.inOut",
          });
        }
      });

      gsap.to(".circle", {
        background: backgroundColor[step],
        duration: 0.7,
        // ease: "power3.inOut",
      });

      gsap.to(".order-button", {
        background: backgroundColor[step],
        duration: 0.7,
        // ease: "power3.inOut",
      });

      gsap.to(".book-table-button", {
        color: buttonTextColor[step],
        duration: 0.7,
        // ease: "power3.inOut",
      });

      gsap.to(".main-heading", {
        color: headingColor[step],
        duration: 0.7,
        // ease: "power3.inOut",
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
    <section className="max-w-270 h-full flex flex-col lg:flex-row justify-between lg:mx-auto md:mx-10 mx-4 my-9.5">
      <div className="max-w-98.25 mt-5 lg:mt-54.25">
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
      <div className="relative hidden md:flex flex-col items-center justify-end w-full h-140 ">
        <div className="circle absolute bottom-[34%] rounded-full aspect-square flex items-center justify-center h-294">
          <div
            ref={circleRef}
            className="absolute bottom-[-23%] aspect-square w-[80vw] max-w-140 rounded-full border-2 border-dashed border-white rotate-180"
          >
            {smallImages.map((img, index) => (
              <div
                key={index}
                className="smallImage absolute left-1/2 top-1/2 "
              >
                <div className="w-[10vw] max-w-20  overflow-hidden rounded-full -translate-x-1/2 -translate-y-1/2">
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
            {largeImages.map((img, index) => {
              return (
                <div
                  key={index}
                  className="largeImage max-w-54.5 absolute left-1/2 top-1/2 opacity-0 z-1"
                >
                  <div className="w-[30vw] max-w-54.5 overflow-hidden rounded-full -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={img}
                      alt=""
                      width={218}
                      height={218}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              );
            })}
            <div className="relative h-8.75 w-54.5 mx-auto mt-[16%]">
              <div className="top-0 left-54.5 rotate-180">
                {ellipsesLeft.map((e, index) => (
                  <Image
                    key={index}
                    alt="ellipse Image"
                    src={e}
                    height={43}
                    width={65}
                    className="ellipse-left absolute -top-8.5 -left-25.75 z-10"
                    onClick={() => onClickScroll("backward")}
                  />
                ))}
                <Image
                  alt="vector image"
                  src="/cuisineLabel/Vector.png"
                  height={19}
                  width={60}
                  className="absolute -top-4.75 right-52.75 w-14.75 h-2"
                />
              </div>
              {cuisines.map((cuisine, index) => (
                <div
                  key={index}
                  className="absolute cuisine-label h-8.75 w-54.5 rounded-[50px] flex justify-center items-center opacity-0 z-1"
                >
                  <Typography
                    variant="caption"
                    weight="medium"
                    className="rotate-180"
                  >
                    {cuisine}
                  </Typography>
                </div>
              ))}
              <div className="top-0 right-54.5 rotate-180">
                {ellipsesRight.map((e, index) => (
                  <Image
                    key={index}
                    alt="ellipse Image"
                    src={e}
                    height={43}
                    width={65}
                    className="ellipse-right absolute -top-8.5 -right-25.75 z-10"
                    onClick={() => onClickScroll("forward")}
                  />
                ))}
                <Image
                  alt="vector image"
                  src="/cuisineLabel/Vector.png"
                  height={19}
                  width={60}
                  className="absolute -top-4.75 left-52.75 rotate-180 w-14.75 h-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
