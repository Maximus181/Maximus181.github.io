let head = document.querySelector('.mainvalue');
let win = document.querySelector('.win');
let bet = document.querySelector('.bet');
let chance = document.querySelector('.chance');
let inps = document.querySelectorAll('.myinput');
let low = document.querySelector('.bilet_low');
let high = document.querySelector('bilet_high');
let low_ticket = document.querySelector('.lower_ticket');
let high_ticket = document.querySelector('.higher_ticket');
let btn_low = document.querySelector('.btn_low');
let btn_high = document.querySelector('.btn_high');
let result = document.querySelector('.result');
let balance = document.querySelector('.balance');
let please = document.querySelector('.please');
let varifycation = document.querySelector('.ver');
let help_win_r = document.querySelector('.help_win_r');
let help_win_l = document.querySelector('.help_win_l');
let max_bet = document.querySelector('.max_bet');
let min_bet = document.querySelector('.min_bet');
let x2_bet = document.querySelector('.x2_bet');
let half_bet = document.querySelector('.half_bet');
let max_chance = document.querySelector('.max_chance');
let min_chance = document.querySelector('.min_chance');
let x2_chance = document.querySelector('.x2_chance');
let half_chance = document.querySelector('.half_chance');

fetch('update.php').then(response => response.json()).then(data => {console.log(data); let nbalance = parseFloat(data.balance); balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
	inps.forEach(function(item){
	item.oninput = function(e){
    e.target.value = e.target.value.replace(/[^\d.]/g, '');
    checkbet();
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key == '.') {
    e.target.value = e.target.value.replace(/\D/g, ''); 
  }
});

btn_low.disabled = true;
btn_high.disabled = true;
setTimeout(function(){btn_low.disabled = false; btn_high.disabled = false;}, 1000)

let a;

let post_request = {
    "jsonrpc": "2.0",
    "method": "generateSignedIntegers",
    "params": {
        "apiKey": "834d50b8-62f1-4ca1-a23a-8cdefa0f4f64",
        "n": 1,
        "min": 0,
        "max": 999999,
        "replacement": true,
        "base": 10
    },
    "id": 6995
}



function onClick() {
    return fetch('https://api.random.org/json-rpc/4/invoke', {
        method: 'POST',
        body: JSON.stringify(post_request),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => { return response.json() }).then(response => {
        try {
            let random, signature;
            a = `${response.result.random.data[0]}`
            random = JSON.stringify(response.result.random)
            signature = response.result.signature
            randomer.value = random
            signatur_inp.value = signature
        } catch (error) {
            console.log(error)
        }
    })
}

function checkbet()
{
	if(chance.value > 95)
	{
		chance.value = 95;
	}
	let nBet = +bet.value, nChance = +chance.value;
	let res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	let nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	let nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
	if(chance.value == '' || bet.value == '' || chance.value == '0' || chance.value == '00' || chance.value == '000' || chance.value == '0000' || chance.value == '00000' || chance.value == '0.' || chance.value == '00.' || chance.value == '000.' || chance.value == '0000.' || bet.value == '0' || bet.value == '00' || bet.value == '000' || bet.value == '0000' || bet.value == '0.' || bet.value == '00.' || bet.value == '000.' || chance.value == '.' || bet.value == '.' || chance.value == '.0' || chance.value == '.00' || chance.value == '.000' || chance.value == '.0000' || chance.value == '0.000' || chance.value == '00.00' || chance.value == '000.0' || chance.value == '0.0' || chance.value == '0.00' || chance.value == '00.0' || bet.value < 1)
	{
		low_ticket.innerText = 0;
		high_ticket.innerText = 999999;
	}
	if(bet.value == '' || res == "Infinity" || chance.value == '' || chance.value == '0' || chance.value == '00' || chance.value == '000' || chance.value == '0000' || chance.value == '00000' || chance.value == '0.' || chance.value == '00.' || chance.value == '000.' || chance.value == '0000.' || bet.value == '0' || bet.value == '00' || bet.value == '000' || bet.value == '0000' || bet.value == '0.' || bet.value == '00.' || bet.value == '000.' || chance.value == '.' || bet.value == '.' || chance.value == '.0' || chance.value == '.00' || chance.value == '.000' || chance.value == '.0000' || chance.value == '0.000' || chance.value == '00.00' || chance.value == '000.0' || chance.value == '0.0' || chance.value == '0.00' || chance.value == '00.0' || bet.value < 1)
	{
		result.style.color = 'red';
		result.innerText = "Укажите сумму ставки от 1 до 9999 рублей или шанс от 0.01 до 95";
		setTimeout(function(){ result.innerText = "";}, 800)
	}
}

please.onclick = function(){
	if(nbalance < 0.999999999999999)
	{
		nbalance += 10000;
		balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
		let info = {
			"id": data.id,
			"username": data.username,
			"userpass": data.userpass,
			"balance": String(nbalance.toFixed(2))
		};
		console.log(JSON.stringify(info));
		fetch('new_update.php', {
		method: 'POST',
		headers: {
      		'Accept': 'application/json',
      		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(info),
        })
	}
	else if (nbalance >= 1)
	{
		alert('Харош просить у тебя еще есть бабки');
	}
}

btn_low.onclick = function(){
	btn_low.disabled = true;
	btn_high.disabled = true;
	onClick().then(response => {if(bet.value == '' || chance.value == '' || chance.value == '0' || chance.value == '00' || chance.value == '000' || chance.value == '0000' || chance.value == '00000' || chance.value == '0.' || chance.value == '00.' || chance.value == '000.' || chance.value == '0000.' || bet.value == '0' || bet.value == '00' || bet.value == '000' || bet.value == '0000' || bet.value == '0.' || bet.value == '00.' || bet.value == '000.' || chance.value == '.' || bet.value == '.' || chance.value == '.0' || chance.value == '.00' || chance.value == '.000' || chance.value == '.0000' || chance.value == '0.000' || chance.value == '00.00' || chance.value == '000.0' || chance.value == '0.0' || chance.value == '0.00' || chance.value == '00.0' || bet.value < '1')
	{
		varifycation.style.display = 'none';
		result.style.color = 'red';
		result.innerText = "Укажите сумму ставки от 1 до 9999 рублей или шанс от 0.01 до 95";
	}
	else
	{
		result.innerText = "";
		let nBet = +bet.value, nChance = +chance.value;
		let res = 100 / nChance * nBet;
		let winmoneylow = res - nBet;
		let nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
		let ran = a;
		if(ran <= nlow && ran >= 0)
		{
			result.style.color = 'green';
			result.innerText = "Вы выиграли " + res.toFixed(2) + " выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else if(nbalance <= 0)
			{
				result.style.color = 'red';
				nbalance = 0;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else
			{
				help_win_r.style.opacity = '1';
				help_win_r.style.visibility = 'visible';
				help_win_r.style.color = 'green';
				help_win_r.innerText = `+${winmoneylow.toFixed(2)}`;
				setTimeout(function(){help_win_r.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				help_win_l.style.opacity = '1';
				help_win_l.style.visibility = 'visible';
				help_win_l.style.color = 'green';
				help_win_l.innerText = `+${winmoneylow.toFixed(2)}`;
				setTimeout(function(){help_win_l.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				nbalance += winmoneylow;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
				let info = {
			"id": data.id,
			"username": data.username,
			"userpass": data.userpass,
			"balance": String(nbalance.toFixed(2))
		};
		console.log(JSON.stringify(info));
		fetch('new_update.php', {
		method: 'POST',
		headers: {
      		'Accept': 'application/json',
      		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(info),
        })
			}
		}
		else
		{
			result.style.color = 'red';
			result.innerText = "Вы проиграли выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				nbalance = nbalance;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else if(nbalance > nBet || nbalance == nBet)
			{
				help_win_r.style.opacity = '1';
				help_win_r.style.visibility = 'visible';
				help_win_r.style.color = 'red';
				help_win_r.innerText = `-${nBet.toFixed(2)}`;
				setTimeout(function(){help_win_r.style.opacity = '0';
				help_win_r.style.visibility = 'hidden';}, 700)
				help_win_l.style.opacity = '1';
				help_win_l.style.visibility = 'visible';
				help_win_l.style.color = 'red';
				help_win_l.innerText = `-${nBet.toFixed(2)}`;
				setTimeout(function(){help_win_l.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				nbalance -= nBet;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
				let info = {
			"id": data.id,
			"username": data.username,
			"userpass": data.userpass,
			"balance": String(nbalance.toFixed(2))
		};
		console.log(JSON.stringify(info));
		fetch('new_update.php', {
		method: 'POST',
		headers: {
      		'Accept': 'application/json',
      		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(info),
        })
			}
		}
		varifycation.style.display = 'block';
	}
	btn_low.disabled = false;
	btn_high.disabled = false;});
};

max_bet.onclick = function(){
	bet.value = nbalance.toFixed(2);
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
min_bet.onclick = function(){
	bet.value = 1;
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
x2_bet.onclick = function(){
	if(bet.value*2 <= 100000)
	{
		bet.value = (bet.value*2).toFixed(2);
	}
	else if(bet.value*2 > 100000)
	{
		bet.value = nbalance;
	}
	else
	{
		bet.value = bet.value;
	}
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
half_bet.onclick = function(){
	if(bet.value/2 >= 1)
	{
		bet.value = (bet.value/2).toFixed(2);
	}
	else if(bet.value/2 < 1)
	{
		bet.value = 1;
	}
	else
	{
		bet.value = bet.value;
	}
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
max_chance.onclick = function(){
	chance.value = 95;
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
min_chance.onclick = function(){
	chance.value = 0.01;
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
x2_chance.onclick = function(){
	if(chance.value*2 <= 95)
	{
		chance.value = (chance.value*2).toFixed(2);
	}
	else if(chance.value*2 > 95)
	{
		chance.value = 95;
	}
	else
	{
		chance.value = chance.value;
	}
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}
half_chance.onclick = function(){
	if(chance.value/2 >= 0.01)
	{
		chance.value = (chance.value/2).toFixed(2);
	}
	else if(chance.value/2 < 0.01)
	{
		chance.value = 0.01;
	}
	else
	{
		chance.value = chance.value;
	}
	nBet = +bet.value, nChance = +chance.value;
	res = 100 / nChance * nBet;
	win.innerText = res.toFixed(2);
	nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
	low_ticket.innerText = nlow;
	nhigh = 999999 - nlow;
	high_ticket.innerText = nhigh;
}

btn_high.onclick = function(){
	btn_low.disabled = true;
	btn_high.disabled = true;
	onClick().then(response => {if(bet.value == '' || chance.value == '' || chance.value == '0' || chance.value == '00' || chance.value == '000' || chance.value == '0000' || chance.value == '00000' || chance.value == '0.' || chance.value == '00.' || chance.value == '000.' || chance.value == '0000.' || bet.value == '0' || bet.value == '00' || bet.value == '000' || bet.value == '0000' || bet.value == '0.' || bet.value == '00.' || bet.value == '000.' || chance.value == '.' || bet.value == '.' || chance.value == '.0' || chance.value == '.00' || chance.value == '.000' || chance.value == '.0000' || chance.value == '0.000' || chance.value == '00.00' || chance.value == '000.0' || chance.value == '0.0' || chance.value == '0.00' || chance.value == '00.0' || bet.value < 1)
	{
		varifycation.style.display = 'none';
		result.style.color = 'red';
		result.innerText = "Укажите сумму ставки от 1 до 9999 рублей или шанс от 0.01 до 95";
	}
	else
	{
		result.innerText = "";
		let nBet = +bet.value, nChance = +chance.value;
		let res = 100 / nChance * nBet;
		let winmoneyhigh = res - nBet;
		let nlow = Math.trunc(499999 - ((50 - nChance) * 10000));
		let nhigh = 999999 - nlow;
		let ran = a;
		if(ran <= 999999 && ran >= nhigh)
		{
			result.style.color = 'green';
			result.innerText = "Вы выиграли " + res.toFixed(2) + " выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else if(nbalance <= 0)
			{
				result.style.color = 'red';
				nbalance = 0;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else
			{
				help_win_r.style.opacity = '1';
				help_win_r.style.visibility = 'visible';
				help_win_r.style.color = 'green';
				help_win_r.innerText = `+${winmoneyhigh.toFixed(2)}`;
				setTimeout(function(){help_win_r.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				help_win_l.style.opacity = '1';
				help_win_l.style.visibility = 'visible';
				help_win_l.style.color = 'green';
				help_win_l.innerText = `+${winmoneyhigh.toFixed(2)}`;
				setTimeout(function(){help_win_l.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				nbalance += winmoneyhigh;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
				let info = {
			"id": data.id,
			"username": data.username,
			"userpass": data.userpass,
			"balance": String(nbalance.toFixed(2))
		};
		console.log(JSON.stringify(info));
		fetch('new_update.php', {
		method: 'POST',
		headers: {
      		'Accept': 'application/json',
      		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(info),
        })
			}
		}
		else
		{
			result.style.color = 'red';
			result.innerText = "Вы проиграли выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				nbalance = nbalance;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс либо уменьшите суму ставки на 0.01";
			}
			else if(nbalance > nBet || nbalance == nBet)
			{
				help_win_r.style.opacity = '1';
				help_win_r.style.visibility = 'visible';
				help_win_r.style.color = 'red';
				help_win_r.innerText = `-${nBet.toFixed(2)}`;
				setTimeout(function(){help_win_r.style.opacity = '0';
				help_win_r.style.visibility = 'hidden';}, 700)
				help_win_l.style.opacity = '1';
				help_win_l.style.visibility = 'visible';
				help_win_l.style.color = 'red';
				help_win_l.innerText = `-${nBet.toFixed(2)}`;
				setTimeout(function(){help_win_l.style.opacity = '0';
				help_win_l.style.visibility = 'hidden';}, 700)
				nbalance -= nBet;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
				let info = {
			"id": data.id,
			"username": data.username,
			"userpass": data.userpass,
			"balance": String(nbalance.toFixed(2))
		};
		console.log(JSON.stringify(info));
		fetch('new_update.php', {
		method: 'POST',
		headers: {
      		'Accept': 'application/json',
      		'Content-Type': 'application/json'
    	},
        body: JSON.stringify(info),
        })
			}
		}
		varifycation.style.display = 'block';
	}
	btn_low.disabled = false;
	btn_high.disabled = false;});
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}})