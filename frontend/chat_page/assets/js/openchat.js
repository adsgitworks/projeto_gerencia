

(function(){
		
	fetch('http://sandbox.api.simsimi.com/request.p?key=6e06030e-1f69-4b3e-bcd2-2ea0b7893edf&lc=pt&ft=1.0&text=eae')
  .then(response => response.json())
  .then(json => console.log(json))

	getFromClass('pcontainer',0).onclick = function(){
		if(!this.clicks){

			this.clicks = 1

			id('intro_area').style.visibility = 'hidden'
			id('chat').style.display = 'block'

			id('send-parent').addEventListener('click', function(){

			})

			function addMessage(text){
				let messageHTML = `<div class="message-patern"><div class="span-patern"><div class="message">${text}</span></div></div>`
				id('allmsgs').insertAdjacentHTML('beforeend',messageHTML)
			}

			id('sentinput').addEventListener('keydown', function(e) {
				if(e.keyCode == 13){
					if(e.target.value){
						addMessage(e.target.value)
						e.target.value = ''
					}
				}
			})
		}



	}
})()