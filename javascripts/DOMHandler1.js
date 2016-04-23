"use strict";
let allWeapons = Object.keys(Gauntlet.Armory);

for (let i = 0; i < 3; i++) {
  $('#weapon-row').append(`<div class="col-sm-4" id="weapon-col${i}"></div>`);
}
for (let i =0; i < 6; i++) {
  let currentWeapon = allWeapons[i];
  $('#weapon-col0').append(`<div id="${currentWeapon}" class="card__button weapon"><a class="btn btn--small btn--blue" href="#"><span class="btn__prompt">></span><span class="btn__text">${currentWeapon}</span></a></div>`)
}
for (let i = 6; i < 12; i++) {
  let currentWeapon = allWeapons[i];
  $('#weapon-col1').append(`<div id="${currentWeapon}" class="card__button weapon"><a class="btn btn--small btn--blue" href="#"><span class="btn__prompt">></span><span class="btn__text">${currentWeapon}</span></a></div>`)
}
for (let i = 12; i < allWeapons.length; i++) {
  let currentWeapon = allWeapons[i];
  $('#weapon-col2').append(`<div id="${currentWeapon}" class="card__button weapon"><a class="btn btn--small btn--blue" href="#"><span class="btn__prompt">></span><span class="btn__text">${currentWeapon}</span></a></div>`)
}