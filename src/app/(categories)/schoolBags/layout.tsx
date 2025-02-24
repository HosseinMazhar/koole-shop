import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Bags",
  description: "koole is an online shop for bag",
};

export default function PencilCaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
