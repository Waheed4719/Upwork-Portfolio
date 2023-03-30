export const ModalAnim = (y, duration) => {
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration ?? 0.3,
        ease: "easeOut",
      },
    },
  };
};

export const FadeInOut = (duration) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: duration ?? 0.3,
        ease: "easeOut",
      },
    },
  };
};
