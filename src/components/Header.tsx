export function Header({background, children, className}: {background: string, className?: string, children?: JSX.Element | JSX.Element[]}) {
  return (
    <div className={`${className} min-h-[25rem] w-ful grid place-content-center bg-cover bg-center`} style={{backgroundImage: background}}>
      <div className="flex flex-col justify-center items-center select-none gap-9">
        {children}
      </div>
    </div>
  )
}
