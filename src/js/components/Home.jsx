import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [amarillo, setAmarillo] = useState("btn btn-dark")
	const [rojo, setRojo] = useState("btn btn-dark")
	const [verde, setVerde] = useState("btn btn-dark")
	const [iconoA, setIconoA] = useState("")
	const [iconoB, setIconoB] = useState("")
	const [iconoC, setIconoC] = useState("")

	function cambioDeColor() {
		if (amarillo === "btn btn-dark") {
			setAmarillo("btn btn-warning")
			setIconoA("fa-solid fa-face-surprise")
			setRojo("btn btn-dark")
			setVerde("btn btn-dark")
			setIconoB("")
			setIconoC("")
		}
		else {
			setAmarillo("btn btn-dark")
			setIconoA("")
		}
	}
	function cambioDeColor2() {
		if (rojo === "btn btn-dark") {
			setRojo("btn btn-danger")
			setIconoB("fa-solid fa-face-angry")
			setAmarillo("btn btn-dark")
			setVerde("btn btn-dark")
			setIconoA("")
			setIconoC("")

		}
		else {
			setRojo("btn btn-dark")
			setIconoB("")
		}
	}


	function cambioDeColor3() {
		if (verde === "btn btn-dark") {
			setVerde("btn btn-success")
			setIconoC("fa-regular fa-face-grin-squint-tears")
			setRojo("btn btn-dark")
			setAmarillo("btn btn-dark")
			setIconoB("")
			setIconoA("")
		}
		else {
			setVerde("btn btn-dark")
			setIconoC("")
		}
	}
	useEffect(() => {

		let contador = setInterval(() => {

			if (amarillo === "btn btn-warning") {
				cambioDeColor2();
			}
			else if (rojo === "btn btn-danger") {
				cambioDeColor3();
			}
			else {
				cambioDeColor();
			}

		}, 5000);

		return () => clearInterval(contador);

	}, [amarillo,rojo],);

	const BottonIniciar = () => {

		if (amarillo === "btn btn-warning") {
			cambioDeColor2()

		}
		else if (rojo === "btn btn-danger") {
			cambioDeColor3()

		}
		else {
			cambioDeColor()

		}
	}


	return (
		<div className=" text-center d-flex flex-column align-items-center justify-content-center">
			<div id="tubo" ></div>
			<div id="semaforo">

				<div >
					<button id="rojo" onClick={cambioDeColor2} type="button" className={rojo}><i className={iconoB}></i></button>
				</div>
				<div >
					<button id="amarillo" onClick={cambioDeColor} type="button" className={amarillo}><i className={iconoA}></i></button>
				</div>

				<div >
					<button id="verde" onClick={cambioDeColor3} type="button" className={verde}><i className={iconoC}></i></button>
				</div>

			</div>

			<div>
				<button id="botonIniciar" type="button" onClick={BottonIniciar} className="btn btn-dark">CAMBIAR</button>
			</div>
		</div>
	);
}

export default Home;