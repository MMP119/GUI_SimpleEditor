document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const consoleOutput = document.getElementById('consoleOutput');
    const runButton = document.getElementById('runButton');
    const lineNumbers = document.getElementById('lineNumbers');
    const consoleLineNumbers = document.getElementById('consoleLineNumbers');

    const updateLineNumbers = (textarea, lineNumberElement) => {
        const lines = textarea.value.split('\n').length;
        lineNumberElement.innerHTML = Array.from({ length: lines }, (_, i) => `<span>${i + 1}</span>`).join('');
    };

    const syncScroll = (textarea, lineNumberElement) => {
        lineNumberElement.scrollTop = textarea.scrollTop;
    };

    codeInput.addEventListener('input', () => updateLineNumbers(codeInput, lineNumbers));
    codeInput.addEventListener('scroll', () => syncScroll(codeInput, lineNumbers));
    consoleOutput.addEventListener('input', () => updateLineNumbers(consoleOutput, consoleLineNumbers));
    consoleOutput.addEventListener('scroll', () => syncScroll(consoleOutput, consoleLineNumbers));

    runButton.addEventListener('click', () => {
        try {
            const result = codeInput.value;
            consoleOutput.value = result !== undefined ? result : '';
        } catch (error) {
            consoleOutput.value = error;
        }
        updateLineNumbers(consoleOutput, consoleLineNumbers);
    });

    updateLineNumbers(codeInput, lineNumbers);
    updateLineNumbers(consoleOutput, consoleLineNumbers);
});