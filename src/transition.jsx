import React from "react";
import { motion } from "framer-motion";
import classes from "./styles/transition.module.css";

const transition = (OriginalComponent) => {
    return () => (
        <>
            <OriginalComponent/>
            <motion.div 
                className={classes.slideIn}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className={classes.slideOut}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default transition;