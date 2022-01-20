// PERSONAL INFO
const personInfo = {
  name: "Kevin J Mosley",
  address: "San Diego, CA",
  email: "contact@kevinjmosley.com",
  jobTitle: "Father &  U.S. Navy Veteran",
  personalStatement:
    "After 5 years in the U.S. Navy, I now build modern Web Applications with mostly React & Node.js",
  // Recommended photo size 1920 × 1053
  backgroundImage:
    "https://images.unsplash.com/photo-1632226901385-e07fe19a345e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
};

// SOCIAL LINKS
const socialLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/kevin.mosley.399/",
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/code_then?lang=en",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/militarythencode/",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kevinjmosley/",
  },
];

// ABOUT
const about = {
  text: "I use my attention to detail and complex problem solving skills to build robust web applications. Apart from being a web developer, the one thing I enjoy the most is being a father. Becoming a father has been the best thing that happened to me and is the reason I give 110% no matter what task is at hand.  ",
  img: "https://i.imgur.com/xUuc3Fk.png",
};

// RESUME
const resume = {
  text: "I can come in and contribute enormous value to the team from day one!.",
  education1: {
    degree: "Software Engineering Immersive",
    timeIn: "2020 – 2020",
    school: "General Assembly, Remote",
    text: "12 weeks of HTML, CSS, JavaScript,JQuery, React, Express, MongoDB, Python, PostgreSQL and Git.",
  },
  education2: {
    degree: "Bachelor of Business Administration - BBA",
    timeIn: "2017 – 2019",
    school: "American Public University, Charlestown, WV",
    text: "3.5 GPA",
  },
  education3: {
    degree: "Associate of Science - Accounting with Honors",
    timeIn: "2016 – 2017",
    school: "American Public University, Charlestown, WV",
    text: "3.9 GPA",
  },
  job1: {
    position: "Shopify/Full Stack Web Developer",
    timeIn: "2018 - Present",
    employer: "Various Clients",
    text: {
      bullet1:
        "Built and maintained e-commerce websites ranging from food delivery to neighborhood flower shops.",
      bullet2:
        "I create custom themes utilizing Shopify's Theme kit to generate a boilerplate that I can customize to the merchant's design needs.",
      bullet3:
        "I create custom Node.js Shopify applications utilizing the Shopify CLI to add certain features to existing and custom themes such as customer reviews or Facebook Messenger widget integrations.",
      bullet4: "",
    },
  },
  job2: {
    position: "Software/ Solution Engineer",
    timeIn: "2021 - 2021",
    employer: "Nucleos Inc.",
    text: {
      bullet1:
        "Software Engineer and Sales Advisor for the development of a premier educational platform for incarcerated learners. I speak to agencies about expanding their online education platforms to help ensure job opportunities and success for those who are reentering society.",
      bullet2:
        "I built React front-end components that rendered data from an Express/PostgreSQL backend server to track our incarcerated learner's course progress, grades, and much more in order to generate weekly, monthly, and quarterly pdf reports.",
      bullet3:
        "Within 6 months of being on the team, I was able to help secure a contract to expand software access to 1300 inmates from 10.",
      bullet4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },
  },
  job3: {
    position: "Administrator",
    timeIn: "2015 - 2020",
    employer: "U.S. Navy",
    text: {
      bullet1: "Managed 15 million dollar budget with zero discrepancies",
      bullet2:
        "Managed payroll, transactions, invoicing, and budgeting to decrease financial inconsistencies",
      bullet3:
        "Improved information collection and record-keeping accuracy by creating, updating, and managing customer communications",
      bullet4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },
  },
  job4: {
    position: "GRAPHIC DESIGN SPECIALIST",
    timeIn: "2017 - 2018",
    employer: "Stepping Stone Advertising, New York, NY",
    text: {
      bullet1:
        "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
      bullet2:
        "Managed up to 5 projects or tasks at a given time while under pressure",
      bullet3:
        "Recommended and consulted with clients on the most appropriate graphic design",
      bullet4:
        "Created 4+ design presentations and proposals a month for clients and account managers",
    },
  },
};

// SKILLS
const skills = {
  text: "I have worked with almost every type of web development project with a primary focus on building robust e-commerce experiences with Shopify.",
  skillSet: [
    {
      name: "HTML",
      percent: 100,
    },
    {
      name: "CSS",
      percent: 100,
    },
    {
      name: "JAVASCRIPT",
      percent: 95,
    },
    {
      name: "REACT",
      percent: 90,
    },
    {
      name: "NODE",
      percent: 90,
    },
    {
      name: "SHOPIFY",
      percent: 100,
    },
  ],
};

const nameEl = Array.from(document.querySelectorAll("#name"));
const addressEl = Array.from(document.querySelectorAll("#address"));
const emailEl = Array.from(document.querySelectorAll("#email"));
const jobTitleEl = Array.from(document.querySelectorAll("#jobTitle"));
const personalStatementEl = Array.from(
  document.querySelectorAll("#personalStatement")
);
const socialLinksEl = Array.from(document.querySelectorAll(".social-links a"));
const heroEl = Array.from(document.querySelectorAll("#hero"));
const aboutEl = Array.from(document.querySelectorAll("#aboutText"));
const aboutPictureEl = Array.from(document.querySelectorAll("#aboutPic"));
const resumeTextEl = Array.from(document.querySelectorAll("#resumeText"));
const resumeEd1DegreeEl = Array.from(
  document.querySelectorAll("#resumeEd1Degree")
);
const resumeEd1TimeInEl = Array.from(
  document.querySelectorAll("#resumeEd1TimeIn")
);
const resumeEd1SchoolEl = Array.from(
  document.querySelectorAll("#resumeEd1School")
);
const resumeEd1TextEl = Array.from(document.querySelectorAll("#resumeEd1Text"));
const resumeEd2DegreeEl = Array.from(
  document.querySelectorAll("#resumeEd2Degree")
);
const resumeEd2TimeInEl = Array.from(
  document.querySelectorAll("#resumeEd2TimeIn")
);
const resumeEd2SchoolEl = Array.from(
  document.querySelectorAll("#resumeEd2School")
);
const resumeEd2TextEl = Array.from(document.querySelectorAll("#resumeEd2Text"));
const resumeEd3DegreeEl = Array.from(
  document.querySelectorAll("#resumeEd3Degree")
);
const resumeEd3TimeInEl = Array.from(
  document.querySelectorAll("#resumeEd3TimeIn")
);
const resumeEd3SchoolEl = Array.from(
  document.querySelectorAll("#resumeEd3School")
);
const resumeEd3TextEl = Array.from(document.querySelectorAll("#resumeEd3Text"));

const job1PositionEl = Array.from(document.querySelectorAll("#job1Position"));
const job1TimeInEl = Array.from(document.querySelectorAll("#job1TimeIn"));
const job1EmployerEl = Array.from(document.querySelectorAll("#job1Employer"));
const job1Bullet1El = Array.from(document.querySelectorAll("#job1Bullet1"));
const job1Bullet2El = Array.from(document.querySelectorAll("#job1Bullet2"));
const job1Bullet3El = Array.from(document.querySelectorAll("#job1Bullet3"));
const job1Bullet4El = Array.from(document.querySelectorAll("#job1Bullet4"));
const job2PositionEl = Array.from(document.querySelectorAll("#job2Position"));
const job2TimeInEl = Array.from(document.querySelectorAll("#job2TimeIn"));
const job2EmployerEl = Array.from(document.querySelectorAll("#job2Employer"));
const job2Bullet1El = Array.from(document.querySelectorAll("#job2Bullet1"));
const job2Bullet2El = Array.from(document.querySelectorAll("#job2Bullet2"));
const job2Bullet3El = Array.from(document.querySelectorAll("#job2Bullet3"));
const job2Bullet4El = Array.from(document.querySelectorAll("#job2Bullet4"));
const job3PositionEl = Array.from(document.querySelectorAll("#job3Position"));
const job3TimeInEl = Array.from(document.querySelectorAll("#job3TimeIn"));
const job3EmployerEl = Array.from(document.querySelectorAll("#job3Employer"));
const job3Bullet1El = Array.from(document.querySelectorAll("#job3Bullet1"));
const job3Bullet2El = Array.from(document.querySelectorAll("#job3Bullet2"));
const job3Bullet3El = Array.from(document.querySelectorAll("#job3Bullet3"));
const job3Bullet4El = Array.from(document.querySelectorAll("#job3Bullet4"));
const job4PositionEl = Array.from(document.querySelectorAll("#job4Position"));
const job4TimeInEl = Array.from(document.querySelectorAll("#job4TimeIn"));
const job4EmployerEl = Array.from(document.querySelectorAll("#job4Employer"));
const job4Bullet1El = Array.from(document.querySelectorAll("#job4Bullet1"));
const job4Bullet2El = Array.from(document.querySelectorAll("#job4Bullet2"));
const job4Bullet3El = Array.from(document.querySelectorAll("#job4Bullet3"));
const job4Bullet4El = Array.from(document.querySelectorAll("#job4Bullet4"));
const skillsTextEl = Array.from(document.querySelectorAll("#skillsText"));
const skillsetEl = Array.from(document.querySelectorAll(".progress"));

const loopElementsAndReplaceText = (elArr, string) =>
  elArr.forEach((el) => {
    if (el.nodeName === "INPUT") return;
    el.innerText = string;
  });
const loopElementsAndReplaceLinks = (elArr) =>
  elArr.forEach((el) => {
    socialLinks.map(({ name, url }) => {
      if (el.className === name && url === "") return el.remove();
      if (el.className === name) return (el.href = url);
    });
  });
const loopElementsAndReplacePicSrc = (elArr, imgUrl) => {
  elArr.forEach((el) => {
    el.src = imgUrl;
  });
};
const loopElementsAndReplaceSkills = (elArr) =>
  elArr.forEach((el, elIdx) => {
    skills.skillSet.map(({ name, percent }, idx) => {
      if (elIdx === idx) {
        if (name === "") return el.remove();
        el.innerHTML = `
        <span class="skill">${name}<i class="val">${percent}</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="${percent}"></div>
        </div>
      `;
      }
    });
  });

window.addEventListener("DOMContentLoaded", (e) => {
  heroEl.forEach((el) => {
    el.style.background = `url("${personInfo.backgroundImage}") top right no-repeat`;
  });
  loopElementsAndReplaceLinks(socialLinksEl);
  loopElementsAndReplaceText(nameEl, personInfo.name);
  loopElementsAndReplaceText(addressEl, personInfo.address);
  loopElementsAndReplaceText(emailEl, personInfo.email);
  loopElementsAndReplaceText(jobTitleEl, personInfo.jobTitle);
  loopElementsAndReplaceText(personalStatementEl, personInfo.personalStatement);
  loopElementsAndReplaceText(aboutEl, about.text);
  loopElementsAndReplacePicSrc(aboutPictureEl, about.img);
  loopElementsAndReplaceText(resumeTextEl, resume.text);
  loopElementsAndReplaceText(resumeEd1DegreeEl, resume.education1.degree);
  loopElementsAndReplaceText(resumeEd1TimeInEl, resume.education1.timeIn);
  loopElementsAndReplaceText(resumeEd1SchoolEl, resume.education1.school);
  loopElementsAndReplaceText(resumeEd1TextEl, resume.education1.text);
  loopElementsAndReplaceText(resumeEd2DegreeEl, resume.education2.degree);
  loopElementsAndReplaceText(resumeEd2TimeInEl, resume.education2.timeIn);
  loopElementsAndReplaceText(resumeEd2SchoolEl, resume.education2.school);
  loopElementsAndReplaceText(resumeEd2TextEl, resume.education2.text);
  loopElementsAndReplaceText(resumeEd3DegreeEl, resume.education3.degree);
  loopElementsAndReplaceText(resumeEd3TimeInEl, resume.education3.timeIn);
  loopElementsAndReplaceText(resumeEd3SchoolEl, resume.education3.school);
  loopElementsAndReplaceText(resumeEd3TextEl, resume.education3.text);
  loopElementsAndReplaceText(job1PositionEl, resume.job1.position);
  loopElementsAndReplaceText(job1TimeInEl, resume.job1.timeIn);
  loopElementsAndReplaceText(job1EmployerEl, resume.job1.employer);
  loopElementsAndReplaceText(job1Bullet1El, resume.job1.text.bullet1);
  loopElementsAndReplaceText(job1Bullet2El, resume.job1.text.bullet2);
  loopElementsAndReplaceText(job1Bullet3El, resume.job1.text.bullet3);
  loopElementsAndReplaceText(job1Bullet4El, resume.job1.text.bullet4);
  loopElementsAndReplaceText(job2PositionEl, resume.job2.position);
  loopElementsAndReplaceText(job2TimeInEl, resume.job2.timeIn);
  loopElementsAndReplaceText(job2EmployerEl, resume.job2.employer);
  loopElementsAndReplaceText(job2Bullet1El, resume.job2.text.bullet1);
  loopElementsAndReplaceText(job2Bullet2El, resume.job2.text.bullet2);
  loopElementsAndReplaceText(job2Bullet3El, resume.job2.text.bullet3);
  loopElementsAndReplaceText(job2Bullet4El, resume.job2.text.bullet4);
  loopElementsAndReplaceText(job3PositionEl, resume.job3.position);
  loopElementsAndReplaceText(job3TimeInEl, resume.job3.timeIn);
  loopElementsAndReplaceText(job3EmployerEl, resume.job3.employer);
  loopElementsAndReplaceText(job3Bullet1El, resume.job3.text.bullet1);
  loopElementsAndReplaceText(job3Bullet2El, resume.job3.text.bullet2);
  loopElementsAndReplaceText(job3Bullet3El, resume.job3.text.bullet3);
  loopElementsAndReplaceText(job3Bullet4El, resume.job3.text.bullet4);
  loopElementsAndReplaceText(job4PositionEl, resume.job4.position);
  loopElementsAndReplaceText(job4TimeInEl, resume.job4.timeIn);
  loopElementsAndReplaceText(job4EmployerEl, resume.job4.employer);
  loopElementsAndReplaceText(job4Bullet1El, resume.job4.text.bullet1);
  loopElementsAndReplaceText(job4Bullet2El, resume.job4.text.bullet2);
  loopElementsAndReplaceText(job4Bullet3El, resume.job4.text.bullet3);
  loopElementsAndReplaceText(job4Bullet4El, resume.job1.text.bullet4);
  loopElementsAndReplaceText(skillsTextEl, skills.text);
  loopElementsAndReplaceSkills(skillsetEl);
});
