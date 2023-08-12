"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full  h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-10 left-[18%]">
          <div className="relative w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] group  ring-pink-400 ring-opacity-50 shadow-pink-glow transition-all">
            <img
              src="Mask-Group.png"
              alt="grp-people"
              className="w-full h-full object-cover rounded-[18px] "
            />
            <div className="absolute mb-[30px] bottom-6 left-5 flex">
              <img src="grp-people.png" alt="people" className="mr-[8px]" />
              <p className="text-[15px] font-normal text-white">
                +264 has joined
              </p>
            </div>
            <p className="absolute bottom-5 left-5 font-bold text-[20px] text-white">
              The Upside Down
            </p>
          </div>
        </div>
        <div className="absolute top-10 right-[18%]">
          <div className="relative w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] group  ring-pink-400 ring-opacity-50 shadow-blue-glow transition-all">
            <img
              src="Mask-Group-2.png"
              alt="grp-people"
              className="w-full h-full object-cover rounded-[18px] "
            />
            <div className="absolute mb-[30px] bottom-6 left-5 flex">
              <img src="grp-people.png" alt="people" className="mr-[8px]" />
              <p className="text-[15px] font-normal text-white">
                +264 has joined
              </p>
            </div>
            <p className="absolute bottom-5 left-5 font-bold text-[20px] text-white">
              Hawkins Labs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
