import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UseChaotic | QA Made Simple",
  description:
    "UseChaotic is a platform that makes QA easy and fun. Built with Next.js, Tailwind CSS, TypeScript and framer motion.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
