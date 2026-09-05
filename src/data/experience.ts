import { dev } from "astro";

export interface ExperienceEntry {
  title: string;
  items: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Eucentre main",
    items: [
      "Post-processing and reporting of experimental tests on seismic isolators (CSS and elastomeric bearings)",
      "Post-processing of pseudo-static and dynamic tests",
      "Support for shaking table testing and optical motion acquisition",
    ],
  },
  {
    title: "Eucentre",
    items: [
      "3D laser scanner surveying, point cloud processing, 3D structural modeling, and production of as-built CAD drawings",
      "Database management for Seveso-flagged industrial plants",
      "Licensed drone pilot (UAS) for structural surveys and inspections",
    ],
  },
  {
    title: "Engineering consultancies",
    items: [
      "(Work in progress...) Professional collaborations with engineering firms and private clients",
    ],
  },
  {
    title: "Work",
    items: [
        "I am goal- and priority-driven. I enjoy teamwork and strongly emphasize clear communication to successfully complete every project"
    ]
  }
];