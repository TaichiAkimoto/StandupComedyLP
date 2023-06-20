export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
