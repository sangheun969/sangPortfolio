interface TextHeaderSmallProps {
  children: string;
}

const TextHeaerSmall: React.FC<TextHeaderSmallProps> = ({ children }) => {
  return (
    <p className="text-9xl font-NOTO font-medium text-center text-[#171717]">
      {children}
    </p>
  );
};

export default TextHeaerSmall;
