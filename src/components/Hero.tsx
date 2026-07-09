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
      if (scrollTop >= 0 && scrollTop < 250) {
        window.scrollTo({
          top: 1011,
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
      // smallImages.forEach((node, index) => {
      //   const angle = angles[(index + step) % angles.length] * (Math.PI / 180);
      //   if ((index + step) % angles.length > 4) {
      //     gsap.to(node, {
      //       opacity: 0,
      //       x: Math.cos(angle) * radius,
      //       y: Math.sin(angle) * radius,
      //       duration: 0.7,
      //     });
      //   } else {
      //     gsap.to(node, {
      //       opacity: 1,
      //       x: Math.cos(angle) * radius,
      //       y: Math.sin(angle) * radius,
      //       duration: 0.7,
      //       // ease: "power3.out",
      //     });
      //   }
      // });
      console.log(window.scrollY, "this is scroll position with mouse");

      largeImages.forEach((node, index) => {
        if (index === step) {
          gsap.to(node, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            // ease: "power3.out",
          });
        } else {
          gsap.to(node, {
            opacity: 0,
            scale: 0.1,
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

      gsap.to(circleRef.current, {
        rotate: 180 + step * 35,
        duration: 0.7,
        // ease: "power3.inOut",
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
      markers: true,

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
    <section className=" max-w-275 md:px-5 h-full flex flex-col-reverse lg:flex-row justify-between lg:mx-auto md:mx-10 mx-4 lg:my-9.5">
      <div className="max-w-full lg:max-w-98.25 mt-1 md:mt-5 lg:mt-54.25">
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
      <div className="relative flex flex-col items-center w-full h-[30vh] lg:h-[80vh]">
        <div className="circle absolute w-[200%] bottom-1/3 lg:bottom-1/2 rounded-full aspect-square overflow-hidden">
          <div
            ref={circleRef}
            className="absolute
              left-1/2
              top-full
              -translate-x-1/2
              -translate-y-1/2
              aspect-square
              w-1/3
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
        {largeImages.map((img, index) => {
          return (
            <div
              key={index}
              className="largeImage w-[30%] max-w-54.5 absolute bottom-1/3 lg:bottom-1/2 overflow-hidden rounded-full translate-y-1/2"
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
        {/* <div className="md:relative bottom-[65%] md:bottom-[40%] right-[25%] sm:right-0 lg:bottom-[10%] h-8.75 w-20 md:w-54.5 mx-auto">
          <div className="md:block hidden top-0 left-54.5">
            {ellipsesLeft.map((e, index) => (
              <Image
                key={index}
                alt="ellipse Image"
                src={e}
                height={43}
                width={65}
                className="ellipse-left absolute -left-25.75 z-10"
                onClick={() => onClickScroll("backward")}
              />
            ))}
            <Image
              alt="vector image"
              src="/cuisineLabel/Vector.png"
              height={19}
              width={60}
              className="absolute top-3.25 right-52.75 w-14.75 h-2"
            />
          </div>
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="absolute cuisine-label h-8.75 w-54.5 rounded-[50px] flex justify-center items-center opacity-0 "
            >
              <Typography variant="caption" weight="medium" className="">
                {cuisine}
              </Typography>
            </div>
          ))}
          <div className="md:block hidden top-0 right-54.5">
            {ellipsesRight.map((e, index) => (
              <Image
                key={index}
                alt="ellipse Image"
                src={e}
                height={43}
                width={65}
                className="ellipse-right absolute -right-25.75 z-10"
                onClick={() => onClickScroll("forward")}
              />
            ))}
            <Image
              alt="vector image"
              src="/cuisineLabel/Vector.png"
              height={19}
              width={60}
              className="absolute top-3.25 left-52.75 w-14.75 h-2 rotate-180"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
