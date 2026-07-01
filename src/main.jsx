import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Play,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import "./styles.css";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const profile = {
  name: "成梦绮",
  role: "AI视觉方向候选人 / 软件工程本科",
  phone: "19574487212",
  email: "c3289447114@163.com",
  location: "广东广州",
  school: "吉首大学 · 软件工程",
};

const stats = [
  ["编程能力强", "C / Java / MySQL"],
  ["表达能力强", "需求沟通与项目汇报"],
  ["审美高", "视觉表达与内容剪辑"],
  ["AI痴迷者", "Agent / 大模型工具流"],
];

const projects = [
  {
    title: "ChopperBot 秒剪成片",
    period: "2025.4 - 至今",
    role: "项目核心成员",
    image: asset("chopperbot-ui.png"),
    github: "https://github.com/Geniusay/ChopperBot",
    summary:
      "使用 OpenAI 大模型自动生成直播切片的 PC 端平台，围绕素材获取、智能匹配、剪辑推送形成自动化流程。",
    points: ["OpenAI 大模型", "动态爬虫 IP 代理池", "波峰平均值算法", "秒级成片", "高光匹配率 95%"],
  },
];

const visualWorks = [
  {
    title: "五月影像视觉作品",
    label: "May 09 / HD Video",
    type: "video",
    src: asset("may09-visual-work.mp4"),
    poster: asset("may09-poster.jpg"),
  },
  {
    title: "动态影像主视觉",
    label: "Motion Visual",
    type: "video",
    src: asset("hero-user-video.mp4"),
    poster: asset("forest-portrait.png"),
  },
  {
    title: "黑白时装视觉作品",
    label: "Fashion / Mono",
    type: "image",
    src: asset("visual-work-fashion.png"),
  },
  {
    title: "森林光影视觉作品",
    label: "Nature / Light",
    type: "image",
    src: asset("forest-portrait.png"),
  },
];

const advantages = [
  {
    icon: Sparkles,
    title: "AI 产品理解",
    text: "熟悉 DeepSeek、ChatGPT、Codex 等 AI 工具，了解 Agent 机制，能把模型能力转译成可落地的产品流程。",
  },
  {
    icon: UserRound,
    title: "需求与架构意识",
    text: "能站在用户视角分析需求，也能从工程角度梳理架构、流程和数据闭环，适合 AI 视觉应用型岗位。",
  },
  {
    icon: Trophy,
    title: "项目推进能力",
    text: "在创业赛、软件创新赛和校园组织中持续承担核心成员/负责人角色，具备沟通、统筹和交付意识。",
  },
];

function App() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 30 });
  const [activeWork, setActiveWork] = useState(null);

  return (
    <main
      style={{
        "--mouse-x": `${spotlight.x}%`,
        "--mouse-y": `${spotlight.y}%`,
      }}
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setSpotlight({ x, y });
      }}
    >
      <Hero />
      <MotionDivider />
      <Experience />
      <VisualAtmosphere onOpenWork={setActiveWork} />
      <Projects onOpenWork={setActiveWork} />
      <Advantages />
      <Contact />
      <WorkLightbox work={activeWork} onClose={() => setActiveWork(null)} />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video className="heroVideo" autoPlay muted loop playsInline poster={asset("forest-portrait.png")}>
        <source src={asset("hero-user-video.mp4")} type="video/mp4" />
      </video>
      <div className="videoFallback" aria-hidden="true" />
      <div className="ambientGrid" aria-hidden="true" />
      <div className="auroraLayer" aria-hidden="true" />
      <div className="particleField" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <nav className="nav">
        <a href="#top" className="brand">
          MONNQI
        </a>
        <div className="navLinks">
          <a href="#experience">About</a>
          <a href="#projects">Work</a>
          <a href="#advantages">Strengths</a>
        </div>
        <a className="contactButton" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </nav>
      <div className="heroInner">
        <p className="kicker">AI Vision · Product Thinking · Creative Engineering</p>
        <h1>Welcom Monnqi's Website</h1>
        <div className="heroBottom">
          <p>很高兴你来认识梦绮</p>
          <a className="arrowLink" href="#projects">
            Explore Work <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <a className="scrollCue" href="#experience">[ SCROLL TO EXPLORE ]</a>
      <span className="versionMark">v3.0</span>
      <div className="heroDock" aria-label="实时能力标签">
        <div>
          <span>Focus</span>
          <strong>AI Product</strong>
        </div>
        <div>
          <span>Project</span>
          <strong>ChopperBot</strong>
        </div>
        <div>
          <span>Signal</span>
          <strong>95% Match</strong>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="sectionHead">
        <span>Profile</span>
        <h2>个人经历</h2>
      </div>
      <div className="profileGrid">
        <div className="portraitPanel">
          <img src={asset("monnqi-profile-web.jpg")} alt="成梦绮个人照片" />
          <div className="portraitMeta">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>
        <div className="bioPanel">
          <div className="skillBrief">
            <article>
              <span>01 / Engineering</span>
              <p>掌握 C、Java 编程语言，熟悉 MySQL 数据库及其架构，能够独立进行需求分析和架构设计。</p>
            </article>
            <article>
              <span>02 / Tools</span>
              <p>熟练使用 Redis、IDEA、Git 等开发工具，也能将 DeepSeek、ChatGPT、Codex 等 AI 工具融入学习与项目流程。</p>
            </article>
            <article>
              <span>03 / AI Thinking</span>
              <p>了解 Agent 机制，对 AI 产品有浓厚兴趣和较深入认知，持续关注大模型能力与产品落地方式。</p>
            </article>
            <article>
              <span>04 / Visual</span>
              <p>熟练使用 Office、Visio、Photoshop、剪映等工具，能够兼顾技术实现、产品表达与视觉呈现。</p>
            </article>
          </div>
          <div className="infoStrip">
            <span>{profile.school}</span>
            <span>综合排名前 10%</span>
            <span>求职方向：AI视觉 / AI产品 / 项目助理</span>
          </div>
          <div className="contactGrid">
            <span><Phone size={16} /> {profile.phone}</span>
            <span><Mail size={16} /> {profile.email}</span>
          </div>
        </div>
        <div className="statsGrid">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualAtmosphere({ onOpenWork }) {
  const [mainWork, ...galleryWorks] = visualWorks;

  return (
    <section className="section visualAtmosphere">
      <div className="sectionHead">
        <span>Visual Works</span>
        <h2>视觉作品</h2>
      </div>
      <div className="visualGrid">
        <button className="visualVideoFrame workButton" type="button" onClick={() => onOpenWork(mainWork)}>
          <video autoPlay muted loop playsInline poster={asset("forest-portrait.png")}>
            <source src={mainWork.src} type="video/mp4" />
          </video>
          <div className="visualCaption">
            <span>{mainWork.label}</span>
            <strong>{mainWork.title}</strong>
          </div>
        </button>
        <div className="visualGallery">
          {galleryWorks.map((work) => (
            <button
              className={`visualImage workButton ${work.type === "video" ? "visualImage--video" : ""}`}
              key={work.title}
              type="button"
              onClick={() => onOpenWork(work)}
            >
              {work.type === "video" ? (
                <video autoPlay muted loop playsInline poster={work.poster}>
                  <source src={work.src} type="video/mp4" />
                </video>
              ) : (
                <img src={work.src} alt={work.title} />
              )}
              <span>{work.label}</span>
            </button>
          ))}
          <div className="visualCopy">
            <p className="kicker">Dynamic Portfolio</p>
            <h3>用柔和影像、动态背景和产品项目，建立更轻盈也更高级的个人表达。</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function MotionDivider() {
  return (
    <div className="motionDivider" aria-hidden="true">
      <div className="ticker">
        <span>AI VISION</span>
        <span>PRODUCT DESIGN</span>
        <span>CREATIVE ENGINEERING</span>
        <span>MONNQI</span>
        <span>AI VISION</span>
        <span>PRODUCT DESIGN</span>
      </div>
    </div>
  );
}

function Projects({ onOpenWork }) {
  return (
    <section className="section projects" id="projects">
      <div className="sectionHead wide">
        <span>Selected Projects</span>
        <h2>精选项目</h2>
      </div>
      <div className="projectStack">
        {projects.map((project, index) => (
          <article className="projectCard" key={project.title}>
            <button
              className="projectMedia workButton"
              type="button"
              onClick={() =>
                onOpenWork({
                  title: project.title,
                  label: "Project Video",
                  type: "video",
                  src: asset("chopperbot-motion.mp4"),
                  poster: project.image,
                })
              }
            >
              <video autoPlay muted loop playsInline poster={project.image}>
                <source src={asset("chopperbot-motion.mp4")} type="video/mp4" />
              </video>
              <div className="scanline" />
              <span className="mediaVisit">
                <Play size={16} /> 点击查看
              </span>
            </button>
            <div className="projectInfo">
              <span className="projectIndex">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="projectMeta">
                <span>{project.period}</span>
                <span>{project.role}</span>
              </div>
              <div className="tags">
                {project.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
              <div className="projectActions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={18} /> GitHub 仓库
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  在线查看 <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkLightbox({ work, onClose }) {
  if (!work) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={work.title}>
      <button className="lightboxBackdrop" type="button" onClick={onClose} aria-label="关闭预览" />
      <div className="lightboxPanel">
        <div className="lightboxTop">
          <div>
            <span>{work.label}</span>
            <strong>{work.title}</strong>
          </div>
          <button type="button" onClick={onClose}>关闭</button>
        </div>
        <div className="lightboxMedia">
          {work.type === "video" ? (
            <video controls autoPlay playsInline poster={work.poster}>
              <source src={work.src} type="video/mp4" />
            </video>
          ) : (
            <img src={work.src} alt={work.title} />
          )}
        </div>
      </div>
    </div>
  );
}

function Advantages() {
  return (
    <section className="section advantages" id="advantages">
      <div className="sectionHead">
        <span>Strengths</span>
        <h2>个人优势</h2>
      </div>
      <div className="advantageGrid">
        {advantages.map((item) => {
          const Icon = item.icon;
          return (
            <article className="advantageCard" key={item.title}>
              <Icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
      <div className="awards">
        <span>2025 软件创新技能大赛湖南省三等奖</span>
        <span>2024 “金种子”大学生创业大赛省级三等奖</span>
        <span>2026 “创赢未来”创业项目展示交流活动市一等奖</span>
        <span>2025 优秀学生干部</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contactFinal" id="contact">
      <div className="contactInner">
        <p className="kicker">Available for AI Vision Opportunities</p>
        <h2>期待把视觉智能、产品思维和工程执行力带到你的团队。</h2>
        <div className="finalLinks">
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
