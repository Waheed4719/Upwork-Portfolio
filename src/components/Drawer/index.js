import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { headerItems } from "../../assets/json/data";
import { useWindowScroll } from "../../hooks";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const scrollY = useWindowScroll();
  const controls = useAnimation();

  const drawerVariant = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const listItemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  useEffect(() => {
    if (open) {
      controls.start("visible");
      document.body.style.overflow = "hidden";
    } else {
      controls.start("hidden");
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div
        className={`xl:hidden w-full p-[1.5rem] flex justify-end fixed top-0 z-[97] ${
          scrollY !== 0 ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <button
          type="button"
          className=""
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <motion.div
        variants={drawerVariant}
        initial="hidden"
        animate={controls}
        className="bg-[rgba(0,0,0,0.6)] shadow-xl w-[calc(100vw-4rem)] flex flex-col justify-between  max-w-[400px] fixed top-0 bottom-0 z-[300] right-[0]"
      >
        <div className="px-[5.4rem] pt-[1.7rem] flex justify-end">
          <button
            type="button"
            className="mb-[2.4rem] text-[4rem] text-right"
            onClick={() => setOpen((prev) => !prev)}
          >
            &times;
          </button>
        </div>
        <nav className="text-[1.4rem] px-[5.4rem] pb-[5vh]">
          <motion.ul variants={listVariants} initial="hidden" animate="visible">
            {headerItems.map((item, index) => (
              <motion.li
                variants={listItemVariants}
                key={item.title}
                className={`text-[1.6rem] mb-[1.4rem] text-right ${
                  index === 0 && "text-white"
                }`}
              >
                <a
                  className="text-white"
                  onClick={() => setOpen(false)}
                  href={item.href}
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    </>
  );
};
export default Drawer;
