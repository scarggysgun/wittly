const Input = ({label , placeholder}) =>{
    return(
     <>
       <label
       className="text-black text-[15px] not-italic font-bold leading-[22px] underline"
       >{label}
       </label>
       <input
       placeholder={placeholder}
       className="w-[400px] h-12 shrink-0 rounded"
       >
       </input>
     </>
    )

}
export default Input ;