const Button = ({text}) => {
    return (
        <>
        <button
        className="flex w-[400px] h-12 justify-center items-center gap-1.5 shrink-0 px-4 py-[15px] rounded-[5px] bg-slate-950 text-white
        hover:bg-white hover:text-slate-950 drop-shadow-lg"
        >{text}
        </button>
        </>
    );
  }
  
  export default Button;