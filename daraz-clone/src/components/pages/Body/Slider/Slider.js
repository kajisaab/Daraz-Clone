import React, { useState, useEffect, useRef } from "react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import "./Slider.css";
import Dots from "./Dots";

// const getWidth = () => window.innerWidth;

function Slider(props) {
  const [slides, setSlides] = useState([
    {
      image: "images/1bfd8b31-8bae-4152-85d1-69077af1691a.jpg",
      backgroundColor: "rgb(148, 225, 234)",
    },
    {
      image: "images/8c999431-cfa2-43d7-9687-579d2e72a0a1.jpg",
      backgroundColor: "rgb(91, 124, 43)",
    },
    {
      image: "images/9c68ba13-46bb-40d1-a084-ef15540a92cb.jpg",
      backgroundColor: " rgb(240, 242, 236)",
    },
    {
      image: "images/743b570c-4f27-41e3-8711-a50f2a3f905b.jpg",
      backgroundColor: " rgb(91, 124, 43)",
    },
    {
      image: "images/e6b9f00e-6bcb-464e-9355-a85951988a67.jpg_1200x1200.jpg",
      backgroundColor: "rgb(14, 41, 67)",
    },
    {
      image: "images/f1c849f8-f85a-4f8f-a578-1cd4cf473a64.jpg",
      backgroundColor: "rgb(218, 238, 247)",
    },
    {
      image: "images/f3891827-3f30-43d3-bab1-7e31cb6d2d8b.jpg",
      backgroundColor: "rgb(109, 44, 160)",
    },
  ]);

  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    if (props.autoPlay !== null) {
      const interval = setInterval(play, props.autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoPlay]);
  //   const [state, setState] = useState({
  //     activeIndex: 0,
  //     translate: getWidth(),
  //     transition: 0.45,
  //     _slides: [
  //       lastSlide,
  //       firstSlide,
  //       secondSlide,
  //       thirdSlide,
  //       fourthSlide,
  //       fifthSlide,
  //       sixthSlide,
  //     ],
  //   });

  //   const { translate, transition, activeIndex, _slides } = state;
  //   const autoPlayRef = useRef();
  //   const transitionRef = useRef();

  //   useEffect(() => {
  //     autoPlayRef.current = nextSlide;
  //     transitionRef.current = smoothTransition;
  //   });

  //   // This is for the autoplay of the slides
  //   useEffect(() => {
  //     const play = () => {
  //       autoPlayRef.current();
  //     };

  //     const smooth = (e) => {
  //       if (e.target.className.includes("SliderContent")) {
  //         transitionRef.current();
  //       }
  //     };

  //     let interval = null;

  //     const transitionEnd = window.addEventListener("transitionend", smooth);

  //     if (props.autoPlay) {
  //       interval = setInterval(play, props.autoPlay * 1000);
  //     }

  //     return () => {
  //       window.removeEventListener("transitionend", transitionEnd);

  //       if (props.autoPlay) {
  //         clearInterval(interval);
  //       }
  //     };
  //   }, [props.autoPlay]);

  //   useEffect(() => {
  //     if (transition === 0) setState({ ...state, transition: 0.45 });
  //   }, [transition]);

  //   const smoothTransition = () => {
  //     let _slides = [];

  //     // We're at the last slide.
  //     if (activeIndex === slides.length - 1)
  //       _slides = [slides[slides.length - 1], lastSlide, firstSlide];
  //     //We're back at the first slide. Just reset to how it was on initial render
  //     else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide];
  //     // Create an array of the previous last slide, and the next two slides that follow it.
  //     else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

  //     setState({
  //       ...state,
  //       _slides,
  //       transition: 0,
  //       translate: getWidth(),
  //     });
  //   };

  //   const nextSlide = () =>
  //     setState({
  //       ...state,
  //       translate: translate + getWidth(),
  //       activeIndex:
  //         activeIndex === props.slides.length - 1 ? 0 : activeIndex + 1,
  //     });

  //   const prevSlide = () =>
  //     setState({
  //       ...state,
  //       translate: 0,
  //       activeIndex:
  //         activeIndex === 0 ? props.slides.length - 1 : activeIndex - 1,
  //     });

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };
  // console.log(activeIndex);
  console.log(props.slides);
  return (
    <div className="slidercontent">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide) => (
          <Slide
            key={slide}
            content={slide.image}
            color={slide.backgroundColor}
          />
        ))}
      </SliderContent>
      {!props.autoPlay}

      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null,
};

export default Slider;
