import { motion } from 'framer-motion';
        import { TypeAnimation } from 'react-type-animation';

        const Hero = () => {
          return (
            <section className="min-h-screen bg-black text-green-500">
              <div className="container mx-auto px-6 py-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-green-500 to-pink-500 bg-clip-text text-transparent">
                      Digital Evolution
                    </span>
                  </h1>
                  <p className="text-xl mb-12">
                    Empowering businesses through 360-degree digital transformation
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <TypeAnimation
                      sequence={[
                        'Innovate. Transform. Excel.',
                        2000,
                        {
                          text: 'Next Generation Digital Solutions',
                          typeSpeed: 50,
                          delay: 200,
                          repeat: Infinity
                        }
                      ]}
                      wrapper="div"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default Hero;
