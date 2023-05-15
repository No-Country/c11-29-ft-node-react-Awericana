/* eslint-disable space-before-function-paren */
/* eslint-disable space-before-blocks */
export default function Login() {
  return (
    <div className="flex h-screen justify-center">
      <div className="w-[500px] h-[400px] bg-red-200">
        <img src="#" alt="img" />
      </div>
      <div className=" border-green-500 border h-[550px] flex flex-col justify-center items-center">
        <h3 className="mt-10 ¿">Iniciar Seción</h3>
        <form className="w-[400px]  mt-10 flex flex-col  ">
          <div>
            <input
              className=" border-green-200 border rounded-lg ml-20 mb-6 w-[250px]"
              type="email"
              placeholder="Ingresa Tu Correo"
            />
          </div>
          <div>
            <input
              className="border-green-200 border rounded-lg ml-20 mb-6 w-[250px]"
              type="password"
              placeholder="Ingresa Tu Contraseña"
            />
          </div>
          <div>
            <button className="mt-4 mb-5 ml-[140px] bg-emerald-200 pl-5 pr-5 pt-3 pb-3 rounded-md hover:bg-green-600">
              Iniciar Sesion
            </button>
          </div>
          <button className="mb-4">
            <a className="ml-18 underline  mb-5">¿Olvidaste Tu Contraseña?</a>
          </button>
        </form>
        <div className="flex  mb-5">
          <p>No Tienes Cuenta?</p>
          <button>
            <a className="text-blue-500">Registrate</a>
          </button>
        </div>
        <div>
          <button className="bg-white pl-6 pr-6  pt-2 pb-2 mb-2 rounded-md">
            Google
          </button>
        </div>
        <div>
          <button className="bg-sky-500 pl-6 pr-6  pt-2 pb-2 mb-2 rounded-md">
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
