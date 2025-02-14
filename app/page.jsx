import LandingPage from "@/components/Mbbs";

export const metadata = {
  title: "Study MBBS Abroad - Top Medical Universities",
  description:
    "Explore top medical universities abroad and fulfill your dream of studying MBBS. Get expert guidance on admissions, fees, and visa process.",
  openGraph: {
    title: "Study MBBS Abroad - Top Medical Universities",
    description:
      "Discover the best MBBS programs abroad with expert assistance on admissions, scholarships, and visa processing.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
