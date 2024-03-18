interface ButtonProps {
    text: string,
    textSize: number,
    paddingVertical: number,
    paddingHorizontal: number,
}

function Button({ text, textSize, paddingVertical, paddingHorizontal }: ButtonProps) {
    return (
      <button 
        style={{ 
          paddingTop: `${paddingVertical/4}rem`, 
          paddingBottom: `${paddingVertical/4}rem`, 
          paddingLeft: `${paddingHorizontal/4}rem`, 
          paddingRight: `${paddingHorizontal/4}rem`,
          fontSize: `${textSize}rem`
        }}
        className="max-h-16 flex items-center justify-center border-2 rounded-full border-[#50D3AE] text-[#50D3AE] hover:bg-[#50d3ae35] hover:text-white"
      >
        {text}
      </button>
    );
}

export default Button
