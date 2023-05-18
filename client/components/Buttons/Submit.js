export function Submit ({ children, center = false, disabled = false }) {
  return (
      <button type='submit' disabled={disabled} className={`my-6 ${center ? 'self-middle ' : 'self-end'} py-3 px-6 bg-secondary shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-primary transition`}>
        {children}
      </button>
  )
}
