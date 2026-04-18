#!/usr/bin/env node

const breaks = {
  sensory: [
    "Look up. Find something in the room you've never consciously noticed before. Describe it out loud.",
    "Press your feet flat on the floor. Feel the weight. Take one slow breath.",
    "Name 5 things you can see. Say the color of each one.",
    "Hold something cold or warm in your hand for 10 seconds. Focus only on the temperature.",
    "Close your eyes. What's the furthest sound you can hear right now?",
    "Touch the surface in front of you. Rough or smooth? Warm or cool?",
    "Take 3 breaths. Make the exhale twice as long as the inhale.",
  ],
  random: [
    "What's the 7th word of your favorite song?",
    "If your current mood were a weather system, what would it be?",
    "Spell your full name backwards, out loud.",
    "Stand up and sit back down three times. That's it.",
    "Name an animal for every letter of the alphabet. Stop when you get stuck.",
    "What colour is the front door of the place you grew up?",
    "How many windows are in the room you're in right now? Count them.",
    "Think of someone you like. What would they be doing right now?",
  ],
  cognitive: [
    "Write down exactly what you're worried about in one sentence. Make it boring.",
    "Count backwards from 100 by 7s. Say it out loud.",
    "What's the smallest possible next action you could take on this?",
    "If a friend told you this problem, what would you say to them?",
    "Set a timer for 5 minutes. You're only allowed to worry until it goes off.",
    "Name the emotion you're feeling. Just the word. That's enough for now.",
    "What's one thing that's actually going well today?",
  ],
};

const all = [...breaks.sensory, ...breaks.random, ...breaks.cognitive];

const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  purple: "\x1b[35m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function printBreak(prompt) {
  console.log("");
  console.log(`${colors.purple}${colors.bold}  ✦ thought breaker${colors.reset}`);
  console.log(`${colors.dim}  ─────────────────────────────────${colors.reset}`);
  console.log("");
  console.log(`  ${colors.bold}${prompt}${colors.reset}`);
  console.log("");
  console.log(`${colors.dim}  ─────────────────────────────────${colors.reset}`);
  console.log(`${colors.dim}  run again for a new prompt  |  tb --help${colors.reset}`);
  console.log("");
}

function printHelp() {
  console.log("");
  console.log(`${colors.purple}${colors.bold}  thought breaker${colors.reset} ${colors.dim}— interrupt the loop${colors.reset}`);
  console.log("");
  console.log(`  ${colors.bold}Usage${colors.reset}`);
  console.log(`    ${colors.cyan}tb${colors.reset}                  random prompt`);
  console.log(`    ${colors.cyan}tb --sensory${colors.reset}        ground through your senses`);
  console.log(`    ${colors.cyan}tb --random${colors.reset}         total pattern interrupt`);
  console.log(`    ${colors.cyan}tb --cognitive${colors.reset}      redirect with a mental task`);
  console.log(`    ${colors.cyan}tb --timer 25${colors.reset}       auto-prompt every 25 minutes`);
  console.log("");
}

function startTimer(minutes) {
  const ms = minutes * 60 * 1000;
  console.log(`${colors.green}  Timer set. You'll get a thought-break every ${minutes} minutes.${colors.reset}`);
  console.log(`${colors.dim}  Press Ctrl+C to stop.${colors.reset}\n`);

  function fireBreak() {
    console.clear();
    printBreak(pick(all));
    setTimeout(fireBreak, ms);
  }

  setTimeout(fireBreak, ms);
  // Keep process alive
  process.stdin.resume();
}

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  printHelp();
} else if (args.includes("--timer")) {
  const idx = args.indexOf("--timer");
  const minutes = parseInt(args[idx + 1]) || 25;
  startTimer(minutes);
} else if (args.includes("--sensory")) {
  printBreak(pick(breaks.sensory));
} else if (args.includes("--random")) {
  printBreak(pick(breaks.random));
} else if (args.includes("--cognitive")) {
  printBreak(pick(breaks.cognitive));
} else {
  printBreak(pick(all));
}
