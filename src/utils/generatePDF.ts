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
    const summary = 'A results-driven Secure Software Engineer and Ethical Hacker with 3+ years of experience in full-stack development and cybersecurity. Proven track record of building 5+ production-ready applications serving 1000+ users while maintaining 100% security compliance. Expert in React, TypeScript, Python, Node.js, and ethical hacking methodologies.';
    const summaryLines = pdf.splitTextToSize(summary, contentWidth);
    pdf.text(summaryLines, margin, yPos);
    yPos += summaryLines.length * 5 + 10;
    
    // Technical Skills
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', margin, yPos);
    yPos += 10;
    
    const skills = [
      'Frontend: React, TypeScript, Next.js, HTML5, CSS3, Tailwind CSS, Vue.js',
      'Backend: Node.js, Python, Express.js, Django, FastAPI, REST APIs, GraphQL',
      'Database: MongoDB, PostgreSQL, MySQL, Redis, Firebase',
      'Cybersecurity: Ethical Hacking, Penetration Testing, Kali Linux, Wireshark, Nmap, Metasploit',
      'DevOps: Git, Docker, AWS, GitHub Actions, Linux, Nginx, CI/CD'
    ];
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    skills.forEach(skill => {
      pdf.text(skill, margin, yPos);
      yPos += 5;
    });
    yPos += 5;
    
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
    pdf.text('Freelance / Independent Contractor | 2023 - Present', margin, yPos);
    yPos += 5;
    
    const exp1Desc = 'Developing secure web applications and conducting ethical security assessments for clients across various industries.';
    const exp1Lines = pdf.splitTextToSize(exp1Desc, contentWidth);
    pdf.text(exp1Lines, margin, yPos);
    yPos += exp1Lines.length * 5 + 5;
    
    // Key Achievements
    pdf.setFont('helvetica', 'bold');
    pdf.text('Key Achievements:', margin, yPos);
    yPos += 5;
    
    const achievements = [
      '• Built 5+ production-ready applications with security-first approach, serving 1000+ users',
      '• Conducted penetration testing for multiple organizations, identifying 50+ vulnerabilities',
      '• Implemented secure coding practices across all projects, achieving 100% security compliance',
      '• Developed custom cybersecurity tools including PyScanX for network reconnaissance',
      '• Provided security consulting to startups and established companies',
      '• Mentored junior developers in secure development practices'
    ];
    
    pdf.setFont('helvetica', 'normal');
    achievements.forEach(achievement => {
      const lines = pdf.splitTextToSize(achievement, contentWidth - 10);
      pdf.text(lines, margin + 5, yPos);
      yPos += lines.length * 5;
    });
    yPos += 10;
    
    // Featured Projects
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('FEATURED PROJECTS', margin, yPos);
    yPos += 10;
    
    const projects = [
      {
        name: 'FAMALCOLLECTIONS',
        desc: 'Comprehensive family management platform with real-time features and secure authentication.',
        tech: 'React, TypeScript, Node.js, MongoDB',
        impact: 'Serving 500+ families with secure data management'
      },
      {
        name: 'ENKANASA-COW',
        desc: 'Innovative cattle management system with analytics dashboard and PWA capabilities.',
        tech: 'React, Python, Django, PostgreSQL',
        impact: 'Helping 200+ farmers optimize livestock management'
      },
      {
        name: 'ESHIPA-AFRICA',
        desc: 'Cultural heritage preservation platform with community features and e-commerce.',
        tech: 'Next.js, Strapi, AWS, Mapbox',
        impact: 'Preserving African cultural heritage globally'
      },
      {
        name: 'PyScanX',
        desc: 'Professional network reconnaissance tool for ethical security testing.',
        tech: 'Python, Socket Programming, CLI',
        impact: 'Used by 100+ cybersecurity professionals'
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
      yPos += 3;
      pdf.text(`Impact: ${project.impact}`, margin, yPos);
      yPos += 10;
    });
    
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
    
    const eduDesc = 'Comprehensive education in software development, system design, and computer science fundamentals. Focus on secure coding practices and software architecture.';
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
