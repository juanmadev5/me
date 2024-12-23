interface SectionProps {
  children: React.ReactNode;
}

export default function CustomSection({ children }: SectionProps) {
  return (
    <div className="overflow-x-hidden w-full h-auto p-4">
      {children}
    </div>
  );
}
