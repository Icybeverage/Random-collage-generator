document.getElementById('generateBtn').addEventListener('click', generateCollage);

function generateCollage() {
    const collage = document.getElementById('collage');
    collage.innerHTML = '';

    // Add random wallpaper
    const wallpaper = new Image();
    wallpaper.src = `https://source.unsplash.com/random/800x600?sig=${Math.random()}`;
    wallpaper.style.zIndex = 1;
    collage.appendChild(wallpaper);

    // Add random avatar
    const avatar = new Image();
    avatar.src = `https://avatars.dicebear.com/api/bottts/${Math.random()}.svg`;
    avatar.className = 'avatar';
    avatar.style.zIndex = 2;
    avatar.style.top = `${Math.random() * 450 + 50}px`;
    avatar.style.left = `${Math.random() * 650 + 50}px`;
    collage.appendChild(avatar);

    // Add random quote
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = document.createElement('div');
            quote.className = 'quote';
            quote.style.zIndex = 3;
            quote.style.top = `${Math.random() * 500}px`;
            quote.style.left = `${Math.random() * 600}px`;
            quote.innerText = data.content;
            collage.appendChild(quote);
        });
}
