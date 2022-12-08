
export const countCalories = (elf: string[]): number => {
    const numberValuesOfCalories = elf.map(food => parseInt(food))

    return numberValuesOfCalories.reduce((prev, current) => prev + current)
}


