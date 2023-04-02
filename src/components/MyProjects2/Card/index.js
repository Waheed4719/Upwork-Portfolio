import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({ image, title, description, index, setSelectItem }) => (
  <motion.div
    key={title}
    variants={item}
    className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-[150px] min-h-[150px]"
  >
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: index === 4 ? 200 : 150 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`h-0 relative ${
        index % 2 === 0 ? "md:order-2" : ""
      } overflow-hidden cursor-pointer`}
      onClick={() => setSelectItem(index)}
    >
      <img
        className={`w-full h-full ${
          index === 4 ? "object-contain h-full" : "object-cover"
        } grayscale-[1] object-center transition-transform duration-500 hover:grayscale-0 hover:scale-[1.2]`}
        src={image}
        alt=""
      />
    </motion.div>
    <div className="projectcard__info">
      <div className="overflow-hidden h-[32px] md:h-[60px] mb-3">
        <motion.h2
          initial={{ height: 0, y: 30 }}
          transition={{ duration: 1 }}
          whileInView={{ height: "auto", y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[2.5rem] text-white h-0"
        >
          {title}
        </motion.h2>
      </div>
      <div className="overflow-hidden">
        <p className="text-[1rem] text-white">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default Card;
