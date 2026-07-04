const releaseDate = new Date("2026-08-01T00:00:00+02:00");

const parts = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
  releaseDate: document.querySelector("[data-release-date]"),
  title: document.querySelector(".countdown__title"),
};

const formatter = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

parts.releaseDate.textContent = formatter.format(releaseDate);

function pad(value) {
  return String(value).padStart(2, "0");
}

function renderCountdown() {
  const diff = releaseDate.getTime() - Date.now();

  if (diff <= 0) {
    parts.title.textContent = "ALBUM JE VENKU";
    parts.days.textContent = "00";
    parts.hours.textContent = "00";
    parts.minutes.textContent = "00";
    parts.seconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  parts.days.textContent = pad(days);
  parts.hours.textContent = pad(hours);
  parts.minutes.textContent = pad(minutes);
  parts.seconds.textContent = pad(seconds);
}

renderCountdown();
setInterval(renderCountdown, 1000);
