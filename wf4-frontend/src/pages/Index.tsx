import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DocsContent from "@/components/docs/DocsContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <DocsContent />
    </div>
  );
};

export default Index;
