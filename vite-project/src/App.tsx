import { useState, useRef} from "react";
import "./App.css";

// --- DATA (icons removed) ---

const teamMembers = [
  {
    name: "Srikar Vemuri",
    role: "Founder & CEO",
    bio: "A passionate advocate for accessible AI education, driving the vision and strategy of ThrAIve. Loves to .",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "TO Be Filled",
    role: "Chief Technology Officer",
    bio: "Leads the technical development of all ThrAIve projects, with expertise in machine learning and full-stack development. MIT student.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Praneel Vema",
    role: "Head of Community",
    bio: "Fosters our vibrant community by organizing events, managing communications, and ensuring every member feels welcome. Studies at UC Berkeley.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Neeraj Chandekar",
    role: "Director of Non-Profit Outreach",
    bio: "Connects ThrAIve with non-profit organizations, leading projects that apply AI for social good. A student at Johns Hopkins University.",
    socials: { linkedin: "#", twitter: "#" },
  },
];
const projects = [
  {
    // icon: Heart, // removed
    title: "HART Nonprofit Connect",
    status: "Completed",
    description:
      "Developed an AI-powered social media content generator for HART of Folsom. This tool automates the creation of flyers and promotional materials, significantly boosting their outreach capabilities and allowing them to focus more on their core mission.",
    tech: ["Python Flask", "Canva API", "OpenAI API", "Unsplash API"],
  },
  {
    // icon: Eye, // removed
    title: "NY State Ophthalmology Society Research",
    status: "Ongoing",
    description:
      "A collaborative research project leveraging AI to analyze complex ophthalmic data. Our goal is to develop models that can assist in early disease detection and support ophthalmologists in their diagnostic processes.",
    tech: ["Data Analysis", "Machine Learning", "AI Research", "PyTorch"],
  },
];

const pastEvents = [
  {
    title: "Intro to Generative AI for Social Impact",
    description:
      "Our inaugural webinar featuring a guest speaker from a leading AI research lab. We explored the fundamentals of generative AI and brainstormed applications for non-profit organizations.",
    date: "June 15, 2025",
    recordingUrl: "https://youtu.be/16QUs5ypwLA", // Example URL
  },
];

// const initiatives = [
//   {
//     // icon: Zap, // removed
//     title: "AI Webinars",
//     description:
//       "Engaging webinars with industry experts and guest speakers on cutting-edge AI topics.",
//   },
//   {
//     // icon: Users, // removed
//     title: "Student Community",
//     description:
//       "A thriving network for high school and college students to connect, collaborate, and share their passion for AI.",
//   },
//   {
//     // icon: Heart, // removed
//     title: "AI for Social Good",
//     description:
//       "Promoting the use of AI for nonprofit projects, providing resources and support to make a real-world impact.",
//   },
//   {
//     // icon: Code, // removed
//     title: "Hackathons",
//     description:
//       "High-energy hackathons designed to foster creativity, problem-solving, and innovation in AI.",
//   },
// ];

// --- CORE APP STRUCTURE ---

function MainPage({ setPages }: { setPages: (page: string) => void }) {
  const scrollIntoViewRef = useRef<HTMLDivElement>(null);
  function scrollIntoView() {
    scrollIntoViewRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div
        className="flex w-screen h-screen justify-center content-center"
        style={{ maxWidth: "100%" }}
        id="mainContainer"
      >
        <div className="grid place-items-center h-full/2 flex content-center">
          <p className="font-mono text-7xl text-center">
            ThraiveAI, a{" "}
            <span className="text-sky-500 font-bold ">student</span>{" "}
            volunteer-run organization with{" "}
            <span className="text-orange-400 font-bold">AI</span> as a focus.
          </p>
          <button
            className="btn btn-primary m-10"
            onClick={() => scrollIntoView()}
          >
            Learn MORE
          </button>
        </div>
      </div>
      <section ref={scrollIntoViewRef}>
        <div className=" grid  place-items-center flex w-screen content-center">
          <h1 className="text-5xl font-bold text-center">About US</h1>
          <p className="text-center text-2xl font-bold w-1/2 ">
            We are a nationwide community of 90+ passionate{" "}
            <span className="text-orange-500">students</span>, united by a
            curiosity for AI and a drive to make a difference.
          </p>
        </div>
      </section>
      <section
        className="w-screen flex justify-center p-5"
        style={{ maxWidth: "100%" }}
      >
        <div
          className="flex h-120 flex justify-center content-center"
          style={{ width: "75vw" }}
        >
          <div className="w-full h-full flex flex-col">
            <div
              className="card  grid h-50 grow place-items-center"
              id="section1"
            >
              <h1 className="font-bold text-orange-400 text-9xl text-left">
                OUR MISSION
              </h1>
              <p className="text-center text-2xl text-center">
                Our mission is to democratize AI education and application. We
                aim to conduct insightful webinars, build a collaborative
                student community, promote AI for nonprofit impact, and organize
                innovative hackathons. We're creating a launchpad for the next
                generation of AI leaders and problem-solvers.
              </p>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="w-full h-full flex flex-col gap-4">
            <div
              className="card  grid h-1/2 grow place-items-center"
              id="section2"
            >
              <h1 className="font-bold text-sky-400 text-9xl">OUR VISION</h1>
              <p className="text-center text-2xl text-center">
                We envision a future where students from all backgrounds can
                access the tools and knowledge to harness AI for positive
                change. By connecting aspiring minds and providing hands-on
                opportunities, we believe in fostering a more innovative,
                equitable, and intelligent world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex w-screen justify-center"
        style={{ maxWidth: "100%" }}
      >
        <div className="w-1/2 bg-base-300 shadow-md text-center rounded-box p-5  m-10 h-full">
          <h1 className="text-3xl font-bold">MEET THE TEAM</h1>
          <p className="text-2xl">
            Our organization is powered by a dedicated team of student leaders.
          </p>
          <button
            className="btn btn-primary m-5"
            onClick={() => setPages("team")}
          >
            See Team
          </button>
        </div>
      </div>
      <div className="w-screen flex flex-row justify-around items-stretch gap-8 px-10 py-12">
        <div className="card bg-zinc-800 rounded-box shadow-lg flex flex-col justify-center items-center p-8 min-h-[180px] max-w-xs w-full">
          <h2 className="font-bold text-sky-400 text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </h2>
          <p className="text-center text-base text-gray-200">
            Engaging webinars with industry experts and guest speakers on
            cutting-edge AI topics.
          </p>
        </div>
        <div className="card bg-zinc-800 rounded-box shadow-lg flex flex-col justify-center items-center p-8 min-h-[180px] max-w-xs w-full">
          <h2 className="font-bold text-sky-400 text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </h2>
          <p className="text-center text-base text-gray-200">
            A thriving network for high school and college students to connect,
            collaborate, and share their passion for AI.
          </p>
        </div>
        <div className="card bg-zinc-800 rounded-box shadow-lg flex flex-col justify-center items-center p-8 min-h-[180px] max-w-xs w-full">
          <h2 className="font-bold text-sky-400 text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </h2>
          <p className="text-center text-base text-gray-200">
            Promoting the use of AI for nonprofit projects, providing resources
            and support to make a real-world impact.
          </p>
        </div>
        <div className="card bg-zinc-800 rounded-box shadow-lg flex flex-col justify-center items-center p-8 min-h-[180px] max-w-xs w-full">
          <h2 className="font-bold text-sky-400 text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </h2>
          <p className="text-center text-base text-gray-200">
            High-energy hackathons designed to foster creativity,
            problem-solving, and innovation in AI.
          </p>
        </div>
      </div>
    </>
  );
}

function TeamPage() {
  return (
    <div className="w-screen h-screen flex justify-center content-center flex-col">
      <div className = "w-screen text-center">
        <h1 className = "text-5xl">MEET THE CORE TEAM</h1>
        <p className = "mt-5">The driving force behind ThrAIve's mission. We are innovators, leaders, and students passionate about shaping the future of AI.</p>
      </div>
      <div className="flex flex-row justify-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="card bg-base-100 w-1/4 shadow-sm m-5">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-30"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-sky-500 font-semibold mb-2">{member.role}</p>
              <p className="text-base">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectPage()
{
  return(
      <div className=" py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col items-center">
            {/* Projects Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Projects</h1>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    Applying AI to solve real-world problems and support our community partners.
                </p>
            </div>
            <div className="grid md:grid-cols-1 gap-10 mb-20 w-2/3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center">
                        <div className="p-4 bg-gray-700 flex-shrink-0 self-stretch flex items-center">
                            
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-2">
                                <h3 className="text-3xl font-bold text-white mr-4">{project.title}</h3>
                                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>{project.status}</span>
                            </div>
                            <p className="text-gray-300 mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-gray-700 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Past Events Section */}
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Past Events & Webinars</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    Sharing knowledge and fostering discussion within our community.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                {pastEvents.map((event, index) => (
                    <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
                        <p className="text-sm text-blue-400 font-semibold mb-2">{event.date}</p>
                        <h3 className="text-3xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-300 mb-6">{event.description}</p>
                        <a href={event.recordingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors">
                           
                            Watch Recording
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

function ContactPage()
{
  return(
      <section id="contact" className={`py-20 md:py-32 `}>
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Get Involved</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Whether you're a student, a non-profit, or a professional, there's a place for you at ThrAIve.
        </p>
      </div>
      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="your.email@example.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows= {4} className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500" placeholder="How would you like to get involved?"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}
export default function App() {
  const [pages, setPage] = useState("main");
  const renderPage = () => {
    switch (pages) {
      //setCurrentPage={setCurrentPage}
      case "main":
        return <MainPage setPages={setPage} />;
      case "team":
        return <TeamPage />;
      case "projects":
        return <ProjectPage/>;
      case "contact":
        return <ContactPage/>;
      // case 'team':
      //   return <TeamPage />;
      // case 'projects':
      //   return <ProjectsPage />;
      // case 'contact':
      //   return <ContactSection isPage={true} />;
      // default:
      //   return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <main>
      <div
        className="navbar bg-base-100 shadow-sm stick fixed top-0  z-50"
        style={{ maxWidth: "100%" }}
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ThraiveAI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className = "btn" onClick = {()=>setPage("main")}>Home</button>
            </li>
            <li>
              <button className = "btn" onClick = {()=>setPage("projects")}>Projects</button>
            </li>
            <li>
              <button className = "btn" onClick = {()=>setPage("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
      {renderPage()}
    </main>
  );
}
