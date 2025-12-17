import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    
    <div className="container">
      <p>Deployed via CodePipeline 🚀</p>
      <h1 className="header-name">Manoj Chausali</h1>
      <p className="header-tagline">Cybersecurity | AWS | DevOps</p>

      {/* --- About Me --- */}
      <h2 className="section-header">About Me</h2>
      <p className="paragraph">
        Electrical Technical Officer with experience in Operational Technology
        (OT), Industrial Control Systems (ICS), and Cloud Security. Currently
        building secure cloud infrastructure using AWS.
      </p>

      {/* --- Skills --- */}
      <h2 className="section-header">Skills</h2>
      <ul className="list">
        <li className="list-item">
          AWS (S3, CloudFront, IAM, CI/CD, VPC)
        </li>
        <li className="list-item">DevOps, Automation & Infrastructure as Code (IaC)</li>
        <li className="list-item">Cybersecurity & OT/ICS Security</li>
      </ul>

      {/* --- Projects --- */}
      <h2 className="section-header">Projects</h2>
      {/* We can use a combination of classes for specific styling */}
      <p className="paragraph project-tagline">
        Secure Static Portfolio with CI/CD on AWS (S3, CloudFront, Lambda)
      </p>

      {/* --- Contact --- */}
      <h2 className="section-header">Contact</h2>
      <p className="paragraph">
        Email:{" "}
        <a
          href="mailto:your.email@example.com"
          className="contact-link" // Added a class for the link
        >
          your.email@example.com
        </a>
      </p>
    </div>
  );
}

export default App;