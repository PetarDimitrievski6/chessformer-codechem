import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import level1 from "./lvl1_starter.js";
import level2 from "./lvl2_starter.js";
import level3 from "./lvl3_starter.js";
import levelBonus from "./lvl_bonus_starter.js";
import reload_level from "./reload_level.js";


window.onload = level1;
window.level1 = level1;
window.level2 = level2;
window.level3 = level3;
window.levelBonus = levelBonus;
window.reload_level = reload_level;