
export function getRandomSubjectImageURL(subjects, objectClass) {
  // filter the subjects array for subjects that have images
  const filteredSubjects = subjects.filter(v => v.object_class === objectClass && v.images !== null);
  if (filteredSubjects.length <= 0) return null;

  // generate a number that is a whole number rounded down between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * filteredSubjects.length);

  // get the first image of the subject at the random index
  const image = filteredSubjects[randomIndex].images[0];

  // return the image
  return image.url;
}

export function getMediaPath(path) {
  return `/api/media/images/${path}`;
}