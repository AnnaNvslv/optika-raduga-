// Team section. Hidden on the site until this array has real, confirmed
// entries — the previous site's staff list is outdated (it still listed a
// specialist who no longer works here), so it was deliberately not carried
// over. See CONTENT_TO_CONFIRM.md.

export type TeamMember = {
  name: string;
  role: string;
  experience?: string;
  photo?: string;
};

export const team: TeamMember[] = [];

export const showTeamSection = team.length > 0;
