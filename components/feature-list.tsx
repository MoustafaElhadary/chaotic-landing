"use client";

import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bot,
  Clock,
  Code2,
  Eye as EyeIcon,
  GitCompare,
  Globe,
  MessageSquare as MessageSquareIcon,
  MousePointer2,
  RefreshCcw,
  RefreshCw,
  Search,
  Zap as ZapIcon,
} from "lucide-react";
import React from "react";

export function FeatureList() {
  const features = [
    {
      title: "Test creation in plain English",
      description: "Write tests using natural language, no coding required.",
      icon: <MessageSquareIcon className="w-6 h-6" />,
    },
    {
      title: "Visual regression testing",
      description:
        "Catch visual changes automatically with pixel-perfect comparison.",
      icon: <EyeIcon className="w-6 h-6" />,
    },
    {
      title: "24/7 AI Assistant",
      description: "Get help with test editing and explanations on demand.",
      icon: <Bot className="w-6 h-6" />,
    },
    {
      title: "Self-healing tests",
      description: "Tests adapt to minor UI changes automatically.",
      icon: <RefreshCcw className="w-6 h-6" />,
    },
    {
      title: "Issue severity ranking",
      description: "Prioritize issues based on their impact and urgency.",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      title: "Root cause analysis",
      description: "Get insights into why tests fail with fix suggestions.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Automated Fix PRs",
      description: "Generate PRs with AI-suggested fixes for failing tests.",
      icon: <GitCompare className="w-6 h-6" />,
    },
    {
      title: "Automated Jira Integration",
      description:
        "Auto-creates Jira cards with reproduction steps and video recordings.",
      icon: <GitCompare className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8) &&
          "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
