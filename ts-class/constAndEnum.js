var PI = 3.14;
var COLOR_RED = '#ff0000';
var COLOR_GREEN = '#00ff00';
var COLOR_BLUE = '#0000ff';
// const studentDetails = {
//     name: 'a',
//     place: 'blr',
//     id: 's001'
// };
// studentDetails.name = 'b';
var color = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
// color.blue = 'asdfads';
var COLOR;
(function (COLOR) {
    COLOR["red"] = "#ff0000";
    COLOR["green"] = "#00ff00";
    COLOR["blue"] = "#0000ff";
})(COLOR || (COLOR = {}));
console.log(COLOR);
console.log(COLOR.red);
console.log(COLOR.green);
