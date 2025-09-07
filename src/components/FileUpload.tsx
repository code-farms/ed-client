import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { documentService, ConversionResponse } from '@/services/documentService';

interface FileUploadProps {
  acceptedFormats?: string;
  maxFileSize?: number; // in MB
  onConversionComplete?: (result: ConversionResponse) => void;
  conversionType: string;
  title: string;
  description: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  acceptedFormats = ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png",
  maxFileSize = 50,
  onConversionComplete,
  conversionType,
  title,
  description
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [conversionResult, setConversionResult] = useState<ConversionResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Please select a file smaller than ${maxFileSize}MB.`,
        variant: "destructive",
      });
      // Clear the input to allow re-selection
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setSelectedFile(file);
    setIsConverted(false);
    setConversionResult(null);
    
    // Clear the input to allow re-selection of the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    
    try {
      // Use the service layer for conversion
      let result: ConversionResponse;
      
      switch (conversionType) {
        case 'pdfToWord':
          result = await documentService.pdfToWord(selectedFile);
          break;
        case 'pdfToPpt':
          result = await documentService.pdfToPpt(selectedFile);
          break;
        case 'pdfToExcel':
          result = await documentService.pdfToExcel(selectedFile);
          break;
        case 'pdfToImage':
          result = await documentService.pdfToImage(selectedFile);
          break;
        case 'pdfToHtml':
          result = await documentService.pdfToHtml(selectedFile);
          break;
        case 'wordToPdf':
          result = await documentService.wordToPdf(selectedFile);
          break;
        case 'pptToPdf':
          result = await documentService.pptToPdf(selectedFile);
          break;
        case 'excelToPdf':
          result = await documentService.excelToPdf(selectedFile);
          break;
        case 'imageToPdf':
          result = await documentService.imageToPdf([selectedFile]);
          break;
        case 'htmlToPdf':
          result = await documentService.htmlToPdf(selectedFile);
          break;
        case 'mergePdf':
          result = await documentService.mergePdf([selectedFile]);
          break;
        case 'splitPdf':
          result = await documentService.splitPdf(selectedFile);
          break;
        case 'compressPdf':
          result = await documentService.compressPdf(selectedFile);
          break;
        default:
          throw new Error('Unsupported conversion type');
      }

      setConversionResult(result);
      setIsConverted(true);
      onConversionComplete?.(result);
      
      toast({
        title: "Conversion Completed!",
        description: `Your file has been successfully converted.`,
      });
    } catch (error) {
      toast({
        title: "Conversion Failed",
        description: "There was an error converting your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (conversionResult?.downloadUrl) {
      const link = document.createElement('a');
      link.href = conversionResult.downloadUrl;
      link.download = `converted_${selectedFile?.name || 'file'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setIsConverted(false);
    setConversionResult(null);
  };

  return (
    <div className="bg-gradient-card border border-border rounded-xl p-8">
      {!isConverted ? (
        <div className="space-y-6">
          {!selectedFile ? (
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
              <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
                accept={acceptedFormats}
              />
              <label htmlFor="file-upload">
                <Button variant="default" size="lg" className="cursor-pointer" asChild>
                  <span>
                    <FileText className="w-4 h-4 mr-2" />
                    Select File
                  </span>
                </Button>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4 bg-background/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleReset}
                    className="h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={handleConvert}
                disabled={isProcessing}
                size="lg"
                className="w-full"
              >
                {isProcessing ? "Converting..." : "Convert File"}
              </Button>
            </div>
          )}

          <div className="text-sm text-muted-foreground space-y-2">
            <p>• Maximum file size: {maxFileSize}MB</p>
            <p>• Supported formats: {acceptedFormats.replace(/\./g, '').replace(/,/g, ', ').toUpperCase()}</p>
            <p>• Files are automatically deleted after 24 hours</p>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-primary mx-auto" />
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Conversion Complete!
            </h3>
            <p className="text-muted-foreground">
              Your file has been successfully converted and is ready for download.
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleDownload} size="lg" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download File
            </Button>
            <Button onClick={handleReset} variant="secondary" size="lg" className="flex-1">
              Convert Another
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};