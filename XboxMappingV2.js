var halo5 = {
  "start": "pause",
  "select": "scoreboard",
  "left-bumper": "jump",
  "left-trigger": "throw grenade",
  "right-trigger": "fire weapon",
  "right-bumper": "melee",
  "left-thumbstick-toggle":"crouch",
  "right-thumbstick-toggle": "zoom",
  "A": "sprint",
  "X": "dodge",
  "Y": "switch-weapon",
  "B": "reload",
  "left-d-pad":"switch grenades left",
  "right-d-pad":"switch grenades right",
  "up-d-pad": "issue orders",
  "down-d-pad": "tracking"
};

var callofduty = {
  "start": "menu",
  "select": "scoreboard",
  "left-bumper": "throw grenade",
  "left-trigger": "zoom",
  "right-trigger": "fire weapon",
  "right-bumper": "throw lethal grenade",
  "left-thumbstick-toggle":"sprint",
  "right-thumbstick-toggle": "melee",
  "A": "jump",
  "X": "reload",
  "Y": "switch-weapon",
  "B": "crouch",
  "left-d-pad":"divison skill",
  "right-d-pad":"activate scorestreak",
  "up-d-pad": "scorestreak up",
  "down-d-pad": "scorestreak down"
};

const transition = {
  "B": "left-thumbstick-toggle"
}


// compare objects with symmetrical keys
function diffObject1(halo5, callofduty) {
  return Object.keys(halo5).reduce(function(map, k) {
    if (halo5[k] !== callofduty[k]) map[k] = callofduty[k];
    return map;
  }, {});
}

function begToDiffer(gameFrom, gameTo) {
  const reverseMap = Object.keys(gameFrom).reduce((map, key) => {
    return Object.assign({}, map, {[gameFrom[key]]: key});
  }, {});
  const diff = Object.keys(gameTo).reduce((map, key) => {
    const to = gameTo[key];
    const from = reverseMap[to];
    if(from && from !== key){
      return [...map, [from, key]];
    }
    return map;
  }, []);
  console.log('diff', diff);
  console.log(` map ${diff[0][1]} to ${diff[0][0]}`);
  console.log(` map ${diff[1][1]} to ${diff[1][0]}`);
  console.log(` map ${diff[2][1]} to ${diff[2][0]}`);
  console.log(` map ${diff[3][1]} to ${diff[3][0]}`);
  console.log(` map ${diff[4][1]} to ${diff[4][0]}`);
  console.log(` map ${diff[5][1]} to ${diff[5][0]}`);
  console.log(` map ${diff[6][1]} to ${diff[6][0]}`);
  return diff;
}

function leftOutOfTheShuffle(diff){
  const leftOutA = diff
    .map(([a]) => a)
    .filter(a => !diff.some(([x, b]) => a == b));

  const leftOutB = diff
    .map(([a, b]) => b)
    .filter(b => !diff.some(([a]) => a == b));
    console.log( `map ${leftOutA} to ${leftOutB}`);
  return [leftOutA, leftOutB];

}

console.log(leftOutOfTheShuffle(begToDiffer(halo5, callofduty)));
console.log(leftOutOfTheShuffle(begToDiffer(callofduty, halo5)));

// // compare small objects with asymmetrical keys
// function diffObject2(halo5, callofduty) {
//   return Object.keys(halo5).concat(Object.keys(callofduty)).reduce(function(map, k) {
//     if (halo5[k] !== callofduty[k]) map[k] = callofduty[k];
//     return map;
//   }, {});
// }

// console.log(diffObject2(halo5, callofduty));

//console.log(diffObject1(halo5, callofduty));
