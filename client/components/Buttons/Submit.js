export function Submit ({ children, center = false }) {
  return (
      <button type='submit' className={`my-6 ${center ? 'self-middle ' : 'self-end'} py-3 px-6 bg-secondary shadow-lg rounded-xl text-white font-md text-lg hover:scale-105 hover:bg-primary transition`}>
        {children}
      </button>
  )
}
