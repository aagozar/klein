export interface LogFile {
  label: string;
  url: string;
}

export interface LogEntry {
  platform: string;
  desc: string;
  status: "corso" | "avviare";
  statusLabel: string;
  detail: string;
  files?: LogFile[];
}

export const logEntries: LogEntry[] = [
  {
    platform: "Python",
    desc: "FEM, NTC 2018 load combinations, 2D frame model with OpenSeesPy",
    status: "corso",
    statusLabel: "Ongoing",
    detail: "I am learning the OpenSeesPy framework, moving from the absolute basics up to modeling a 2D frame. For this I have all my scripts in the following documents",
    files: [
      {label: "Python_for_Engineering", url: "/files/Python_Ingegneria_Strutturale_Dispensa_parte 1.pdf"}
    ],
  },
  {
    platform: "MATLAB",
    desc: "Post-processing for lab tests",
    status: "corso",
    statusLabel: "Ongoing",
    detail: "I have been using MATLAB for lab test post-processing. Additionally, I am writing a script to synchronize signal data with the displacement captured by the camera",
    files: [],
  },
  {
    platform: "EnterFEA",
    desc: "Finite Element Analysis (FEA) - Steel element with Eurocode",
    status: "corso",
    statusLabel: "Ongoing",
    detail: "I enrolled in this course to deepen my knowledge and experience with steel elements based on Eurocodes, beyond Italian standards",
    files: [],
  },
  {
    platform: "Tekla Structures",
    desc: "Detailed structural modeling — to be integrated into the workflow",
    status: "corso",
    statusLabel: "Ongoing",
    detail: "Design modeling is essential for my professional growth. I am currently learning Tekla Structures through courses available on the website.",
    files: [],
  },
  {
    platform: "Application to Project",
    desc: "Placeholder for updates on real-world projects, coming as soon as available",
    status: "avviare",
    statusLabel: "Waiting...",
    detail: "Developing a project from scratch is challenging, but mastering this process from start to finish is my main objective",
    files: [],
  },
];