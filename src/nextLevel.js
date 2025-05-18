import level1 from "./lvl1_starter.js";
import level2 from "./lvl2_starter.js";
import level3 from "./lvl3_starter.js";
import levelBonus from "./lvl_bonus_starter.js";
import state from "./CURRENT_LEVEL.js";

function changeLevel() {
    if (state.currentLevel === 1) {
        level2();
    } else if (state.currentLevel === 2) {
        level3();
    } else if (state.currentLevel === 3) {
        levelBonus();
    } else {
        level1();
    }
}

export default changeLevel;