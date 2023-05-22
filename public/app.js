const searchBtn = document.querySelector('.navigation__search-button');
const navImage = document.querySelector('.navigation__image');
const profileModal = document.querySelector('.navigation__profile-modal');
const logOutBtn = document.querySelector('#navigation__logout');
const logOutForm = document.querySelector('#logout-form');

searchBtn.addEventListener("mouseover", () => {
    searchBtn.style.opacity = 1;
})
searchBtn.addEventListener("mouseout", () => {
    searchBtn.style.opacity = 0.7;
})

function closeModalWithAnimation(modal) {
    modal.classList.add('hide');
    modal.addEventListener('webkitAnimationEnd', function() {
        modal.classList.remove('hide');
        modal.close();
        modal.removeEventListener('webkitAnimationEnd', arguments.callee, false)
    })
}

navImage.addEventListener('click', e => profileModal.showModal());
profileModal.addEventListener("click", e => {
    if(e.target !== profileModal.innerHTML) {
        closeModalWithAnimation(profileModal)
    }
})

logOutBtn.addEventListener('click', (e) => {
    logOutForm.submit();
})