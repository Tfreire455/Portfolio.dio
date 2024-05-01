async function fetchApiAlura() {
  const url =
    "https://www.alura.com.br/api/dashboard/24b84fdecd51b4f52c8b6e2040fd42df2fb8627719a2b367dbb6a1e135a12998";
  const buscando = await fetch(url);
  return await buscando.json();
}

function nameCourses(updateCoursesLoading) {
  const nameCourse = document.getElementById("courseProgresses.name");
  nameCourse.innerHTML = updateCoursesLoading.name.map(course => `<li>${course}</li>`);
}

(async () => {
  const updateCoursesLoading = await fetchApiAlura();
  nameCourses(updateCoursesLoading);
})();
