export default function Button({children, ...props}) {
  return (
    <div>
    <button
      {...props}
      className="
      rounded-md
      bg-blue-600
      px-4
      py-2
      text-white
      hover:bg-blue-700
      active:bg-blue-800
      tranisiton-colors
      "
    >
      {children}
    </button>
    </div>
  )
}
