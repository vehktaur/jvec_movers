const variants = {
  // Delays each child's animation by 0.5 seconds
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  },

  // Slide in from left
  slideInLeft: {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },
  // Slide in from right
  slideInRight: {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },
  // Fade in with scale
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  },
  // Fade in only
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },
  // Zoom in
  zoomIn: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  },
  // Slide up from bottom
  slideUp: {
    hidden: { y: 300, scale: 0.8, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    },
  },
  // Rotate in
  rotateIn: {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
        staggerChildren: 0.2,
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
  // Subtle slide down
  subtleSlideDown: {
    hidden: { y: '-50%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeIn' },
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
  // Delayed fade in
  delayedFadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
    },
  },
};

export default variants;
