import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Upload, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeUploadModal, setProcessing } from '@/store/uiSlice';

export const UploadModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isUploadModalOpen, activeFeature } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(closeUploadModal());
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    dispatch(setProcessing(true));
    
    // Simulate processing
    setTimeout(() => {
      dispatch(setProcessing(false));
      // Here you would typically handle the file upload and conversion
      console.log(`Processing ${activeFeature} for file:`, file.name);
    }, 2000);
  };

  return (
    <Dialog.Root open={isUploadModalOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-card border border-border rounded-xl p-6 w-full max-w-md shadow-glow-card z-50">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-semibold text-foreground">
              {activeFeature ? activeFeature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) : 'Upload File'}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground font-medium mb-2">Drop files here or click to browse</p>
              <p className="text-muted-foreground text-sm mb-4">Supported formats: PDF, DOC, PPT, XLS, JPG, PNG</p>
              
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <label htmlFor="file-upload">
                <Button variant="gradient" size="lg" className="cursor-pointer" asChild>
                  <span>
                    <FileText className="w-4 h-4 mr-2" />
                    Choose File
                  </span>
                </Button>
              </label>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleClose} variant="secondary" className="flex-1">
                Cancel
              </Button>
              <Button variant="gradient" className="flex-1" disabled>
                Convert
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};