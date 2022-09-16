const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const featuresNavList = document.querySelectorAll('.features-nav li');
const featureIllustration = document.getElementById('feature-illustration')
const featureTitle = document.getElementById('feature-title')
const featureAbout = document.getElementById('feature-about')

openNav.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.add('active');
});

closeNav.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
});

featuresNavList.forEach((feature, index) => {
    feature.addEventListener('click', (e) => {
        featuresNavList.forEach(feature => feature.classList.remove('active'))
        e.target.classList.add('active');

        if(index === 0){
            featureIllustration.src = './images/illustration-features-tab-1.svg';
            featureTitle.innerText = 'Bookmark in one click';
            featureAbout.innerText = ` Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`;
        }

        if(index === 1){
            featureIllustration.src = './images/illustration-features-tab-2.svg'
            featureTitle.innerText = 'Intelligent search';
            featureAbout.innerText = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`;
        } 

        if(index === 2){
            featureIllustration.src = './images/illustration-features-tab-3.svg';
            featureTitle.innerText = 'Share your bookmarks';
            featureAbout.innerText = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`;
        }

    })
})


