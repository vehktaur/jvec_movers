const variants = {
  // Delays each child's animation by 0.5 seconds
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  },

  // Slide in from left
  slideInLeft: {
    hidden: (x = -200) => ({ x, opacity: 0 }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },
  // Slide in from right
  slideInRight: {
    hidden: (x = 200) => ({ x, opacity: 0 }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },

  // Fade in only
  fadeIn: {
    hidden: (scale = 0.75) => ({ opacity: 0, scale }),
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },

  // Slide up from bottom
  slideUp: {
    hidden: (y = 100) => ({ y, scale: 0.8, opacity: 0 }),
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },

  // Flip in from X axis
  flipInX: {
    hidden: { rotateX: -90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },

  // Flip in from Y axis
  flipInY: {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },
  // Staggered fade in
  staggerFadeIn: {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.5,
      },
    },
  },
  // Bounce in
  bounceIn: {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  },

  // Rotate with scaling
  rotateScaleIn: {
    hidden: { rotate: 90, scale: 0, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
};

export default variants;
