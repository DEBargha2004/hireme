import "./style.css";
import Footer from "@/components/custom/home/footer";
import Navbar from "@/components/custom/navbar";

export default function Layout({
  children,
  dialog,
}: {
  children: React.ReactNode;
  dialog: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {dialog}
      {children}
      <Footer />
    </main>
  );
}
