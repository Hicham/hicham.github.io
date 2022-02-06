let blocks = document.getElementsByClassName('experience-block');
let connectors = document.getElementsByClassName('experience-connector');
let targets = document.getElementsByClassName('experience-block-info');
let placeholder = document.getElementById('experience-block-placeholder');


for(let i = 0; i < blocks.length; i++){
    blocks[i].onclick = function(){



        placeholder.style.display = 'none';

        for (let x = 0; x < targets.length; x++){
            targets[x].style.display = 'none';
            // connectors[x].lastElementChild.style.display = 'none';
            connectors[x].lastElementChild.style.width = '0%';
        }

        let target = document.getElementById(this.id + "-target");
        target.style.display = 'inherit';

        let target_con = document.getElementById(this.id + "-connector");
        target_con.style.display = 'inherit';
        target_con.style.width = '100%';
    }
}
