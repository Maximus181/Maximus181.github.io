let promo_input = document.querySelector('.promo_input');
let create_promo = document.querySelector('.promo_name');
let create_btn = document.querySelector('.create_btn');
let balance = document.querySelector('.balance');
let promo_btn = document.querySelector('.promo_btn');
let active = document.querySelector('.promo_active');
let val = document.querySelector('.promo_value');
let pop_block = document.querySelector('.pop_block');

promo_input.onkeydown = function(e){
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 4) {
        promo_input.value = promo_input.value + "-";
    }
    if(e.target.value.length === 9) 
    {
        promo_input.value = promo_input.value + "-";
    }
}

create_promo.onkeydown = function(e){
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 4) {
        create_promo.value = create_promo.value + "-";
    }
    if(e.target.value.length === 9) 
    {
        create_promo.value = create_promo.value + "-";
    }
}

fetch('update.php').then(response => response.json()).then(data => {console.log(data);  let nbalance = parseFloat(data.balance); balance.innerText = "Баланс: " + nbalance.toFixed(2) + " uah";
	create_promo.onkeyup = function(e){
		this.value = this.value.replace(/[^\d-]/g,'');
		if(e.keyCode == 189)
		{
			this.value = this.value.replace(/[^\d]/g,'');
		}
	}
	active.oninput = function(){
		if(active.value > 10)
		{
			active.value = 10;
		}
		if(active.value < 1)
		{
			active.value = '';
		}
	}
	val.oninput = function(){
		if(val.value > 1000)
		{
			val.value = 1000;
		}
		if(val.value < 1)
		{
			val.value = '';
		}
	}
	myForm.addEventListener('submit', function(e) {
	e.preventDefault();

let formData1 = new FormData(this);

fetch('promo.php', {
	method: 'post',
	body: formData1
}).then(function(response){
	return response.text();
}).then(function(text){
	pop_block.innerText = text;
	if(text == 'Промокод успешно акивирован')
	{
		pop_block.style.background = 'green';
		pop_block.style.opacity = '1';
		pop_block.style.visibility = 'visible';
		promo_btn.disabled = true;
		setTimeout(function(){pop_block.style.opacity = '0';pop_block.style.visibility = 'hidden'; promo_btn.disabled = false;}, 1500)
	}
	else
	{
		pop_block.style.background = 'red';
		pop_block.style.opacity = '1';
		pop_block.style.visibility = 'visible';
		promo_btn.disabled = true;
		setTimeout(function(){pop_block.style.opacity = '0';pop_block.style.visibility = 'hidden'; promo_btn.disabled = false;}, 1500)
	}
})});
	mysecform.addEventListener('submit', function(e){
		e.preventDefault();

		let formData2 = new FormData(this);

		fetch('create_promo.php', {
			method: 'post',
			body: formData2
		}).then(function(response){
			return response.text();
		}).then(function(text){
		pop_block.innerText = text;
	if(text == 'Промокод успешно создан')
	{
		pop_block.style.background = 'green';
		pop_block.style.opacity = '1';
		pop_block.style.visibility = 'visible';
		create_btn.disabled = true;
		setTimeout(function(){pop_block.style.opacity = '0';pop_block.style.visibility = 'hidden'; create_btn.disabled = false;}, 1500)
	}
	else
	{
		pop_block.style.background = 'red';
		pop_block.style.opacity = '1';
		pop_block.style.visibility = 'visible';
		create_btn.disabled = true;
		setTimeout(function(){pop_block.style.opacity = '0';pop_block.style.visibility = 'hidden'; create_btn.disabled = false;}, 1500)
	}
		})
	})
})