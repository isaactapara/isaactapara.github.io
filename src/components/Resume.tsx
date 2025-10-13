import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import { fadeInVariants, scaleInVariants } from '../types/motion';

const Resume: React.FC = () => {
  const [showPDFPreview, setShowPDFPreview] = useState(false);


  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleInVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-300">My professional journey and achievements</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="bg-gray-800 rounded-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">SILISIL ISAAC TAPARA</h3>
              <p className="text-lg text-blue-400 mb-2">Secure Software Engineer & Ethical Hacker</p>
              <div className="text-gray-300 space-y-1">
                <p>📧 isaactapara@gmail.com</p>
                <p>📱 +254 702 502 376</p>
                <p>📍 Kenya</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPDFPreview(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Eye size={20} />
                Preview Resume
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Professional Summary</h4>
              <p className="text-gray-300 leading-relaxed">
                A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects and mentorship.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="text-lg font-medium text-white">Bachelor of Science in Software Engineering</h5>
                <p className="text-blue-400 font-medium">Expected 2027</p>
                <p className="text-gray-300">Zetech University, Kenya</p>
                <p className="text-gray-400 text-sm mt-2">Comprehensive education in software development, system design, and computer science fundamentals.</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Certifications</h4>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="text-lg font-medium text-white">Professional Certificate in Ethical Hacking</h5>
                <p className="text-blue-400 font-medium">2025</p>
                <p className="text-gray-300">Cisco Networking Academy</p>
                <p className="text-gray-400 text-sm mt-2">Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Professional Experience</h4>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="text-lg font-medium text-white">Full-Stack Developer & Cybersecurity Specialist</h5>
                <p className="text-blue-400 font-medium">Zetech University Student</p>
                <p className="text-gray-300">September 2024 - Present</p>
                <p className="text-gray-400 text-sm mt-2 mb-4">Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.</p>
                
                <div className="space-y-2">
                  <div className="text-gray-300">• Built 4+ production-ready applications serving 1000+ users across different industries</div>
                  <div className="text-gray-300">• Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management</div>
                  <div className="text-gray-300">• Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design</div>
                  <div className="text-gray-300">• Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development</div>
                  <div className="text-gray-300">• Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities</div>
                  <div className="text-gray-300">• Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices</div>
                  <div className="text-gray-300">• Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards</div>
                  <div className="text-gray-300">• Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability</div>
                  <div className="text-gray-300">• Deployed applications using modern DevOps practices, containerization, and cloud technologies</div>
                  <div className="text-gray-300">• Balanced academic studies with practical software development projects, applying university coursework to real-world applications</div>
                  <div className="text-gray-300">• Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance</div>
                  <div className="text-gray-300">• Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-2">Frontend</h5>
                  <p className="text-gray-300 text-sm">React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-2">Backend</h5>
                  <p className="text-gray-300 text-sm">Node.js, Python, Express.js, Django, REST APIs</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-2">Database</h5>
                  <p className="text-gray-300 text-sm">MongoDB, PostgreSQL, MySQL, Redis</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-2">Cybersecurity</h5>
                  <p className="text-gray-300 text-sm">Ethical Hacking, Penetration Testing, Kali Linux, Wireshark, Nmap</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h5 className="text-white font-medium mb-2">Tools</h5>
                  <p className="text-gray-300 text-sm">Git, Docker, AWS, VS Code, Figma</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Featured Projects</h4>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="text-white font-medium mb-2">FAMALCOLLECTIONS</h5>
                  <p className="text-gray-300 text-sm mb-2">Comprehensive family management platform with real-time features</p>
                  <p className="text-blue-400 text-sm"><strong>Technologies:</strong> React, TypeScript, Node.js, MongoDB</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="text-white font-medium mb-2">ENKANASA-COW</h5>
                  <p className="text-gray-300 text-sm mb-2">Innovative cattle management system with analytics dashboard</p>
                  <p className="text-blue-400 text-sm"><strong>Technologies:</strong> React, Python, Django, PostgreSQL</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="text-white font-medium mb-2">ESHIPA-AFRICA</h5>
                  <p className="text-gray-300 text-sm mb-2">Cultural heritage preservation platform with community features</p>
                  <p className="text-blue-400 text-sm"><strong>Technologies:</strong> Next.js, Strapi, AWS, Mapbox</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="text-white font-medium mb-2">PyScanX</h5>
                  <p className="text-gray-300 text-sm mb-2">Professional network reconnaissance tool for ethical security testing</p>
                  <p className="text-blue-400 text-sm"><strong>Technologies:</strong> Python, Socket Programming, CLI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PDF Preview Modal */}
        {showPDFPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold">Resume Preview</h3>
                <button
                  onClick={() => setShowPDFPreview(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">SILISIL ISAAC TAPARA</h1>
                  <p className="text-lg text-blue-600 mb-2">Secure Software Engineer & Ethical Hacker</p>
                  <div className="text-gray-600 space-y-1">
                    <p>📧 isaactapara@gmail.com</p>
                    <p>📱 +254 702 502 376</p>
                    <p>📍 Kenya</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                      A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects and mentorship.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">Bachelor of Science in Software Engineering</h3>
                      <p className="text-blue-600 font-medium">Expected 2027</p>
                      <p className="text-gray-700">Zetech University, Kenya</p>
                      <p className="text-gray-600 text-sm mt-2">Comprehensive education in software development, system design, and computer science fundamentals.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">Professional Certificate in Ethical Hacking</h3>
                      <p className="text-blue-600 font-medium">2025</p>
                      <p className="text-gray-700">Cisco Networking Academy</p>
                      <p className="text-gray-600 text-sm mt-2">Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Experience</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">Full-Stack Developer & Cybersecurity Specialist</h3>
                      <p className="text-blue-600 font-medium">Zetech University Student</p>
                      <p className="text-gray-700">September 2024 - Present</p>
                      <p className="text-gray-600 text-sm mt-2 mb-4">Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.</p>
                      
                      <div className="space-y-2">
                        <div className="text-gray-700">• Built 4+ production-ready applications serving 1000+ users across different industries</div>
                        <div className="text-gray-700">• Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management</div>
                        <div className="text-gray-700">• Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design</div>
                        <div className="text-gray-700">• Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development</div>
                        <div className="text-gray-700">• Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities</div>
                        <div className="text-gray-700">• Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices</div>
                        <div className="text-gray-700">• Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards</div>
                        <div className="text-gray-700">• Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability</div>
                        <div className="text-gray-700">• Deployed applications using modern DevOps practices, containerization, and cloud technologies</div>
                        <div className="text-gray-700">• Balanced academic studies with practical software development projects, applying university coursework to real-world applications</div>
                        <div className="text-gray-700">• Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance</div>
                        <div className="text-gray-700">• Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-900 font-medium mb-2">Frontend</h3>
                        <p className="text-gray-700 text-sm">React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-900 font-medium mb-2">Backend</h3>
                        <p className="text-gray-700 text-sm">Node.js, Python, Express.js, Django, REST APIs</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-900 font-medium mb-2">Database</h3>
                        <p className="text-gray-700 text-sm">MongoDB, PostgreSQL, MySQL, Redis</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-900 font-medium mb-2">Cybersecurity</h3>
                        <p className="text-gray-700 text-sm">Ethical Hacking, Penetration Testing, Kali Linux, Wireshark, Nmap</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-gray-900 font-medium mb-2">Tools</h3>
                        <p className="text-gray-700 text-sm">Git, Docker, AWS, VS Code, Figma</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Featured Projects</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-gray-900 font-medium mb-2">FAMALCOLLECTIONS</h3>
                        <p className="text-gray-700 text-sm mb-2">Comprehensive family management platform with real-time features</p>
                        <p className="text-blue-600 text-sm"><strong>Technologies:</strong> React, TypeScript, Node.js, MongoDB</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-gray-900 font-medium mb-2">ENKANASA-COW</h3>
                        <p className="text-gray-700 text-sm mb-2">Innovative cattle management system with analytics dashboard</p>
                        <p className="text-blue-600 text-sm"><strong>Technologies:</strong> React, Python, Django, PostgreSQL</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-gray-900 font-medium mb-2">ESHIPA-AFRICA</h3>
                        <p className="text-gray-700 text-sm mb-2">Cultural heritage preservation platform with community features</p>
                        <p className="text-blue-600 text-sm"><strong>Technologies:</strong> Next.js, Strapi, AWS, Mapbox</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-gray-900 font-medium mb-2">PyScanX</h3>
                        <p className="text-gray-700 text-sm mb-2">Professional network reconnaissance tool for ethical security testing</p>
                        <p className="text-blue-600 text-sm"><strong>Technologies:</strong> Python, Socket Programming, CLI</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-gray-600 text-sm">
                    <p><em>This resume was generated from my portfolio at isaactapara.github.io</em></p>
                    <p><em>Last updated: October 13, 2025</em></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4 p-4 border-t">
                <button
                  onClick={() => setShowPDFPreview(false)}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
