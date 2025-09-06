import React from 'react';
import { 
  FileText, 
  Presentation, 
  FileSpreadsheet, 
  Image, 
  Code, 
  FileImage,
  Merge,
  Split,
  Archive
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { UploadModal } from '@/components/UploadModal';

const features = [
  {
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files quickly and accurately.',
    icon: FileText,
    featureKey: 'pdfToWord',
  },
  {
    title: 'PDF to PowerPoint',
    description: 'Transform PDF files into editable PowerPoint presentations.',
    icon: Presentation,
    featureKey: 'pdfToPpt',
  },
  {
    title: 'PDF to Excel',
    description: 'Extract tables and data from PDFs into Excel spreadsheets.',
    icon: FileSpreadsheet,
    featureKey: 'pdfToExcel',
  },
  {
    title: 'PDF to Image',
    description: 'Convert PDF pages to high-quality image formats (JPG, PNG).',
    icon: FileImage,
    featureKey: 'pdfToImage',
  },
  {
    title: 'PDF to HTML',
    description: 'Convert PDF documents to clean, responsive HTML code.',
    icon: Code,
    featureKey: 'pdfToHtml',
  },
  {
    title: 'Word to PDF',
    description: 'Convert Word documents to professional PDF format.',
    icon: FileText,
    featureKey: 'wordToPdf',
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Transform PowerPoint presentations into PDF documents.',
    icon: Presentation,
    featureKey: 'pptToPdf',
  },
  {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF with formatting preserved.',
    icon: FileSpreadsheet,
    featureKey: 'excelToPdf',
  },
  {
    title: 'Image to PDF',
    description: 'Combine multiple images into a single PDF document.',
    icon: Image,
    featureKey: 'imageToPdf',
  },
  {
    title: 'HTML to PDF',
    description: 'Convert web pages and HTML files to PDF format.',
    icon: Code,
    featureKey: 'htmlToPdf',
  },
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one document seamlessly.',
    icon: Merge,
    featureKey: 'mergePdf',
  },
  {
    title: 'Split PDF',
    description: 'Extract specific pages or split PDFs into separate files.',
    icon: Split,
    featureKey: 'splitPdf',
  },
  {
    title: 'Compress PDF',
    description: 'Reduce PDF file size while maintaining quality.',
    icon: Archive,
    featureKey: 'compressPdf',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EsyDocs
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Transform Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Documents
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Convert, merge, split, and compress your files with our powerful online tools. 
            Fast, secure, and free to use.
          </p>
        </div>
      </section>

      {/* Main Content Area - 50% width on desktop */}
      <main className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="flex">
            {/* Left Ad Space - 25% */}
            <div className="hidden xl:block w-1/4 pr-8">
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center">
                <div className="text-muted-foreground">
                  <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xs font-medium">AD</span>
                  </div>
                  <p className="text-sm">Advertisement Space</p>
                </div>
              </div>
            </div>

            {/* Features Grid - 50% */}
            <div className="w-full xl:w-1/2">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Choose Your Tool
                </h2>
                <p className="text-muted-foreground">
                  Select from our comprehensive suite of document conversion tools
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <FeatureCard
                    key={feature.featureKey}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    featureKey={feature.featureKey}
                  />
                ))}
              </div>
            </div>

            {/* Right Ad Space - 25% */}
            <div className="hidden xl:block w-1/4 pl-8">
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center">
                <div className="text-muted-foreground">
                  <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xs font-medium">AD</span>
                  </div>
                  <p className="text-sm">Advertisement Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">EsyDocs</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your go-to platform for document conversion and manipulation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Features</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">PDF Converter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Merge & Split</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Compress Files</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 EsyDocs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <UploadModal />
    </div>
  );
};