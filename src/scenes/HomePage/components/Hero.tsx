import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Hero.module.css";

export const Hero = () => {
  const [parallaxY, setParallaxY] = useState(0);

  const onScroll = useCallback(() => {
    setParallaxY(window.scrollY / 10);
  }, [setParallaxY]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);


  return (
    <section className={s.container}>
      <div className={s.imageContainer} style={{ top: -parallaxY }}>
        <img className={s.image} src="bg.jpg" alt="" width="1920" height="1080"/>
      </div>
      <div className={s.center}>
        <h1 className={s.title}>Star fighter</h1>
        <Link className={s.button} to="/game">
          Start
        </Link>
      </div>
    </section>
  );
};

export default Hero;
