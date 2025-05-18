import state from "./CURRENT_LEVEL.js";
import level1 from "./lvl1_starter.js";
import level2 from "./lvl2_starter.js";
import level3 from "./lvl3_starter.js";
import levelBonus from "./lvl_bonus_starter.js";

function reload_level() {
    if (state.currentLevel === 1) {
        level1()
    } else if (state.currentLevel === 2) {
        level2()
    } else if (state.currentLevel === 3) {
        level3()
    } else {
        levelBonus()
    }
}

export default reload_level;