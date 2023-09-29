import Navbar from "@/components/navbar";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#f4f0fc] dark:from-[#0c0a09] dark:to-[#c0ff0005] to-white h-11"></div>
      <main className="bg-[#f4f0fc]">{children}</main>
    </>
  );
}
