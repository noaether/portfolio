import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Real name change
let rL = document.getElementById("realname");
let rL2 = document.getElementById("realname2");
let oL = document.getElementById("onlinename");
let oL2 = document.getElementById("onlinename2");

const realNames = [
  "Noa", "Aether", "Kay", "Lia", "May"
];
let rlc = 0;
let rlc2 = 0;

const onlineNames = [
  "noadev", "noae", "thenoadev", "pocoyo", "pocoyodev"
];
let olc = 0;
let olc2 = 0;

rL.addEventListener("mouseover", () => {
  rL.textContent = realNames[rlc];
  rL2.textContent = realNames[rlc];
  rlc = (rlc + 1) % realNames.length;
  rlc2 = (rlc2 + 1) % realNames.length;
});
rL2.addEventListener("mouseover", () => {
  rL.textContent = realNames[rlc];
  rL2.textContent = realNames[rlc];
  rlc = (rlc + 1) % realNames.length;
  rlc2 = (rlc2 + 1) % realNames.length;
});

oL.addEventListener("mouseover", () => {
  oL.textContent = onlineNames[olc];
  oL2.textContent = onlineNames[olc];
  olc = (olc + 1) % onlineNames.length;
  olc2 = (olc2 + 1) % onlineNames.length;
});