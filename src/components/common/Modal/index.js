import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import { ModalAnim, FadeInOut } from "../../../utils/animations";

const modalDocument = document.querySelector("#portal");

const Modal = ({
  open,
  onClose,
  title,
  children,
  footer = false,
  header = false,
}) => {
  const handleModalClose = () => {
    onClose && onClose();
  };

  useEffect(() => {
    if (open === 0 || open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  if (modalDocument === null || (open === false && open !== 0)) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <div className="z-[300] shadow-md fixed h-screen w-screen flex top-0 left-0 bottom-0 right-0">
          <motion.div
            key="modalOverlay"
            aria-label="close modal"
            role="button"
            tabIndex={0}
            className="bg-[rgba(0,0,0,0.6)] fixed top-0 left-0  h-full w-full"

            // onKeyDown={handleModalClose}
          />
          <motion.div
            key="content"
            variants={ModalAnim()}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`w-screen h-screen bg-black rounded-md m-auto`}
          >
            <button
              className="absolute top-[30px] bg-black right-[30px] border-2 border-[#fff] p-[10px] px-[20px] z-[2]"
              onClick={handleModalClose}
            >
              Close
            </button>
            {header && <ModalHeader title={title} onClose={handleModalClose} />}
            {footer && <ModalFooter />}
            <ModalContent>{children}</ModalContent>
          </motion.div>
        </div>,
        modalDocument
      )}
    </>
  );
};

export default Modal;
