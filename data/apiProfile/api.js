async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Tfreire455/Portfolio.dio/main/data/apiProfile/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

