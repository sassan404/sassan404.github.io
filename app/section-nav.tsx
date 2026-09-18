"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
] as const;

export default function SectionNav() {
  const pathName = usePathname();

  console.log("pathName", pathName);
  const sectionIds = sections.map((section) => section.id);

  const activeSection =
    sectionIds.find((sectionId) => pathName.replace("/", "") === sectionId) ??
    sectionIds[0];

  return (
    <nav aria-label="Primary" className="section-nav">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <Link
            key={section.id}
            href={`/${section.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`nav-link${isActive ? " nav-link-active" : ""}`}
          >
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
}
