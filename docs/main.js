(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");



class AppComponent {
    constructor() {
        this.title = 'ng-conway';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [["cols", "30", "rows", "20"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "! ");
    } }, directives: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _iteration_speed_iteration_speed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iteration-speed/iteration-speed.component */ "./src/app/iteration-speed/iteration-speed.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
        _iteration_speed_iteration_speed_component__WEBPACK_IMPORTED_MODULE_5__["IterationSpeedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
                    _iteration_speed_iteration_speed_component__WEBPACK_IMPORTED_MODULE_5__["IterationSpeedComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid/conway.ts":
/*!********************************!*\
  !*** ./src/app/grid/conway.ts ***!
  \********************************/
/*! exports provided: NewCellValue, Conway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCellValue", function() { return NewCellValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conway", function() { return Conway; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/app/grid/grid.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/app/grid/timer.ts");


function NewCellValue(isAlive, neighbours) {
    if (!isAlive && neighbours === 3) {
        return true;
    }
    if (!isAlive) {
        return false;
    }
    if (neighbours < 2 || neighbours > 3) {
        return false;
    }
    return isAlive;
}
class Conway {
    constructor(grid) {
        this.grid = grid;
    }
    startIterate(timeout) {
        const callBack = this.iterate.bind(this);
        _timer__WEBPACK_IMPORTED_MODULE_1__["TimerSingleton"].Instance.repeat('conway', timeout, callBack);
    }
    stopIterate() {
        _timer__WEBPACK_IMPORTED_MODULE_1__["TimerSingleton"].Instance.stop('conway');
    }
    iterate() {
        console.log('Iterate');
        const newGrid = new _grid__WEBPACK_IMPORTED_MODULE_0__["Grid"](this.grid.rows, this.grid.cols);
        for (let r = 0; r < this.grid.rows; r++) {
            for (let c = 0; c < this.grid.cols; c++) {
                const numNeighbours = this.grid.numberOfLiveNeighbours(r, c);
                const isAlive = this.grid.getCell(r, c);
                newGrid.setCell(r, c, NewCellValue(isAlive, numNeighbours));
            }
        }
        if (this.grid.equals(newGrid)) {
            this.stopIterate();
        }
        this.grid.setWithGrid(newGrid);
    }
}


/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/app/grid/grid.ts");
/* harmony import */ var _conway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conway */ "./src/app/grid/conway.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/app/grid/timer.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iteration_speed_iteration_speed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iteration-speed/iteration-speed.component */ "./src/app/iteration-speed/iteration-speed.component.ts");







const _c0 = function (a0) { return { "width": a0 }; };
function GridComponent_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_tr_1_td_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const c_r5 = ctx.index; const r_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.switchCell(r_r2, c_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.index;
    const r_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.getWidth()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getCSSClass(r_r2, c_r5));
} }
function GridComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_tr_1_td_1_Template, 3, 4, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gridRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gridRow_r1);
} }
class GridComponent {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.waitMillisAfterSwitchCell = 1000;
        this.waitMillisBetweenIterations = 1000;
    }
    ngOnInit() {
        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](this.rows, this.cols);
        this.conway = new _conway__WEBPACK_IMPORTED_MODULE_2__["Conway"](this.grid);
        this.conway.startIterate(this.waitMillisBetweenIterations);
    }
    switchCell(r, c) {
        this.restartTimer();
        this.grid.switchCell(r, c);
    }
    restartTimer() {
        this.conway.stopIterate();
        _timer__WEBPACK_IMPORTED_MODULE_3__["TimerSingleton"].Instance.stop('startConwayIteration');
        const startIterate = this.conway.startIterate.bind(this.conway, this.waitMillisBetweenIterations);
        _timer__WEBPACK_IMPORTED_MODULE_3__["TimerSingleton"].Instance.once('startConwayIteration', this.waitMillisAfterSwitchCell, startIterate);
    }
    getCSSClass(r, c) {
        return (this.grid.getCell(r, c) ? 'cell-live' : 'cell-dead');
    }
    getWidth() {
        return (100.0 / this.cols) + '%';
    }
    speedChanged(speed) {
        this.waitMillisBetweenIterations = speed;
        this.restartTimer();
        console.log(speed);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { rows: "rows", cols: "cols", waitMillisAfterSwitchCell: "waitMillisAfterSwitchCell", waitMillisBetweenIterations: "waitMillisBetweenIterations" }, decls: 3, vars: 1, consts: [[1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "speedChange"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "ngClass", "click"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_tr_1_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-iteration-speed", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("speedChange", function GridComponent_Template_app_iteration_speed_speedChange_2_listener($event) { return ctx.speedChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grid.grid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _iteration_speed_iteration_speed_component__WEBPACK_IMPORTED_MODULE_5__["IterationSpeedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".table[_ngcontent-%COMP%] {\n  border: solid orange;\n  border-spacing: 1px;\n  border-collapse: separate;\n  width: 100%;\n\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0px;\n  border: none;\n  border-spacing: 0px;\n}\n\n.cell-live[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.cell-dead[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXOztBQUViOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gIGJvcmRlcjogc29saWQgb3JhbmdlO1xuICBib3JkZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4udGFibGUgdGQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLmNlbGwtbGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uY2VsbC1kZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.css']
            }]
    }], function () { return []; }, { rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], waitMillisAfterSwitchCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], waitMillisBetweenIterations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/grid/grid.ts":
/*!******************************!*\
  !*** ./src/app/grid/grid.ts ***!
  \******************************/
/*! exports provided: Cell, BREAK, CONTINUE, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTINUE", function() { return CONTINUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
class Cell {
    constructor(_cell = false) {
        this._cell = _cell;
    }
    get cell() {
        return this._cell;
    }
    set cell(cell) {
        this._cell = cell;
    }
    toString() {
        return '' + this._cell;
    }
}
const BREAK = false;
const CONTINUE = true;
class Grid {
    constructor(rows = 10, cols = 10) {
        this.rows = rows;
        this.cols = cols;
        this.eachCell = (f) => {
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (f(r, c, this.grid[r][c]) === BREAK) {
                        return;
                    }
                }
            }
        };
        this.grid = [];
        for (let r = 0; r < rows; r++) {
            this.grid.push([]);
            for (let c = 0; c < cols; c++) {
                this.grid[r].push(new Cell());
            }
        }
    }
    setWithGrid(newGrid) {
        this.eachCell((r, c, cell) => {
            cell.cell = newGrid.getCell(r, c);
            return CONTINUE;
        });
    }
    isInGrid(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }
    setCell(row, col, val) {
        if (this.isInGrid(row, col)) {
            this.grid[row][col].cell = val;
        }
    }
    switchCell(row, col) {
        this.setCell(row, col, !this.getCell(row, col));
    }
    getCell(row, col) {
        return this.isInGrid(row, col) && this.grid[row][col].cell;
    }
    numberOfLiveNeighbours(row, col) {
        let neighbours = 0;
        for (let r = -1; r < 2; r++) {
            for (let c = -1; c < 2; c++) {
                if (r === 0 && c === 0) {
                    continue;
                }
                neighbours += this.getCell(row + r, col + c) ? 1 : 0;
            }
        }
        return neighbours;
    }
    toString() {
        return this.grid.join(',');
    }
    equals(otherGrid) {
        if (otherGrid.rows !== this.rows || otherGrid.cols !== this.cols) {
            return false;
        }
        return this.toString() === otherGrid.toString();
    }
}


/***/ }),

/***/ "./src/app/grid/timer.ts":
/*!*******************************!*\
  !*** ./src/app/grid/timer.ts ***!
  \*******************************/
/*! exports provided: TimerSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerSingleton", function() { return TimerSingleton; });
class Timer {
    constructor(jsTimerId, once = false) {
        this.jsTimerId = jsTimerId;
        this.once = once;
    }
}
class TimerSingleton {
    constructor() {
        this.timers = {};
    }
    static get Instance() {
        return TimerSingleton._instance;
    }
    repeat(timerId, intervalInMillis, callBack) {
        this.startTimer(timerId, intervalInMillis, callBack);
    }
    once(timerId, intervalInMillis, callBack) {
        this.startTimer(timerId, intervalInMillis, callBack, true);
    }
    startTimer(timerId, intervalInMillis, callBack, once = false) {
        if (!this.timers[timerId]) {
            let jsTimerId;
            if (once) {
                const wrappedCallBack = () => (delete this.timers[timerId], callBack());
                jsTimerId = setTimeout(wrappedCallBack, intervalInMillis);
            }
            else {
                jsTimerId = setInterval(callBack, intervalInMillis);
            }
            this.timers[timerId] = new Timer(jsTimerId, once);
        }
    }
    stop(timerId) {
        if (this.timers[timerId]) {
            const jsTimerId = this.timers[timerId].jsTimerId;
            const once = this.timers[timerId].once;
            if (once) {
                clearTimeout(jsTimerId);
            }
            else {
                clearInterval(jsTimerId);
            }
            delete this.timers[timerId];
        }
    }
}
TimerSingleton._instance = new TimerSingleton();


/***/ }),

/***/ "./src/app/iteration-speed/iteration-speed.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/iteration-speed/iteration-speed.component.ts ***!
  \**************************************************************/
/*! exports provided: IterationSpeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationSpeedComponent", function() { return IterationSpeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");



class IterationSpeedComponent {
    constructor() {
        this.value = 1000;
        this.speedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    formatLabel(value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    onChange(event) {
        console.log(event);
        this.speedChange.emit(event.value);
    }
}
IterationSpeedComponent.ɵfac = function IterationSpeedComponent_Factory(t) { return new (t || IterationSpeedComponent)(); };
IterationSpeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IterationSpeedComponent, selectors: [["app-iteration-speed"]], outputs: { speedChange: "speedChange" }, decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "100", "min", "100", "max", "5000", "value", "1000", 3, "displayWith", "change"]], template: function IterationSpeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IterationSpeedComponent_Template_mat_slider_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSlider"]], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlcmF0aW9uLXNwZWVkL2l0ZXJhdGlvbi1zcGVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaXRlcmF0aW9uLXNwZWVkL2l0ZXJhdGlvbi1zcGVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IterationSpeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iteration-speed',
                templateUrl: './iteration-speed.component.html',
                styleUrls: ['./iteration-speed.component.css']
            }]
    }], function () { return []; }, { speedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/peter/repo/ng-conway/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map