async function fetchApiAlura() {
  const url =
    "https://www.alura.com.br/api/dashboard/24b84fdecd51b4f52c8b6e2040fd42df2fb8627719a2b367dbb6a1e135a12998";
  const buscando = await fetch(url);
  return await buscando.json();
}

function nameCourses(courseProgresses) {
  const courseList = document.getElementById("courseProgresses-name");
  courseList.innerHTML = ""; // Limpa o conteúdo anterior
  // Percorre os cursos
  courseProgresses.forEach((course) => {
    // Cria um elemento <li> para cada curso
    const list = document.createElement("li");
    // Adiciona a classe "course-item-name" ao elemento <li>
    list.classList.add("course-item-name");
    // Adiciona o nome do curso ao elemento <li>
    list.textContent = course.name;
    // Adiciona o elemento <li> como filho do elemento <ul>
    courseList.appendChild(list);

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Ver progresso";
    courseList.appendChild(btn);
    btn.addEventListener("click", () => {
      let div = document.querySelector('.alura-courses-progress');
      div.innerHTML = `
      <p class="progress-course">${course.name}</p>
      <p class="progress-title">Progresso:</p>
      <progress class="progress-bar" value="${course.progress}" max="100"></progress>
      <p class="progress-percent">${course.progress}%</p>`;
    });
  });
}

(async () => {
  // Chama a função fetchApiAlura() e espera a resposta
  const updateCoursesLoading = await fetchApiAlura();
  // Chama a função nameCourses() e passa a lista de cursos como parâmetro
  nameCourses(updateCoursesLoading.courseProgresses);
})();
