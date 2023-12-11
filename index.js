// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "Let the magic of the season fill your heart with wonder" },
  { "number": 2, "message": "Crisp winter air whispers tales of holiday delight." },
  { "number": 3, "message": "Do you think this Christmas will be a white one?" },
  { "number": 4, "message": "Warm cocoa and cozy fires await" },
  { "number": 5, "message": "Start a virtual snowman-building competition – may the most creative win!" },
  { "number": 6, "message": "Frosty the Snowman called – he wants his nose back. Stay warm!" },
  { "number": 7, "message": "Wishing you snowflakes of joy and laughter this season." },
  { "number": 8, "message": "Take a moment to reflect on the blessings of the season." },
  { "number": 9, "message": "Santa's checklist: Nice? Naughty? TBD." },
  { "number": 10, "message": "Cuddle up with loved ones for a cozy holiday movie night." },
  { "number": 11, "message": "Rudolph just texted: 'It's glowing season!'" },
  { "number": 12, "message": "This year is almost over. Feeling a bit nostalgic, aren't you?" },
  { "number": 13, "message": "It's cold outside! Cozy up and stay warm with some good food." },
  { "number": 14, "message": "Elf wisdom: laughter is the best gift!" },
  { "number": 15, "message": "Frosty says hi – stay cozy!" },
  { "number": 16, "message": "Create a Christmas bucket list with a friend – check off items together and make lasting memories" },
  { "number": 17, "message": "Snowman secret: warm hugs melt stress away!" },
  { "number": 18, "message": "Eat, drink, and be elf-ish!." },
  { "number": 19, "message": "Santa's GPS is set to your house! Hope you've been good this year" },
  { "number": 20, "message": "Today's tough. Let's grab some hot cocoa and take a break for a little rest." },
  { "number": 21, "message": "what do you plan to do on Christmas? Can't wait for it ><" },
  { "number": 22, "message": "Wishing you a Christmas Eve filled with peace and goodwill." },
  { "number": 23, "message": "Are you excited for Christmas? It's almost here!" },
  { "number": 24, "message": "YaY! It's Christmas! Let's celebrate with friends & family!" },
];

