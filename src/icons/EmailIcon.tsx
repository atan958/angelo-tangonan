interface EmailIconProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
}

const EmailIcon = ({ width=32, height=32, fill }: EmailIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.3333 10.6666H10.6666C7.73331 10.6666 5.35998 13.0666 5.35998 16L5.33331 48C5.33331 50.9333 7.73331 53.3333 10.6666 53.3333H53.3333C56.2666 53.3333 58.6666 50.9333 58.6666 48V16C58.6666 13.0666 56.2666 10.6666 53.3333 10.6666ZM53.3333 21.3333L32 34.6666L10.6666 21.3333V16L32 29.3333L53.3333 16V21.3333Z" fill={fill}/>
    </svg>
  );
}

export default EmailIcon