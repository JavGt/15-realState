const imagenes = document.querySelectorAll(".propiedad__imagen");

document.addEventListener("scroll", (e) => {
	// console.log(this.scrollY);
	const scroll = this.scrollY / -20;

	imagenes.forEach((imagen) => {
		imagen.style.backgroundPositionY = `${scroll}px`;
	});
});
