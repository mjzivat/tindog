class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
        
        if (this.hasBeenLiked) {
            document.getElementById('liked').classList.remove('hidden')
        } else if (!this.hasBeenLiked) {
            document.getElementById('rejected').classList.remove('hidden')
        }
    }
    
    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
                <div class='dog-profile' id='dog'>
                    <img src='${avatar}' class='profile-img'>
                    <div class='dog-info'>
                        <span class='name-age'>${name}, ${age}</span>
                        <span class='bio-text'>${bio}</span>
                    </div>
                    <img src='images/badge-like.png' class="badge hidden" id='liked'>
                    <img src='images/badge-nope.png' class="badge hidden" id='rejected'>
                </div>
            `
    }  
}

export default Dog