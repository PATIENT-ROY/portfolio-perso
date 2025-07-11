import { motion } from "framer-motion";

interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <motion.h1
      className="uppercase font-bold mb-5 text-center text-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {title}
    </motion.h1>
  );
};

export default Title;
