import Navbar from "@/components/custom/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
}
