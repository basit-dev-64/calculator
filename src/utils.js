export const isOperator = (val) => {
    if (val === '=' || val === '+' || val === '/' || val === '*' || val === '-' || val ==='%') {
        return true
    }
}

export const operators = ['+','/','*','-','%'];

