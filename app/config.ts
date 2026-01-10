export const HACKATHON_VERSION = 7;
export const DEVFOLIO_LINK = "https://example.com";
export const HACKATHON_DATE_FMT = "February 7th & 8th";
export const HACKATHON_DATE = "2026-02-07";
export const HACKATHON_END_DATE = "2026-02-08";
export const REGISTERATION_DEADLINE = "2026-01-19"; // 18 EOD
export const NAVBAR = [
  n("Register", "https://example.com"),
  n("Sponsors", "https://example.com"),
  n("FAQs", "https://example.com"),
  n("Contact", "https://example.com"),
]
export const TRACKS = [
  t("Open Innovation", "This track is for creative solutions that don't fit the other categories. Whether it's a new developer tool, a fintech app, or something completely different, this is your chance to shine. Solve a real-world problem and show us that innovation has no boundaries.", "Open Track"),
  t("Good Health & Well-Being", "Build technology to improve healthcare access, especially in remote or underserved areas. Projects can range from AI diagnostics and mental health apps to better hospital management systems. The goal is to ensure quality healthcare is available to everyone.", "SDG 3"),
  t("Climate Resistance", "Develop actionable tools to fight climate change and help communities adapt. Solutions could include smart carbon calculators, disaster prediction models, or platforms for local climate action. Help people and governments make data-driven decisions for the planet.", "SDG 13"),
  t("Life Below Water", "Use technology to protect our oceans and reverse marine damage. Focus on solving issues like plastic pollution, sustainable fishing, or real-time water quality monitoring. Build solutions that keep marine ecosystems healthy and vibrant.", "SDG 14"),
  t("Sustainable Ecosystems", "Design systems that help industries and cities grow without hurting nature. Build solutions to optimize resource usage, monitor wildlife health, or create eco-friendly infrastructure. The goal is to support modern living while actively protecting the land around us.", "SDG 9, 11 & 15"),
  t("Collaborative, Consumption & Production", "Create platforms that connect producers and consumers to reduce waste. We need tools to track product lifecycles, share materials between industries, or encourage responsible buying. Use technology to make 'reduce, reuse, recycle' a reality through better collaboration.", "SDG 9, 11 & 15"),
] as {
  name: string;
  description: string;
  sdg: string;
}[];
export const TIMELINE = [
  q("Track Release", "Get ready to innovate! We've revealed the hackathon tracks, each designed to spark creativity and tackle real-world challenges. Gear up to choose your path and make a difference!", "2026-01-01"),
  q("Idea Submission", "Submit you innovative ideas, as we have limited seats! We're reviewing submissions as they come in, and you'll be notified about your selection status through mail. Don't miss your chance to join HackTU!", "2026-01-02", REGISTERATION_DEADLINE),
  q("Hackathon", "The hackathon begins at 11:00 A.M. Teams must be present at the venue to participate in the hackathon. We look forward to welcoming you at Thapar Institute of Engineering and Technology, Patiala", HACKATHON_DATE, HACKATHON_END_DATE),
] as {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
}[];
export const FOOTER_LINKS = {
  about: "https://example.com",
  privacy: "https://example.com",
  codeofcontact: "https://example.com",
  termsandconditions: "https://example.com",
} as const;
export const SOCIALS = {
  mail: "https://example.com",
  instagram: "https://example.com",
  linkedin: "https://example.com",
  whatsapp: "https://example.com",
  discord: "https://example.com",
}


function t(name: string, description: string, sdg: string) {
  return { name, description, sdg };
}
function q(title: string, description: string, start_date: string, end_date?: string) {
  return { title, description, start_date: new Date(start_date), end_date: new Date(end_date || start_date) };
}
function n(name: string, link: string) {
  return { name, link }
}
