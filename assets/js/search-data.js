// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Published work, and manuscripts currently under review. An asterisk marks equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Humanoid systems I work on at VinMotion, open-source tools, and short research projects that may grow into papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-instanttrack-one-month-in-35-repos-and-4-papers",
        
          title: "InstantTrack, one month in: 35 repos and 4 papers",
        
        description: "From 15 minutes to under 3 in six releases, a fork that came back, and the projects that build on InstantTrack.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/instanttrack-one-month-in/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-accepted-at-chaos-solitons-amp-amp-fractals-q1",
          title: 'Paper accepted at Chaos, Solitons &amp;amp;amp; Fractals (Q1).',
          description: "",
          section: "News",},{id: "news-joined-vinmotion-as-a-robotics-engineer",
          title: 'Joined VinMotion as a Robotics Engineer.',
          description: "",
          section: "News",},{id: "news-graduated-from-the-talented-engineer-program-in-control-engineering-and-automation-at-hanoi-university-of-science-and-technology-hust",
          title: 'Graduated from the Talented Engineer Program in Control Engineering and Automation at Hanoi...',
          description: "",
          section: "News",},{id: "news-motion-1-performed-for-the-public-at-the-a80-national-celebrations-in-hanoi-after-a-synchronized-dance-at-vingroup-s-32nd-anniversary",
          title: 'Motion 1 performed for the public at the A80 national celebrations in Hanoi,...',
          description: "",
          section: "News",},{id: "news-motion-2-debuted-at-ces-2026-in-las-vegas-with-live-walking-boxing-and-dancing",
          title: 'Motion 2 debuted at CES 2026 in Las Vegas, with live walking, boxing,...',
          description: "",
          section: "News",},{id: "news-minimotion-went-on-stage-at-vingroup-s-33rd-anniversary-flips-fall-recovery-and-balance-under-load",
          title: 'MiniMotion went on stage at Vingroup’s 33rd anniversary: flips, fall recovery, and balance...',
          description: "",
          section: "News",},{id: "news-x-bfm-is-under-review-at-icra",
          title: 'X-BFM is under review at ICRA.',
          description: "",
          section: "News",},{id: "news-robotics-engineer-at-vinmotion-inc-us",
          title: 'Robotics Engineer at VinMotion Inc. (US).',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-at-humanoids-2026-aggressive-standing-up-across-diverse-terrains-and-ukemi-safefall",
          title: 'Two papers were accepted at Humanoids 2026: aggressive standing-up across diverse terrains and...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-aescte-q1",
          title: 'Paper accepted at AESCTE (Q1).',
          description: "",
          section: "News",},{id: "projects-introduction-to-reinforcement-learning-cornell",
          title: 'Introduction to Reinforcement Learning (Cornell)',
          description: "study and implement classic Reinforcement Learning algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Class_I2RLCornell/";
            },},{id: "projects-introduction-to-robotics-princeton",
          title: 'Introduction to Robotics (Princeton)',
          description: "study and implement classic Reinforcement Learning algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Class_I2Robotics/";
            },},{id: "projects-optimal-control-and-reinforcement-learning-cmu",
          title: 'Optimal Control and Reinforcement Learning (CMU)',
          description: "intelligent control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Class_optColCMU/";
            },},{id: "projects-embedded-ai",
          title: 'Embedded AI',
          description: "Embedded AI from technology to reality",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EmbeddedAI/";
            },},{id: "projects-citomimic",
          title: 'CitoMimic',
          description: "Trajectory optimization with RL motion tracking on the Unitree G1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/citomimic/";
            },},{id: "projects-iterative-dhocbf",
          title: 'iterative DHOCBF',
          description: "iterative Discrete-time High-order Control Barrier Function (Julia Package)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iHOCBF/";
            },},{id: "projects-instanttrack",
          title: 'InstantTrack',
          description: "Whole-body motion tracking for the Unitree G1 in under 3 minutes on one GPU. Open source.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/instanttrack/";
            },},{id: "projects-inverse-rl-via-output-feedback",
          title: 'Inverse RL via output feedback',
          description: "Preprint. Model-based and off-policy inverse RL for zero-sum games from output data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/inverse-rl-output/";
            },},{id: "projects-vinmotion-minimotion",
          title: 'VinMotion MiniMotion',
          description: "Compact humanoid for flips, fall recovery, climbing, and balance under load.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minimotion/";
            },},{id: "projects-vinmotion-motion-1",
          title: 'VinMotion Motion 1',
          description: "Synchronized humanoid performance for the public, including the A80 national celebrations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motion-1/";
            },},{id: "projects-vinmotion-motion-2",
          title: 'VinMotion Motion 2',
          description: "Global debut at CES 2026. Walking, boxing, and dancing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motion-2/";
            },},{id: "projects-pickup-with-trajectory-optimization",
          title: 'Pickup with trajectory optimization',
          description: "Trajectory optimization for picking up an object.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pickup-momentum/";
            },},{id: "projects-aggressive-standing-up",
          title: 'Aggressive standing-up',
          description: "Accepted at Humanoids. Optimized get-up maneuvers for humanoids on diverse terrain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/standing-up/";
            },},{id: "projects-ukemi-safefall",
          title: 'Ukemi-SafeFall',
          description: "Accepted at Humanoids. Ukemi-inspired falling and recovery.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ukemi-safefall/";
            },},{id: "projects-x-bfm",
          title: 'X-BFM',
          description: "Under review at ICRA. A behavioral foundation model for extreme humanoid control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/x-bfm/";
            },},{id: "projects-zero-shot-lqr",
          title: 'Zero-shot LQR',
          description: "Preprint. One reward-free dataset, then any linear-quadratic task in closed form.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zeroshot-lqr/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6F%71%75%61%6E%67%68%75%79%32%32%30%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Huy-Quang-Dao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/quang-huy-đào-395a36291", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4geZK80AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
