"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (route: string) => {
    if (route === "/" && pathname === "/") return true;
    if (route !== "/" && pathname.startsWith(route)) return true;
    return false;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span>Prismarine</span>
      </div>
      <nav className="sidebar__nav">
        <Link
          href="/"
          className={`sidebar__link ${isActive("/") ? "sidebar__link--active" : ""}`}
        >
          Dashboard
        </Link>
        <Link
          href="/collections"
          className={`sidebar__link ${isActive("/collections") ? "sidebar__link--active" : ""}`}
        >
          Collections
        </Link>
        <Link
          href="/runner"
          className={`sidebar__link ${isActive("/runner") ? "sidebar__link--active" : ""}`}
        >
          Runner
        </Link>
        <Link
          href="/settings"
          className={`sidebar__link ${isActive("/settings") ? "sidebar__link--active" : ""}`}
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
