import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
	// 1 Capturar la entrada del usuario por consola
	const userAnswer = await promptQuestion('Introduce tu operacion: ');
	console.log(userAnswer);
	// 2 Validar la entrada y separar las partes de la misma en operandos y operador
	// 3 Realizar la operacion
	// 4 Mostrar resultados por consola
})();
