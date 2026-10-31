interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
      {title}
    </h2>
  );
};

export default Title;
