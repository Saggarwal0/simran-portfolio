import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('simran-portfolio');

  currentScreen = signal('home');

  openProjects() {
    this.currentScreen.set('projects');
  }

  openExperience() {
    this.currentScreen.set('experience');
  }


  // 🔴🔴🔴 PASTE THE NEW EXPERIENCE CODE RIGHT HERE 🔴🔴🔴

  selectedExperience = signal(0);

  experiences = [

    {
      number: '01',
      title: 'Software Engineering Intern',
      company: 'OpenStack Manila Project',
      location: 'Remote',
      dates: 'JAN 2026 — APR 2026',

      contributions: [
        'Contributed to the OpenStack Manila open-source project through a Valencia College software engineering internship while working with Red Hat engineers.',

        'Worked directly within an existing Python codebase, learning how to navigate and modify a large production-level open-source project.',

        'Worked on API and share-type functionality, including validation, extra specifications, exception handling, and schema-related changes.',

        'Reproduced and troubleshot issues within a Linux and OpenStack development environment before modifying source code.',

        'Used Git throughout development to manage source-code changes and work within an established collaborative development workflow.',

        'Ran tox, pre-commit, PEP8, and project-specific automated checks to validate code and identify problems before review.',

        'Diagnosed and corrected Python issues involving indentation, imports, syntax, formatting, and project code-quality requirements.',

        'Worked through technical feedback with Red Hat engineers, gaining hands-on experience with open-source code review, debugging, and collaborative software development.'
      ],

      skills: [
        'Python',
        'Linux',
        'Git',
        'OpenStack',
        'WSL' ,
        'VirtualBox' ,
        'Pycharm' ,
        'API Development',
        'Debugging',
        'Tox',
        'Pre-commit',
        'PEP8',
        'Code Review',
        'Open-Source Development'
      ]
    },

   {
    number: '02',
    title: 'Cyber Hero Intern',
    company: 'ThreatLocker',
    location: 'Orlando, FL',
    dates: 'FEB 2026 — MAY 2026',

    contributions: [
        'Built and configured virtualized lab environments across Windows, macOS, and Linux to reproduce customer issues and test software behavior.',

        'Performed issue replication and troubleshooting to determine whether reported behavior was caused by configuration, environment, or a potential software defect.',

        'Identified reproducible software issues and escalated confirmed bugs to Infrastructure or Development teams for further investigation.',

        'Handled support tickets and worked directly with customers to diagnose and resolve issues involving ThreatLocker software across multiple operating systems.',

        'Provided real-time customer support through LiveChat, investigating technical problems and guiding customers through troubleshooting and resolution steps.',

        'Worked with Active Directory integrations and role-based access controls to support secure user and environment configurations.',

        'Diagnosed connectivity and system issues using structured troubleshooting across endpoints and network layers.',

        'Documented troubleshooting findings, reproduction steps, and technical issues to support escalation and resolution across customer environments.'
    ],

    skills: [
        'Windows',
        'macOS',
        'Linux',
        'Windows Server',
        'Virtualization',
        'Active Directory',
        'RBAC',
        'Software Troubleshooting',
        'Bug Replication',
        'Technical Support',
        'Ticket Management',
        'LiveChat',
        'Networking',
        'OSI Model',
        'Issue Escalation',
        'Cybersecurity'
    ]
},

    {
    number: '03',
    title: 'Application Request Engineer',
    company: 'ThreatLocker',
    location: 'Orlando, FL',
    dates: 'MAY 2026 — PRESENT',

    contributions: [
        'Analyze application requests and determine whether software should be approved, denied, or escalated based on customer-defined security policies and environment requirements.',

        'Investigate potentially malicious or suspicious applications and activity, escalating security concerns and contacting customers when additional verification or action is required.',

        'Review application files, behavior, and available identifiers to determine whether requests align with expected software activity and customer approval guidelines.',

        'Investigate blocked or denied applications to determine whether activity is expected, requires approval, or indicates a potential security concern.',

        'Identify missing application files and changes between software versions or updates that can affect existing built-in application definitions and approval behavior.',

        'Reproduce and troubleshoot application behavior in controlled environments across Windows, macOS, and Linux when additional investigation is required.',

        'Escalate complex application, security, or software behavior issues to appropriate technical teams with findings and supporting technical information.',

        'Maintain technical documentation and application information used to support consistent and secure application-control decisions.'
    ],

    skills: [
        'Application Control',
        'Security Analysis',
        'Threat Analysis',
        'Malware Analysis',
        'Application Behavior Analysis',
        'File Analysis',
        'Windows',
        'macOS',
        'Linux',
        'Troubleshooting',
        'Incident Triage',
        'Policy Enforcement',
        'Issue Escalation',
        'Technical Documentation',
        'Customer Communication'
    ]
}

  ];

  selectExperience(index: number) {
    this.selectedExperience.set(index);
  }

  // 🔴🔴🔴 END OF NEW EXPERIENCE CODE 🔴🔴🔴


  goHome() {
    this.currentScreen.set('home');
  }

}