export function Submit ({ children, center = false, disabled = false, isLoading = false }) {
  if (isLoading) {
    return (
      <button type="button" className={`my-6 ${center ? 'self-center' : 'self-end'} w-full md:w-[28rem] cursor-none animate-pulse relative lg:w-[28rem] lg:h-14 py-3 bg-secondary select-none shadow-lg rounded-xl text-white font-md text-lg transition`}>
          Cargando...
      </button>
    )
  }

  return (
      <button type='submit' role="button" disabled={disabled} className={`my-6 ${center ? 'self-center' : 'self-end'} w-full md:w-[28rem] lg:w-[28rem] lg:h-14 py-3 bg-secondary shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-primary transition`}>
        {children}
      </button>
  )
}
