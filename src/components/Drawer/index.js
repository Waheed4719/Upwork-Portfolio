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
      x: "-100%",
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

  useEffect(() => {
    if (open) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [open]);

  return (
    <>
      <div
        className={`xl:hidden w-full p-[2.5rem] flex justify-start sticky top-0 z-[97] ${
          scrollY !== 0
            ? "bg-white py-[2.5rem]"
            : "bg-transparent pt-[3.5rem] pb-[1.5rem]"
        }`}
      >
        <button
          type="button"
          className="mr-auto"
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
        className="bg-white shadow-xl w-[calc(100vw-4rem)]  max-w-[400px] fixed top-0 bottom-0 z-[100] left-[0]"
      >
        <div className="px-[5.4rem] pt-[3.7rem] flex justify-end">
          <button
            type="button"
            className="mb-[2.4rem] text-[4rem] text-right"
            onClick={() => setOpen((prev) => !prev)}
          >
            &times;
          </button>
        </div>
        <nav className="text-[1.4rem] px-[5.4rem] pb-[5vh]">
          <ul>
            {headerItems.map((item, index) => (
              <li
                key={item.title}
                className={`text-[2.6rem] mb-[2.4rem] text-left ${
                  index === 0 && "text-[#27B0E6]"
                }`}
              >
                <a onClick={() => setOpen(false)} href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="rounded-full transition duration-[0.4s] bg-[#27b0e6] text-[1.4rem] font-semibold text-white px-10 py-4"
          >
            Join the waiting list
          </button>
        </nav>
      </motion.div>
    </>
  );
};
export default Drawer;
