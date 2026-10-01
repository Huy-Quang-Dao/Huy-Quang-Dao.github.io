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
          description: "Humanoid systems at VinMotion, manuscripts under review, and earlier research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-vinmotion-as-a-robotics-engineer",
          title: 'Joined VinMotion as a Robotics Engineer.',
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
          section: "News",},{id: "news-two-manuscripts-are-under-review-aggressive-standing-up-at-humanoids-and-x-bfm-at-icra",
          title: 'Two manuscripts are under review: aggressive standing-up at Humanoids, and X-BFM at ICRA....',
          description: "",
          section: "News",},{id: "news-robotics-engineer-at-vinmotion-inc-us",
          title: 'Robotics Engineer at VinMotion Inc. (US).',
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
          description: "Under review at Humanoids. Optimized get-up maneuvers for humanoids on diverse terrain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/standing-up/";
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
