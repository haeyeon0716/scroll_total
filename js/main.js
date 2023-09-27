const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll('ul li');
const speed = 500;
let posArr = null;

//처음 로딩시 한번 호출
getPos();
//브라우저가 리사이즈 될때마다 호출해서 세로 위치값을 갱신
window.addEventListener('resize', getPos);

//버튼 반복돌면서 이벤트 연결
btns.forEach((btn, idx) => {
	//각 버튼 클릭시 클릭한 순번의 세로 섹션 배열 위치값으로 스크롤 모션 이동
	btn.addEventListener('click', () => {
		new Anime(window, { scroll: posArr[idx] }, { duration: speed });
	});
});

//브라우저 스크롤시 현재스크롤 위치값이 특정 순번의 섹션영역에 도달하면 해당 순번의 버튼 활성화
window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const baseLine = -window.innerHeight / 3; //현재 보이는 섹션의 영역이 전체 영역의 3분의 2이상 보일떄 버튼 활성화

	posArr.forEach((_, idx) => {
		if (scroll >= posArr[idx] + baseLine) {
			btns.forEach((btn) => btn.classList.remove('on'));
			btns[idx].classList.add('on');
		}
	});
});

//호출시 posArr라는 전역변수에 세로위치값을 담아주는 함수
function getPos() {
	posArr = [];
	secs.forEach((sec) => posArr.push(sec.offsetTop));
	console.log(posArr);
}

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

