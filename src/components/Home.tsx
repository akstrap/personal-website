import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl mx-auto text-center px-6"
    >
      {/* Profile Image - Now Fully Centered */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center"
      >
        <ImageComponent
          src={profilePic}
          alt="Akshit Thavanati"
          width="180px"
          height="180px"
          shape="circle"
          outlineColor="green"
          outlineThickness="4px"
          crop={true}
        />
      </motion.div>

      {/* Text Section - Centered */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-5xl font-extrabold text-primary">
          Hey, I'm Akshit Thavanati!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Passionate about software engineering, machine learning, and building
          impactful solutions. Let's create something amazing together!
        </p>

        {/* Buttons - Spaced & Centered */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            📄 Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            📜 Transcript
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            💼 Experiences
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            📞 Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
