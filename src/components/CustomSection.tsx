interface SectionProps {
  children: React.ReactNode;
}

export default function CustomSection({ children }: SectionProps) {
  return <div className="overflow-x-hidden w-auto h-auto p-4 text-white">{children}</div>;
}
