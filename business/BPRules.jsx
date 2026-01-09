class BPRules {
    static isHigh(sys, dia) {
        return sys >= 135 || dia >= 85;
    }
}

export default BPRules;
