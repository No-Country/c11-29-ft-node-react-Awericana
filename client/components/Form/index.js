export function Form ({ children, onSubmit }) {
  return (
  <form className='flex flex-col gap-4 w-full place-content-center' onSubmit={onSubmit}>
    {children}
  </form>
  )
}
