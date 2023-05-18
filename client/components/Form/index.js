export function Form ({ children, onSubmit }) {
  return (
  <form className='flex flex-col gap-4 w-full md:w-9/12' onSubmit={onSubmit}>
    {children}
  </form>
  )
}
