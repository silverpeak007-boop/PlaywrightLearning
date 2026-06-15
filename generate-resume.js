const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream('C:/Users/R karthick/Downloads/rKarthick-resume-updated.pdf'));

const W = 495; // usable width

// ── Helper functions ──────────────────────────────────────────────────────────
function sectionHeader(title) {
  doc.moveDown(0.5)
     .fontSize(11).fillColor('#1a1a1a').font('Helvetica-Bold').text(title.toUpperCase())
     .moveDown(0.1)
     .moveTo(50, doc.y).lineTo(50 + W, doc.y).lineWidth(1).strokeColor('#333333').stroke()
     .moveDown(0.3);
}

function bullet(text) {
  doc.fontSize(9.5).fillColor('#1a1a1a').font('Helvetica')
     .text(`• ${text}`, { indent: 10, align: 'justify' })
     .moveDown(0.15);
}

function competency(label, value) {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#1a1a1a').text(label + '  ', { continued: true })
     .font('Helvetica').text(value, { align: 'justify' })
     .moveDown(0.2);
}

// ── HEADER ────────────────────────────────────────────────────────────────────
doc.fontSize(20).font('Helvetica-Bold').fillColor('#1a1a1a').text('R KARTHICK', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(9.5).font('Helvetica').fillColor('#333333')
   .text('Senior Testing Professional | AI-Driven Quality Engineering Leader | Cloud & Process Transformation Specialist', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(9).fillColor('#555555')
   .text('Chennai, Tamil Nadu, India  |  +91-9600065933  |  silverpeak007@gmail.com  |  linkedin.com/in/r-karthick-152aa8206', { align: 'center' });

// ── EXECUTIVE PROFILE ─────────────────────────────────────────────────────────
sectionHeader('Executive Profile');
doc.fontSize(9.5).font('Helvetica').fillColor('#1a1a1a')
   .text('Dynamic and highly accomplished Software Testing Professional with 5+ years of expertise in AI-Driven Quality Engineering, enterprise-level testing operations, advanced workflow optimization, Linux environments, and AWS cloud technology fundamentals. Proven success in leading complex testing ecosystems, driving automation transformation, mentoring large teams, and implementing innovative AI-assisted solutions that significantly improved productivity, release quality, operational efficiency, and testing scalability.', { align: 'justify' });

// ── CORE COMPETENCIES ─────────────────────────────────────────────────────────
sectionHeader('Core Competencies');

competency('AI-Driven Quality Engineering', 'AI-Driven Quality Engineering, Intelligent Test Optimization, Enterprise Validation, Release Governance, Risk-Based Testing, Quality Metrics Management');
competency('Advanced Testing Expertise', 'Manual Testing, Exploratory Testing, System Testing, Middleware Testing, Stability Testing, Performance Testing, Sanity Testing, Functional Testing, End-to-End Testing, Stress Testing, Power Testing, Multimodal Testing, User Acceptance Testing, Web Testing, AppFramework Testing, Test Automation');
competency('Test Automation', 'Playwright with TypeScript – End-to-End Browser Automation, Test Scripting, Headed & Headless Execution, Cross-Browser Testing (Chromium, Firefox, WebKit), Playwright MCP Integration');
competency('Test Design & Architecture', 'Complex Test Case Creation, Enterprise Test Planning, Scalable Test Strategy Design, Validation Architecture, Enterprise Test Suite Management');
competency('Cloud & Infrastructure', 'AWS Cloud Fundamentals, EC2, S3, VPC, IAM, RDS, CloudWatch, AMI, Instance Types, Server Creation, Subnet Configuration, Gateway Concepts, CI/CD Fundamentals, IaaS, PaaS, SaaS');
competency('Linux & Technical Expertise', '5+ Years Linux Environment Experience, Linux Commands, Shell-based Operations, JIRA, TestRail, Amazon QuickSuite, Dashboard Development');
competency('AI & Automation Innovation', 'Kiro AI, AI Prompt Engineering, AI Dashboards, AI-Assisted Bug Triaging, Workflow Automation, Productivity Optimization');
competency('Leadership & Agile Governance', 'Daily Scrum Leadership, Stakeholder Coordination, Agile Delivery Management, Release Ownership, Team Mentorship, Cross-functional Collaboration');

// ── PROFESSIONAL EXPERIENCE ───────────────────────────────────────────────────
sectionHeader('Professional Experience');

doc.fontSize(10.5).font('Helvetica-Bold').fillColor('#1a1a1a')
   .text('Amazon  |  Senior Testing Associate / Software Testing Professional');
doc.fontSize(9.5).font('Helvetica').fillColor('#555555')
   .text('Chennai, Tamil Nadu  |  2021 – 2026');
doc.moveDown(0.3);

const bullets = [
  'Played a critical leadership role in scaling a highly complex enterprise-level testing project from an initial 3-member setup to a large operational ecosystem consisting of nearly 200 professionals.',
  'Led multiple high-impact testing initiatives involving AI-driven validation workflows, Manual Testing, Exploratory Testing, Middleware Validation, Performance Testing, Audio Testing, and System-Level Validation.',
  'Possess extensive expertise in creating highly complex enterprise-grade test plans, scalable testing strategies, and advanced end-to-end validation scenarios for mission-critical environments.',
  'Successfully designed, reviewed, optimized, and maintained 1500+ advanced test cases across System Testing, Stability Testing, Graphics Testing, Input Manager Testing, Performance Testing, Logging Testing, Power Testing, AppSwitch Testing, Stability Long Run Testing, App Compact Testing, Audio Testing, and App Framework Testing components.',
  'Extensive hands-on experience working in Linux environments for more than 5 years including command-line operations, environment validation, troubleshooting activities, and workflow execution support.',
  'Possess strong foundational knowledge in AWS cloud technologies including EC2, S3, VPC, IAM, RDS, CloudWatch, AMI, Instance Types, Server Provisioning, Subnet Configuration, Gateway Concepts, and CI/CD fundamentals.',
  'Hands-on experience with Playwright and TypeScript for end-to-end browser automation, including writing, executing, and maintaining automated test suites across Chromium, Firefox, and WebKit browsers.',
  'Conducted daily Scrum and Agile coordination meetings with team members to drive execution alignment, issue resolution, and delivery efficiency.',
  'Collaborated regularly with QA Engineers, QA Managers, Developers, and leadership teams to ensure smooth project execution and release readiness.',
  'Took complete ownership of daily testing deliverables by allocating tasks, tracking execution progress, and ensuring timely completion of critical milestones.',
  'Successfully coordinated and managed team deliverables in fast-paced Agile environments while maintaining high execution quality and accountability.',
  'Acted as a primary ownership driver for release sign-off activities and quality validation processes across multiple releases.',
  'Successfully owned and signed off 80+ releases without delays while maintaining strong quality standards and stakeholder confidence.',
  'Developed and implemented 20+ AI-powered dashboards, automation utilities, and productivity-enhancing tools for workflow optimization.',
];

bullets.forEach(b => bullet(b));

// ── KEY ACHIEVEMENTS ──────────────────────────────────────────────────────────
sectionHeader('Key Achievements');
bullet('Received 120+ Phone Tool Awards and multiple Star Performer recognitions for exceptional innovation, ownership, operational excellence, and delivery impact.');
bullet('Awarded \'Star of the Month\' during Amazon RNR Awards Ceremony – Q1 2023 for exemplary performance and high-impact quality contributions.');
bullet('Awarded \'Star of the Month\' during Amazon RNR Awards Ceremony – Q2 2022 for exemplary performance, ownership excellence, and outstanding delivery execution.');
bullet('Winner of 2024 Amazon Ideate Competition among 400+ participants by proposing 32 innovative high-impact OPEX and process transformation ideas.');
bullet('Received formal appreciation and winner certification directly from Project Director during Amazon 2024 Ideate Event for exceptional innovation contribution.');
bullet('Recognized as one of the top innovation contributors for delivering AI-powered process transformation solutions and enterprise workflow automation initiatives.');

// ── CERTIFICATIONS ────────────────────────────────────────────────────────────
sectionHeader('Certifications');
bullet('AWS Cloud Practitioner Essentials – AWS Training & Certification');
bullet('AWS Technical Essentials – AWS Training & Certification');
bullet('AWS Billing and Cost Management – AWS Training & Certification');
bullet('Fundamentals of Machine Learning and Artificial Intelligence – AWS Training & Certification');

// ── EDUCATION ─────────────────────────────────────────────────────────────────
sectionHeader('Education');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#1a1a1a').text('MBA – Systems Management');
doc.font('Helvetica').fillColor('#555555').text('University of Madras, Chennai  |  2022 – 2023');
doc.moveDown(0.3);
doc.font('Helvetica-Bold').fillColor('#1a1a1a').text('B.Tech – Mechanical Engineering');
doc.font('Helvetica').fillColor('#555555').text('Vel Tech University, Chennai  |  2014 – 2018');

doc.end();
console.log('Resume generated: rKarthick-resume-updated.pdf');
