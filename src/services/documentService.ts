// Mock service layer for document conversion API calls
// This will be ready to connect to real endpoints later

export interface ConversionRequest {
  file: File;
  targetFormat: string;
  options?: {
    quality?: string;
    pageRange?: string;
  };
}

export interface ConversionResponse {
  id: string;
  status: 'processing' | 'completed' | 'failed';
  downloadUrl?: string;
  error?: string;
  progress?: number;
}

class DocumentService {
  private baseUrl = '/api/convert'; // Will be proxied to backend

  // Mock conversion simulation
  async convertDocument(request: ConversionRequest): Promise<ConversionResponse> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `conv_${Date.now()}`,
          status: 'completed',
          downloadUrl: URL.createObjectURL(new Blob(['mock converted file'], { type: 'application/pdf' })),
        });
      }, 3000);
    });
  }

  async getConversionStatus(id: string): Promise<ConversionResponse> {
    // Mock status check
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          status: 'completed',
          downloadUrl: `${this.baseUrl}/download/${id}`,
        });
      }, 1000);
    });
  }

  // Specific conversion methods
  async pdfToWord(file: File) {
    return this.convertDocument({ file, targetFormat: 'docx' });
  }

  async pdfToPpt(file: File) {
    return this.convertDocument({ file, targetFormat: 'pptx' });
  }

  async pdfToExcel(file: File) {
    return this.convertDocument({ file, targetFormat: 'xlsx' });
  }

  async pdfToImage(file: File, options?: { format?: 'jpg' | 'png'; quality?: string }) {
    return this.convertDocument({ 
      file, 
      targetFormat: options?.format || 'jpg',
      options: { quality: options?.quality }
    });
  }

  async pdfToHtml(file: File) {
    return this.convertDocument({ file, targetFormat: 'html' });
  }

  async wordToPdf(file: File) {
    return this.convertDocument({ file, targetFormat: 'pdf' });
  }

  async pptToPdf(file: File) {
    return this.convertDocument({ file, targetFormat: 'pdf' });
  }

  async excelToPdf(file: File) {
    return this.convertDocument({ file, targetFormat: 'pdf' });
  }

  async imageToPdf(files: File[]) {
    // For multiple images to PDF
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`image_${index}`, file);
    });
    
    return this.convertDocument({ file: files[0], targetFormat: 'pdf' });
  }

  async htmlToPdf(file: File) {
    return this.convertDocument({ file, targetFormat: 'pdf' });
  }

  async mergePdf(files: File[]) {
    // Simulate merging multiple PDFs
    return this.convertDocument({ file: files[0], targetFormat: 'pdf' });
  }

  async splitPdf(file: File, options?: { pageRanges?: string }) {
    return this.convertDocument({ 
      file, 
      targetFormat: 'pdf',
      options: { pageRange: options?.pageRanges }
    });
  }

  async compressPdf(file: File, options?: { quality?: 'low' | 'medium' | 'high' }) {
    return this.convertDocument({
      file,
      targetFormat: 'pdf',
      options: { quality: options?.quality || 'medium' }
    });
  }
}

export const documentService = new DocumentService();