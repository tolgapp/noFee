import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const HomeData = ({ image, info, second }) => {
  const location = useLocation("");
  const [plans, setPlans] = useState(false);

  useEffect(() => {
    if (location.pathname === "/plans") {
      setPlans(true);
    }
  });

  const [slideIn, setSlideIn] = useState(false);
  const slideClass = slideIn ? "slide" : "nothing";

  useEffect(() => {
    // Add a listener for the scroll event
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setSlideIn(true);
      } else {
        setSlideIn(false);
      }
    });

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <div
        className={`image-info h-full flex flex-col md:flex-row ${
          second ? "md:flex-row-reverse" : null
        }`}
      >
        <div
          className={`info w-full flex flex-col h-[calc(40vh)] place-content-center md:h-[calc(35vh)]`}
        >
          {info.map((elt) => {
            return (
              <p
                key={elt.id}
                className={`functions ${
                  plans ? "md:ml-10" : ""
                } text-left m-3 text-3xl ml-14 md:text-5xl md:m-6 md:ml-40 `}
              >
                ▸ {elt.title}
              </p>
            );
          })}
        </div>
        <img
          src={image}
          alt="debit card"
          className={`w-full object-cover md:w-1/2 ${slideClass}`}
        />
      </div>
    </>
  );
};

export default HomeData;
