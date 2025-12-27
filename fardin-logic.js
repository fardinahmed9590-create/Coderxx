// Enter your leaderboard name 
let lname = "Fardin"; 
// Enter your initial capital 
let iblafp = 10000; 
// Change the URL to a new one 
var newUrl = "https://market-qx.trade/en/trade"; 
window.history.pushState({}, "", newUrl); 
// --- NEW REACT SELECTORS FOR 2025 ---
const REACT_INFO_NAME = '[class*="Usermenu-styles-module__infoName"]';
const REACT_INFO_WRAPPER = '[class*="Usermenu-styles-module__infoWrapper"]';
const REACT_INFO_BALANCE = '[class*="Usermenu-styles-module__infoBalance"]';
const REACT_INFO_LEVELS = '[class*="Usermenu-styles-module__infoLevels"]';
const REACT_ITEM_MONEY = '[class*="item-money"], .panel-leader-board__item-money';
const REACT_LEADER_ITEM = '[class*="LeaderBoard-styles-module__item"], .panel-leader-board__item';
// Change live account to demo by text and active 
setInterval(function() {
    let nameLabel = document.querySelector(REACT_INFO_NAME) || document.querySelector(REACT_INFO_WRAPPER);
    if (nameLabel) {
        nameLabel.innerHTML = "LIVE";
        nameLabel.style.color = "#0faf59";
    }
}, 500);
let elm1 = document.getElementsByClassName("sidebar__button")[1]; 
if(elm1) elm1.setAttribute("id", "real"); 
let elm2 = document.getElementsByClassName("sidebar__button")[2]; 
if(elm2) elm2.setAttribute("id", "demo"); 
let eler = document.getElementById("real"); 
if(eler) eler.classList.add("active"); 
let eled = document.getElementById("demo"); 
if(eled) eled.classList.remove("active"); 
// function for dynamic all thing 
setInterval(function () { 
    let balanceNode = document.querySelector(REACT_INFO_BALANCE);
    if (!balanceNode) return;
    let blc = balanceNode.innerHTML; 
    blc = blc.replaceAll(",", ""); 
    blc = blc.replaceAll("$", ""); 
    blc = blc.replaceAll(".", ""); 
    blc = blc.substring(0, blc.length - 2); 
    blc = parseInt(blc); 
    let icoin; 
    if (blc < 5000) { 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>'; 
    } else if (blc >= 5000 && blc < 10000) { 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>'; 
    } else if (blc >= 10000) { 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>'; 
    } 
    let levelsNode = document.querySelector(REACT_INFO_LEVELS);
    if(levelsNode) levelsNode.innerHTML = icoin; 
}, 10); 
setInterval(function () { 
    let balanceNode = document.querySelector(REACT_INFO_BALANCE);
    if (!balanceNode) return;
    let blc = balanceNode.innerHTML; 
    blc = blc.replaceAll(",", ""); 
    blc = blc.replaceAll("$", ""); 
    blc = blc.replaceAll(".", ""); 
    blc = blc.substring(0, blc.length - 2); 
    blc = parseInt(blc); 
    let icoin; let levelName; let levelProfit; 
    if (blc < 5000) { 
        levelProfit = '+0% profit'; levelName = "STANDARD:"; 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>'; 
    } else if (blc >= 5000 && blc < 10000) { 
        levelProfit = '+2% profit'; levelName = "PRO:"; 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>'; 
    } else if (blc >= 10000) { 
        levelProfit = '+4% profit'; levelName = "VIP:"; 
        icoin = '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>'; 
    } 
    let menu = document.getElementsByClassName("usermenu__dropdown")[0];
    if (menu != null) { 
        document.getElementsByClassName("usermenu__level-icon")[0].innerHTML = icoin; 
        document.getElementsByClassName("usermenu__level-name")[0].innerHTML = levelName; 
        document.getElementsByClassName("usermenu__level-profit")[0].innerHTML = levelProfit; 
        document.getElementsByClassName("usermenu__select-balance")[0].innerHTML = balanceNode.innerHTML; 
        document.getElementsByClassName("usermenu__select-balance")[1].innerHTML = "$10,000.00"; 
        
        let real1 = document.getElementsByClassName("usermenu__select-item--radio")[0]; 
        if(real1) { real1.setAttribute("id", "real1"); document.getElementById("real1").classList.add("active"); }
        let demo1 = document.getElementsByClassName("usermenu__select-item--radio")[1]; 
        if(demo1) { demo1.setAttribute("id", "demo1"); document.getElementById("demo1").classList.remove("active"); }
    } 
}, 10);
// Leaderboard logic
setInterval(function () { 
    var leaderboard = document.querySelector('.app--sidepanel-open'); 
    if (leaderboard != null) { 
        let loader = document.querySelector(".position__loading");
        if(loader) { loader.style.background = "#0faf59"; loader.style.height = "2px"; }
        let balanceNode = document.querySelector(REACT_INFO_BALANCE);
        if(!balanceNode) return;
        let lblc = balanceNode.innerHTML; 
        lblc = lblc.replaceAll(",", ""); lblc = lblc.replaceAll("$", ""); lblc = lblc.replaceAll(".", ""); 
        lblc = parseInt(lblc); 
        
        let lprofit_num = lblc - (iblafp * 100); 
        let lprofit = lprofit_num.toString(); 
        // Manual string formatting 
        if (lprofit == "0") { lprofit = "$0.00"; } 
        else if (lprofit.length == 3) { lprofit = "$" + lprofit.slice(0, 1) + "." + lprofit.slice(1, 3); } 
        else if (lprofit.length == 4) { lprofit = "$" + lprofit.slice(0, 2) + "." + lprofit.slice(2, 4); } 
        else if (lprofit.length == 5) { lprofit = "$" + lprofit.slice(0, 3) + "." + lprofit.slice(3, 5); } 
        else if (lprofit.length == 6) { lprofit = "$" + lprofit.slice(0, 1) + "," + lprofit.slice(1, 4) + "." + lprofit.slice(4, 6); } 
        else if (lprofit.length >= 7) { lprofit = "$" + lprofit.slice(0, lprofit.length-5) + "," + lprofit.slice(-5, -2) + "." + lprofit.slice(-2); }
        let posHead = document.querySelector(".position__header-money");
        if(posHead) { posHead.innerHTML = lprofit; posHead.className = "position__header-money --green"; }
        let moneyNodes = document.querySelectorAll(REACT_ITEM_MONEY); 
        if(moneyNodes.length < 10) return;
        let p1 = parseInt(moneyNodes[0].innerText.replace(/[^0-9]/g,""));
        let p2 = parseInt(moneyNodes[1].innerText.replace(/[^0-9]/g,""));
        let p3 = parseInt(moneyNodes[2].innerText.replace(/[^0-9]/g,""));
        let p20 = moneyNodes[19] ? parseInt(moneyNodes[19].innerText.replace(/[^0-9]/g,"")) : 0;
        let blcpo = lprofit_num; 
        let footer = document.querySelector(".position__footer");
        if (blcpo < (p20 - 10000)) { 
            let po = Math.abs(Math.round((32500 - blcpo / 50000) / 100)); 
            if(footer) footer.innerHTML = '<div class="position__footer-title">Your position:</div>' + po; 
        } else { 
            let items = document.querySelectorAll(REACT_LEADER_ITEM);
            if (blcpo > p2) { 
                if(footer) footer.innerHTML = '<div class="position__footer-title">Your position:</div>1'; 
                if(items[0]) items[0].innerHTML = '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-gold.svg"><div class="panel-leader-board__item-key__place ">1</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-in"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' + lname + '</div></div><div class="panel-leader-board__item-money --green">' + lprofit + "</div>"; 
            } else if (blcpo < p2 && blcpo > p3) { 
                if(footer) footer.innerHTML = '<div class="position__footer-title">Your position:</div>2'; 
                if(items[1]) items[1].innerHTML = '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-serebro.svg"><div class="panel-leader-board__item-key__place ">2</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-in"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' + lname + '</div></div><div class="panel-leader-board__item-money --green">' + lprofit + "</div>"; 
            }
            // You can add more 'else if' for p3, p4 etc. following the same pattern.
        } 
    } 
}, 1000);
