import { motion } from "framer-motion";
import { dataAbout } from "../constants";

const AnimatedImg = ({ src, alt, className }) => {
  return (
    <div className={"about__img-container"}>
      <motion.img
        initial={{ scale: 1.5, x: -70, y: 70 }}
        whileInView={{ scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
};

const About = () => {
  return (
    <section className={"about"}>
      <AnimatedImg
        src={dataAbout["imgAboutDark"]}
        alt=""
        className="about__left-img"
      />
      <div className="about__content">
        <h3 className="about__title">{dataAbout["title"]}</h3>
        <p className="about__desc">{dataAbout["desc"]}</p>
      </div>
      <AnimatedImg
        src={dataAbout["imgAboutLight"]}
        alt=""
        className={"about__right-img"}
      />
    </section>
  );
};
export default About;
