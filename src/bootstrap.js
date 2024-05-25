import { operations } from '#Constants/operations';
import { BINARY_OPERATORS } from '#Constants/operators';
import { InvalidInputError } from '#Errors/invalidInputError';
import {
	getBinaryOperatings,
	getSingleOperating
} from './lib/getOperatings.js';
import { getOperator } from './lib/getOperator.js';
import { promptQuestion } from './lib/promptQuestion.js';

export const bootstrap = async () => {
	try {
		// 1 Capturar la entrada del usuario por consola
		const userAnswer = await promptQuestion('Introduce tu operación: ');
		// console.log(userAnswer);

		// 2 Validar la entrada y separar las partes de la misma en operandos y operador
		const standardizedInput = userAnswer.trim();

		if (standardizedInput === 'exit') {
			return true;
		}

		if (!standardizedInput) throw new InvalidInputError();

		const operator = getOperator(standardizedInput);

		if (!operator) throw new InvalidInputError();

		const splittedInput = standardizedInput.split(operator);

		let firstOperating, secondOperating;

		if (BINARY_OPERATORS.includes(operator))
			[firstOperating, secondOperating] = getBinaryOperatings(splittedInput);
		else [firstOperating] = getSingleOperating(splittedInput);

		// 3 Realizar la operacion

		const result = operations[operator](firstOperating, secondOperating);

		const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

		// 4 Mostrar resultados por consola
		if (isNaN(roundedResult) || !isFinite(roundedResult))
			console.log('OPERACIÓN NO VÁLIDA\n');
		else console.log(`El resultado es: ${roundedResult}\n`);
	} catch (error) {
		if (error instanceof InvalidInputError) {
			console.log(`${error.message}\n`);
		} else
			console.log(
				`Error no esperado: ${error.message}. Stack: ${error.stack}\n`
			);
	}
};
