const url = 'https://jsonplaceholder.typicode.com/albums';

function renderAlbums(albums) {
    albums.forEach((album) => {
        const titleElement = document.createElement('p');
        titleElement.textContent = album.title;
        document.getElementById("output").appendChild(titleElement);
    });
}

async function getData() {
    try{
    const response = await fetch(url)
    const data = await response.json()
    if (response.status === 200){
        console.log('Success', data)
        renderAlbums(data);
    } else {
        console.log('Server Error')
    }
} catch(error) {
    console.log('Fetch Error', error)
}
}

getData()