import { InvalidInputError } from '#Errors/invalidInputError';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
	try {
		// 1 Capturar la entrada del usuario por consola
		const userAnswer = await promptQuestion('Introduce tu operacion: ');
		// console.log(userAnswer);

		// 2 Validar la entrada y separar las partes de la misma en operandos y operador
		const standardizedInput = userAnswer.trim();

		if (standardizedInput === '') {
			throw new InvalidInputError();
		}

		const operator = getOperator(standardizedInput);

		if (!operator) {
			throw new InvalidInputError();
		}
	} catch (error) {
		if (error instanceof InvalidInputError) {
			console.log(error.message);
		} else
			console.log(
				`Error no controlado: ${error.message}. Stack: ${error.stack} `
			);
	}

	// 3 Realizar la operacion
	// 4 Mostrar resultados por consola
})();
