import { motion } from "framer-motion";

const Animated = ({ animation, elementType, className, children, ...rest }) => {
  const Component = motion[elementType] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animation}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Animated;
