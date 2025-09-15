import Logo from "@/components/_layout/DashboardLayout/components/Logo";

export default function Header() {
  return (
    <header className="w-full h-12 bg-primary sticky top-0 left-0 text-primary-foreground px-6 flex items-center justify-between gap-4 z-50">
      <Logo />

      <div></div>
    </header>
  );
}
