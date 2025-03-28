import type { Metadata } from "next";
import "@/app/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "거주자",
  description: "거주자 관리 페이지",
};

export default function ResidenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <div className="space-x-4">
            <Link href="#" className="hover:underline">
              메인
            </Link>
            <Link href="#" className="hover:underline">
              고객관리
            </Link>
            <Link href="#" className="hover:underline">
              배정관리
            </Link>
            <Link href="#" className="hover:underline">
              수납관리
            </Link>
            <Link href="#" className="hover:underline">
              시설물관리
            </Link>
            <Link href="#" className="hover:underline">
              통계
            </Link>
            <Link href="#" className="hover:underline">
              정보변경 관리
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
