import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, direction }) =>
    isVisible
      ? "translateY(0) scale(1)"
      : direction === "left"
      ? "translateX(-60px) scale(0.95)"
      : direction === "right"
      ? "translateX(60px) scale(0.95)"
      : "translateY(60px) scale(0.95)"};
  filter: ${({ isVisible }) => (isVisible ? "blur(0px)" : "blur(6px)")};
  transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, opacity;
`;

function FadeInSection({ children, direction = "up" }) {
  const domRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={domRef} isVisible={isVisible} direction={direction}>
      {children}
    </Wrapper>
  );
}

export default FadeInSection;