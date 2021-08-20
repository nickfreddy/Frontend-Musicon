export const secondsToHMS = (val) => {
  const sec = parseInt(val, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  // let seconds = sec - hours * 3600 - minutes * 60;
  if (hours === 0) {
    return `${minutes} min`; // Return in MM:SS format
  } else {
    return `${hours} hr ${minutes} min`; // Return in HH:MM:SS format
  }
}

export const secondsDuration = (val) => {
  const sec = parseInt(val, 10);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  if (hours === 0) {
    return `${minutes}:${seconds}`; // Return in MM:SS format
  } else {
    return `${hours}:${minutes}:${seconds}`; // Return in HH:MM:SS format
  }
}