import DashboardNavbar from "@/components/DashboardNavbar";
import TrendingExamHero from "@/components/TrendingExamHero";
import MobileBottomNav from "@/components/MobileBottomNav";
import ContentRow from "@/components/ContentRow";

const engineeringExams = [
  {
    title: "JEE Advanced",
    difficulty: "Very Hard",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },

  {
    title: "GATE",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    title: "BITSAT",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    title: "VITEEE",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
];

const medicalExams = [
  {
    title: "NEET",
    difficulty: "Very Hard",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
  },

  {
    title: "AIIMS",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },

  {
    title: "JIPMER",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
  },

  {
    title: "PGIMER",
    difficulty: "Very Hard",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
  },
];

const governmentExams = [
  {
    title: "UPSC",
    difficulty: "Extreme",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  {
    title: "SSC CGL",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },

  {
    title: "Bank PO",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },

  {
    title: "Railway Exams",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
  },
];

const managementExams = [
  {
    title: "CAT",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },

  {
    title: "XAT",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },

  {
    title: "GMAT",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1516321310764-8d8a84be5b91",
  },

  {
    title: "CMAT",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
];

const abroadExams = [
  {
    title: "IELTS",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },

  {
    title: "TOEFL",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },

  {
    title: "GRE",
    difficulty: "Hard",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  },

  {
    title: "SAT",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  },
];

export default function ExamsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <DashboardNavbar />

      <div className="px-8 pb-20">

        {/* Hero */}
        <TrendingExamHero />

        {/* Exam Rows */}
        <ContentRow
          category="🚀 Engineering Exams"
          items={engineeringExams}
        />

        <ContentRow 
          category="🏥 Medical Exams"
          items={medicalExams}
        />

        <ContentRow
          category="⚖ Government & Civil Services"
          items={governmentExams}
        />

        <ContentRow 
          category="💼 Management & Commerce"
          items={managementExams}
        />

        <ContentRow
          category="🌍 Study Abroad Exams"
          items={abroadExams}
        />

      </div>
      <MobileBottomNav />

    </main>
  );
}