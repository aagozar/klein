export interface ProgressWeek {
  week: string;
  tradingReturnPct: number | null;
  runningKm: number | null;
  trainingFocus: string;
}

export const progressWeeks: ProgressWeek[] = [
  {
    week: "Week of Aug 10–16, 2026",
    tradingReturnPct: null,
    runningKm: null,
    trainingFocus: "Not tracked yet",
  },
];