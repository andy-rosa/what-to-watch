export function transformDurationVideo(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return `-${hours
    ? `${hours}:`.padStart(3, '0')
    : ''}${minutes
    ? `${minutes}:`.padStart(3, '0')
    : '00:'}${seconds
    ? `${seconds}`.padStart(2, '0')
    : ''}`;
}
