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
    console.log('Starting PDF generation from ResumePDF component...');
    
    // Find the ResumePDF component in the modal
    const resumeElement = document.querySelector('.resume-pdf') as HTMLElement;
    
    if (!resumeElement) {
      throw new Error('Resume PDF component not found. Please open the preview modal first.');
    }
    
    console.log('Found ResumePDF element, generating canvas...');

    // Configure html2canvas options for high quality
    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: resumeElement.scrollWidth,
      height: resumeElement.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    console.log('Canvas generated, creating PDF...');
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
    pdf.save('Isaac_Resume.pdf');
    console.log('PDF saved successfully!');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};