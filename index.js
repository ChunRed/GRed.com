AFRAME.registerComponent('cube-man', {
    init: function(){
        
        let countX = 10;
        let text_array=[
            ["Float\n","Chun-Huang, Lin\nChi-Hung, Huang\nZih-Yun, Jheng"],
            ["First Person\n","Chou-Sen, Chum"],
            ["Third Person\n","Tzu-Mu, Yang"],
            ["Amid\n","Kerry Cheng\nTân Gān-lîm"],
            ["SeaDrift: Eternal Migration\n","Qi Huang\nHong Yinull"],
            ["Tell Vision\n","Yung-Han, Kao\nLing-Chung, Liu"],
            ["U\n","Bo-Yu, Tseng"],
            ["The Story of a Nostalgic Town\n","Zi-Yan,Lin\nYun-Zheng,Yang\nPin-Chieh, Chen"],
            ["Rainy Spectrum of Hometown\n","Chen-Xuan, Fang"],
            ["HALT\n","Chia-Yun, Liu\nYu-Chen, Liou"],
            ["Twenty One Bars\n","Alex Wang"],
            ["The Tangled Answer\n","Shako\nYUME"],
            ["Nonsense Garbage\n","I-Hsuan, Chen\nYa-Yu, Liu"],
        ];
        let cubes = [];
        let tex = [];
        let go_to_project = false;
        let size = 0.125, x, y, z;
        let sceneEl = document.querySelector('#center');
        let Text = document.querySelector('#text');
        for (let i=0; i<countX; i++){

            tex[i] = document.createElement('a-entity');
            cubes[i] = document.createElement('a-obj-model');

            //cube
            x = (Math.random()-0.5)*2;
            y = (Math.random()-0.5)*2;
            z = (Math.random()-0.5);
            cubes[i].setAttribute('shadow', {
                cast: true,
                receive: true,
            });
            cubes[i].setAttribute('id', 'box_'+i.toString());
            cubes[i].setAttribute('material', 'color', 'rgb(150, 200, 255)');
            cubes[i].setAttribute('src', 'https://cdn.glitch.global/9171c8b9-6b40-42db-8a06-008f51d40e80/%E7%A2%8E%E7%89%87.obj?v=1678363378653');
            cubes[i].setAttribute('scale','0.1 0.1 0.1');
            cubes[i].setAttribute('position', x.toString()+ ' '+y.toString()+ ' '+z.toString());
            cubes[i].setAttribute('animation', 'property: rotation; from: 0 0 0; to: 360 -360 360; loop: true; dur: '+(Math.random()*5000+5000).toString());
            cubes[i].setAttribute('roughness','0');
            cubes[i].setAttribute('reflectivity','0.8');
            cubes[i].setAttribute('shininess','30');
            
            
            //text
            tex[i].setAttribute('text',{
                value : text_array[i][0], 
                align: 'center',
            });
            tex[i].setAttribute('scale','0.7 0.7 0.7');
            tex[i].setAttribute('color', 'rgb(100, 100, 100)');
            tex[i].setAttribute('position', x.toString()+ ' '+(y+0.2).toString()+ ' '+(z).toString());
            
            
            //child
            let child = [];
            for (let j=0; j<3; j++){
                let x = ((Math.random()-0.5)*8).toString();
                let y = ((Math.random()-0.5)*8).toString();
                let z = ((Math.random()-0.5)*4).toString();
                let sx = ((Math.random()-0.5)*0.5).toString();
                let sy = ((Math.random()-0.5)*0.5).toString();
                let sz = ((Math.random()-0.5)*0.5).toString();
                child[j] = document.createElement('a-obj-model');
                child[j].setAttribute('src', 'https://cdn.glitch.global/9171c8b9-6b40-42db-8a06-008f51d40e80/%E7%A2%8E%E7%89%87.obj?v=1678363378653');
                child[j].setAttribute('position',x +' '+ y +' '+ z);
                child[j].setAttribute('scale',sx +' '+ sy +' '+ sz);
                child[j].setAttribute('animation', 'property: rotation; from: 0 0 0; to: 360 -360 360; loop: true; dur: '+(Math.random()*5000+5000).toString());
                child[j].setAttribute('color', 'rgb(200, 200, 255)');
                cubes[i].appendChild(child[j]);
            }

            //Event

            //mouse click
            cubes[i].addEventListener('click', function (evt) {
                this.setAttribute('color','rgb(0, 0, 0)');
                let p = this.getAttribute('position');
                let r = this.getAttribute('rotation');
                let s = this.getAttribute('scale');
                go_to_project = true;
                this.setAttribute('animation', 'property: position; from: '+p.x+', '+p.y+', '+p.z+'; '+' to: 0, 0, 0.5; loop: false; dur: 1500');
                this.setAttribute('animation__2', 'property: rotation; from: '+r.x+', '+r.y+', '+r.z+'; '+' to: 90, 0, 0; loop: false; dur: 1500');
                this.setAttribute('animation__3', 'property: scale; from: '+s.x+', '+s.y+', '+s.z+'; '+' to: 0.9, 0.9, 0.9; loop: false; dur: 1500');
            });

            //mouse hover
            cubes[i].addEventListener('mouseenter', function (evt) {
                
                if(! go_to_project){
                    this.setAttribute('material', 'color: rgb(255, 200, 150)');
                    this.setAttribute('animation', 'property: scale; from: 0.1, 0.1, 0.1; to: 0.2, 0.2, 0.2; loop: false; dur: 500');
                }
            })

            cubes[i].addEventListener('mouseleave', function (evt) {
                if(! go_to_project){
                    this.setAttribute('scale', '0.1, 0.1, 0.1');
                    this.setAttribute('material', 'color: rgb(150, 200, 255)');
                    this.setAttribute('animation', 'property: rotation; from: 0 0 0; to: 360 -360 360; loop: true; dur: '+(Math.random()*5000+5000).toString());
                }
            })
           
            
            
            sceneEl.appendChild(tex[i]);
            sceneEl.appendChild(cubes[i]);// Append the element to the scene, so it becomes part of the DOM.
        }
        
        
    }
});