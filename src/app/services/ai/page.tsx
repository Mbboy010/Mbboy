"use client";

import React from "react";
import ServiceLayout from "../../../components/services/ServiceLayout";
import { Cpu } from "lucide-react";

export default function AIPage() {
  return (
    <ServiceLayout
      title="AI Integration & Automation"
      subtitle="Smart • Efficient • Autonomous"
      description="Leverage the power of Artificial Intelligence to automate boring tasks and create smarter products. I build custom AI agents, chatbots, and data processing pipelines that save you hours of work every day."
      icon={Cpu}
      color="text-purple-500"
      gradient="from-purple-600 to-indigo-600"
      features={[
        { 
          title: "Custom LLM Chatbots", 
          desc: "Training and fine-tuning GPT models on your specific business data for accurate, context-aware customer support agents." 
        },
        { 
          title: "RAG Implementation", 
          desc: "Retrieval-Augmented Generation systems that allow AI to 'read' your internal PDF/Docs and answer questions accurately." 
        },
        { 
          title: "Business Automation", 
          desc: "Connecting your apps (Slack, Email, CRM) with AI agents to automate complex workflows using n8n or Python." 
        },
        { 
          title: "Data Analysis Agents", 
          desc: "Building AI agents that can analyze spreadsheets, databases, and logs to provide actionable business insights automatically." 
        },
        { 
          title: "Voice AI Agents", 
          desc: "Developing voice-activated assistants for customer service hotlines or interactive app experiences." 
        },
        { 
          title: "AI Image Generation", 
          desc: "Integrating Stable Diffusion or Midjourney APIs for dynamic asset generation within your applications." 
        }
      ]}
      techStack={[
        "OpenAI API", 
        "LangChain", 
        "Pinecone (Vector DB)", 
        "Python", 
        "TensorFlow", 
        "n8n", 
        "Hugging Face",
        "LlamaIndex"
      ]}
    />
  );
}
