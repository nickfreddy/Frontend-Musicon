export const secondsToHMS = (val) => {
  const sec = parseInt(val, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  // let seconds = sec - hours * 3600 - minutes * 60;
  if (hours === 0) {
    return `${minutes} min`; // Return in MM
  } else {
    return `${hours} hr ${minutes} min`; // Return in HH:MM
  }
}

export const secondsDuration = (val) => {
  const sec = parseInt(val, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  if (hours === 0) {
    return `${minutes}:${seconds}`; // Return in M:S format
  } else {
    return `${hours}:${minutes}:${seconds}`; // Return in H:M:S format
  }
}

export const convertToTwoDigits = (val) => {
  if(val < 10) return `0${val}`;
  return `${val}`
}

export const secondsDurationWithZero = (val) => {
  const sec = parseInt(val, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  const hh = convertToTwoDigits(hours);
  const mm = convertToTwoDigits(minutes);
  const ss = convertToTwoDigits(seconds);

  if (hours === 0) {
    return `${mm}:${ss}`; // Return in M:S format
  } else {
    return `${hh}:${mm}:${ss}`; // Return in H:M:S format
  }
}