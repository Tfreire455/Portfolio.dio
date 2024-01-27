function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;

    const name = document.getElementById('profile-name');
    name.innerHTML = profileData.name;

    const jobs = document.getElementById('profile-jobs');
    jobs.innerHTML = profileData.job;

    const location = document.getElementById('profile-location');
    location.innerHTML = profileData.location;

    const telephone = document.getElementById('profile-telephone');
    telephone.innerHTML = profileData.phone;

    const whatsapp = document.getElementById('profile-whatsapp');
    whatsapp.innerHTML = profileData.whatsapp;

    const email = document.getElementById('profile-email');
    email.innerHTML = profileData.email;
}

function updateSoftskillsProfile(profileData) {

    const updateSoftskills = document.getElementById('profile.skills.softSkills')
    updateSoftskills.innerHTML = profileData.skills.softSkills.map(softskill => `<li>${softskill}</li>`).join('')
}

function updateHardskillsProfile(profileData) {
    const updateHardSkills = document.getElementById('profile.skills.hardskills')
    updateHardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li class="${skill}"><img  src="${skill.logo}" alt="${skill.name}"></li>`).join('')

}

function updatePortfolioProjects(profileData) {
    const portfolioProjects = document.getElementById('profile.portfolio.url');
    portfolioProjects.innerHTML = profileData.portfolio.map(portfolio => `
    <li class="portfolio-list">
    <span class="title-portfolio">${portfolio.name}: </span>
    <span class="border-style">
        <a href="${portfolio.url}">Projeto</a>
    </span>
</li>`).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftskillsProfile(profileData)
    updateHardskillsProfile(profileData)
    updatePortfolioProjects(profileData)
})()