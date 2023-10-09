import Grid from "@/components/homePage/Grid";
import Card from "../components/homePage/Card";

export default function Home() {
	return (
		<>
			<h1 className=" flex justify-center align-middle font-extrabold text-4xl pt-6">
				Esse é o Usual Code 👨‍💻
			</h1>
			<h1 className="flex justify-center font-semibold pt-4 pb-4">
				{" "}
				O Usual Code é um site que contém vários mini-projetos geralmente
				desenvolvidos no processo de aprendizado.
			</h1>

			<Grid />
		</>
	);
}
