export const HACKATHON_VERSION = 7;
export const SUBMISSION_PORTAL_LINK = "https://submit.ccstiet.com";
export const HACKATHON_DATE_FMT = "February 7th & 8th";
export const HACKATHON_DATE_NO_TIME = "2026-02-07";
export const HACKATHON_DATE = "2026-02-07T5:30:00Z";
export const HACKATHON_END_DATE = "2026-02-08";
export const REGISTERATION_DEADLINE_INCLUSIVE_DAY = "2026-01-21";
export const REGISTERATION_DEADLINE = "2026-01-21T18:30:00Z"; // 18 EOD
export const REGISTERATION_DEADLINE_FMT = "January 21 2026"
export const NAVBAR = [
  n("Register", "https://bit.ly/hacktu7"),
  n("Sponsors", "#sponsor"),
  n("FAQs", "#faq"),
  n("Contact", "#footer"),
]
export const TRACKS = [
  t("Open Innovation", "This track is for creative solutions that don't fit the other categories. Whether it's a new developer tool, a fintech app, or something completely different, this is your chance to shine. Solve a real-world problem and show us that innovation has no boundaries.", "Open Track"),
  t("Good Health & Well-Being", "Build technology to improve healthcare access, especially in remote or underserved areas. Projects can range from AI diagnostics and mental health apps to better hospital management systems. The goal is to ensure quality healthcare is available to everyone.", "SDG 3"),
  t("Climate Resistance", "Develop actionable tools to fight climate change and help communities adapt. Solutions could include smart carbon calculators, disaster prediction models, or platforms for local climate action. Help people and governments make data-driven decisions for the planet.", "SDG 13"),
  t("Life Below Water", "Use technology to protect our oceans and reverse marine damage. Focus on solving issues like plastic pollution, sustainable fishing, or real-time water quality monitoring. Build solutions that keep marine ecosystems healthy and vibrant.", "SDG 14"),
  t("Sustainable Ecosystems", "Design systems that help industries and cities grow without hurting nature. Build solutions to optimize resource usage, monitor wildlife health, or create eco-friendly infrastructure. The goal is to support modern living while actively protecting the land around us.", "SDG 9, 11 & 15"),
  t("Collaborative, Consumption & Production", "Create platforms that connect producers and consumers to reduce waste. We need tools to track product lifecycles, share materials between industries, or encourage responsible buying. Use technology to make 'reduce, reuse, recycle' a reality through better collaboration.", "SDG 12 & 17"),
] as Track[];
export const DILATHON_SPONSORED_TRACKS = [
  dil_t("RSSI-Driven Autonomous Antenna Tracker", "Ground stations lose UAV comms when drones maneuver unpredictably", "Build an antenna tracker that autonomously follows a UAV using ONLY RSSI signals (no GPS/telemetry)", [
    "RSSI threshold-based direction finding",
    "PID control for smooth tracking",
    "30° field-of-view compensation",
    "Real-time signal strength visualization",
  ]),
  dil_t("Campus Guardian Drone", "Campuses need 24/7 surveillance but can't afford enterprise solutions", "Deploy a low cost autonomous patrol drone (less than ₹25k)", [
    "Raspberry Pi camera + motion detection",
    "Night vision capability",
    "IoT alerts to web dashboard",
    "Autonomous battery charging docking",
    "Must-Have Features:",
    "Geofencing & no-fly zones",
    "Object classification (person/bike/litter)",
    "Live streaming + event recording",
  ]),
  dil_t("Indoor GPS-Denied Maze Navigator", "GPS fails indoors. Drones need to navigate tight spaces autonomously", "Build a micromouse-inspired drone that solves 3x3m indoor mazes", [
    "Visual odometry (camera-based)",
    "IMU fusion + SLAM",
    "Wall-following + dead reckoning",
    "Obstacle avoidance (<30cm clearance)",
    "Bonus: Map reconstruction + fastest solve time",
  ]),
  dil_t("GPS-Jammed Autonomous Navigation", "Enemy jamming/spoofing disables GPS. Mission must continue", "Enable UAV to complete waypoint mission using GPS-denied sensors only", [
    "Visual odometry (optical flow)",
    "IMU + Barometer fusion",
    "Compass (magnetometer)",
    "Optional: Pre-loaded map matching",
  ]),
] as DilathonTrack[];
export const TIMELINE = [
  q("Track Release", "Get ready to innovate! We've revealed the hackathon tracks, each designed to spark creativity and tackle real-world challenges. Gear up to choose your path and make a difference!", "2026-01-01"),
  q("Idea Submission", "Submit you innovative ideas, as we have limited seats! We're reviewing submissions as they come in, and you'll be notified about your selection status through mail. Don't miss your chance to join HackTU!", "2026-01-02", REGISTERATION_DEADLINE_INCLUSIVE_DAY),
  q("Hackathon", "The hackathon begins at 11:00 A.M. Teams must be present at the venue to participate in the hackathon. We look forward to welcoming you at Thapar Institute of Engineering and Technology, Patiala", HACKATHON_DATE_NO_TIME, HACKATHON_END_DATE),
] as TimelineItem[];
export const FAQ = [
  f("What is a Hackathon?", "A hackathon is an event, usually hosted by a tech company or organization, where programmers get together for a short period of time to collaborate on a project (usually a website or an app)."),
  f("Who all are eligible to participate?", "Any student pursuing a college degree can participate."),
  f("It is my first hackathon, what's something I should know?", "Hackathons aren't just about winning (though that's always exciting!); they're incredible opportunities to network and connect with like-minded people (many of our community core members first met at hackathons). Whether you win or lose, you're guaranteed to learn something valuable. Approach it with a mindset of growth and discovery, and we promise you'll have a great time!"),
  f("What is the Round 0 / Checkpoint 0?", "Round 0 is the preliminary round for this hackathon, where participants are required to submit a PowerPoint presentation (PPT) outlining their idea or solution. The evaluation of these submissions will determine eligibility for offline participation in the hackathon."),
  f("Where and how do I submit my PPT for Round 0?", `You can submit your PPT for Round 0 by visiting ${SUBMISSION_PORTAL_LINK}. Follow the instructions on the portal to upload your submission before the deadline, i.e. ${REGISTERATION_DEADLINE_FMT}, 11:59 p.m. Ensure your file meets the required guidelines for successful submission.`),
  f("Where is it being held?", `HackTU ${HACKATHON_VERSION}.0 is a Physical Hackathon. You will have to attend the hackathon in offline mode at Thapar Institute of Engineering and Technology, Patiala, Punjab. Necessary information will be provided to participants through their registered mail.`),
  f("Can we participate individually", "No, we firmly believe in the power of collaborative learning and encourage participants to form teams (3-5). Join forces, amplify your skills, and embark on a collective journey of innovation at our upcoming event!"),
  f("Will there be food arrangements", "We've got you covered with delicious meals and refreshing treats to keep your energy high throughout the event. Your sustenance is as important to us as your creativity! Rest assured, your well-being is our priority."),
  f("I've already applied but my application status is still pending", "Be patient, we've got so many registrations, we are still in the process of accepting teams, just hold on for some time."),
  f("Can I use a project that was previously bult for a hackathon", "No, you cannot use a project that was previously built. All hackathon projects must be created from scratch during the event's timeline to ensure fairness and creativity. Additionally, all participants must comply with the MLH Code of Conduct to maintain a positive and inclusive environment."),
  f("What if I feel sleepy during the Hackathon?", "We will try our best to have engaging activities at every hour but just incase you lose it all, we'll have you covered with special resting zones. Otherwise feel free to have a quick nap at your desk"),
  f("I got selected!, what do I have to bring?", "Check-in timing is strictly 9:30 AM to 10:45 AM. Bring your valid ID cards (e.g. Aadhar Card, College ID card), it is essential for entering the venue"),
  f("Curious about something else", "Contact us at: +91 7388878724 +91 7821800212 support@ccstiet.com")
] as { question: string, answer: string }[]
export const FOOTER_LINKS = {
  about: "https://www.ccstiet.com/",
  privacy: "https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md",
  codeofcontact: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
  termsandconditions: "https://github.com/MLH/mlh-policies/blob/main/contest-terms.md",
} as const;
export const SOCIALS = {
  mail: "mailto:ccs@thapar.edu",
  instagram: "https://www.instagram.com/ccs_tiet/",
  linkedin: "https://www.linkedin.com/company/ccs-tiet/posts/_feedView=all",
  whatsapp: "https://chat.whatsapp.com/D4SQJXJDdPr7KD2tcPUAZx",
  discord: "http://url.ccstiet.com/discord",
} as const;
export const SPONSORS = [
  s("/sponsors/devfolio.svg", "https://devfolio.co/", "Devfolio"),
  s("/sponsors/ETHIndia.svg", "https://ethindia-villa.devfolio.co/overview", "ETHIndia"),
  s("/sponsors/github.png", "https://github.com", "Github"),
  s("/sponsors/genesis.webp", "https://instagram.com/zk_genesis/", "Genesis"),
  s("/sponsors/spec.png", "https://spec.nith.ac.in/", "SPEC-NITH"),
  s("/sponsors/navan.png", "https://navan.ai/", "Navan"),
  s("/sponsors/keploy.svg", "https://keploy.io/", "Keploy"),
  s("/sponsors/dilathon.png", "http://dilaton.ai/", "Dilathon"),
  s("/sponsors/thinkcell.png", "https://www.think-cell.com/en/essentials", "Think-Cell"),
  s("/sponsors/xyz.svg", "https://gen.xyz/", "XYZ"),
  s("/sponsors/interviewbuddy.svg", "https://interviewbuddy.net/", "Interview Buddy"),
] as { image_link: string; link: string; name: string }[];
export const SPONSOR_PACKET = "https://drive.google.com/file/d/1yw9vDo41PjE309vj6tjFnPKELxVcyM_o/view?usp=sharing";

export type DilathonTrack = {
  name: string;
  problem: string;
  challenge: string;
  requirements: string[];
};
export type Track = {
  name: string;
  description: string;
  sdg: string;
};
export type TimelineItem = {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
};

function s(image_link: string, link: string, name: string) {
  return { image_link, link, name };
}
function f(question: string, answer: string) {
  return { question, answer };
}
function t(name: string, description: string, sdg: string) {
  return { name, description, sdg };
}
function dil_t(name: string, problem: string, challenge: string, requirements: string[]) {
  return { name, problem, challenge, requirements };
}
function q(title: string, description: string, start_date: string, end_date?: string) {
  return { title, description, start_date: new Date(start_date), end_date: new Date(end_date || start_date) };
}
function n(name: string, link: string) {
  return { name, link }
}
