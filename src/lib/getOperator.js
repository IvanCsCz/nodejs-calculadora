import { OPERATORS } from '#Constants/operators';
import { InvalidInputError } from '#Errors/invalidInputError';

export const getOperator = standardizedInput => {
	let operator;

	for (const allowedOperator of OPERATORS) {
		if (standardizedInput.includes(allowedOperator)) {
			if (
				operator ||
				standardizedInput.indexOf(allowedOperator) !==
					standardizedInput.lastIndexOf(allowedOperator)
			) {
				throw new InvalidInputError();
			}

			operator = allowedOperator;
		}
	}

	return operator;
};
