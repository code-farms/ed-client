import React, { useState } from 'react';
import { ArrowLeft, Image, Upload, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const ImageToPdf: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsConverted(true);
      toast({
        title: "Conversion Completed!",
        description: "Your images have been successfully converted to PDF format.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Tools</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Image className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Image to PDF
              </h1>
            </div>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Convert Images to PDF
            </h1>
            <p className="text-xl text-muted-foreground">
              Combine multiple images into a single PDF document.
            </p>
          </div>

          <Card className="p-8 bg-gradient-card border border-border">
            {!isConverted ? (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Choose Image Files
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Drop your image files here or click to browse
                  </p>
                  <Button 
                    onClick={handleFileUpload}
                    disabled={isProcessing}
                    className="w-full md:w-auto"
                  >
                    {isProcessing ? "Converting..." : "Select Image Files"}
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Maximum file size: 50MB per image</p>
                  <p>• Supported formats: JPG, PNG, BMP, TIFF</p>
                  <p>• Output format: PDF</p>
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
                    Your images have been successfully converted to PDF format.
                  </p>
                </div>
                <Button className="w-full md:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF File
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};