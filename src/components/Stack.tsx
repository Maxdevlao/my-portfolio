import type { IconType } from "react-icons";
import {
  BiLogoAws,
  BiLogoMicrosoftTeams,
  BiLogoSlack,
  BiLogoVisualStudio,
} from "react-icons/bi";
import {
  RiClaudeFill,
  RiGeminiFill,
  RiOpenaiFill,
} from "react-icons/ri";
import {
  SiAntdesign,
  SiAndroidstudio,
  SiAsana,
  SiBootstrap,
  SiBruno,
  SiClickup,
  SiCursor,
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGitlab,
  SiInsomnia,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVuedotjs,
  SiWebstorm,
  SiXcode,
  SiFigma,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { stacks } from "@/data/portfolio";

type TechIcon = (typeof stacks)[number]["items"][number]["icon"];

const techIcons: Record<TechIcon, IconType> = {
  flutter: SiFlutter,
  reactnative: SiReact,
  nextjs: SiNextdotjs,
  react: SiReact,
  vue: SiVuedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  nodejs: SiNodedotjs,
  prisma: SiPrisma,
  socketio: SiSocketdotio,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  typescript: SiTypescript,
  javascript: SiJavascript,
  dart: SiDart,
  php: SiPhp,
  tailwindcss: SiTailwindcss,
  materialui: SiMui,
  antdesign: SiAntdesign,
  bootstrap: SiBootstrap,
  vscode: VscVscode,
  cursor: SiCursor,
  visualstudio: BiLogoVisualStudio,
  webstorm: SiWebstorm,
  xcode: SiXcode,
  androidstudio: SiAndroidstudio,
  postman: SiPostman,
  bruno: SiBruno,
  swagger: SiSwagger,
  insomnia: SiInsomnia,
  slack: BiLogoSlack,
  microsoftteams: BiLogoMicrosoftTeams,
  jira: SiJira,
  asana: SiAsana,
  clickup: SiClickup,
  trello: SiTrello,
  openai: RiOpenaiFill,
  claude: RiClaudeFill,
  gemini: RiGeminiFill,
  copilot: SiGithubcopilot,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  docker: SiDocker,
  jenkins: SiJenkins,
  cicd: SiGithubactions,
  aws: BiLogoAws,
  azure: VscAzure,
  figma: SiFigma,
};

const techTints: Record<TechIcon, string> = {
  flutter: "text-[#02569B] bg-[#02569B]/10",
  reactnative: "text-[#61DAFB] bg-[#61DAFB]/15",
  nextjs: "text-ink bg-ink/8",
  react: "text-[#61DAFB] bg-[#61DAFB]/15",
  vue: "text-[#42B883] bg-[#42B883]/12",
  express: "text-ink bg-ink/8",
  nestjs: "text-[#E0234E] bg-[#E0234E]/10",
  nodejs: "text-[#339933] bg-[#339933]/12",
  prisma: "text-[#2D3748] bg-[#2D3748]/10",
  socketio: "text-ink bg-ink/8",
  mysql: "text-[#4479A1] bg-[#4479A1]/12",
  postgresql: "text-[#4169E1] bg-[#4169E1]/12",
  mongodb: "text-[#47A248] bg-[#47A248]/12",
  firebase: "text-[#FFCA28] bg-[#FFCA28]/18",
  typescript: "text-[#3178C6] bg-[#3178C6]/12",
  javascript: "text-[#F7DF1E] bg-[#F7DF1E]/20",
  dart: "text-[#0175C2] bg-[#0175C2]/12",
  php: "text-[#777BB4] bg-[#777BB4]/14",
  tailwindcss: "text-[#06B6D4] bg-[#06B6D4]/12",
  materialui: "text-[#007FFF] bg-[#007FFF]/12",
  antdesign: "text-[#0170FE] bg-[#0170FE]/12",
  bootstrap: "text-[#7952B3] bg-[#7952B3]/12",
  vscode: "text-[#007ACC] bg-[#007ACC]/12",
  cursor: "text-ink bg-ink/8",
  visualstudio: "text-[#5C2D91] bg-[#5C2D91]/12",
  webstorm: "text-[#000000] bg-ink/8",
  xcode: "text-[#147EFB] bg-[#147EFB]/12",
  androidstudio: "text-[#3DDC84] bg-[#3DDC84]/15",
  postman: "text-[#FF6C37] bg-[#FF6C37]/12",
  bruno: "text-[#F26B2B] bg-[#F26B2B]/12",
  swagger: "text-[#85EA2D] bg-[#85EA2D]/18",
  insomnia: "text-[#4000BF] bg-[#4000BF]/12",
  slack: "text-[#4A154B] bg-[#4A154B]/10",
  microsoftteams: "text-[#6264A7] bg-[#6264A7]/12",
  jira: "text-[#0052CC] bg-[#0052CC]/12",
  clickup: "text-[#007AFF] bg-[#007AFF]/12",
  asana: "text-[#F06A6A] bg-[#F06A6A]/12",
  trello: "text-[#0052CC] bg-[#0052CC]/12",
  openai: "text-ink bg-ink/8",
  claude: "text-[#D97757] bg-[#D97757]/14",
  gemini: "text-[#8E75B2] bg-[#8E75B2]/14",
  copilot: "text-ink bg-ink/8",
  git: "text-[#F05032] bg-[#F05032]/12",
  github: "text-ink bg-ink/8",
  gitlab: "text-[#FC6D26] bg-[#FC6D26]/12",
  docker: "text-[#2496ED] bg-[#2496ED]/12",
  jenkins: "text-[#D24939] bg-[#D24939]/12",
  cicd: "text-[#2088FF] bg-[#2088FF]/12",
  aws: "text-[#FF9900] bg-[#FF9900]/15",
  azure: "text-[#0078D4] bg-[#0078D4]/12",
  figma: "text-[#F24E1E] bg-[#F24E1E]/12",
};

export function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-md font-bold uppercase tracking-[0.22em] text-muted">
              Key stack
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Tools I use to ship products
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft md:text-right">
            From mobile clients to APIs, languages, and AI tools — the stack
            behind every build.
          </p>
        </div>

        <div className="space-y-4">
          {stacks.map((group) => (
            <div key={group.label}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-4">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {group.label}
                </h3>
                <p className="text-sm text-muted">{group.description}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = techIcons[item.icon];
                  const tint = techTints[item.icon];

                  return (
                    <li key={item.name} className="w-fit">
                      <div className="group flex w-fit items-center gap-2 rounded-2xl border border-line bg-white/70 px-2.5 py-1.5 transition duration-300 hover:-translate-y-0.5 hover:border-green-700 hover:bg-white">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105 ${tint}`}
                          aria-hidden
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-display text-xs font-semibold tracking-tight text-ink">
                          {item.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
