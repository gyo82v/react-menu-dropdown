export default function Button({children, variant = "green", ...rest}){
    const variants = {
        default : `from-neutral-500 via-neutral-300 to-neutral-200 text-neutral-800`,
        yellow : `from-yellow-500 via-yellow-300 to-orange-100 text-yellow-800`,
        green : `from-green-500 via-green-300 to-lime-200 text-green-800`,
        purple : `from-purple-500 via-purple-300 to-sky-100 text-purple-800`,
    }
    const style = `bg-gradient-to-br px-4 py-2 rounded-lg text-lg font-bold w-30
                   transition-transform transition-colors hover:scale-105 active:scale-95 
                   hover:from-lime-200 hover:to-green-500
                   ${variants[variant] || ""}`

    return(
        <button className={style} {...rest}>
            {children}
        </button>
    )
}