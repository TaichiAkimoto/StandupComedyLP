export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import GoogleTagManager, {
  GoogleTagManagerId,
} from "@/components/GoogleTagManager";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { googleTagManagerId } from "@/utils/gtm";

export default function Home() {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Hero />
      <Features />
    </>
  );
}
