"use strict";
let allWeapons = Object.keys(Gauntlet.Armory);

for (let i = 0; i < allWeapons.length-11; i++) {
  let currentWeapon = allWeapons[i];
  $('#weapon-row').append(`<div class="col-sm-4">`);
  $('#weapon-row').append(`<div class="card__button classWeapon"><a class="btn btn--small btn--blue" href="#"><span class="btn__prompt">></span><span class="btn__text">${currentWeapon}</span></a></div>`)
}
for (let i = 7; i < allWeapons.length; i++) {
  let currentWeapon = allWeapons[i];
  $('#weapon-row').append(`<div class="col-sm-4">`);
  $('#weapon-row').append(`<div class="card__button"><a class="btn btn--small btn--blue" href="#"><span class="btn__prompt">></span><span class="btn__text">${currentWeapon}</span></a></div>`)
}