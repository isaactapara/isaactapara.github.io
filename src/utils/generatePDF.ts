export const generateResumePDFAdvanced = async () => {
  try {
    console.log('Starting direct PDF generation...');
    
    // Import jsPDF dynamically
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Page dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    let yPos = 20;
    
    // Header with blue background
    pdf.setFillColor(37, 99, 235); // Blue-600
    pdf.rect(0, 0, pageWidth, 50, 'F');
    
    // IT Logo circle
    pdf.setFillColor(255, 255, 255);
    pdf.circle(35, 25, 12, 'F');
    pdf.setTextColor(37, 99, 235);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('IT', 30, 30);
    
    // Name and title
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SILISIL ISAAC TAPARA', margin + 30, 20);
    
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Secure Software Engineer & Ethical Hacker', margin + 30, 28);
    
    pdf.setFontSize(10);
    pdf.text('isaactapara@gmail.com', margin + 30, 35);
    pdf.text('+254 702 502 376', margin + 30, 40);
    pdf.text('Kenya', margin + 30, 45);
    
    yPos = 60;
    
    // Professional Summary
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Professional Summary', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const summary = 'A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies. Passionate about creating secure, scalable solutions that protect digital assets and promote cybersecurity awareness. Strong background in penetration testing, vulnerability assessment, and secure coding practices. Committed to continuous learning and contributing to the cybersecurity community through open-source projects and mentorship.';
    const summaryLines = pdf.splitTextToSize(summary, contentWidth);
    pdf.text(summaryLines, margin, yPos);
    yPos += summaryLines.length * 5 + 10;
    
    // Education
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Education', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Bachelor of Science in Software Engineering', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Expected 2027', margin, yPos);
    yPos += 3;
    pdf.text('Zetech University, Kenya', margin, yPos);
    yPos += 5;
    
    const eduDesc = 'Comprehensive education in software development, system design, and computer science fundamentals.';
    const eduLines = pdf.splitTextToSize(eduDesc, contentWidth);
    pdf.text(eduLines, margin, yPos);
    yPos += eduLines.length * 5 + 10;
    
    // Certifications
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Certifications', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Professional Certificate in Ethical Hacking', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('2025', margin, yPos);
    yPos += 3;
    pdf.text('Cisco Networking Academy', margin, yPos);
    yPos += 5;
    
    const certDesc = 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.';
    const certLines = pdf.splitTextToSize(certDesc, contentWidth);
    pdf.text(certLines, margin, yPos);
    yPos += certLines.length * 5 + 10;
    
    // Professional Experience
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Professional Experience', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Full-Stack Developer & Cybersecurity Specialist', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Zetech University Student', margin, yPos);
    yPos += 3;
    pdf.text('September 2024 - Present', margin, yPos);
    yPos += 5;
    
    const expDesc = 'Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.';
    const expLines = pdf.splitTextToSize(expDesc, contentWidth);
    pdf.text(expLines, margin, yPos);
    yPos += expLines.length * 5 + 5;
    
    // Achievements
    const achievements = [
      'Built 4+ production-ready applications serving 1000+ users across different industries',
      'Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management',
      'Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design',
      'Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development',
      'Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities',
      'Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices',
      'Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards',
      'Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability',
      'Deployed applications using modern DevOps practices, containerization, and cloud technologies',
      'Balanced academic studies with practical software development projects, applying university coursework to real-world applications',
      'Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance',
      'Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms'
    ];
    
    achievements.forEach(achievement => {
      pdf.text(`• ${achievement}`, margin + 5, yPos);
      const lines = pdf.splitTextToSize(achievement, contentWidth - 10);
      yPos += lines.length * 5 + 2;
    });
    yPos += 10;
    
    // Technical Skills
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Technical Skills', margin, yPos);
    yPos += 10;
    
    const skills = {
      'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
      'Backend': ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs'],
      'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
      'Cybersecurity': ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Wireshark', 'Nmap'],
      'Tools': ['Git', 'Docker', 'AWS', 'VS Code', 'Figma']
    };
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    Object.entries(skills).forEach(([category, skillList]) => {
      pdf.setFont('helvetica', 'bold');
      pdf.text(category, margin, yPos);
      yPos += 3;
      pdf.setFont('helvetica', 'normal');
      skillList.forEach(skill => {
        pdf.text(`• ${skill}`, margin + 5, yPos);
        yPos += 4;
      });
      yPos += 2;
    });
    yPos += 5;
    
    // Featured Projects
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Featured Projects', margin, yPos);
    yPos += 10;
    
    const projects = [
      {
        name: 'FAMALCOLLECTIONS',
        description: 'Comprehensive family management platform with real-time features',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB']
      },
      {
        name: 'ENKANASA-COW',
        description: 'Innovative cattle management system with analytics dashboard',
        technologies: ['React', 'Python', 'Django', 'PostgreSQL']
      },
      {
        name: 'ESHIPA-AFRICA',
        description: 'Cultural heritage preservation platform with community features',
        technologies: ['Next.js', 'Strapi', 'AWS', 'Mapbox']
      },
      {
        name: 'PyScanX',
        description: 'Professional network reconnaissance tool for ethical security testing',
        technologies: ['Python', 'Socket Programming', 'CLI']
      }
    ];
    
    projects.forEach(project => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(project.name, margin, yPos);
      yPos += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(project.description, contentWidth);
      pdf.text(descLines, margin, yPos);
      yPos += descLines.length * 5 + 3;
      
      project.technologies.forEach(tech => {
        pdf.text(`• ${tech}`, margin + 5, yPos);
        yPos += 4;
      });
      yPos += 5;
    });
    
    // Footer
    const footerY = pageHeight - 20;
    pdf.setFontSize(8);
    pdf.setTextColor(128, 128, 128);
    pdf.text('This resume was generated from my portfolio at isaactapara.github.io', margin, footerY);
    pdf.text('Last updated: October 13, 2025', margin, footerY + 5);
    
    // Save the PDF
    pdf.save('Isaac_Resume.pdf');
    console.log('PDF generated and saved successfully!');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};