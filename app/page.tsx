import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Journey } from "@/components/Journey";
import Navbar from "@/components/MobileNavBar";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <div className="z-50 relative">
          <Navbar />
        </div>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        {/* <Approach /> */}
        {/* <Journey /> */}
        <Footer />
      </div>
    </main>
  );
}
