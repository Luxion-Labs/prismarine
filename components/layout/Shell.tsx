"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./shell.scss";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="main-content__body">{children}</div>
      </div>
    </div>
  );
}
