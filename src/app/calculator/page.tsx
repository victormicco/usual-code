import Calculator from "@/components/calculatorPage/Calculator";

export default function calculator() {
	return (
		<>
			<div className="flex justify-center pt-6">
				<h1 className=" font-bold text-4xl flex justify-center pt-6 pr-6">
					Calculadora
				</h1>
				<a
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center"
					href="/"
				>
					Voltar
				</a>
			</div>
			<Calculator />
		</>
	);
}
