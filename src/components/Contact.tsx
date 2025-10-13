import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { containerVariants, itemVariants, slideInVariants, fadeInVariants } from '../types/motion';
// import emailjs from '@emailjs/browser'; // Unused for now

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to set up your EmailJS account
      // const serviceID = 'service_portfolio'; // Replace with your EmailJS service ID
      // const templateID = 'template_contact'; // Replace with your EmailJS template ID
      // const publicKey = 'your_public_key'; // Replace with your EmailJS public key
      
      // For now, we'll use a fallback method that sends to your email
      // const emailData = {
      //   to: 'isaactapara@gmail.com',
      //   from: formData.email,
      //   subject: `Portfolio Contact: ${formData.subject}`,
      //   name: formData.name,
      //   message: formData.message,
      //   replyTo: formData.email
      // };
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:isaactapara@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Show success message
      alert('Your email client should open with the message pre-filled. Please send it to complete the contact process.');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('There was an error sending your message. Please try again or contact me directly at isaactapara@gmail.com');
    }
  };


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'isaactapara@gmail.com',
      href: 'mailto:isaactapara@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+254 702 502 376',
      href: 'https://wa.me/254702502376',
      description: 'Quick response guaranteed'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kenya',
      href: '#',
      description: 'Available for remote work'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      href: '#',
      description: 'Usually within a few hours'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/isaactapara',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/isaacktapara/',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://x.com/ToxicWarlord2',
      color: 'hover:bg-black hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or just have a conversation about technology and cybersecurity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={slideInVariants}>
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-8">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.15, 
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800 dark:text-dark-200 mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.href}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-dark-600 dark:text-dark-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-4">
                  Connect on Social Media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-lg flex items-center justify-center text-dark-600 dark:text-dark-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInVariants}>
              <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-6">
                  Send me a <span className="gradient-text">Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-800 dark:text-dark-200 mb-4">
                Prefer a Quick Chat?
              </h3>
              <p className="text-dark-600 dark:text-dark-400 mb-6">
                For urgent matters or quick questions, feel free to reach out directly via WhatsApp.
              </p>
              <motion.a
                href="https://wa.me/254702502376"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
