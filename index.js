exports.toNumber = function(code) {
    function getCount(s) {
        if (!isNaN(s))
            return Number(s);

        return s.charCodeAt(0) - 55;
    }

    function calculateCode() {
        let result = 0;

        for (let i = 0; i < code.length; i++)
            result += Math.pow(36, code.length - i - 1) * getCount(code[i]);

        return result + 1;
    }

    return calculateCode();
}