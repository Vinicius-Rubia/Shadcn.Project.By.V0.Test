import { Containers } from "@/components/containers";
import { Deployements } from "@/components/deployments";
import { Settings } from "@/components/setttings";
import { Background } from "@/pages/background";
import { Home } from "@/pages/home";
import { Menu } from "@/pages/navbar-test";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployments" element={<Deployements />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/background" element={<Background />} />
      </Routes>
    </BrowserRouter>
  );
};
