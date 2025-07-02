
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import YuvaRojgar from "./pages/YuvaRojgar";
import SwasthyaMitra from "./pages/SwasthyaMitra";
import KanoonSathi from "./pages/KanoonSathi";
import SamasyaReport from "./pages/SamasyaReport";
import ModuleLauncher from "./pages/ModuleLauncher";
import PathshaalaPlus from "./pages/PathshaalaPlus";
import KrishiBandhu from "./pages/KrishiBandhu";
import AbleAccessMap from "./pages/AbleAccessMap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/home" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/modules" element={<ModuleLauncher />} />
            <Route path="/yuva-rojgar" element={<YuvaRojgar />} />
            <Route path="/swasthya-mitra" element={<SwasthyaMitra />} />
            <Route path="/kanoon-sathi" element={<KanoonSathi />} />
            <Route path="/samasya-report" element={<SamasyaReport />} />
            <Route path="/pathshaala-plus" element={<PathshaalaPlus />} />
            <Route path="/krishi-bandhu" element={<KrishiBandhu />} />
            <Route path="/able-access-map" element={<AbleAccessMap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
