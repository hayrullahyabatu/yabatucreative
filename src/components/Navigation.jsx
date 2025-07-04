import { motion } from 'framer-motion';
        import { TypeAnimation } from 'react-type-animation';

        const Navigation = () => {
          return (
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-green-500"
                  >
                    <TypeAnimation
                      sequence={[
                        '360 Digital',
                        2000,
                        {
                          text: 'Transformation',
                          typeSpeed: 50,
                          delay: 200,
                          repeat: Infinity
                        }
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </motion.div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                      Services
                    </a>
                    <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                      Solutions
                    </a>
                    <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          );
        };

        export default Navigation;
