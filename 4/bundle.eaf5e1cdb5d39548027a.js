(()=>{"use strict";const e={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function n(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.BEFOREEND;n.insertAdjacentElement(i,t.getElement())}const i=["Geneva","Charmonix","Amsterdam","Helsinki","Oslo","Kopenhagen","Den Haag","Rotterdam"],s=["taxi","bus","train","flight","check-in","sightseeing","ship","drive","restaurant"],l=["1BlaBla1","2BlaBla2","3BlaBla3","4BlaBla4","5BlaBla5","6BlaBla6"];function a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function r(e){return e[a(0,e.length-1)]}class o{destinations=[];offers=[];points=[];constructor(){this.destinations=this.generateDestinationsArray(),this.offers=this.generateOffersArray(),this.points=this.generatePointsArray()}getDestinations(){return this.destinations}getOffers(){return this.offers}getPoints(){return this.points}generateDestinationsArray(){return Array.from({length:5},(()=>function(){const e=r(i),t=crypto.randomUUID();return{id:t,name:e,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",pictures:{src:`https://loremflickr.com/g/320/240/${t}`,description:`${e} description`}}}()))}generateOffersArray(){return s.map((e=>({type:e,offers:Array.from({length:a(0,9)},(()=>({id:crypto.randomUUID(),title:r(l),price:`${a(100,1e3)} €`})))})))}generatePointsArray(){return Array.from({length:5},(()=>{const e=r(s),t=r(this.destinations),n=a(0,1),i=this.offers.find((t=>t.type===e)),l=n?i.offers.slice(0,9).map((e=>e.id)):[];return function(e,t,n){return{id:crypto.randomUUID(),type:e,dateFrom:"Start DD MM YYYY",dateTo:"End DD MM YYYY",destination:t,basePrice:a(100,1e4),isFavorite:!!a(0,1),offers:n}}(e,t.id,l)}))}}class p{constructor(e){let{point:t}=e;this.point=t}getElement(){return this.element||(this.element=t((e=>{const t=r(i),{type:n,basePrice:s,isFavorite:l}=e;return`<li class="trip-events__item" >\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">MAR 18</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event ${n} icon">\n    </div >\n    <h3 class="event__title">${n} ${t}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n      </p>\n      <p class="event__duration">30M</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${s}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${(e=>(new o).offers.find((t=>t.type===e)).offers.map((e=>`<li class="event__offer" >\n      <span class="event__offer-title">${e.title}</span>\n    <span class="event__offer-price">${e.price}</span>\n</li> `)).join(""))(n)}\n    </ul >\n    <button class="event__favorite-btn ${l?"event__favorite-btn--active":""} " type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div >\n</li> `})(this.point))),this.element}removeElement(){this.element=null}}class d{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" disabled>\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" disabled>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{constructor(e){this.offersData=e}getElement(){return this.element||(this.element=t((e=this.offersData,`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                    <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                    <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                    <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                    <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                    <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                    <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                    <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                    <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                    <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${r(i)}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n            </div>\n\n            <div class="event__field-group  event__field-group--price">\n              <label class="event__label" for="event-price-1">\n                <span class="visually-hidden">Price</span>\n                &euro;\n              </label>\n              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n            </div>\n\n            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n            <button class="event__reset-btn" type="reset">Delete</button>\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </header>\n          <section class="event__details">\n            <section class="event__section  event__section--offers">\n              <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n              <div class="event__available-offers">\n              ${((e,t)=>(console.log(t,123),t.offers.find((t=>t.type===e)).offers.map((e=>`<div class="event__available-offers">\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="offer-${e.id}" type="checkbox" name="offer-${e.id}">\n        <label class="event__offer-label" for="offer-${e.id}">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n    </div>`)).join("")))(e)}\n              </div>\n            </section>\n\n            <section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n            </section>\n          </section>\n        </form>\n      </li>`))),this.element;var e}removeElement(){this.element=null}}class u{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const f=document.querySelector(".page-header"),h=f.querySelector(".trip-main"),m=f.querySelector(".trip-controls__filters"),y=document.querySelector(".page-main").querySelector(".trip-events"),b=new o,g=new class{constructor(e){this.service=e,this.destinations=this.service.getDestinations()}get(){return this.destinations}getById(e){return this.destinations.find((t=>t.id===e))}}(b),E=new class{constructor(e){this.service=e,this.offers=this.service.getOffers}get(){return this.offers}getByType(e){return this.offers.find((t=>t.type===e)).offers}}(b),C=new class{constructor(e){this.service=e,this.points=this.service.getPoints()}get(){return this.points}}(b),M=new class{constructor(e){let{sortContainer:t,tripInfoContainer:n,filterContainer:i,listContainer:s,destinationsModel:l,offersModel:a,pointsModel:r}=e;this.tripInfoContainer=n,this.filterContainer=i,this.sortContainer=t,this.listContainer=s,this.destinationModel=l,this.offersModel=[...a.get()],this.pointsModel=r,this.points=[...r.get()],this.board=null}renderEditPointComponent(){n(new _(this.offersModel),this.sortContainer)}renderInfoComponent(){n(new v,this.tripInfoContainer,e.AFTERBEGIN)}renderFilterComponent(){n(new c,this.filterContainer,e.AFTERBEGIN)}renderSortComponent(){n(new d,this.sortContainer)}renderListComponent(){n(new u,this.listContainer),this.board=document.querySelector(".trip-events__list")}renderEditPointComponent(){n(new _,this.board,e.AFTERBEGIN)}renderEvent(e){n(new p({point:e,pointDestination:this.destinationModel,pointOffers:this.offersModel}),this.board)}renderEvents(){this.points.forEach((e=>{this.renderEvent(e)}))}init(){this.renderSortComponent(),this.renderListComponent(),this.renderInfoComponent(),this.renderFilterComponent(),this.renderEditPointComponent(),this.renderEvents()}}({sortContainer:y,listContainer:y,tripInfoContainer:h,filterContainer:m,pointsModel:C,offersModel:E,destinationsModel:g});M.init()})();
//# sourceMappingURL=bundle.eaf5e1cdb5d39548027a.js.map