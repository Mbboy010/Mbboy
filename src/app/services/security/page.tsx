"use client";

import React from "react";
import ServiceLayout from "../../../components/services/ServiceLayout";
import { ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  return (
    <ServiceLayout
      title="Cybersecurity & Penetration Testing"
      subtitle="Secure • Compliant • Resilient"
      description="Protect your business from threats before they happen. I perform rigorous ethical hacking, vulnerability assessments, and security audits to find weak points in your web apps, networks, and cloud infrastructure."
      icon={ShieldCheck}
      color="text-red-500"
      gradient="from-red-600 to-orange-600"
      features={[
        { 
          title: "Web App Penetration Testing", 
          desc: "Simulating real-world attacks (SQLi, XSS, CSRF) to find and patch vulnerabilities in your application logic before hackers exploit them." 
        },
        { 
          title: "Source Code Review", 
          desc: "Deep static analysis (SAST) of your codebase to identify insecure coding practices, hardcoded secrets, and logic flaws." 
        },
        { 
          title: "Cloud Security Audit", 
          desc: "Reviewing AWS/Azure/GCP configurations to prevent data leaks, ensure proper IAM permissions, and secure storage buckets." 
        },
        { 
          title: "Compliance Readiness", 
          desc: "Preparing your infrastructure and policies for SOC2, HIPAA, or ISO 27001 compliance standards." 
        },
        { 
          title: "Network Security", 
          desc: "Analyzing internal and external networks for open ports, weak encryption, and unauthorized access points." 
        },
        { 
          title: "Social Engineering Tests", 
          desc: "Simulated phishing campaigns to test employee awareness and improve organizational security culture." 
        }
      ]}
      techStack={[
        "Burp Suite", 
        "Metasploit", 
        "Nmap", 
        "Wireshark", 
        "OWASP ZAP", 
        "Python Scripting", 
        "Kali Linux",
        "Nessus"
      ]}
    />
  );
}
