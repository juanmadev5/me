
interface SectionProps {
    children: React.ReactNode;
  }

export default function CustomSection({ children }: SectionProps) {
  return (
    <div className="w-full h-auto p-4 text-white max-md:w-80">{children}</div>
  );
}
