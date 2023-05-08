interface TextProps {
    label: string;
    className?: string;
    family?: 'jakarta' | 'poppins' | 'red-hat' | 'roboto';
    size?: 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
    height?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    type?: 'small' | 'span' | 'strong' | 'b' | 'i' | 'p' | 'h6' | 'h5' | 'h4';
    align?: 'left' | 'center' | 'right';
}
declare function Text({ label, align, family, size, weight, height, type, className }: TextProps): JSX.Element;

export { Text, TextProps };
