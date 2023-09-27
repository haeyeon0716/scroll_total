const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll('ul li')
const speed = 500;
let posArr =[];
//로딩이 되자마자 스크롤 이동해야 되는 section의 세로 위치값을 배열에 저장
secs.forEach(sec => posArr.push(sec.offsetTop));

//버튼 반복 돌ㄹ면서 이벤트 연결
btns.forEach((btn,idx)=>{
	//각 버튼 클릭시 클릭한 순번의 세로 섹션 배열 위치값으로 스크롤 모션 이동
	btn.addEventListener('click', ()=>{
		new Anime(window, {scroll: posArr[idx]}, {duration: speed})
	})
})

//브라우저 스크롤시 현재 스크롤 위치값이 특정 순번에 섹션 영역에 도달하면 해단 순번에 버튼 활성화
window.addEventListener('scroll', ()=>{
	const scroll = window.scrollY;
	if(scroll>= posArr[0]){
		btns.forEach(btn => btn.classList.remove('on'));
		btns[0].classList.add('on')
	}
	if(scroll>= posArr[1]){
		btns.forEach(btn => btn.classList.remove('on'));
		btns[1].classList.add('on')
	}
	if(scroll>= posArr[2]){
		btns.forEach(btn => btn.classList.remove('on'));
		btns[2].classList.add('on')
	}
	if(scroll>= posArr[3]){
		btns.forEach(btn => btn.classList.remove('on'));
		btns[3].classList.add('on')
	}
})




function splitText(selector, interval = 0, delay = 0) {
	let count = 0;
	const txt = selector.innerText;
	selector.innerHTML = '';
	for (const el of txt) {
		const span = document.createElement('span');
		span.innerText = el;
		span.style.transitionDelay = `${interval * count + delay}s`;
		span.style.display = 'inline-block';
		selector.append(span);
		count++;
	}
}

function setScroll(frame, baseLine = 0) {
	const scroll = window.scrollY;
	let scroll2 = 0;
	scroll >= frame.offsetTop + baseLine
		? (scroll2 = scroll - frame.offsetTop - baseLine)
		: (scroll2 = 0);
	return scroll2;
}

