import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import img from "../assets/3.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, <br /> I'm <span className="text-accent">Roydev</span>
        </motion.h1>

        <motion.p
          className="my-4 text-md text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am a frontend developer
          <br />
          using React and typescript.
          <br /> Contact me if you need my services ( a website and a web App).
        </motion.p>
        <motion.a
          href="#Contact"
          className="btn btn-accent md:w-fit hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
          Contact-me
        </motion.a>
      </motion.div>

      <motion.div
        className="md:ml-60"
        initial={{ opacity: 0, x: 50, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
