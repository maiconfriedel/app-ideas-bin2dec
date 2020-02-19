/** @description Converts a binary string into a decimal number */
export function convertBinaryStringToDecimal(binaryString: string) {
  const decimalNumber: number = parseInt(binaryString, 2);

  return decimalNumber;
}

/** @description Converts a binary number array into a decimal number */
export function convertBinaryNumberArrayToDecimal(binaryArray: number[]) {
  const decimalNumber: number = binaryArray.reduce(
    (total, currentValue, index) => {
      return total + currentValue * Math.pow(2, index);
    }
  );

  return decimalNumber;
}
