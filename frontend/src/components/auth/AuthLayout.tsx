import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { Card, CardContent } from "@/components/ui/card";

type AuthLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  links: React.ReactNode;
  narrow?: boolean;
};

export default function AuthLayout({ eyebrow, title, description, children, links, narrow }: AuthLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8FAFC]">
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        <section className={`mx-auto px-5 py-10 ${narrow ? "max-w-lg" : "max-w-3xl"}`}>
          <Card className="py-6 shadow-sm sm:py-8">
            <CardContent className="px-5 sm:px-8">{children}</CardContent>
          </Card>
          <div className="mt-6 space-y-2 text-center text-sm text-slate-600">{links}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
