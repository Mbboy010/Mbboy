"use client";

import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion"; // Import easeOut
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

const techStack = [
  { name: "React", Icon: FaReact, note: "Modern frontend & SPA" },
  { name: "Next.js", Icon: FaReact, note: "SSR / SSG & full-stack" },
  { name: "Node.js", Icon: FaNodeJs, note: "API & backend services" },
  { name: "Python", Icon: FaPython, note: "Scripting, automation & security tooling" },
  { name: "SQL / Databases", Icon: FaDatabase, note: "Data modeling & optimization" },
  { name: "Security", Icon: FaShieldAlt, note: "Vulnerability assessments & pentesting" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: easeOut }, // Fixed: use easeOut
  viewport: { once: false, amount: 0.25 },
});

export default function AboutCon() {
  return (
    <section className="relative py-20 min-h-screen bg-white dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <BackgroundGlow />

      <Container>
        {/* Hero / Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div {...fadeUp(0)} className="md:col-span-7">
            <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              I&apos;m <span className="text-purple-400">Musa Hakilu</span> — also known as{" "}
              <span className="font-mono text-sm text-gray-400">Mbboy</span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl text-lg leading-relaxed">
              I&apos;m a Cybersecurity Expert, Software &amp; AI Engineer and Full-Stack
              Developer. I combine secure engineering practices with modern product design
              to build scalable, maintainable, and user‑friendly systems. My work spans
              secure web apps, automation tools, penetration testing, and branding —
              turning ideas into robust digital products.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/works"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transition-transform"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block border border-purple-600 text-purple-600 dark:text-purple-300 px-6 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-[#1b0d2b] transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="5+" label="Years Experience" />
              <Stat number="150+" label="Projects" />
              <Stat number="90+" label="Happy Clients" />
              <Stat number="12" label="Companies / Brands" />
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.12)}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#111827] to-[#0b1220]">
              <Image
                src="/profile.png"
                alt="Musa Hakilu"
                fill
                sizes="(min-width: 768px) 320px, 240px"
                className="object-cover"
                priority
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/20 blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Two column: Bio + Skills */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bio */}
          <motion.div {...fadeUp(0.16)} className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">Professional Bio</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I started my journey as a developer and quickly found a passion for
              application security. Over the years I have helped businesses — from
              startups to established companies — build secure and performant web
              applications. I specialize in threat modeling, secure architecture,
              pentesting, and secure CI/CD pipelines. I also design clean product UIs
              and developer‑friendly APIs.
            </p>

            <h3 className="text-xl font-semibold mt-6">What I do</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-400">•</span>
                <div>
                  <strong className="block">Secure Web Development</strong>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Full‑stack apps with security‑first mindset.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-400">•</span>
                <div>
                  <strong className="block">Penetration Testing &amp; Hardening</strong>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Find and fix vulnerabilities before attackers do.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-400">•</span>
                <div>
                  <strong className="block">AI &amp; Automation</strong>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    AI‑assisted tooling, automation scripts &amp; data analysis.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-400">•</span>
                <div>
                  <strong className="block">Design &amp; Branding</strong>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Logos, identity systems and UI design that scale.
                  </p>
                </div>
              </li>
            </ul>

            {/* Timeline / Experience */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Experience Highlights</h3>
              <div className="mt-4 space-y-4">
                <TimelineItem
                  year="2024 — Present"
                  title="Senior Security Engineer"
                  org="Freelance / Consulting"
                  desc="Delivering vulnerability assessments, pentests, and secure architecture guidance for clients."
                />
                <TimelineItem
                  year="2021 — 2024"
                  title="Full-Stack Engineer"
                  org="Various Startups"
                  desc="Built e‑commerce, education, and business web platforms using React, Next, Node and SQL."
                />
                <TimelineItem
                  year="2018 — 2021"
                  title="UI/UX &amp; Frontend Developer"
                  org="Agency Work"
                  desc="Designed brand systems and high‑fidelity UI prototypes that translated to production‑ready apps."
                />
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.aside {...fadeUp(0.20)} className="space-y-6">
            <h3 className="text-xl font-semibold">Tech &amp; Security Skills</h3>

            <div className="grid grid-cols-2 gap-4">
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="p-4 rounded-xl bg-gradient-to-br from-[#0f1724] to-[#071026] dark:from-[#111827] dark:to-[#0b1220] shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-purple-600/10">
                      <t.Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-gray-400 mt-1">{t.note}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-gray-400 uppercase tracking-wider">
                Tools &amp; Platforms
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Tailwind",
                  "Node.js",
                  "Python",
                  "Postgres",
                  "Docker",
                ].map((x) => (
                  <span
                    key={x}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Projects highlights */}
        <motion.div {...fadeUp(0.22)} className="mt-20">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            A few projects that demonstrate a mix of design, development and security.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              img="/works/ecommerce.png"
              tags={["Next.js", "Stripe", "Security"]}
            />
            <ProjectCard
              title="School Management System"
              img="/works/school.png"
              tags={["React", "Node.js", "SQL"]}
            />
            <ProjectCard
              title="Security Audit Toolkit"
              img="/works/security.png"
              tags={["Python", "Pentest", "Automation"]}
            />
          </div>
        </motion.div>

        {/* CTA / Contact */}
        <motion.div
          {...fadeUp(0.24)}
          id="contact"
          className="mt-20 bg-gradient-to-br from-[#0b1220]/60 to-[#071026]/40 p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Want to work together?</h3>
              <p className="text-gray-400 mt-2">
                I&apos;m available for security audits, full‑stack development, AI
                integration and consulting.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:musahakilu@email.com"
                className="px-6 py-3 rounded-lg bg-purple-600 text-white"
              >
                Email Me
              </a>
              <a
                href="/works"
                className="px-6 py-3 rounded-lg border border-purple-600 text-purple-400"
              >
                See My Work
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* ----------------- small components ----------------- */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-white/3 to-white/2 rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-purple-400">{number}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  org,
  desc,
}: {
  year: string;
  title: string;
  org: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-sm text-gray-400 w-28">{year}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <div className="text-sm text-gray-500">{org}</div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  img,
  tags,
}: {
  title: string;
  img: string;
  tags: string[];
}) {
  return (
    <article className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0f1724] to-[#071026] hover:shadow-purple-500/30 transition-all">
      <div className="w-full h-44 relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-sm bg-white/5 px-3 py-1 rounded-full text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}