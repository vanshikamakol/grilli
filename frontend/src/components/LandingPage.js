// src/components/LandingPage.js

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start fade-out after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Duration before fade-out starts

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationComplete = () => {
        if (!isVisible) {
            navigate('/home'); // Redirect to Home after animation
        }
    };

    // Variants for the container
    const containerVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    // Variants for individual elements
    const childVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    return (
        <div className="landing-page">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="landing-container"
                        variants={containerVariants}
                        initial="visible"
                        animate="visible"
                        exit="hidden"
                        onAnimationComplete={handleAnimationComplete}
                    >
                        
                        <motion.h1
                            className="welcome-text"
                            variants={childVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Welcome to Grilli
                        </motion.h1>
                        <motion.p
                            className="tagline"
                            variants={childVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            Experience the finest North Indian cuisine!
                        </motion.p>
                        <motion.div
                            className="loader"
                            variants={childVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 2, duration: 1 }}
                        >
                            <div className="spinner"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;
