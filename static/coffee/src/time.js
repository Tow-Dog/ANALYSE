// Generated by CoffeeScript 1.3.3
(function() {

  this.Time = (function() {

    function Time() {}

    Time.format = function(time) {
      var hours, minutes, pad, seconds;
      pad = function(number) {
        if (number < 10) {
          return "0" + number;
        } else {
          return number;
        }
      };
      seconds = Math.floor(time);
      minutes = Math.floor(seconds / 60);
      hours = Math.floor(minutes / 60);
      seconds = seconds % 60;
      minutes = minutes % 60;
      if (hours) {
        return "" + hours + ":" + (pad(minutes)) + ":" + (pad(seconds % 60));
      } else {
        return "" + minutes + ":" + (pad(seconds % 60));
      }
    };

    Time.convert = function(time, oldSpeed, newSpeed) {
      return (time * oldSpeed / newSpeed).toFixed(3);
    };

    return Time;

  })();

}).call(this);
