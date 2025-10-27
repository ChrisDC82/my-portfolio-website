'use client';

import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            A Producer learning to build with AI and Next.js, creating innovative digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Story</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                As a Producer with a passion for technology, I&apos;m on an exciting journey learning to build 
                with AI and Next.js. My background in creative production has given me a unique perspective 
                on user experience and digital storytelling.
              </p>
              <p>
                I&apos;m fascinated by the intersection of creativity and technology, particularly how AI can 
                enhance creative workflows and how modern web technologies can bring ideas to life. 
                My goal is to bridge the gap between creative vision and technical implementation.
              </p>
              <p>
                When I&apos;m not learning new technologies, you can find me exploring the latest in AI tools, 
                experimenting with creative coding, or collaborating with other developers and creators 
                in the tech community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-lg text-center font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 text-sm sm:text-base border border-transparent dark:border-blue-800/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What I Do</h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">AI-powered content creation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">Next.js web development</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">Creative project management</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">Digital media production</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-400">Technology learning & adaptation</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

