function openCard() {
  document.querySelector('.cover').style.display = 'none';
  document.getElementById('cardContent').classList.remove('hidden');
}

function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get('guest');
  if (guest) {
    const name = decodeURIComponent(guest.replace(/\+/g, ' '));
    document.getElementById('guestName').textContent = name;
  }
}

function respond(choice) {
  const msg = document.getElementById('responseMsg');
  if (choice === 'yes') {
    msg.textContent = "🎊 Cảm ơn bạn! Hẹn gặp tại buổi tiệc!";
  } else {
    msg.textContent = "😢 Rất tiếc vì bạn không thể tham dự.";
  }
}

function changeTheme(theme) {
  document.body.className = theme;
}

window.onload = getGuestName;