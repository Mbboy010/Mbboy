"use client";

import React from "react";
import ServiceLayout from "../../../components/services/ServiceLayout"; 
import { Smartphone } from "lucide-react";

export default function MobilePage() {
  return (
    <ServiceLayout
      title="Mobile App Engineering"
      subtitle="Native • Responsive • Smooth"
      description="Reach your users on their favorite devices. I build cross-platform mobile applications that feel native, perform beautifully, and work offline, ensuring a seamless experience on both iOS and Android."
      icon={Smartphone}
      color="text-pink-500"
      gradient="from-pink-600 to-rose-500"
      features={[
        { 
          title: "Cross-Platform Development", 
          desc: "One codebase for both iOS and Android using React Native, saving significant development time and budget." 
        },
        { 
          title: "Offline-First Architecture", 
          desc: "Apps that work flawlessly even without an internet connection, syncing data securely when connectivity returns." 
        },
        { 
          title: "App Store Deployment", 
          desc: "Handling the complex submission, review, and optimization process for the Apple App Store and Google Play Store." 
        },
        { 
          title: "Native Module Integration", 
          desc: "Accessing device hardware like camera, GPS, bluetooth, and biometrics for deep, native-like functionality." 
        },
        { 
          title: "Push Notifications", 
          desc: "Implementing smart notification strategies to increase user retention and engagement." 
        },
        { 
          title: "Performance Optimization", 
          desc: "Ensuring 60fps animations and fast startup times by optimizing JS bridges and native components." 
        }
      ]}
      techStack={[
        "React Native", 
        "Expo", 
        "TypeScript", 
        "Redux Toolkit", 
        "Firebase", 
        "NativeWind", 
        "Jest",
        "Fastlane"
      ]}
    />
  );
}
