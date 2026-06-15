const puppeteer = require('puppeteer');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9pt;
    color: #000;
    background: #fff;
    padding: 22pt 40pt 22pt 40pt;
    line-height: 1.3;
  }

  /* ── NAME ── */
  .name {
    font-size: 22pt;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5px;
    color: #1f3864;
    margin-bottom: 4pt;
  }

  .subtitle {
    font-size: 9pt;
    font-weight: bold;
    text-align: center;
    color: #000;
    margin-bottom: 2pt;
  }

  .contact {
    font-size: 9pt;
    color: #000;
    text-align: center;
    margin-bottom: 2pt;
  }

  .linkedin {
    font-size: 9pt;
    color: #000;
    text-align: center;
    margin-bottom: 8pt;
  }

  /* ── SECTION HEADER — navy filled bar with white text ── */
  .section-header {
    background-color: #1f3864;
    color: #ffffff;
    font-size: 9pt;
    font-weight: bold;
    text-transform: uppercase;
    padding: 3pt 6pt;
    margin-top: 8pt;
    margin-bottom: 4pt;
    letter-spacing: 0.5px;
  }

  /* ── BODY TEXT ── */
  .body-text {
    font-size: 9pt;
    color: #000;
    text-align: justify;
    margin-bottom: 4pt;
    line-height: 1.4;
  }

  /* ── COMPETENCY TABLE ── */
  .comp-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2pt;
    border: 1px solid #b8cce4;
  }
  .comp-table tr { border-bottom: 1px solid #b8cce4; }
  .comp-table tr:last-child { border-bottom: none; }
  .comp-table td {
    font-size: 9pt;
    color: #000;
    vertical-align: top;
    padding: 3pt 6pt;
    line-height: 1.4;
  }
  .comp-label {
    font-weight: bold;
    width: 148pt;
    border-right: 1px solid #b8cce4;
    background-color: #dce6f1;
    color: #000;
  }
  .comp-value {
    color: #000;
    background-color: #ffffff;
  }

  /* ── EXPERIENCE HEADER ── */
  .exp-company {
    font-size: 9pt;
    font-weight: bold;
    color: #000;
    margin-bottom: 1pt;
  }
  .exp-location {
    font-size: 9pt;
    color: #000;
    margin-bottom: 5pt;
  }

  /* ── BULLET LIST ── */
  .bullet-list {
    list-style: none;
    padding: 0;
    margin: 0 0 3pt 0;
  }
  .bullet-list li {
    font-size: 9pt;
    color: #000;
    padding-left: 12pt;
    position: relative;
    margin-bottom: 3pt;
    text-align: justify;
    line-height: 1.4;
  }
  .bullet-list li::before {
    content: '•';
    color: #000;
    position: absolute;
    left: 1pt;
  }

  /* ── EDUCATION ── */
  .edu-entry { margin-bottom: 4pt; }
  .edu-degree { font-size: 9pt; color: #000; }
  .edu-school { font-size: 9pt; color: #000; font-weight: bold; }
</style>
</head>
<body>

<!-- ═══ HEADER ═══ -->
<div class="name">R <span style="margin-left:3px">KARTHICK</span></div>
<div class="subtitle">Senior Testing Professional | AI-Driven Quality Engineering | Cloud &amp; Process Transformation Specialist</div>
<div class="contact">Chennai, Tamil Nadu, India | +91-9600065933 | silverpeak007@gmail.com</div>
<div class="linkedin">linkedin.com/in/r-karthick-152aa8206</div>

<!-- ═══ EXECUTIVE PROFILE ═══ -->
<div class="section-header">Executive Profile</div>
<div class="body-text">
Dynamic and highly accomplished Software Testing Professional with 5+ years of expertise in AI-Driven Quality Engineering, enterprise-level testing
operations, advanced workflow optimization, Linux environments, and AWS cloud technology fundamentals. Proven success in leading complex
testing ecosystems, driving automation transformation, mentoring large teams, and implementing innovative AI-assisted solutions that significantly
improved productivity, release quality, operational efficiency, and testing scalability.
</div>

<!-- ═══ CORE COMPETENCIES ═══ -->
<div class="section-header">Core Competencies</div>
<table class="comp-table">
  <tr>
    <td class="comp-label">AI-Driven Quality Engineering</td>
    <td class="comp-value">AI-Driven Quality Engineering, Intelligent Test Optimization, Enterprise Validation, Release Governance, Risk-Based Testing, Quality Metrics Management</td>
  </tr>
  <tr>
    <td class="comp-label">Advanced Testing Expertise</td>
    <td class="comp-value">Manual Testing, Exploratory Testing, System Testing, Middleware Testing, Stability Testing, Performance Testing, Sanity Testing, Functional Testing, End-to-End Testing, Stress Testing, Power Testing, Multimodal Testing, User Acceptance Testing, Web Testing, AppFramework Testing, Test Automation</td>
  </tr>
  <tr>
    <td class="comp-label">Programming Languages &amp; Test Automation</td>
    <td class="comp-value">TypeScript – Working knowledge in writing test scripts and automation workflows; Python – Foundational knowledge in scripting and utility development; Playwright with TypeScript – End-to-End Browser Automation, Cross-Browser Testing (Chromium, Firefox, WebKit), Headed &amp; Headless Execution, Test Script Development</td>
  </tr>
  <tr>
    <td class="comp-label">Test Design &amp; Architecture</td>
    <td class="comp-value">Complex Test Case Creation, Enterprise Test Planning, Scalable Test Strategy Design, Validation Architecture, Enterprise Test Suite Management</td>
  </tr>
  <tr>
    <td class="comp-label">Cloud &amp; Infrastructure</td>
    <td class="comp-value">AWS Cloud Fundamentals, EC2, S3, VPC, IAM, RDS, CloudWatch, AMI, Instance Types, Server Creation, Subnet Configuration, Gateway Concepts, CI/CD Fundamentals, IaaS, PaaS, SaaS</td>
  </tr>
  <tr>
    <td class="comp-label">Linux &amp; Technical Expertise</td>
    <td class="comp-value">5+ Years Linux Environment Experience, Linux Commands, Shell-based Operations, JIRA, TestRail, Amazon QuickSuite, Dashboard Development</td>
  </tr>
  <tr>
    <td class="comp-label">AI &amp; Automation Innovation</td>
    <td class="comp-value">Kiro AI, AI Prompt Engineering, AI Dashboards, AI-Assisted Bug Triaging, Workflow Automation, Productivity Optimization</td>
  </tr>
  <tr>
    <td class="comp-label">Leadership &amp; Agile Governance</td>
    <td class="comp-value">Daily Scrum Leadership, Stakeholder Coordination, Agile Delivery Management, Release Ownership, Team Mentorship, Cross-functional Collaboration</td>
  </tr>
</table>

<!-- ═══ PROFESSIONAL EXPERIENCE ═══ -->
<div class="section-header">Professional Experience</div>
<div class="exp-company">Amazon | Senior Testing Associate / Software Testing Professional</div>
<div class="exp-location">Chennai, Tamil Nadu | 2021 – 2026</div>
<ul class="bullet-list">
  <li>Played a critical leadership role in scaling a highly complex enterprise-level testing project from an initial 3-member setup to a large operational ecosystem consisting of nearly 200 professionals.</li>
  <li>Led multiple high-impact testing initiatives involving AI-driven validation workflows, Manual Testing, Exploratory Testing, Middleware Validation, Performance Testing, Audio Testing, and System-Level Validation.</li>
  <li>Possess extensive expertise in creating highly complex enterprise-grade test plans, scalable testing strategies, and advanced end-to-end validation scenarios for mission-critical environments.</li>
  <li>Successfully designed, reviewed, optimized, and maintained 1500+ advanced test cases across System Testing, Stability Testing, Graphics Testing, Input Manager Testing, Performance Testing, Logging Testing, Power Testing, AppSwitch Testing, Stability Long Run Testing, App Compact Testing, Audio Testing, and App Framework Testing components.</li>
  <li>Hands-on experience with Playwright and TypeScript for end-to-end browser automation — writing, executing, and maintaining automated test suites across Chromium, Firefox, and WebKit in headed and headless execution modes.</li>
  <li>Extensive hands-on experience working in Linux environments for more than 5 years including command-line operations, environment validation, troubleshooting activities, and workflow execution support.</li>
  <li>Possess strong foundational knowledge in AWS cloud technologies including EC2, S3, VPC, IAM, RDS, CloudWatch, AMI, Instance Types, Server Provisioning, Subnet Configuration, Gateway Concepts, and CI/CD fundamentals.</li>
  <li>Conducted daily Scrum and Agile coordination meetings with team members to drive execution alignment, issue resolution, and delivery efficiency.</li>
  <li>Collaborated regularly with QA Engineers, QA Managers, Developers, and leadership teams to ensure smooth project execution and release readiness.</li>
  <li>Took complete ownership of daily testing deliverables by allocating tasks, tracking execution progress, and ensuring timely completion of critical milestones.</li>
  <li>Successfully coordinated and managed team deliverables in fast-paced Agile environments while maintaining high execution quality and accountability.</li>
  <li>Acted as a primary ownership driver for release sign-off activities and quality validation processes across multiple releases.</li>
  <li>Successfully owned and signed off 80+ releases without delays while maintaining strong quality standards and stakeholder confidence.</li>
  <li>Developed and implemented 20+ AI-powered dashboards, automation utilities, and productivity-enhancing tools for workflow optimization.</li>
</ul>

<!-- ═══ KEY ACHIEVEMENTS ═══ -->
<div class="section-header">Key Achievements</div>
<ul class="bullet-list">
  <li>Received 120+ Phone Tool Awards and multiple Star Performer recognitions for exceptional innovation, ownership, operational excellence, and delivery impact.</li>
  <li>Awarded 'Star of the Month' during Amazon RNR Awards Ceremony – Q1 2023 for exemplary performance and high-impact quality contributions.</li>
  <li>Awarded 'Star of the Month' during Amazon RNR Awards Ceremony – Q2 2022 for exemplary performance, ownership excellence, and outstanding delivery execution.</li>
  <li>Winner of 2024 Amazon Ideate Competition among 400+ participants by proposing 32 innovative high-impact OPEX and process transformation ideas.</li>
  <li>Received formal appreciation and winner certification directly from Project Director during Amazon 2024 Ideate Event for exceptional innovation contribution.</li>
  <li>Recognized as one of the top innovation contributors for delivering AI-powered process transformation solutions and enterprise workflow automation initiatives.</li>
</ul>

<!-- ═══ CERTIFICATIONS ═══ -->
<div class="section-header">Certifications</div>
<ul class="bullet-list">
  <li>AWS Cloud Practitioner Essentials – AWS Training &amp; Certification</li>
  <li>AWS Technical Essentials – AWS Training &amp; Certification</li>
  <li>AWS Billing and Cost Management – AWS Training &amp; Certification</li>
  <li>Fundamentals of Machine Learning and Artificial Intelligence – AWS Training &amp; Certification</li>
</ul>

<!-- ═══ EDUCATION ═══ -->
<div class="section-header">Education</div>
<div class="edu-entry">
  <div class="edu-degree">MBA – Systems Management</div>
  <div class="edu-school">University of Madras, Chennai | 2022 – 2023</div>
</div>
<div class="edu-entry">
  <div class="edu-degree">B.Tech – Mechanical Engineering</div>
  <div class="edu-school">Vel Tech University, Chennai | 2014 – 2018</div>
</div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'C:/Users/R karthick/Downloads/rKarthick-resume-updated.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '40px', right: '0', bottom: '40px', left: '0' }
  });
  await browser.close();
  console.log('Done!');
})();
