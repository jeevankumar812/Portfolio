import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

       {/* --- Profile Image --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.jeevan} alt='user' className='w-full rounded-3xl' />
        </motion.div>






        {/* --- About Content --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>

          {/* --- Updated About Me Text --- */}
            <p className='mb-10 max-w-2xl font-Ovo'>
            Hi, I am <b>K Jeevan Kumar</b>, a passionate <b>Full Stack Developer (MERN Stack)</b> with a strong interest in 
            building scalable and responsive web applications. I enjoy working on both frontend and backend, delivering clean and efficient solutions.
            <br /><br />
            I actively practice <b>Data Structures & Algorithms</b> to strengthen my problem-solving skills and regularly solve coding challenges on 
            <a href="https://leetcode.com/problemset/" target="_blank" className="text-blue-500 hover:underline"> LeetCode</a> and 
            <a href="https://www.geeksforgeeks.org/" target="_blank" className="text-green-600 hover:underline"> GeeksforGeeks</a>.
             Being A fresher, I am eager to contribute to real-world projects, collaborate with teams, and grow as a proficient software engineer.
            </p>


          {/* --- Info Cards --- */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* --- Tools I Use --- */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>

          {/* --- Coding Profiles (New Section) --- */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
            Coding Profiles
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>

            <motion.li
              whileHover={{ scale: 1.1 }}
              className='flex items-center justify-center px-4 py-2 border border-gray-400 
              rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white'>
              <a href="https://leetcode.com/u/kjeevankumar08/" target="_blank"
                className='text-yellow-600 dark:text-yellow-400 font-semibold'>LeetCode</a>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              className='flex items-center justify-center px-4 py-2 border border-gray-400 
              rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white'>
              <a href="https://www.geeksforgeeks.org/user/jeevankumar08/" target="_blank"
                className='text-green-600 dark:text-green-400 font-semibold'>GeeksforGeeks</a>
            </motion.li>

          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
