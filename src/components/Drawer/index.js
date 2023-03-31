import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { headerItems } from "../../assets/json/data";
import { useWindowScroll, useWindowSize } from "../../hooks";
import { ReactSVG } from "react-svg";
import { getIcons } from "../../utils/getIcons";
import {
  listItemVariants,
  listVariants,
  drawerVariant,
} from "../../utils/animations";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const scrollY = useWindowScroll();
  const controls = useAnimation();
  const { width: WindowWidth } = useWindowSize();

  useEffect(() => {
    if (open) {
      controls.start("visible");
      document.body.style.overflow = "hidden";
    } else {
      controls.start("hidden");
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (WindowWidth > 768) {
    if (open === true) setOpen(false);
    return null;
  }

  return (
    <>
      <div
        className={`md:hidden w-full p-[1.5rem] flex justify-end fixed top-0 z-[97] ${
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
      <AnimatePresence unmountOnExit>
        {open && (
          <motion.div
            key="drawer"
            variants={drawerVariant}
            initial="hidden"
            exit="hidden"
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
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-end"
              >
                {headerItems.slice(0, 3).map((item, index) => (
                  <motion.li
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    key={item.name}
                    className={`text-[1.6rem] mb-[1.4rem] text-right ${
                      index === 0 && "text-white"
                    }`}
                  >
                    <a
                      className="text-white stroke-white fill-white"
                      onClick={() => setOpen(false)}
                      href={item.href}
                    >
                      {item.icon ? (
                        <ReactSVG
                          className="h-8 w-8 mx-0 flex items-center justify-end"
                          src={getIcons(item.icon)}
                        />
                      ) : (
                        item.name
                      )}
                    </a>
                  </motion.li>
                ))}
                <div className="flex gap-4 ">
                  {headerItems.slice(3).map((item, index) => (
                    <motion.li
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      key={item.name}
                      className={`text-[1.6rem] mb-[1.4rem] text-right ${
                        index === 0 && "text-white"
                      }`}
                    >
                      <a
                        className="text-white stroke-white fill-white"
                        onClick={() => setOpen(false)}
                        href={item.href}
                      >
                        {item.icon ? (
                          <ReactSVG
                            className="h-12 w-12 mx-0 flex items-center justify-end"
                            src={getIcons(item.icon)}
                          />
                        ) : (
                          item.name
                        )}
                      </a>
                    </motion.li>
                  ))}
                </div>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Drawer;
