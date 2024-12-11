import React from "react";
import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/Teams/team-1.jpg";
import team2 from "../../assets/Teams/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero  my-7 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 3,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6 text-gray-400">
            JobConnect is a dynamic platform connecting job seekers with
            employers. It offers a user-friendly interface to browse diverse
            opportunities across industries, locations, and experience levels.
            Candidates can create detailed profiles, upload resumes, and apply
            directly to openings. Employers can post job listings, review
            applications, and connect with top talent.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
