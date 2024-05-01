async function fetchApiAlura() {
  const url =
    "https://raw.githubusercontent.com/Tfreire455/Portfolio.dio/main/api%20alura/apiAlura.json";
  const buscando = await fetch(url);
  return await buscando.json();
}

(async () => {
  const updateCoursesLoading = await fetchApiAlura();
  nameCourses(updateCoursesLoading);
})();

function nameCourses(updateCoursesLoading) {
    const nameCourse = document.getElementById("courseProgresses.name");
    nameCourse.innerHTML = updateCoursesLoading.name.map(
        (course) => `<li>${course.name}</li>`
        );
}