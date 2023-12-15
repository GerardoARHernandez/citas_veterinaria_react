const Error = ({children}) => {
  return (
    <div>
        <div className="bg-red-600 text-white uppercase font-bold text-center p-3 mb-3 rounded-xl">
              {children}
        </div>
    </div>
  )
}

export default Error