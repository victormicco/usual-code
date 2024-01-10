import Image from "next/image";

export default function Card() {
  return (
    <div className="">
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/calculator">
          <Image
            className="rounded-t-lg"
            src="https://cdn.ocp.news/2020/04/calculadora-calculando-contas-matematica.jpg"
            alt="Calculadora"
            width={500}
            height={200}
            priority
          />
        </a>
        <div className="p-5">
          <a href="/calculator">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Projeto Calculadora
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Esse é um projeto de uma calculadora simples, para colocar em
            prática conhecimentos obtidos.
          </p>
          <a
            href="/calculator"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Veja o projeto
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
