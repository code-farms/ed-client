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
import { Link } from 'react-router-dom';
import { FeatureCard } from '@/components/FeatureCard';
import { Layout } from '@/components/Layout';

const features = [
  {
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files quickly and accurately.',
    icon: FileText,
    featureKey: 'pdfToWord',
    path: '/pdf-to-word',
  },
  {
    title: 'PDF to PowerPoint',
    description: 'Transform PDF files into editable PowerPoint presentations.',
    icon: Presentation,
    featureKey: 'pdfToPpt',
    path: '/pdf-to-ppt',
  },
  {
    title: 'PDF to Excel',
    description: 'Extract tables and data from PDFs into Excel spreadsheets.',
    icon: FileSpreadsheet,
    featureKey: 'pdfToExcel',
    path: '/pdf-to-excel',
  },
  {
    title: 'PDF to Image',
    description: 'Convert PDF pages to high-quality image formats (JPG, PNG).',
    icon: FileImage,
    featureKey: 'pdfToImage',
    path: '/pdf-to-image',
  },
  {
    title: 'PDF to HTML',
    description: 'Convert PDF documents to clean, responsive HTML code.',
    icon: Code,
    featureKey: 'pdfToHtml',
    path: '/pdf-to-html',
  },
  {
    title: 'Word to PDF',
    description: 'Convert Word documents to professional PDF format.',
    icon: FileText,
    featureKey: 'wordToPdf',
    path: '/word-to-pdf',
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Transform PowerPoint presentations into PDF documents.',
    icon: Presentation,
    featureKey: 'pptToPdf',
    path: '/ppt-to-pdf',
  },
  {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF with formatting preserved.',
    icon: FileSpreadsheet,
    featureKey: 'excelToPdf',
    path: '/excel-to-pdf',
  },
  {
    title: 'Image to PDF',
    description: 'Combine multiple images into a single PDF document.',
    icon: Image,
    featureKey: 'imageToPdf',
    path: '/image-to-pdf',
  },
  {
    title: 'HTML to PDF',
    description: 'Convert web pages and HTML files to PDF format.',
    icon: Code,
    featureKey: 'htmlToPdf',
    path: '/html-to-pdf',
  },
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one document seamlessly.',
    icon: Merge,
    featureKey: 'mergePdf',
    path: '/merge-pdf',
  },
  {
    title: 'Split PDF',
    description: 'Extract specific pages or split PDFs into separate files.',
    icon: Split,
    featureKey: 'splitPdf',
    path: '/split-pdf',
  },
  {
    title: 'Compress PDF',
    description: 'Reduce PDF file size while maintaining quality.',
    icon: Archive,
    featureKey: 'compressPdf',
    path: '/compress-pdf',
  },
];

export const Home: React.FC = () => {
  return (
    <Layout showAdSpaces={false}>
      {/* Hero Section */}
      <section className="py-20 px-4 -mx-4">
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

      {/* Features Grid with Ad Layout */}
      <div className="px-4 -mx-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Left Ad Space - 25% */}
            <div className="hidden xl:block">
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center sticky top-24">
                <div className="text-muted-foreground">
                  <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xs font-medium">AD</span>
                  </div>
                  <p className="text-sm">Advertisement Space</p>
                </div>
              </div>
            </div>

            {/* Features Grid - 50% on desktop, full width on mobile */}
            <div className="xl:col-span-2">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Choose Your Tool
                </h2>
                <p className="text-muted-foreground">
                  Select from our comprehensive suite of document conversion tools
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <Link
                    key={feature.featureKey}
                    to={feature.path}
                    className="block hover:scale-105 transition-transform"
                  >
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      featureKey={feature.featureKey}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Ad Space - 25% */}
            <div className="hidden xl:block">
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center h-96 flex items-center justify-center sticky top-24">
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
      </div>
    </Layout>
  );
};