import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DivemasterPage from "./pages/DivemasterPage";
import InstructorPage from "./pages/InstructorPage";
import AssistantInstructorPage from "./pages/AssistantInstructorPage";
import IDCStaffPage from "./pages/IDCStaffPage";
import TechnicalDivingPage from "./pages/TechnicalDivingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <div className="min-h-screen bg-red-500 text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">App is Working!</h1>
  </div>
);

export default App;
