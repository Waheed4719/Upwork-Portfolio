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

export const drawerVariant = {
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

export const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const listItemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 40,
  },
};
