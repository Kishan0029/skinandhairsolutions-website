import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function FadeIn({ children, className, delay = 0, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      ...props,
      children
    }
  );
}
function SlideUp({ children, className, delay = 0, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      ...props,
      children
    }
  );
}
function Stagger({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-10%" },
      variants: {
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      },
      className,
      ...props,
      children
    }
  );
}
function StaggerItem({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      },
      className,
      ...props,
      children
    }
  );
}
export {
  FadeIn as F,
  SlideUp as S,
  Stagger as a,
  StaggerItem as b
};
