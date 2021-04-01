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

let nbalance = 100000;
balance.innerText = "Баланс: " + nbalance + " uah";

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
	let nlow = 499999 - ((50 - nChance) * 10000);
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
	}
	else
	{
		result.innerText = "";
	}
}

please.onclick = function(){
	if(nbalance < 0.999999999999999)
	{
		nbalance += 10000;
		balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
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
		let nlow = 499999 - ((50 - nChance) * 10000);
		let ran = a;
		if(ran <= nlow && ran >= 0)
		{
			result.style.color = 'green';
			result.innerText = "Вы выиграли " + res.toFixed(2) + " выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else if(nbalance <= 0)
			{
				result.style.color = 'red';
				nbalance = 0;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else
			{
				nbalance += winmoneylow;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
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
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else if(nbalance > nBet || nbalance == nBet)
			{
				nbalance -= nBet;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
			}
		}
		varifycation.style.display = 'block';
	}
	btn_low.disabled = false;
	btn_high.disabled = false;});
};

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
		let nlow = 499999 - ((50 - nChance) * 10000);
		let nhigh = 999999 - nlow;
		let ran = a;
		if(ran <= 999999 && ran >= nhigh)
		{
			result.style.color = 'green';
			result.innerText = "Вы выиграли " + res.toFixed(2) + " выпало число: " + ran;
			if(nbalance < nBet)
			{
				result.style.color = 'red';
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else if(nbalance <= 0)
			{
				result.style.color = 'red';
				nbalance = 0;
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else
			{
				nbalance += winmoneyhigh;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
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
				result.innerText = "У вас недостаточно средств для ставки пополните баланс или сделайте ставку равную вашему балансу но на 0.01 меньше";
			}
			else if(nbalance > nBet || nbalance == nBet)
			{
				nbalance -= nBet;
				balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
			}
		}
		varifycation.style.display = 'block';
	}
	btn_low.disabled = false;
	btn_high.disabled = false;});
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
