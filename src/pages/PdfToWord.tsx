import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

import { FileUpload } from '@/components/FileUpload';

export const PdfToWord: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className="text-center mb-8">
        {/* <div className="flex items-center justify-center gap-2 mb-4">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Tools</span>
          </Link>
          <span className="text-muted-foreground mx-4">/</span>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PDF to Word
            </h1>
          </div>
        </div> */}
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Convert PDF to Word
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Convert PDF documents to editable Word files with perfect formatting preservation.
        </p>
      </div>

      <FileUpload
        acceptedFormats=".pdf"
        maxFileSize={50}
        conversionType="pdfToWord"
        title="Choose PDF File"
        description="Drop your PDF file here or click to browse"
      />
    </div>
  );
};