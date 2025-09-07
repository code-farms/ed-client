// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import { ThemeProvider } from "./components/ThemeProvider";
// import { Home } from "./pages/Home";
// import { PdfToWord } from "./pages/PdfToWord";
// import { PdfToPpt } from "./pages/PdfToPpt";
// import { PdfToExcel } from "./pages/PdfToExcel";
// import { PdfToImage } from "./pages/PdfToImage";
// import { PdfToHtml } from "./pages/PdfToHtml";
// import { WordToPdf } from "./pages/WordToPdf";
// import { PptToPdf } from "./pages/PptToPdf";
// import { ExcelToPdf } from "./pages/ExcelToPdf";
// import { ImageToPdf } from "./pages/ImageToPdf";
// import { HtmlToPdf } from "./pages/HtmlToPdf";
// import { MergePdf } from "./pages/MergePdf";
// import { SplitPdf } from "./pages/SplitPdf";
// import { CompressPdf } from "./pages/CompressPdf";
// import { Pricing } from "./pages/Pricing";
// import { Contact } from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <Provider store={store}>
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider defaultTheme="dark" storageKey="esydocs-ui-theme">
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/pdf-to-word" element={<PdfToWord />} />
//               <Route path="/pdf-to-ppt" element={<PdfToPpt />} />
//               <Route path="/pdf-to-excel" element={<PdfToExcel />} />
//               <Route path="/pdf-to-image" element={<PdfToImage />} />
//               <Route path="/pdf-to-html" element={<PdfToHtml />} />
//               <Route path="/word-to-pdf" element={<WordToPdf />} />
//               <Route path="/ppt-to-pdf" element={<PptToPdf />} />
//               <Route path="/excel-to-pdf" element={<ExcelToPdf />} />
//               <Route path="/image-to-pdf" element={<ImageToPdf />} />
//               <Route path="/html-to-pdf" element={<HtmlToPdf />} />
//               <Route path="/merge-pdf" element={<MergePdf />} />
//               <Route path="/split-pdf" element={<SplitPdf />} />
//               <Route path="/compress-pdf" element={<CompressPdf />} />
//               <Route path="/pricing" element={<Pricing />} />
//               <Route path="/contact" element={<Contact />} />
//               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </TooltipProvider>
//       </ThemeProvider>
//     </QueryClientProvider>
//   </Provider>
// );

// export default App;



import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./Layout";
import { Home } from "./pages/Home";
import { PdfToWord } from "./pages/PdfToWord";
import { PdfToPpt } from "./pages/PdfToPpt";
import { PdfToExcel } from "./pages/PdfToExcel";
import { PdfToImage } from "./pages/PdfToImage";
import { PdfToHtml } from "./pages/PdfToHtml";
import { WordToPdf } from "./pages/WordToPdf";
import { PptToPdf } from "./pages/PptToPdf";
import { ExcelToPdf } from "./pages/ExcelToPdf";
import { ImageToPdf } from "./pages/ImageToPdf";
import { HtmlToPdf } from "./pages/HtmlToPdf";
import { MergePdf } from "./pages/MergePdf";
import { SplitPdf } from "./pages/SplitPdf";
import { CompressPdf } from "./pages/CompressPdf";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="esydocs-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pdf-to-word" element={<PdfToWord />} />
                <Route path="pdf-to-ppt" element={<PdfToPpt />} />
                <Route path="pdf-to-excel" element={<PdfToExcel />} />
                <Route path="pdf-to-image" element={<PdfToImage />} />
                <Route path="pdf-to-html" element={<PdfToHtml />} />
                <Route path="word-to-pdf" element={<WordToPdf />} />
                <Route path="ppt-to-pdf" element={<PptToPdf />} />
                <Route path="excel-to-pdf" element={<ExcelToPdf />} />
                <Route path="image-to-pdf" element={<ImageToPdf />} />
                <Route path="html-to-pdf" element={<HtmlToPdf />} />
                <Route path="merge-pdf" element={<MergePdf />} />
                <Route path="split-pdf" element={<SplitPdf />} />
                <Route path="compress-pdf" element={<CompressPdf />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
