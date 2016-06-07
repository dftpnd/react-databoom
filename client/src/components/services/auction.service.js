import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

let instance = null;

var auction_default_mins = 24;
var auction_bid_addition_secs = 60;
var minimum_bid = 1;

//moment.locale('ru');

class auction {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }




  processCarList(carlist, buyer_id){
    var res = [];
    for (var i in carlist) {
      var car = carlist[i];
      this.processCar(car, buyer_id);
      if (car.time_left_sec >= 0) {
        res.push(car);
      }
    }
    return res;
  }

  processCar(car, buyer_id){
    var has_my_bids = false;
    var max_bid = null;
    var buyers2bids = {}; //max bids of buyers
    if (car.bids && car.bids.length > 0) {
      var max_bid = car.bids[0];
      if (max_bid.value == undefined) max_bid.value = 0; //quick patch (occured empty bids)
      for (var b in car.bids) {
        var bid = car.bids[b];
        if (bid.buyers && bid.buyers.length > 0) {
          var buyer_id = bid.buyers[0].id;
          if (buyers2bids[buyer_id] == undefined || buyers2bids[buyer_id].value < bid.value)
          {
            buyers2bids[bid.buyers[0].id] = bid;
          }
        }
        if (isNaN(bid.value)) {
          continue;//skip wrong values (на всякий случай)
        }
        if (bid.value && bid.value > max_bid.value) {
          max_bid = bid;
        }
        if (bid.buyers && bid.buyers.length > 0 && bid.buyers[0].id == buyer_id) {
          has_my_bids = true;
        }
      }
      car.buyers2bids = buyers2bids;

    } else {
      max_bid = { value: 1 };

    }

    car.max_bid = max_bid;
    car.has_my_bids = has_my_bids;
    car.my_bid_wins = false;

    /* Set Win/Lose bid of current user */
    if(car.has_my_bids == true)
    {
      var winning_buyer_id = car.max_bid.buyers[0].id;
      car.my_bid_wins = winning_buyer_id == buyer_id;
    }

    car.time_left_sec = this.calculateTimeLeft(car);
    car.timeLeftStr = this.formatTimeLeft(car.time_left_sec);

    car.minBidValue = this.calculateMinimumBid(car.max_bid.value);

  }

  processFinishedCarList(carlist)
  {
    var res = [];
    for (var i in carlist) {
      var car = carlist[i];
      this.processCar(car, 'no buyer id'); //TODO: make buyer_id optional
      if (car.time_left_sec < 0) {
        res.push(car);
      }
    }

    //order by date of maxbid
    res.sort(function (a, b) {
      if (a.max_bid && b.max_bid) //quick fix (этой провеки делать не надо, т.к. таких данных не может быть, но они есть из-за ошибки в БД)
      {
        return (a.max_bid.dt > b.max_bid.dt) ? 1 : (a.max_bid.dt < b.max_bid.dt) ? -1 : 0;
      } else {
        return 1;
      }

    });

    return res;
  }


  calculateTimeLeft(car)
  {
    var start_time = moment().subtract(7, 'days'); //defult valuse in case auction_start not filled
    if (car.auction_start) {
      start_time = moment(car.auction_start);
    }

    var auct_time_mins;
    if (car.auction_time_mins)
    {
      auct_time_mins = car.auction_time_mins;
    } else
    {
      auct_time_mins = auction_default_mins;
    }

    var cur_moment = moment();
    var mins_passed = cur_moment.diff(start_time, 'minutes');
    var time_left_sec = -1;
    car.logical_end_moment = start_time.add(auct_time_mins, 'minutes').toDate();
    var end_moment = start_time; //added in above line...
    if (mins_passed >= auct_time_mins) {
      if (car.max_bid.value == 1) {
        //default 1 r. bid
      } else {
        var bid_start = moment(car.max_bid.dt);
        var bid_secs_passed = cur_moment.diff(bid_start, 'seconds');
        var bid_end_time = bid_start.add(auction_bid_addition_secs, 'seconds');
        car.logical_end_moment = bid_end_time.toDate(); //override end time (bids are fighting still)
        if (bid_secs_passed > auction_bid_addition_secs) {
        } else {
          time_left_sec = bid_end_time.diff(cur_moment, 'seconds');
        }
      }
    } else {
      if (car.max_bid.value == 1) {
        //default 1 r. bid
        //24 mins from start
        time_left_sec = end_moment.diff(cur_moment, 'seconds');
      } else {
        var bid_start = moment(car.max_bid.dt);
        var bid_end_time = moment(car.max_bid.dt).add(auction_bid_addition_secs, 'seconds');
        if (end_moment.diff(bid_start, 'seconds') < auction_bid_addition_secs)
        {
          //1 min from last bid
          time_left_sec = bid_start.add(auction_bid_addition_secs, 'seconds').diff(cur_moment, 'seconds');
          car.logical_end_moment = bid_end_time.toDate(); //override end time (bids are fighting still)
        } else {
          //24 mins from start
          time_left_sec = end_moment.diff(cur_moment, 'seconds');
        }
      }
    }
    return time_left_sec;
  }

  formatTimeLeft(time_left_sec)
  {
    //var time_left_str = moment.utc(time_left_sec * 1000).format("mm:ss");
    //return time_left_str;

    if (time_left_sec < 3600)
    {
      return moment.utc(time_left_sec * 1000).format("mm:ss");
    } else
    {
      return moment().add(time_left_sec, 'seconds').fromNow();
    }
  }

  calculateMinimumBid(maxBidValue)
  {
    var min_bid = 0;
    min_bid = Math.max(maxBidValue*1.05, 1000);
    min_bid = min_bid % 1000 == 0 ? min_bid : min_bid + (1000 - min_bid % 1000);
    return min_bid;
  }
}

export default new auction();
