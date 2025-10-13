import html2canvas from 'html2canvas';

export const generateResumePDF = async () => {
  try {
    const element = document.getElementById('resume-content');
    if (!element) {
      throw new Error('Resume content not found');
    }

    // Configure html2canvas options
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate dimensions to fit the content
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
    // Save the PDF
    pdf.save('Isaac_Tapara_Resume.pdf');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

export const generateResumePDFAdvanced = async () => {
  try {
    console.log('PDF generation function called');
    const { jsPDF } = await import('jspdf');
    console.log('jsPDF imported successfully');
    const pdf = new jsPDF('p', 'mm', 'a4');
    console.log('jsPDF instance created');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    console.log('Starting PDF content generation...');
    
    // EXACT SAME DATA AS ResumePDF COMPONENT
    const personalInfo = {
      name: 'SILISIL ISAAC TAPARA',
      title: 'Secure Software Engineer & Ethical Hacker',
      email: 'isaactapara@gmail.com',
      phone: '+254 702 502 376',
      location: 'Kenya',
      website: 'isaactapara.github.io'
    };

    const education = [
      {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'Zetech University, Kenya',
        period: 'Expected 2027',
        description: 'Comprehensive education in software development, system design, and computer science fundamentals.'
      }
    ];

    const certifications = [
      {
        name: 'Professional Certificate in Ethical Hacking',
        issuer: 'Cisco Networking Academy',
        period: '2025',
        description: 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.'
      }
    ];

    const experience = [
      {
        title: 'Full-Stack Developer & Cybersecurity Specialist',
        company: 'Zetech University Student',
        period: 'September 2024 - Present',
        description: 'Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.',
        achievements: [
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
        ]
      }
    ];

    const skills = {
      'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
      'Backend': ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs'],
      'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
      'Cybersecurity': ['Ethical Hacking', 'Penetration Testing', 'Kali Linux', 'Wireshark', 'Nmap'],
      'Tools': ['Git', 'Docker', 'AWS', 'VS Code', 'Figma']
    };

    const projects = [
      {
        name: 'FAMALCOLLECTIONS',
        description: 'Comprehensive family management platform with real-time features',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        url: 'https://github.com/isaactapara/FAMALCOLLECTIONS.git'
      },
      {
        name: 'ENKANASA-COW',
        description: 'Innovative cattle management system with analytics dashboard',
        technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
        url: 'https://github.com/isaactapara/ENKANASA-COW.git'
      },
      {
        name: 'ESHIPA-AFRICA',
        description: 'Cultural heritage preservation platform with community features',
        technologies: ['Next.js', 'Strapi', 'AWS', 'Mapbox'],
        url: 'https://github.com/isaactapara/ESHIPA-AFRICA.git'
      },
      {
        name: 'PyScanX',
        description: 'Professional network reconnaissance tool for ethical security testing',
        technologies: ['Python', 'Socket Programming', 'CLI'],
        url: 'https://github.com/isaactapara/PyScanx'
      }
    ];
    
    // Header
    pdf.setFillColor(37, 99, 235); // Blue-600
    pdf.rect(0, 0, pageWidth, 50, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(personalInfo.name, margin, 20);
    
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'normal');
    pdf.text(personalInfo.title, margin, 28);
    
    pdf.setFontSize(10);
    pdf.text(`${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}`, margin, 35);
    pdf.text(personalInfo.website, margin, 40);
    
    let yPos = 60;
    
    // Professional Summary
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL SUMMARY', margin, yPos);
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
    pdf.text('EDUCATION', margin, yPos);
    yPos += 10;
    
    education.forEach(edu => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, margin, yPos);
      yPos += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(edu.period, margin, yPos);
      yPos += 3;
      pdf.text(edu.institution, margin, yPos);
      yPos += 5;
      
      const eduLines = pdf.splitTextToSize(edu.description, contentWidth);
      pdf.text(eduLines, margin, yPos);
      yPos += eduLines.length * 5 + 10;
    });
    
    // Certifications
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CERTIFICATIONS', margin, yPos);
    yPos += 10;
    
    certifications.forEach(cert => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cert.name, margin, yPos);
      yPos += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(cert.period, margin, yPos);
      yPos += 3;
      pdf.text(cert.issuer, margin, yPos);
      yPos += 5;
      
      const certLines = pdf.splitTextToSize(cert.description, contentWidth);
      pdf.text(certLines, margin, yPos);
      yPos += certLines.length * 5 + 10;
    });
    
    // Professional Experience
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL EXPERIENCE', margin, yPos);
    yPos += 10;
    
    experience.forEach(exp => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(exp.title, margin, yPos);
      yPos += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text(exp.company, margin, yPos);
      yPos += 3;
      pdf.text(exp.period, margin, yPos);
      yPos += 5;
      
      const descLines = pdf.splitTextToSize(exp.description, contentWidth);
      pdf.text(descLines, margin, yPos);
      yPos += descLines.length * 5 + 5;
      
      exp.achievements.forEach(achievement => {
        pdf.text(`• ${achievement}`, margin + 5, yPos);
        const lines = pdf.splitTextToSize(achievement, contentWidth - 10);
        yPos += lines.length * 5 + 2;
      });
      yPos += 10;
    });
    
    // Technical Skills
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', margin, yPos);
    yPos += 10;
    
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
    pdf.text('FEATURED PROJECTS', margin, yPos);
    yPos += 10;
    
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
    pdf.text(`This resume was generated from my portfolio at ${personalInfo.website}`, margin, footerY);
    pdf.text('Last updated: October 13, 2025', margin, footerY + 5);
    
    console.log('About to save PDF...');
    pdf.save('Isaac_Resume.pdf');
    console.log('PDF saved successfully');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
