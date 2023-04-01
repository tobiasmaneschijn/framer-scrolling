type SectionProps = {
    title: string | undefined;
    children?: React.ReactNode;
    className?: string;
  };
  
  const Section = ({ title, children, className }: SectionProps) => {
    return (
      <section
        className={`min-h-screen relative flex flex-col justify-center items-center text-center mx-auto overflow-hidden snap-center ${className}`}
      >
        <h1 className="text-7xl font-bold">{title}</h1>
        {children}
      </section>
    );
  };
  
  export default Section;