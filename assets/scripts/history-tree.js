let aboutme = document.getElementsByClassName('aboutme-info')[0];
let history_blocks = document.getElementsByClassName('history-blocks');
let history_box = document.getElementsByClassName('history-info-box')[0];



for(let x = 0; x < history_blocks.length; x++){

    history_blocks[x].onmouseover = function(){

        aboutme.style.display = 'none';
        document.getElementById(this.dataset.target).style.display = 'initial';
        history_box.style.display = 'flex';

        // aboutme.style.left = '-200%';
        this.classList.add('active');

    }

    history_blocks[x].onmouseout = function(){

        aboutme.style.display = '';
        history_box.style.display = '';
        document.getElementById(this.dataset.target).style.display = '';

        // aboutme.style.left = '';
        // aboutme.style.display = '';

        this.classList.remove('active');

    }
}
