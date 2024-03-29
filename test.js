// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const calculator = require('./calculator'); // assuming your calculator function is exported from a file named calculator.js

describe('Calculator', () => {
    beforeEach(() => {
        window.alert = jest.fn();
        window.prompt = jest.fn();
    });

    it('adds two numbers correctly', () => {
        window.prompt.mockReturnValueOnce('+').mockReturnValueOnce('5').mockReturnValueOnce('3');
        calculator();
        expect(window.alert).toHaveBeenCalledWith('The result is 8');
    });

    it('subtracts two numbers correctly', () => {
        window.prompt.mockReturnValueOnce('-').mockReturnValueOnce('5').mockReturnValueOnce('3');
        calculator();
        expect(window.alert).toHaveBeenCalledWith('The result is 2');
    });

    it('multiplies two numbers correctly', () => {
        window.prompt.mockReturnValueOnce('*').mockReturnValueOnce('5').mockReturnValueOnce('3');
        calculator();
        expect(window.alert).toHaveBeenCalledWith('The result is 15');
    });

    it('divides two numbers correctly', () => {
        window.prompt.mockReturnValueOnce('/').mockReturnValueOnce('6').mockReturnValueOnce('3');
        calculator();
        expect(window.alert).toHaveBeenCalledWith('The result is 2');
    });

    it('handles division by zero', () => {
        window.prompt.mockReturnValueOnce('/').mockReturnValueOnce('5').mockReturnValueOnce('0');
        calculator();
        expect(window.alert).toHaveBeenCalledWith("You can't divide by zero!");
    });

    it('handles invalid operators', () => {
        window.prompt.mockReturnValueOnce('invalid').mockReturnValueOnce('5').mockReturnValueOnce('3');
        calculator();
        expect(window.alert).toHaveBeenCalledWith('Invalid operator');
    });
});