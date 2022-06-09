function ColourPrint() {

    const PREFIX = '\x1b';
    const RESET = PREFIX + "[0m";

    const FG_MAGENTA = PREFIX + "[35m";
    const BG_GREEN = PREFIX + "[42m";
}

console.log(ColourPrint("This hurts my eyes!"));