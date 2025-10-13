import jsPDF from 'jspdf';
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
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    
    // Set font
    pdf.setFont('helvetica');
    
    // Header with clean background
    pdf.setFillColor(59, 130, 246); // Blue color
    pdf.rect(0, 0, pageWidth, 40, 'F');
    
    // Name
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SILISIL ISAAC TAPARA', margin, 25);
    
    // Title
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Secure Software Engineer & Ethical Hacker', margin, 35);
    
    // Contact Info
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    let yPos = 50;
    
    const contactInfo = [
      'Email: isaactapara@gmail.com',
      'Phone: +254 702 502 376',
      'Location: Kenya',
      'Website: isaactapara.github.io'
    ];
    
    contactInfo.forEach((info, index) => {
      pdf.text(info, margin + (index % 2) * (contentWidth / 2), yPos + Math.floor(index / 2) * 5);
    });
    
    yPos += 20;
    
    // Professional Summary
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
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Bachelor of Science in Software Engineering', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Zetech University, Kenya | Expected 2027', margin, yPos);
    yPos += 5;
    
    const eduDesc = 'Comprehensive education in software development, system design, and computer science fundamentals.';
    const eduLines = pdf.splitTextToSize(eduDesc, contentWidth);
    pdf.text(eduLines, margin, yPos);
    yPos += eduLines.length * 5 + 10;
    
    // Certifications
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CERTIFICATIONS', margin, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Professional Certificate in Ethical Hacking', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Cisco Networking Academy | 2025', margin, yPos);
    yPos += 5;
    
    const certDesc = 'Comprehensive certification covering penetration testing, vulnerability assessment, and ethical hacking methodologies.';
    const certLines = pdf.splitTextToSize(certDesc, contentWidth);
    pdf.text(certLines, margin, yPos);
    yPos += certLines.length * 5 + 10;
    
    // Professional Experience
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL EXPERIENCE', margin, yPos);
    yPos += 10;
    
    // Experience 1
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Full-Stack Developer & Cybersecurity Specialist', margin, yPos);
    yPos += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Zetech University Student | September 2024 - Present', margin, yPos);
    yPos += 5;
    
    const exp1Desc = 'Software Engineering student at Zetech University specializing in full-stack development and cybersecurity. Built multiple production applications while pursuing formal education, focusing on security-first development practices and modern web technologies.';
    const exp1Lines = pdf.splitTextToSize(exp1Desc, contentWidth);
    pdf.text(exp1Lines, margin, yPos);
    yPos += exp1Lines.length * 5 + 5;
    
    // Key Achievements
    pdf.setFont('helvetica', 'bold');
    pdf.text('Key Achievements:', margin, yPos);
    yPos += 5;
    
    const achievements = [
      '• Built 4+ production-ready applications serving 1000+ users across different industries',
      '• Developed FAMALCOLLECTIONS - premium fashion e-commerce platform with real-time analytics, multi-user system, and comprehensive product management',
      '• Created ENKANASA-COW - premium Kenyan dairy brand platform showcasing Maasai-inspired products with modern UI/UX design',
      '• Built ESHIPA-AFRICA - non-profit organization platform empowering African youth, combating GBV, and promoting sustainable development',
      '• Developed PyScanX - professional network reconnaissance tool for ethical security testing with banner grabbing capabilities',
      '• Implemented secure authentication, data encryption, and privacy protection across all applications using modern security practices',
      '• Designed responsive, mobile-first user interfaces with modern UX/UI principles and accessibility standards',
      '• Integrated third-party APIs, payment systems, and cloud services for enhanced functionality and scalability',
      '• Deployed applications using modern DevOps practices, containerization, and cloud technologies',
      '• Balanced academic studies with practical software development projects, applying university coursework to real-world applications',
      '• Conducted security audits and implemented vulnerability assessments for all projects, maintaining 100% security compliance',
      '• Optimized application performance, achieving 95%+ uptime and fast loading times across all platforms'
    ];
    
    pdf.setFont('helvetica', 'normal');
    achievements.forEach(achievement => {
      const lines = pdf.splitTextToSize(achievement, contentWidth - 10);
      pdf.text(lines, margin + 5, yPos);
      yPos += lines.length * 5;
    });
    yPos += 10;
    
    // Technical Skills
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', margin, yPos);
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
      pdf.text(`${category}:`, margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text(skillList.join(', '), margin + 20, yPos);
      yPos += 5;
    });
    yPos += 5;
    
    // Featured Projects
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('FEATURED PROJECTS', margin, yPos);
    yPos += 10;
    
    const projects = [
      {
        name: 'FAMALCOLLECTIONS',
        desc: 'Comprehensive family management platform with real-time features',
        tech: 'React, TypeScript, Node.js, MongoDB'
      },
      {
        name: 'ENKANASA-COW',
        desc: 'Innovative cattle management system with analytics dashboard',
        tech: 'React, Python, Django, PostgreSQL'
      },
      {
        name: 'ESHIPA-AFRICA',
        desc: 'Cultural heritage preservation platform with community features',
        tech: 'Next.js, Strapi, AWS, Mapbox'
      },
      {
        name: 'PyScanX',
        desc: 'Professional network reconnaissance tool for ethical security testing',
        tech: 'Python, Socket Programming, CLI'
      }
    ];
    
    projects.forEach(project => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(project.name, margin, yPos);
      yPos += 5;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const descLines = pdf.splitTextToSize(project.desc, contentWidth);
      pdf.text(descLines, margin, yPos);
      yPos += descLines.length * 5;
      
      pdf.text(`Technologies: ${project.tech}`, margin, yPos);
      yPos += 10;
    });
    
    // Footer
    const footerY = pageHeight - 20;
    pdf.setFontSize(8);
    pdf.setTextColor(128, 128, 128);
    pdf.text('Generated from portfolio at isaactapara.github.io', margin, footerY);
    pdf.text(`Last updated: ${new Date().toLocaleDateString()}`, margin, footerY + 5);
    
    // Save the PDF
    pdf.save('Isaac_Tapara_Resume.pdf');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
